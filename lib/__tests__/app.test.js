"use strict";

var _app = require("../app");

// @jest-environment jsdom
describe("app tests", function () {
  it("true should be true", function () {
    // sanity testing true, if this fails or doesn't run, something wrong w/ setup
    expect(true).toBeTruthy();
  });
  it("should say hello", function () {
    // sanity testing import / export bullshit
    expect((0, _app.sayHello)()).toEqual("hello from web base");
  });
});