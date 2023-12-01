export const isBrowser = () => typeof window !== 'undefined';

export function debounceFunction(cb, delay) {
  let timer;
  return (event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => cb(event), delay);
  };
}
