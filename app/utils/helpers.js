export function debounceFunction(cb, delay) {
  let timer;
  return (event, currentDot) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => cb(event), delay);
  };
}
