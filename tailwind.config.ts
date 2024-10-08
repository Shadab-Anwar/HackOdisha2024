import { Oxanium } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },

            fontFamily: {
                inter: "var(--font-inter)",
                "dela-gothic": "var(--font-dela-gothic-one)",
                archivoBlack: "var(--archivo-black)",
                archivo: "var(--archivo)",
                oxanium: "var(--font-oxanium)",
                bebas: "var(--bebas-neue)",
            },

            colors: {
                customPink: "#624353",
            },

            screens: {
                xsm: "300px",
                "custom-1090": "1090px",
                "custom-1000": "1000px",
                "custom-1080": "1080px",
                "custom-940": "940px",
                "custom-838": "838px",
                "custom-770": "770px",
                "custom-650": "650px",
                "custom-535": "535px",
                "custom-540": "540px",
                "custom-500": "500px",
                "custom-460": "460px",
                "custom-420": "420px",
                "custom-390": "390px",
                "custom-385": "385px",
                "custom-355": "355px",
                "custom-345": "345px",
                "custom-330": "330px",
                "xl-custom": "1504px",
                "3xl/faq": "1760px",
                "4xl/faq": "1984px",
            },

            boxShadow: {
                "custom-black": "7px 7px 5px 0px rgba(0, 0, 0, 1)",
            },
        },
    },
    plugins: [
        function ({ addUtilities }: { addUtilities: Function }) {
            const newUtilities = {
                ".text-stroke": {
                    "-webkit-text-stroke-width": "1px",
                    "-webkit-text-stroke-color": "#000",
                },
                ".text-shadow-outline": {
                    "text-shadow": `
                  2px 2px 0 #fbf2dc,
                  2.7px 2.7px 0 #000 
                `,
                },
            };

            addUtilities(newUtilities);
        },
    ],
};

export default config;
