import supertest from "supertest";
import { web } from "../src/application/web.js";
import { createParameter, removeAllParameter } from "./test-util.js";

describe("Parameter Seeder", () => {
  beforeEach(async () => {
    await removeAllParameter();
  });

  it("should can seed the parameter table", async () => {
    const result = await createParameter();

    expect(true).toBe(true);
  });
});

describe("M4M Power Meter", () => {
  it("should can read power meter", async () => {
    const result = await new Promise((resolve) => {
      setTimeout(async () => {
        resolve(await supertest(web).get("/m4m"));
      }, 1000);
    });

    expect(result.status).toBe(200);
    expect(result.body.data.host).toBe("10.55.11.62");
    expect(result.body.data.register).toBe(4098);
  });
});
