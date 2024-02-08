import { assert } from "chai";
import { spareroomService } from "./spareRoom-service.js";
import { maggie, testAdverts } from "./fixtures.js";
import { assertSubset } from "./test-utils.js";

suite("SpareRoom API tests", () => {
  setup(async () => {
    await spareroomService.createUser(maggie);
    await spareroomService.authenticate(maggie);
    await spareroomService.deleteAllUsers();
    await spareroomService.createUser(maggie);
    await spareroomService.authenticate(maggie);
  });
  teardown(async () => {
    await spareroomService.deleteAllUsers();
  });

  test("create an advert", async () => {
    await spareroomService.makeAdvert( testAdverts[0]);
    const returnedAdverts = await spareroomService.getAdverts();
    assert.equal(returnedAdverts.length, 1);
    assertSubset(returnedAdverts[0], testAdverts[0]);
  });
});