import { assert } from "chai";
import { assertSubset } from "./test-utils.js";
import { spareroomService } from "./spareRoom-service.js";
import { maggie, maggieCredentials, testUsers } from "./fixtures.js";

const users = new Array(testUsers.length);

suite("User API tests", () => {
  setup(async () => {
    spareroomService.clearAuth();
    await spareroomService.createUser(maggie);
    await spareroomService.authenticate(maggieCredentials);
    await spareroomService.deleteAllUsers();
    for (let i = 0; i < testUsers.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      users[0] = await spareroomService.createUser(testUsers[i]);
    }
    await spareroomService.createUser(maggie);
    await spareroomService.authenticate(maggieCredentials);
  });
  teardown(async () => {});

  test("create a user", async () => {
    const newUser = await spareroomService.createUser(maggie);
    assertSubset(maggie, newUser);
    assert.isDefined(newUser._id);
  });

  test("delete all user", async () => {
    let returnedUsers = await spareroomService.getAllUsers();
    assert.equal(returnedUsers.length, 4);
    await spareroomService.deleteAllUsers();
    await spareroomService.createUser(maggie);
    await spareroomService.authenticate(maggieCredentials);
    returnedUsers = await spareroomService.getAllUsers();
    assert.equal(returnedUsers.length, 1);
  });

  test("get a user", async () => {
    const returnedUser = await spareroomService.getUser(users[0]._id);
    assert.deepEqual(users[0], returnedUser);
  });

  test("get a user - bad id", async () => {
    try {
      const returnedUser = await spareroomService.getUser("1234");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No User with this id");
      assert.equal(error.response.data.statusCode, 503);
    }
  });

  test("get a user - deleted user", async () => {
    await spareroomService.deleteAllUsers();
    await spareroomService.createUser(maggie);
    await spareroomService.authenticate(maggieCredentials);
    try {
      const returnedUser = await spareroomService.getUser(users[0]._id);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No User with this id");
      assert.equal(error.response.data.statusCode, 404);
    }
  });
});