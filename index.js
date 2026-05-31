import express from "express"
import { fileURLToPath } from "node:url"

const app = express()

const PORT = process.env.port ?? 8080

app.get('/', (req, res) => {
  return res.status(200).json({ msg: "hello from the server check the console" })
})

const __filename = fileURLToPath(import.meta.url)
const isMain = process.argv[1] === __filename

if (isMain) {
  app.listen(PORT, () => {
    console.log(`running application on ${PORT} port`)
  })
}

export default app