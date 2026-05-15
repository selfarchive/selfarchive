import { HomeIntro } from './HomeIntro';

type Props = { onViewCases: () => void };

export function Hero({ onViewCases }: Props) {
  return <HomeIntro onViewCases={onViewCases} />;
}
