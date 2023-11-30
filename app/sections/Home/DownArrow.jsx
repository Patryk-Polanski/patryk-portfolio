import ArrowDown from '@/app/components/ui/svg/ArrowDown';
import Button from '@/app/components/ui/Button';

export default function DownArrow() {
  return (
    <Button link='#portfolio' text='scroll down'>
      <ArrowDown />
    </Button>
  );
}
