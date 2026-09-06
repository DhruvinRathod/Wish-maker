import test from "node:test";
import assert from "node:assert/strict";
import { buildWishPath, getLanguage, slugifyName } from "../src/lib/wish.mjs";

test("slugifyName creates stable URL-safe slugs", () => {
  assert.equal(slugifyName("  Riya Patel  "), "riya-patel");
  assert.equal(slugifyName("A---B"), "a-b");
  assert.equal(slugifyName(""), "friend");
});

test("buildWishPath encodes user content safely", () => {
  const path = buildWishPath({ recipient: "Riya Patel", from: "D & K", language: "hi", message: "Happy birthday & enjoy!" });
  assert.ok(path.startsWith("/wish/riya-patel?"));
  const url = new URL(path, "https://example.test");
  assert.equal(url.searchParams.get("from"), "D & K");
  assert.equal(url.searchParams.get("lang"), "hi");
  assert.equal(url.searchParams.get("message"), "Happy birthday & enjoy!");
});

test("unknown languages fall back to English", () => {
  assert.equal(getLanguage("xx").label, "English");
  const path = buildWishPath({ recipient: "Sam", language: "xx" });
  const url = new URL(path, "https://example.test");
  assert.equal(url.searchParams.get("lang"), "en");
});
