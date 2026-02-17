import { CartSVG, PackageSVG, RegisterSVG, TruckSVG } from './svgs';
import { OnboardStep } from './types';

export const onboardingSteps: OnboardStep[] = [
  {
    image: CartSVG,
    title: 'Welcome to Grocerya',
    content:
      'Get your grocery needs at your service within a minute. Fast, efficient, and convenient.',
  },
  {
    image: TruckSVG,
    title: 'Get any packages delivered',
    content:
      'Get all your items conveniently, ensuring everything you need arrives without hassle.',
  },
  {
    image: PackageSVG,
    title: 'Protected package delivery',
    content:
      'Your groceries are carefully packaged to arrive safely and in perfect condition.',
  },
  {
    image: RegisterSVG,
    title: 'Best price guaranteed',
    content:
      'Stock up on your favorite items while staying within your budget.',
  },
];
