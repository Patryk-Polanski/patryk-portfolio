export default function LinkAbout({ id }) {
  const svgPaths = (
    <>
      <path
        d='M224.49 76.3778C219.261 75.9538 215.551 74.3991 213.36 71.7138C211.17 69.0285 210.074 65.4598 210.074 61.0078V0.799805H219.826V21.8938H230.85L228.306 31.0098H219.826V61.0078C219.826 63.4811 220.462 65.3185 221.734 66.5198C223.006 67.6505 224.879 68.3925 227.352 68.7458L224.49 76.3778Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M191.92 72.6676C190.648 73.7276 189.129 74.5756 187.362 75.2116C185.595 75.8476 183.723 76.1656 181.744 76.1656C168.459 76.1656 161.816 69.6996 161.816 56.7676V21.8936H171.462V55.9196C171.462 59.5942 172.275 62.3502 173.9 64.1876C175.596 65.9542 178.211 66.8376 181.744 66.8376C185.277 66.8376 187.821 65.8836 189.376 63.9756C190.931 61.9969 191.708 59.2056 191.708 55.6016V21.8936H201.354V74.9996H192.238L191.92 72.6676Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M154.048 55.496C154.048 61.432 152.423 66.3434 149.172 70.23C145.921 74.1167 141.01 76.06 134.438 76.06C127.866 76.06 122.884 74.1167 119.492 70.23C116.171 66.2727 114.51 61.3614 114.51 55.496V41.504C114.51 34.7907 116.206 29.6674 119.598 26.134C123.061 22.53 128.007 20.728 134.438 20.728C140.586 20.728 145.391 22.6007 148.854 26.346C152.317 30.0207 154.048 35.0734 154.048 41.504V55.496ZM144.508 41.504C144.508 34.0134 141.151 30.268 134.438 30.268C131.399 30.268 128.926 31.116 127.018 32.812C125.11 34.508 124.156 37.4054 124.156 41.504V56.556C124.156 59.8774 125.11 62.4214 127.018 64.188C128.926 65.884 131.399 66.732 134.438 66.732C137.477 66.732 139.915 65.8487 141.752 64.082C143.589 62.3154 144.508 59.8067 144.508 56.556V41.504Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M102.28 58.3578C102.28 61.9618 101.538 65.0005 100.054 67.4738C98.5704 69.9471 96.5564 71.8198 94.0124 73.0918C91.751 74.2225 89.4544 75.0351 87.1224 75.5298C84.861 76.0245 82.4231 76.2718 79.8084 76.2718C77.1937 76.2718 73.5897 76.0245 68.9964 75.5298L63.1664 74.9998V0.799805H72.8124V22.9538C75.9924 21.6111 79.4551 20.9398 83.2004 20.9398C86.8751 20.9398 90.2317 21.6465 93.2704 23.0598C99.2771 25.8158 102.28 30.9038 102.28 38.3238V58.3578ZM92.7404 40.5498C92.7404 37.0165 91.7157 34.4725 89.6664 32.9178C87.6877 31.2925 85.179 30.4798 82.1404 30.4798C80.3737 30.4798 78.6424 30.7271 76.9464 31.2218C75.2504 31.6458 73.8724 32.2111 72.8124 32.9178V66.6258C74.7204 67.0498 76.8404 67.2618 79.1724 67.2618C82.9177 67.2618 86.0977 66.5905 88.7124 65.2478C91.3977 63.8345 92.7404 61.6085 92.7404 58.5698V40.5498Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M36.736 53.2698H17.232L11.614 74.9998H0.907959L20.518 0.799805H33.132L53.802 74.9998H42.566L36.736 53.2698ZM19.564 43.1998H34.404L26.772 16.6998L19.564 43.1998Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </>
  );

  return (
    <svg
      width='231'
      height='77'
      viewBox='0 0 231 77'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {id ? <clipPath id={id}>{svgPaths}</clipPath> : svgPaths}
    </svg>
  );
}
