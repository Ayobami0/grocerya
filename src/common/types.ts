import type { FC } from "react";
import type { SvgProps } from "react-native-svg";

export type SVGImage = FC<SvgProps>;

export type OnboardStep = {
  image: SVGImage;
  title: string;
  content: string;
};

export type ButtonVariant = 'primary' | 'secondary';

export interface Country {
  name: string;
  isoCode: string;
  dialCode: string;
}
