import { AboutData } from './AboutData';

import FadeIn from '@/app/components/wrappers/FadeIn';
import QuoteMark from './QuoteMark';

import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <div className={`narrow-container ${styles.testimonials}`}>
      {AboutData.testimonials.map((testimonial, index) => (
        <FadeIn
          direction={index === 0 ? 'right' : 'left'}
          key={testimonial.author}
        >
          <blockquote>
            <p>
              <QuoteMark type='start' />
              {testimonial.testimonial}
              <QuoteMark type='end' />
            </p>
            <footer>
              <cite>— {testimonial.author}</cite>
            </footer>
          </blockquote>
        </FadeIn>
      ))}
    </div>
  );
}
