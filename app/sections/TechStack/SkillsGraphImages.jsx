import Image from 'next/image';

import { skillsData } from './skillsData';

export default function SkillsGraphImages() {
  return (
    <div
      aria-hidden='true'
      focusable='false'
      tabIndex={-1}
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        left: '0',
        opacity: 0,
        top: '0',
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
            width={150}
            height={150}
          />
        );
      })}
    </div>
  );
}
