import TitleDescripti from './TitleDescripti';
import TitleCascades from './TitleCascades';
import TitleVapeSuperstore from './TitleVapeSuperstore';

export default function TitleProject({ id, slug, deviceType = 'desktop' }) {
  if (slug === 'descripti')
    return <TitleDescripti id={id} deviceType={deviceType} />;

  if (slug === 'vape-superstore')
    return <TitleVapeSuperstore id={id} deviceType={deviceType} />;

  if (slug === 'cascades')
    return <TitleCascades id={id} deviceType={deviceType} />;

  return null;
}
