import { portfolioData } from '../sections/Portfolio/PortfolioData';

export const isInBrowser = () => typeof window !== 'undefined';

export const getProjectLink = (title) =>
  '/projects/' + title.toLowerCase().replaceAll(' ', '-');

export const getProject = (slug) =>
  portfolioData.find(
    (project) => project.title.toLowerCase().replace(' ', '-') === slug
  );

export function debounceFunction(cb, delay) {
  let timer;
  return (event) => {
    if (timer) {
      clearTimeout(timer);
      // console.log('timeout cleared');
    }
    timer = setTimeout(() => cb(event), delay);
  };
}

export function getLongerViewportSide() {
  return window.innerHeight > window.innerWidth
    ? window.innerHeight
    : window.innerWidth;
}
