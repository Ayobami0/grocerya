import type { FC } from "react";
import type { SvgProps } from "react-native-svg";

export type OnboardStep = {
  image: FC<SvgProps>;
  title: string;
  content: string;
};

export type ButtonVariant = 'primary' | 'secondary';

export interface Country {
  name: string;
  isoCode: string;
  dialCode: string;
}
