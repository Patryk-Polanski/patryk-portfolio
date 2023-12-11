'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useSectionObserver } from '@/app/utils/hooks/useSectionObserver';

import HorizontalLine from '../../components/decorative/HorizontalLine';

export default function SectionHome({ children }) {
  const { sectionRef } = useSectionObserver();
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    const menuTrigger = document.getElementById('menu-trigger-observed');
    if (!menuTrigger) return;

    if (inView && window.scrollY > 0) {
      menuTrigger.classList.remove('menuTriggerIsVisible');
      menuTrigger.classList.add('menuTriggerIsHidden');
    } else if (!inView && window.scrollY > 0) {
      menuTrigger.classList.remove('menuTriggerIsHidden');
      menuTrigger.classList.add('menuTriggerIsVisible');
    }
  }, [inView, entry?.target.id]);

  return (
    <section id='home' ref={sectionRef}>
      <HorizontalLine
        xTranslate={'-30'}
        yTranslate={'12'}
        left={'0'}
        top={'0'}
        height={'180'}
        width={'180'}
      />
      <HorizontalLine
        xTranslate={'-5'}
        yTranslate={'-10'}
        right={'0'}
        bottom={'0'}
        height={'140'}
        width={'140'}
      />
      <div className='section wide-container' ref={ref}>
        {children}
      </div>
    </section>
  );
}
