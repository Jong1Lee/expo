const COLORS = {
    primary: "#DF765F",
    secondary: "#FFFFFF",
    accent: "#FF9B53",
    font: "#545151"
}

const SIZES = {
    padding: 15,
    borderRadius: 15,
    textBoxRadius: 15,
    h1: 24,
    h2: 20
}

const FONTS = {
    fontFamily: 'Poppins',
    h1_semiBold: {
        fontSize: SIZES.h1,
        fontFamily: 'Poppins',

    },
    h2_semiBold: {
        fontSize: SIZES.h2,
        fontFamily: 'Poppins',
    }
}

const SHADOW = {
    elevation: 5,
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 2, height: 12 },
    shadowRadius: 12,
}

export { COLORS, SIZES, FONTS, SHADOW }