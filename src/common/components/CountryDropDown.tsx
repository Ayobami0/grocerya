import { COUNTRIES, getFlagEmoji } from "@constants";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import { colors, radius, typography } from "@themes";
import StyledText from "./StyledText";
import { useState } from "react";
import { Country } from "@types";
import StyledTextInput from "./StyledTextInput";

export default function CountryDropdown({
  initial,
  onSelect,
}: {
  initial: Country;
  onSelect: (country: Country) => void;
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>(initial);
  const [search, setSearch] = useState("");

  const toggleDropdown = () => setModalVisible(!modalVisible);

  const handleSelect = (country: Country) => {
    setSelectedCountry(country);
    setModalVisible(false);
    onSelect(country);
  };

  const filteredCountries = COUNTRIES.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.dialCode.includes(search)
  );

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={toggleDropdown}>
        <StyledText style={styles.flag}>
          {getFlagEmoji(selectedCountry.isoCode)} {selectedCountry.dialCode}
        </StyledText>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <StyledTextInput
              placeholder="Search country..."
              placeholderTextColor={colors.greyAccent2}
              value={search}
              onChangeText={setSearch}
            />

            <FlatList
              data={filteredCountries}
              keyExtractor={(item) => item.isoCode}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.countryRow}
                  onPress={() => handleSelect(item)}
                >
                  <StyledText style={styles.countryText}>
                    {getFlagEmoji(item.isoCode)} {item.name} ({item.dialCode})
                  </StyledText>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.greyAccent,
    borderRadius: radius.sm,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  flag: {
    fontSize: 18,
    ...typography.medium,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    maxHeight: "70%",
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  countryRow: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.greyAccent,
  },
  countryText: {
    ...typography.base,
  },
});
