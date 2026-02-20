import { COUNTRIES, getFlagEmoji } from "@constants";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { colors, radius, typography } from "@themes";
import StyledText from "./StyledText";
import { useState } from "react";
import { Country } from "@types";

export default function CountryDropdown({ initial, onSelect }: { initial: Country, onSelect: (country: Country) => void }) {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>(initial);

  const toggleDropdown = () => setOverlayVisible(!overlayVisible);

  const handleSelect = (country: Country) => {
    setSelectedCountry(country);
    setOverlayVisible(false);
    onSelect(country);
  };

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={toggleDropdown}>
        <StyledText style={styles.flag}>
          {getFlagEmoji(selectedCountry.isoCode)} {selectedCountry.dialCode}
        </StyledText>
      </TouchableOpacity>

      {overlayVisible && (
        <>
          <View style={styles.overlay}>
            <FlatList
              data={COUNTRIES}
              keyExtractor={(item) => item.isoCode}
              showsVerticalScrollIndicator={true}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.countryRow}
                  onPress={() => handleSelect(item)}
                >
                  <StyledText style={styles.flag}>
                    {getFlagEmoji(item.isoCode)} {item.name}
                  </StyledText>
                </TouchableOpacity>
              )}
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  flag: {
    fontSize: 18,
    ...typography.medium,
  },
  dropdownWrapper: {
    position: 'relative',
    zIndex: 1000,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.greyAccent,
    borderRadius: radius.sm,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  overlay: {
    position: "absolute",
    marginTop: 55,
    height: 400,
    width: 250,
    borderRadius: radius.sm,
    backgroundColor: colors.greyAccent,
    paddingHorizontal: 16,
    paddingVertical: 10,
    zIndex: 1001,
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  countryRow: {
    paddingVertical: 5,
  },
});

