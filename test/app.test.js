import assert from "node:assert"
import http from "node:http"
import app from "../index.js"

const server = app.listen(0)
const port = server.address().port

try {
  const result = await new Promise((resolve, reject) => {
    const req = http.get(
      {
        hostname: "127.0.0.1",
        port,
        path: "/",
        agent: false,
      },
      (res) => {
        let body = ""
        res.on("data", (chunk) => {
          body += chunk
        })
        res.on("end", () => {
          resolve({ statusCode: res.statusCode, body })
        })
      }
    )
    req.on("error", reject)
  })

  assert.strictEqual(result.statusCode, 200)
  const json = JSON.parse(result.body)
  assert.deepStrictEqual(json, {
    msg: "hello from the server check the console",
  })
} finally {
  server.close()
}
