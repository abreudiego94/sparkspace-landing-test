/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            animation: {
                pulseGrow: "pulseGrow 2s ease-in-out infinite",
            },
            keyframes: {
                pulseGrow: {
                    "0%": {
                        transform: "scale(1)",
                        color: "hsl(var(--primary))",
                        backgroundColor: "transparent",
                    },
                    "50%": {
                        transform: "scale(1.3)",
                        color: "hsl(var(--accent))",
                        backgroundColor: "hsl(var(--primary))",
                    },
                    "100%": {
                        transform: "scale(1)",
                        color: "hsl(var(--primary))",
                        backgroundColor: "transparent",
                    },
                },
            },
            colors: {
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
                "light-grey": "#F7F6F0",
                "dark-grey": "#F1EFE5",
                navy: {
                    "50": "#e9f4ff",
                    "100": "#d7eaff",
                    "200": "#b7d7ff",
                    "300": "#8cbbff",
                    "400": "#5e92ff",
                    "500": "#3968ff",
                    "600": "#1739ff",
                    "700": "#0d2cf5",
                    "800": "#0e2ac5",
                    "900": "#162e99",
                    "950": "#080f37",
                },
                "light-blue": {
                    "50": "#f0f9ff",
                    "100": "#e0f2fe",
                    "200": "#bbe6fc",
                    "300": "#7cd1fa",
                    "400": "#3bbcf5",
                    "500": "#11a3e6",
                    "600": "#0583c4",
                    "700": "#05689f",
                    "800": "#095883",
                    "900": "#0d4a6d",
                    "950": "#092f48",
                },
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
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}

