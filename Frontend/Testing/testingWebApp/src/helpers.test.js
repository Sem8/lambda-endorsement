const help = require("./helpers");

describe("helpers mdoule", () => {
  describe("sum function", () => {
    it("can add two numbers", () => {
      const expectedOutput = 7;
      const actualOutput = help.sum(2, 5);
      expect(actualOutput).toBe(expectedOutput);
      //   expect(actualOutput).not.toBe(10);
      //   expect(actualOutput).toBeTruthy();
      //   expect(actualOutput).toBeGreaterThan(3);
    });

    it("can add three numbers", () => {
      const expectedOutput = 7;
      const actualOutput = help.sum(2, 3, 2);
      expect(actualOutput).toBe(expectedOutput);
    });
  });
});
