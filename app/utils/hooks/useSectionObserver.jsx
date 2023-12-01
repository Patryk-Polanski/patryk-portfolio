import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export function useSectionObserver() {
  const {
    ref: sectionRef,
    inView,
    entry,
  } = useInView({
    rootMargin: '0px 0px -50% 0px',
  });

  useEffect(() => {
    if (inView) {
      window.location.hash = entry.target.id;
    }
  }, [inView, entry?.target.id]);

  return { sectionRef };
}
