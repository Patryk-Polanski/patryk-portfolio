import styles from './ProjectDescription.module.css';

export default function ProjectDescription() {
  return (
    <section className={`section text-container ${styles.projectDescription}`}>
      <h2>The challenge</h2>
      <p>
        The Vape Superstore project was one of the first Shopify sites that I
        had a chance to work on. It was also the most complex Shopify store I
        have ever worked on. After being given UI designs, my tasks revolved
        around developing the front site of the website. I began with developing
        a folder structure and setting up base styles such as colors, typography
        to name a few. The project made use of both scss as well as css files
        for different sections. Javascript was also split into modules for
        better workflow.
      </p>
      <p>
        I then started working on the header and footer sections of the
        homepage, which proved to be a challenge as I have never worked on a
        mega menu before. I then moved onto other sections on the homepage and
        eventually started building out other pages. The most difficult page to
        build was the product page because it consists of a number of popups and
        drawers, as well as a complex logic for selecting different product
        variants.
      </p>
      <h2>Evaluation</h2>
      <p>
        Overall I am satisfied with the final outcome and my learning
        experience. Although difficult and frustrating at times, I was able to
        learn the ins and outs of the Shopify platform and its Liquid
        programming language. Furthermore, I learned new libraries as well as
        better ways to write clean JavaScript. During the later stages of the
        project, I was in constant communication with the client to gather
        feedback, work on updates and assist with the new store.
      </p>
    </section>
  );
}
