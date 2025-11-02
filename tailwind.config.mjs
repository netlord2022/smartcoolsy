/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#1a3a5f",
    },
    extend: {
      colors: {
        primary: "#1a3a5f",
      },
      backgroundImage: {
        hero: "url('/hero.webp')", // from public/
        fryerHero: "url('/fryer-hero.webp')",
        kitchenToolsHero: "url('/kitchen-tools-hero.webp')",
        slashMachineHero: "url('/slash-machine-hero.webp')",
        coolerHero: "url('/cooler-hero.webp')",
        aboutHero: "url('/about-hero.webp')",
        aboutMainHero: "url('/about-main-hero.webp')",
        contactHero: "url('/contact-hero.webp')",
      },
    },
  },
  plugins: [],
}
