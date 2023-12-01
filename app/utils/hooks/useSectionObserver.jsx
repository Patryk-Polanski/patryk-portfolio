import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export function useSectionObserver(threshold = 0.5) {
  const {
    ref: sectionRef,
    inView,
    entry,
  } = useInView({
    threshold: threshold,
  });

  useEffect(() => {
    if (inView) {
      window.location.hash = entry.target.id;
    }
  }, [inView, entry?.target.id]);

  return { sectionRef };
}
