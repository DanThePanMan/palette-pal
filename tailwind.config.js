/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [
        require("tailwind-typewriter")({
            wordsets: {
                Landing: {
                    words: ["A Free Color Palette Preview Tool for Developers"],
                    delay: 1,
                    writeSpeed: 0.06,
                    eraseSpeed: 0.06,
                    repeat:-1
                },
            },
        }),
    ],
};
