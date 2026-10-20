import assert from 'node:assert/strict';
import { nextRotation, shouldAnimate } from './sceneLifecycle.js';

assert.equal(shouldAnimate(true, false, false), true);
assert.equal(shouldAnimate(false, false, false), false);
assert.equal(shouldAnimate(true, true, false), false);
assert.equal(shouldAnimate(true, false, true), false);
assert.equal(shouldAnimate(true, false, false, true), false);
assert.equal(shouldAnimate(true, false, false, false, false), false);
assert.equal(shouldAnimate(true, false, false, false, true, true), false);
const half = nextRotation(0, 1, 1 / 60, 5);
assert.ok(Math.abs(nextRotation(half, 1, 1 / 60, 5) - nextRotation(0, 1, 1 / 30, 5)) < 1e-12);
