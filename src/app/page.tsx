import { CreatorProgramBlock } from '@/components/home/CreatorProgramBlock';
import { CreatorProgramForTheRestOfUsBlock } from '@/components/home/CreatorProgramForTheRestOfUsBlock';
import { HeroBlock } from '@/components/home/HeroBlock';
import { MotionSection } from '@/components/home/MotionSection';
import { RoomsBlock } from '@/components/home/RoomsBlock';
import { WhatActuallyHappensBlock } from '@/components/home/WhatActuallyHappensBlock';

export const metadata = {
  title: 'Hangouts — 3D Chat That Comes Alive',
  description:
    '3D chat that comes alive. Hangouts — private rooms, live voice, worlds that react. The best 3D chat for real hangouts with friends.',
  openGraph: { url: 'https://hangouts.fun' },
};

export default function Page() {
  return (
    <>
      <MotionSection id="hero">
        <HeroBlock />
      </MotionSection>
      <RoomsBlock />
      <WhatActuallyHappensBlock />
      <CreatorProgramBlock />
      <CreatorProgramForTheRestOfUsBlock />
    </>
  );
}
