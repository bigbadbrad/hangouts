import { HeroBlock } from '@/components/home/HeroBlock';
import { MotionSection } from '@/components/home/MotionSection';
import { RoomsBlock } from '@/components/home/RoomsBlock';

export const metadata = {
  title: 'Hangouts — Private 3D Chat',
  description: '3D chat for real hangouts. Step into private rooms with friends, talk live, explore together.',
  openGraph: { url: 'https://hangouts.fun' },
};

export default function Page() {
  return (
    <>
      <MotionSection id="hero">
        <HeroBlock />
      </MotionSection>
      <RoomsBlock />
    </>
  );
}
