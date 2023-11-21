import QuoteMark from './QuoteMark';

import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <div className={`narrow-container ${styles.testimonials}`}>
      <blockquote>
        <p>
          <QuoteMark type='start' />
          During his 12 month placement at Soapbox, Patryk became an invaluable
          member of the team making significant contributions to lots of our
          projects. A keen learner, he always showed an admirable willingness
          and aptitude in his work and by the end of the placement was producing
          a really high standard of work. His friendly and calm nature also made
          him a great fit within the team.
          <QuoteMark type='end' />
        </p>
        <footer>
          — Stuart, <cite>Soapbox</cite>
        </footer>
      </blockquote>
      <blockquote>
        <p>
          <QuoteMark type='start' />
          Patryk has done good work at kinetik - producing good quality work
          ranging from UI/UX and infographics to technical SEO. He is flexible
          with his approach, is a keen learner and is solution focused. He has
          very good communication skills and keeps all stakeholders informed.
          Patryk would be a very good addition to any design/technical team.
          <QuoteMark type='end' />
        </p>
        <footer>
          — Ketan, <cite>Kinetik</cite>
        </footer>
      </blockquote>
    </div>
  );
}
