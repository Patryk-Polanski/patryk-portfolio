import Image from 'next/image';

import { useResponsiveContext } from '@/app/context/ResponsiveContext';

import SectionHeading from '../../components/navigation/SectionHeading';
import TitleProject from '@/app/components/ui/svg/TitleProject';
import Button from '../../components/ui/Button';
import DownArrow from '../../sections/Home/DownArrow';
import FadeIn from '../../components/wrappers/FadeIn';

import styles from './ProjectShowcase.module.css';
import Logo from '@/app/components/ui/Logo';

export default function ProjectShowcase({
  slug,
  project,
  toggleShowcaseState,
}) {
  const { deviceType } = useResponsiveContext();

  return (
    <section className={`section wide-container ${styles.projectShowcase}`}>
      <FadeIn
        direction='right'
        inView={false}
        className={styles.projectShowcaseHome}
      >
        <Logo />
      </FadeIn>

      <SectionHeading
        title='Portfolio'
        svgId={slug}
        deviceType={deviceType}
        element={<TitleProject slug={slug} deviceType={deviceType} />}
        elementActive={
          <TitleProject slug={slug} id={slug} deviceType={deviceType} />
        }
      />
      {!project.comingSoon ? (
        <>
          <FadeIn
            direction='left'
            className={styles.arrowWrapper}
            inView={false}
            delay={2.5}
          >
            <DownArrow target='#tech-stack' />
          </FadeIn>
          <div className={styles.projectOverview}>
            <div className={styles.projectOverviewImages}>
              <FadeIn
                direction='right'
                delay={1}
                className={styles.projectOverviewIpad}
              >
                <Image
                  alt={`${project.title} on an ipad`}
                  src={project.mockupIpad}
                  width={600}
                  height={773}
                  priority
                  loading='eager'
                  quality={100}
                />
              </FadeIn>
              <FadeIn
                direction='down'
                delay={1}
                onComplete={() => toggleShowcaseState(true)}
                className={styles.projectOverviewImac}
              >
                <Image
                  alt={`${project.title} on an imac`}
                  src={project.mockupImac}
                  width={1000}
                  height={802}
                  priority
                  loading='eager'
                  quality={100}
                />
              </FadeIn>
              <FadeIn
                direction='left'
                delay={1}
                className={styles.projectOverviewIphone}
              >
                <Image
                  alt={`${project.title} on an iphone`}
                  src={project.mockupIphone}
                  width={400}
                  height={808}
                  priority
                  loading='eager'
                  quality={100}
                />
              </FadeIn>
            </div>
            <FadeIn
              direction='left'
              delay={1}
              className={styles.projectOverviewText}
            >
              <h2>Overview</h2>
              <p>{project.overview}</p>
              <div className={styles.projectOverviewButtons}>
                {project.linkWebsite && (
                  <Button
                    link={project.linkWebsite}
                    variation='primary'
                    newTab={true}
                    text='Visit project'
                  />
                )}
                {project.linkGithub && (
                  <Button
                    link={project.linkGithub}
                    variation='primary'
                    newTab={true}
                    text='Github repo'
                  />
                )}
                {project.linkVideo && (
                  <Button
                    link={project.linkVideo}
                    variation='primary'
                    newTab={true}
                    text='Watch video'
                  />
                )}
                {project.projectLogin && (
                  <small className={styles.projectOverviewLogin}>
                    {project.projectLogin}
                  </small>
                )}
              </div>
              <ul className={styles.projectOverviewTasks}>
                {project.categories?.map((category) => (
                  <li key={category} className='h2'>
                    {category}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </>
      ) : (
        <FadeIn
          direction='up'
          className={styles.projectComingSoon}
          inView={false}
          delay={1}
        >
          <p>Work in progress</p>
          <p>
            Coming soon
            <Image
              style={{ marginLeft: '8px', marginBottom: '-6px' }}
              src={'/decorative/rocket.webp'}
              width={22}
              height={22}
              alt='rocket emoji'
            />
          </p>
        </FadeIn>
      )}
    </section>
  );
}
