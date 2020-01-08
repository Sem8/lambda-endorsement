const help = require("./helpers");

// describe("helpers mdoule", () => {
//   describe("sum function", () => {
//     it("can add two numbers", () => {
//       const expectedOutput = 7;
//       const actualOutput = help.sum(2, 5);
//       expect(actualOutput).toBe(expectedOutput);
//       //   expect(actualOutput).not.toBe(10);
//       //   expect(actualOutput).toBeTruthy();
//       //   expect(actualOutput).toBeGreaterThan(3);
//     });

//     it("can add three numbers", () => {
//       const expectedOutput = 7;
//       const actualOutput = help.sum(2, 3, 2);
//       expect(actualOutput).toBe(expectedOutput);
//     });
//   });
// });

/* Testing part II */
describe("asyncThing function", () => {
  it("resolves to 7 eventually", async () => {
    const promise = help.asyncThing(Function.prototype);
    const resolved = await promise;
    expect(resolved).toBe(7);
  });

  it("invokes the callback eventually", async () => {
    const spy = jest.fn();
    expect(spy).not.toBeCalled();
    const promise = await help.asyncThing(spy);
    // await promise;
    expect(spy).toBeCalled();
  });
});
