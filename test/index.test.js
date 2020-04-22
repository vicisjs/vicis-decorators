const {
  Defaults,
  Exclude,
  Omit,
  Order,
  Pick,
  Required,
  Serialize,
  cast,
  defaults,
  defined,
  exclude,
  omit,
  pick,
  rename,
  replace,
  serialize,
  transform,
} = require("../dist/vicis-decorators.cjs");

describe("Imported functions", () => {
  it("Defaults", () => {
    expect(typeof Defaults).toBe("function");
  });
  it("Exclude", () => {
    expect(typeof Exclude).toBe("function");
  });
  it("Omit", () => {
    expect(typeof Omit).toBe("function");
  });
  it("Order", () => {
    expect(typeof Order).toBe("function");
  });
  it("Pick", () => {
    expect(typeof Pick).toBe("function");
  });
  it("Required", () => {
    expect(typeof Required).toBe("function");
  });
  it("Serialize", () => {
    expect(typeof Serialize).toBe("function");
  });
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
  it("omit", () => {
    expect(typeof pick).toBe("function");
  });
  it("rename", () => {
    expect(typeof rename).toBe("function");
  });
  it("replace", () => {
    expect(typeof replace).toBe("function");
  });
  it("serialize", () => {
    expect(typeof serialize).toBe("function");
  });
  it("transform", () => {
    expect(typeof transform).toBe("function");
  });
});
