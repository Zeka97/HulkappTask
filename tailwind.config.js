/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      2: "2px",
    },
    spacing: {
      0: "0px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      12: "12px",
      16: "16px",
      20: "20px",
      24: "24px",
      32: "32px",
      36: "36px",
      40: "40px",
      42: "42px",
      48: "48px",
      50: "50px",
      60: "60px",
      64: "64px",
      85: "85px",
      90: "90px",
      80: "80px",
      100: "100px",
      120: "120px",
      150: "150px",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
      6: "6px",
      8: "8px",
      10: "10px",
      14: "14px",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        dmserif: ["DM Serif Display", "serif"],
      },
      backgroundImage: {
        kitchen: "url('/public/Kitchen_3.png')",
        dispenser: "url('/public/MaskGroup12.png')",
        livingroom: "url('/public/LivingRoom_1.png')",
        office: "url('/public/office.png')",
        kitchenShot: "url('/public/KitchenShot_3.png')",
        bathroomWhiteCounter: "url('/public/bathroom_whiteoncounter.png')",
        biomWipe2: "url('/public/Biom_wipe_2.png')",
      },
      colors: {
        "dark-green": "#002D33;",
      },
      transitionDuration: {
        2000: "2000ms",
        500: "500ms",
      },
    },
  },
  plugins: [],
};
