import request from "supertest"
import app from "../index.js"

describe("GET /", () => {
  it("returns a hello message", async () => {
    const response = await request(app).get("/")

    expect(response.status).toBe(200)
    expect(response.body).toEqual({
      msg: "hello from the server check the console make sadas",
    })
  })
})
