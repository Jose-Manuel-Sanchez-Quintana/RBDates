/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                richBrown: '#3A1D12',
                deepDateBrown: '#5A2E1B',
                warmCream: '#FAF7F2',
                desertBeige: '#F2E8D5',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
