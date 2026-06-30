import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        gold: "hsl(var(--gold))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Avenir Next", "Segoe UI", "sans-serif"],
      },
      keyframes: {
        sweep: {
          "50%": { left: "110%" },
        },
        "float-panel": {
          "50%": { transform: "translateY(-10px)" },
        },
        drift: {
          "50%": { transform: "translate3d(-16px, 10px, 0) rotate(4deg)" },
        },
        "pulse-bar": {
          "50%": { transform: "scaleY(0.82)" },
        },
      },
      animation: {
        sweep: "sweep 7s ease-in-out infinite",
        "float-panel": "float-panel 5.5s ease-in-out infinite",
        drift: "drift 8s ease-in-out infinite",
        "drift-reverse": "drift 9s ease-in-out infinite reverse",
        "pulse-bar": "pulse-bar 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [animate],
} satisfies Config;

export default config;
