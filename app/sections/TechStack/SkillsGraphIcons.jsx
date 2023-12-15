import React from 'react';
import Image from 'next/image';

import { skillsData } from './skillsData';

export default function SkillsGraphIcons() {
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
            id={`skill-${node.id}`}
            src={`/skills/skill-${node.id}.png`}
            alt={`icon - ${node.name}`}
            width={100}
            height={100}
          />
        );
      })}
    </div>
  );
}
