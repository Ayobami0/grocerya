import { CartSVG, PackageSVG, RegisterSVG, TruckSVG } from './svgs';
import { Country, OnboardStep } from './types';
import countriesData from "world-countries";


export const COUNTRIES: Country[] = countriesData
    .filter((c) => c.idd?.root && c.idd?.suffixes?.length)
    .map((c) => ({
      name: c.name.common,
      isoCode: c.cca2,
      dialCode: `${c.idd.root}${c.idd.suffixes[0]}`,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

export const getFlagEmoji = (countryCode: string): string => {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) =>
      String.fromCodePoint(127397 + char.charCodeAt(0))
    );
};

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

export const filters: string[] = [
  "Gluten-Free",
  "Vegan Friendly",
  "Raw Meat",
  "Organic",
  "Dairy-Free",
  "Sugar-Free",
  "Cruelty-Free",
  "Processed Food",
  "Low Carb",
  "Halal",
  "Kosher",
  "Non-GMO",
  "High Protein",
];

export const INITIAL_VISIBLE_COUNT = 8;
