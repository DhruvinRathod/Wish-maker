import test from "node:test";
import assert from "node:assert/strict";
import { buildWishPath, getLanguage, getTheme, slugifyName } from "../src/lib/wish.mjs";

test("slugifyName creates stable URL-safe slugs", () => {
  assert.equal(slugifyName("  Riya Patel  "), "riya-patel");
  assert.equal(slugifyName("A---B"), "a-b");
  assert.equal(slugifyName(""), "friend");
});

test("buildWishPath encodes creator content safely", () => {
  const path = buildWishPath({ recipient: "Riya Patel", from: "D & K", language: "hi", theme: "midnight", message: "Happy birthday & enjoy!", memory: "Our first trip!", photo: "https://example.com/a b.jpg" });
  assert.ok(path.startsWith("/wish/riya-patel?"));
  const url = new URL(path, "https://example.test");
  assert.equal(url.searchParams.get("from"), "D & K");
  assert.equal(url.searchParams.get("lang"), "hi");
  assert.equal(url.searchParams.get("theme"), "midnight");
  assert.equal(url.searchParams.get("message"), "Happy birthday & enjoy!");
  assert.equal(url.searchParams.get("memory"), "Our first trip!");
  assert.equal(url.searchParams.get("photo"), "https://example.com/a b.jpg");
});

test("unknown languages fall back to English", () => {
  assert.equal(getLanguage("xx").label, "English");
  const url = new URL(buildWishPath({ recipient: "Sam", language: "xx" }), "https://example.test");
  assert.equal(url.searchParams.get("lang"), "en");
});

test("unknown themes fall back to confetti", () => {
  assert.equal(getTheme("unknown"), "confetti");
  assert.equal(getTheme("blossom"), "blossom");
  const url = new URL(buildWishPath({ recipient: "Sam", theme: "unknown" }), "https://example.test");
  assert.equal(url.searchParams.get("theme"), "confetti");
});
