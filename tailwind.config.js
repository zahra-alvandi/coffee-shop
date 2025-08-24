/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: "#1E40AF",
        accent: "#F59E0B",
      },
      boxShadow: {
        normal: "0px 1px 10px rgba(0,0,0,.05)",
      },
      borderRaduis: {
        "4xl": "2rem",
      },
      fontFamily: {
        Dana: "Dana",
        DanaMeduim: "Dana Meduim",
        DanaDemiBold: "Dana DemiBold",
        MorabbaLight: "Morabba Light",
        MorabbaMeduim: "Morabba Meduim",
        MorabbaBold: "Morabba Bold",
      },
      letterSpacing: {
        tightest: "-0.065em",
      },
      spacing: {
        4.5: "1.125rem",
        25: "6.25rem",
        30: "7.5rem",
        50: "12.5rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem"
        }
      },
      backgroundImage: {
        "home-mobile": "url('../images/headerBgMobile.webp')",
        "home-desktop": "url('../images/headerBgDesktop.webp')",
      },
    },

    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    }
  ],
}
