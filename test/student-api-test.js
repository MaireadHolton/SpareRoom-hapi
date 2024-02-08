import { assert } from "chai";
import { spareroomService } from "./spareRoom-service.js";
import { maggie, testStudentDetails } from "./fixtures.js";
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

  test("create student details", async () => {
    await spareroomService.makeStudentDetail( testStudentDetails[0]);
    const returnedStudents = await spareroomService.getStudentDetails();
    assert.equal(returnedStudents.length, 1);
    assertSubset(returnedStudents[0], testStudentDetails[0]);
  });
});
