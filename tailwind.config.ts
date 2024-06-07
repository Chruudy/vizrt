import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey098': '#171181A',
        'grey095': '#1E2226',
        'grey094': '#23272B',
        'grey093': '#262B2E',
        'grey090': '#2A2E31',
        'grey085': '#36393D',
        'grey080': '#464A¤D',
        'grey075': '#4D5154',
        'grey070': '#595C5F',
        'grey065': '#8E9295',
        'grey035': '#ACAEAF',
        'grey020': '#D0D0D1',
        'grey010': '#E9E9F2',
        'blue01': '#7C9DFF',
        'blue02': '#557AFF',
        'blue03': '#4666FD',
        'blue04': '#3956E5',
        'blue05': '#2542D1',
        'blue06': '#475077',
        'blue7': '#4D5566',
        'red01': '#F64534',
        'red02': '#E53D2E',
        'red03': '#CC2D1F',
        'red00' : '#F75B5E',
        'yellow01' : '#FCDC5C',
        'green01' : '#4DE18A',
        'brandOrangeDarker' : '#E43116',
        'brandOrange' : '#EF804E',
        'brandTextOrange' : '#EF08D5A',
        'brandTextBlue' : '#82AAB9',
        'brandTextWhite' : '#FFFFFF',
        'brandBGLighter' : '#1E3541',
        'brandBG' : '#1A2C33',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
