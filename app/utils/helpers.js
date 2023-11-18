export function debounceFunction(cb, delay) {
  let timer;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => cb(), delay);
  };
}
