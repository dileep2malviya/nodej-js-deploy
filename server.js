import app from "./index.js"

const PORT = process.env.port ?? 8080

app.listen(PORT, () => {
  console.log(`running application on ${PORT} port`)
})
