import Image from 'next/image';

import { skillsData } from './skillsData';

export default function SkillsGraphImages() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        visibility: 'hidden',
      }}
    >
      {skillsData.nodes.map((node) => {
        return (
          <Image
            key={node.id}
            id={`icon-${node.id}`}
            src={`/${node.id}-icon.png`}
            alt={`icon - ${node.name}`}
            width={40}
            height={40}
          />
        );
      })}
    </div>
  );
}
