import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 36,
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 12,
    backgroundColor: colors.gray[100],
  },
  name: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.gray[500],
  },
  containerSelected: {
    backgroundColor: colors.green.base,
    borderWidth: 0,
  },
  nameSelected: {
    color: colors.gray[100],
  },
  
});