import { HomeIntro } from './HomeIntro';

type Props = { onViewCases: () => void; onContact: () => void };

export function Hero({ onViewCases, onContact }: Props) {
  return <HomeIntro onViewCases={onViewCases} onContact={onContact} />;
}
