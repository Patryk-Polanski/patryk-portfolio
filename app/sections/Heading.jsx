import { AdventProFont } from '../layout';

export default function SectionHeading({ text }) {
  return (
    <h2 className={`d1 outlined-text ${AdventProFont.className}`}>{text}</h2>
  );
}
