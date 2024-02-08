import { assert } from "chai";
import { spareroomService } from "./spareRoom-service.js";
import { decodeToken } from "../src/api/jwt-utils.js";
import { maggie } from "./fixtures.js";

suite("Authentication API tests", async () => {
  setup(async () => {
    spareroomService.clearAuth();
    await spareroomService.createUser(maggie);
    await spareroomService.authenticate(maggie);
    await spareroomService.deleteAllUsers();
  });

  test("authenticate", async () => {
    const returnedUser = await spareroomService.createUser(maggie);
    const response = await spareroomService.authenticate(maggie);
    assert(response.success);
    assert.isDefined(response.token);
  });

  test("verify Token", async () => {
    const returnedUser = await spareroomService.createUser(maggie);
    const response = await spareroomService.authenticate(maggie);

    const userInfo = decodeToken(response.token);
    assert.equal(userInfo.email, returnedUser.email);
    assert.equal(userInfo.userId, returnedUser._id);
  });

  test("check Unauthorized", async () => {
    spareroomService.clearAuth();
    try {
      await spareroomService.deleteAllUsers();
      assert.fail("Route not protected");
    } catch (error) {
      assert.equal(error.response.data.statusCode, 401);
    }
  });
});