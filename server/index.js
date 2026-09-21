import cors from 'cors'
import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 5001
const enquiriesFile = path.join(__dirname, 'enquiries.json')

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, brand: 'HODU', template: 'hodu2' })
})

app.post('/api/enquire', (req, res) => {
  const { name, email, phone, interest, message } = req.body || {}
  if (!name || !email) {
    return res.status(400).json({ ok: false, error: 'Name and email are required.' })
  }

  const entry = {
    id: Date.now().toString(36),
    name: String(name).trim(),
    email: String(email).trim(),
    phone: phone ? String(phone).trim() : '',
    interest: interest ? String(interest).trim() : 'General enquiry',
    message: message ? String(message).trim() : '',
    createdAt: new Date().toISOString(),
  }

  let list = []
  if (fs.existsSync(enquiriesFile)) {
    try {
      list = JSON.parse(fs.readFileSync(enquiriesFile, 'utf8'))
      if (!Array.isArray(list)) list = []
    } catch {
      list = []
    }
  }
  list.push(entry)
  fs.writeFileSync(enquiriesFile, JSON.stringify(list, null, 2))
  console.log('[HODU2 Enquire]', entry)
  res.json({ ok: true, message: 'Thank you. We will be in touch shortly.' })
})

const clientDist = path.join(__dirname, '../client/dist')
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist))
  app.get('*', (_req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`HODU2 server listening on http://localhost:${PORT}`)
})
