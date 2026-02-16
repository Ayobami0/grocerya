import { useRef, useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import type { FC } from "react";
import type { SvgProps } from "react-native-svg";
import { styles, width } from "./styles";
import StyledText from "./components/StyledText";
import CartSVG from "../../assets/images/cart.svg"
import PackageSVG from "../../assets/images/package.svg"
import RegisterSVG from "../../assets/images/register.svg"
import TruckSVG from "../../assets/images/truck.svg"

type OnboardStep = {
  image: FC<SvgProps>;
  title: string;
  content: string;
};

const onboardingSteps: OnboardStep[] = [
  {
    image: CartSVG,
    title: "Welcome to Grocerya",
    content:
      "Get your grocery needs at your service within a minute. Fast, efficient, and convenient.",
  },
  {
    image: TruckSVG,
    title: "Get any packages delivered",
    content:
      "Get all your items conveniently, ensuring everything you need arrives without hassle.",
  },
  {
    image: PackageSVG,
    title: "Protected package delivery",
    content:
      "Your groceries are carefully packaged to arrive safely and in perfect condition.",
  },
  {
    image: RegisterSVG,
    title: "Best price guaranteed",
    content:
      "Stock up on your favorite items while staying within your budget.",
  },
];

export function OnboardingScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const onScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  const handleNext = () => {
    if (activeIndex < onboardingSteps.length - 1) {
      scrollRef.current?.scrollTo({
        x: width * (activeIndex + 1),
        animated: true,
      });
    }
  };

  const handleSkip = () => {
      scrollRef.current?.scrollTo({
        x: width * onboardingSteps.length,
        animated: true,
      });
  };

  return (
    <View style={styles.container}>
      <OnboardProgressIndicator
        activeIndex={activeIndex}
        total={onboardingSteps.length}
      />

      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        style={styles.scrollView}
      >
        {onboardingSteps.map((step, index) => (
          <OnboardSlide key={index} {...step} />
        ))}
      </ScrollView>

      {(activeIndex === onboardingSteps.length - 1) ?
        <View style={styles.btnRow}>
          <TouchableOpacity style={[styles.btn, styles.next]} onPress={handleSkip}>
            <StyledText style={{ color: "#fff" }}>Get Started</StyledText>
          </TouchableOpacity>
        </View>
        :
        <View style={styles.btnRow}>
          <TouchableOpacity style={[styles.btn, styles.skip]} onPress={handleSkip}>
            <StyledText>Skip</StyledText>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, styles.next]} onPress={handleNext}>
            <StyledText style={{ color: "#fff" }}>
              Next
            </StyledText>
          </TouchableOpacity>
        </View>
      }
    </View>
  );
}

function OnboardSlide({ image: Image, title, content }: OnboardStep) {
  return (
    <View style={styles.slide}>
      <Image height={210} />
      <StyledText style={styles.slideTitle}>{title}</StyledText>
      <StyledText style={styles.slideContent}>{content}</StyledText>
    </View>
  );
}

function OnboardProgressIndicator({
  activeIndex,
  total,
}: {
  activeIndex: number;
  total: number;
}) {
  return (
    <View style={styles.indicatorRow}>
      {Array.from({ length: total }).map((_, i) => (
        <View
          key={i}
          style={[
            styles.dot,
            activeIndex === i && styles.activeDot,
          ]}
        />
      ))}
    </View>
  );
}
