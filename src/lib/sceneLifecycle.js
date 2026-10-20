export function shouldAnimate(visible, hidden, paused, reduced = false, ready = true, suspended = false) {
  return visible && !hidden && !paused && !reduced && ready && !suspended;
}

export function projectPreviewActive(hovered, focused, finePointer) {
  return finePointer && (hovered || focused);
}

export function nextRotation(current, target, delta, smoothing) {
  return current + (target - current) * (1 - Math.exp(-smoothing * delta));
}
