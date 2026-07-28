const INTERACTIVE_SELECTOR = "button, a, input, textarea, select, [contenteditable='true']";

export function installFocusedKeyboardNavigation(element, deck) {
  function onKeyDown(event) {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.target?.closest?.(INTERACTIVE_SELECTOR)) return;
    if (event.key === "ArrowRight") { event.preventDefault(); deck.next(); }
    else if (event.key === "ArrowLeft") { event.preventDefault(); deck.prev(); }
  }
  element.addEventListener("keydown", onKeyDown);
  return () => element.removeEventListener("keydown", onKeyDown);
}

export function isManualPhoneMode(stage, viewport = window) {
  if (!stage || !viewport) return false;
  const width = viewport.innerWidth ?? viewport.width;
  const height = viewport.innerHeight ?? viewport.height;
  return width <= 640 && stage.getBoundingClientRect().height > height;
}