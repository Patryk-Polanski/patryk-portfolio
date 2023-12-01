export const isBrowser = () => typeof window !== 'undefined';

export function debounceFunction(cb, delay) {
  let timer;
  return (event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => cb(event), delay);
  };
}

export function getLongerViewportSide() {
  return window.innerHeight > window.innerWidth
    ? window.innerHeight
    : window.innerWidth;
}
