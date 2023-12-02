export const isBrowser = () => typeof window !== 'undefined';

export function debounceFunction(cb, delay) {
  let timer;
  return (event) => {
    if (timer) {
      clearTimeout(timer);
      console.log('timeout cleared');
    }
    timer = setTimeout(() => cb(event), delay);
  };
}

export function getLongerViewportSide() {
  return window.innerHeight > window.innerWidth
    ? window.innerHeight
    : window.innerWidth;
}
