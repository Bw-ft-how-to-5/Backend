const request = require("supertest");
const server = require("./server.js");

const timedb = require("../time/time_model.js");
//const userdb = require("../user/user_model.js");
const db = require("../data/dbConfig");

describe("User routes", () => {
  describe("\nRoute checks", () => {
    it("`/invalid` should return `404 not found`", () => {
      return request(server)
        .get("/invalid")
        .then(res => {
          expect(res.status).toBe(404);
        });
    });
    it("`/` should return `200 OK`", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});

describe("\nDB output checks", () => {
  it("should return an array", async () => {
    await request(server).get('/api/time/').then(res => {
      expect(res.type).toMatch(/json/gi);
    });
  });
});
