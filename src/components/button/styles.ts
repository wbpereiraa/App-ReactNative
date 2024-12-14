import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme";


export const styles = StyleSheet.create({
    container: {
        height: 56,
        maxHeight: 56,
        borderRadius: 10,
        gap: 14,
        flexDirection: "row",
        backgroundColor: colors.green.base,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        color: colors.gray[100],
        fontFamily: 'fontFamily.semiBold',
    },
});