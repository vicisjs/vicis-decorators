const {
  cast,
  defaults,
  defined,
  exclude,
  omit,
  rename,
  replace,
  serializable,
  serialize,
  transform,
} = require("../dist/vicis-decorators.cjs");

describe("Imported functions", () => {
  it("cast", () => {
    expect(typeof cast).toBe("function");
  });
  it("defaults", () => {
    expect(typeof defaults).toBe("function");
  });
  it("defined", () => {
    expect(typeof defined).toBe("function");
  });
  it("exclude", () => {
    expect(typeof exclude).toBe("function");
  });
  it("omit", () => {
    expect(typeof omit).toBe("function");
  });
  it("rename", () => {
    expect(typeof rename).toBe("function");
  });
  it("replace", () => {
    expect(typeof replace).toBe("function");
  });
  it("serializable", () => {
    expect(typeof serializable).toBe("function");
  });
  it("serialize", () => {
    expect(typeof serialize).toBe("function");
  });
  it("transform", () => {
    expect(typeof transform).toBe("function");
  });
});
