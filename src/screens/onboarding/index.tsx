import { useRef, useState } from "react";
import {
  ScrollView,
  View,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { styles, width } from "./styles";
import { onboardingSteps } from "../../common/constants";
import { OnboardStep } from "../../common/types";
import { StyledText, StyledButton } from "../../common/components";


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

  const handleGetStarted = () => {

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
          <StyledButton onPress={handleGetStarted}>
            Get Started
          </StyledButton>
        </View>
        :
        <View style={styles.btnRow}>
          <StyledButton onPress={handleSkip} variant="secondary">
            Skip
          </StyledButton>

          <StyledButton onPress={handleNext}>
            Next
          </StyledButton>
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
