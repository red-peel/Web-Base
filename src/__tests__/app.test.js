// @jest-environment jsdom
import { sayHello } from "../app";

describe("app tests", () => {
  it("true should be true", () => {
    // sanity testing true, if this fails or doesn't run, something wrong w/ setup
    expect(true).toBeTruthy();
  });

  it("should say hello", () => {
    // sanity testing import / export bullshit
    expect(sayHello()).toEqual("hello from web base");
  });
});
