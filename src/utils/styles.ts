import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from './colors';

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
    },
    padding: {
        padding: SIZES.md,
    },
    paddingHorizontal: {
        paddingHorizontal: SIZES.md,
    },
    paddingVertical: {
        paddingVertical: SIZES.md,
    },

    // Card Styles
    card: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radiusMedium,
        padding: SIZES.md,
        marginVertical: SIZES.sm,
        shadowColor: COLORS.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    // Text Styles
    h1: {
        fontSize: SIZES.h1,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: SIZES.sm,
    },
    h2: {
        fontSize: SIZES.h2,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: SIZES.sm,
    },
    h3: {
        fontSize: SIZES.h3,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: SIZES.xs,
    },
    body: {
        fontSize: SIZES.body,
        color: COLORS.text,
        lineHeight: 24,
    },
    caption: {
        fontSize: SIZES.caption,
        color: COLORS.textLight,
    },

    // Button Styles
    button: {
        height: SIZES.buttonHeight,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.radiusMedium,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SIZES.lg,
    },
    buttonText: {
        fontSize: SIZES.body,
        fontWeight: '600',
        color: COLORS.white,
    },
    buttonOutline: {
        height: SIZES.buttonHeight,
        backgroundColor: 'transparent',
        borderRadius: SIZES.radiusMedium,
        borderWidth: 2,
        borderColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SIZES.lg,
    },
    buttonOutlineText: {
        fontSize: SIZES.body,
        fontWeight: '600',
        color: COLORS.primary,
    },

    // Input Styles
    input: {
        height: SIZES.inputHeight,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radiusMedium,
        borderWidth: 1,
        borderColor: COLORS.gray300,
        paddingHorizontal: SIZES.md,
        fontSize: SIZES.body,
        color: COLORS.text,
    },

    // Row/Column
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    column: {
        flexDirection: 'column',
    },

    // Shadow
    shadow: {
        shadowColor: COLORS.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
});