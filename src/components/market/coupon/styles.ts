import { StyleSheet } from 'react-native';
import { colors, fontFamily} from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
  },
  title: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.gray[500],
    marginBottom: 12,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: colors.green.soft,
    borderRadius: 8,
    gap: 10,
  },
  code: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.gray[600],
    textTransform: 'uppercase',
  },
  });