const help = require("./helpers");

jest.useFakeTimers();
jest.mock("uuid", () => () => "123");

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

/* Testing part II - Testing async code */
// describe("asyncThing function", () => {
//   it("resolves to 7 eventually", async () => {
//     const promise = help.asyncThing(Function.prototype);
//     jest.runAllTimers(); // makes running tests faster when waiting for async code, write it before the await
//     const resolved = await promise;
//     expect(resolved).toBe(7);
//   });

//   it("invokes the callback eventually", async () => {
//     const spy = jest.fn();
//     expect(spy).not.toBeCalled();
//     const promise = help.asyncThing(spy);
//     jest.runAllTimers(); // makes running tests faster when waiting for async code, write it before the await
//     await promise;
//     expect(spy).toBeCalled();
//   });
// });

/* Testing  part III - testing with mocks and spies*/
// describe("makePerson function", () => {
//   it("can create a person from firstName and lastName", () => {
//     const expected = { id: "123", fullName: "John Smith" };
//     const actual = help.makePerson("John", "Smith");
//     expect(actual).toEqual(expected);
//   });
// });

describe("executeIfEven", () => {
  it("invokes callback if passed an even num", () => {
    const spy = jest.fn();
    help.executeIfEven(2, spy);
    expect(spy).toBeCalledWith(2);
  });

  it("does NOT invoke callback if passed an odd number", () => {
    const spy = jest.fn();
    help.executeIfEven(3, spy);
    expect(spy).not.toBeCalled();
  });
});
