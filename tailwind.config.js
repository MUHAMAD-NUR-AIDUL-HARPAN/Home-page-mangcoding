/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Pastikan path ini sesuai dengan struktur proyekmu
    safelist: [
      "hidden",
      "block",
      "flex",
      "grid",
      "bg-red-500",
      "text-white",
      "p-4"
    ], // Pastikan class ini tidak dihapus saat build
    theme: {
      extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          roboto: ['Roboto', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  