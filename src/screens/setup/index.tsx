import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { styles } from "./styles";
import { globalStyles } from "@themes";
import { AppBar, Chip, QuestionMarkIcon, StyledButton, StyledText } from "@components";
import { LocationSVG, NotificaionSVG } from "@svg";
import { ScreenList } from "@navigation";
import React, { useState } from "react";
import { filters, INITIAL_VISIBLE_COUNT } from "@constants";

export function SetupGroceryCategoriesScreen() {
  const navigator = useNavigation();

  const onContinue = () => {
    navigator.navigate(ScreenList.setupLocation);
  }

  return (
    <View style={globalStyles.screen}>
      <AppBarWithBackAndQuestion />
      <View>
        <StyledText style={styles.title}>All your grocery need in one place</StyledText>
        <StyledText style={styles.subtitle}>Select your desired shop category</StyledText>
        <FilterChips />
      </View>
      <View style={styles.container}></View>
      <StyledButton style={styles.continueBtn} onPress={onContinue}>
        Continue
      </StyledButton>
    </View>
  );
}

export function SetupLocationScreen() {
  const navigator = useNavigation();
  const onContinue = () => {
    navigator.navigate(ScreenList.setupNotification);
  }

  return (
    <View style={globalStyles.screen}>
      <AppBarWithBackAndQuestion />
      <View style={styles.container}>
        <LocationSVG style={{ marginBottom: 20, marginTop: 50 }} />
        <View style={[styles.center, styles.pageText]}>
          <StyledText style={styles.title}>Set your location</StyledText>
          <StyledText style={[styles.subtitle, styles.centerText]}>This let us know your location for best shipping experience</StyledText>
        </View>
      </View>
      <View style={styles.progressBtn}>
        <StyledButton style={styles.continueBtn} onPress={onContinue}>
          Allow Google Maps
        </StyledButton>
        <StyledButton variant="secondary" style={styles.continueBtn} onPress={onContinue}>
          Skip for now
          Set manually
        </StyledButton>
      </View>
    </View>
  );
}

export function SetupNotificationScreen() {
  const navigator = useNavigation();

  const onContinue = () => {
    navigator.navigate(ScreenList.main);
  }

  return (
    <View style={globalStyles.screen}>
      <AppBarWithBackAndQuestion />
      <View style={styles.container}>
        <View style={{ marginBottom: 70, marginTop: 10 }} >
          <StyledText style={styles.title}>Lastly, please enable notification</StyledText>
          <StyledText style={styles.subtitle}>Enable your notifications for more update and important messages about your grocery needs</StyledText>
        </View>
        <NotificaionSVG />
      </View>
      <View style={styles.progressBtn}>
        <StyledButton style={styles.continueBtn} onPress={onContinue}>
          Enable Notification
        </StyledButton>
        <StyledButton variant="secondary" style={styles.continueBtn} onPress={onContinue}>
          Skip for now
        </StyledButton>
      </View>
    </View>
  );
}

function AppBarWithBackAndQuestion() {
  const navigator = useNavigation();
  const goBack = () => {
    navigator.goBack();
  }
  return <AppBar onBack={goBack}>
    <QuestionMarkIcon />
  </AppBar>;
}

function FilterChips() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([
    "Gluten-Free",
  ]);
  const [expanded, setExpanded] = useState(false);

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const visibleFilters = expanded ? filters : filters.slice(0, INITIAL_VISIBLE_COUNT);

  const remainingCount = filters.length - INITIAL_VISIBLE_COUNT;

  return (
    <View style={styles.chipsContainer}>
      {visibleFilters.map((filter) => (
        <Chip
          key={filter}
          label={filter}
          active={selectedFilters.includes(filter)}
          onPress={() => toggleFilter(filter)}
        />
      ))}

      {!expanded && remainingCount > 0 && (
        <Chip
          label={`Show +${remainingCount} More`}
          onPress={() => setExpanded(true)}
        />
      )}

      {expanded && (
        <Chip
          label="Show Less"
          onPress={() => setExpanded(false)}
        />
      )}
    </View>
  );
};
