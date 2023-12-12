import ArrowDown from '@/app/components/ui/svg/ArrowDown';
import Button from '@/app/components/ui/Button';

export default function DownArrow({ target }) {
  return (
    <Button link={target} text='scroll down'>
      <ArrowDown />
    </Button>
  );
}
