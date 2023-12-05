import { skillsData } from './skillsData';

import SkillsListItem from './SkillsListItem';

const filteredSkillsData = {
  frontend: skillsData.nodes.filter((node) => node.type === 'frontend'),
  cms: skillsData.nodes.filter((node) => node.type === 'cms'),
  backend: skillsData.nodes.filter((node) => node.type === 'backend'),
};

import styles from './SkillsList.module.css';

export default function SkillsList() {
  return (
    <ul className={styles.skillsList}>
      <li key='frontend' className={styles.skillsListHeading}>
        <h3>Frontend</h3>
      </li>

      {filteredSkillsData.frontend.map((node) => {
        return <SkillsListItem key={node.id} node={node} />;
      })}

      <li key='cms' className={styles.skillsListHeading}>
        <h3>CMS</h3>
      </li>

      {filteredSkillsData.cms.map((node) => {
        return <SkillsListItem key={node.id} node={node} />;
      })}

      <li key='backend' className={styles.skillsListHeading}>
        <h3>Backend</h3>
      </li>

      {filteredSkillsData.backend.map((node) => {
        return <SkillsListItem key={node.id} node={node} />;
      })}
    </ul>
  );
}
