module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ['Clash Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#B53EA4',
        'secondary': '#FC6F32',
        'accent': '#FF4A59',
        'hero-pink': '#FFD6F9',
        'hero-orange': '#FFCBB4',
        'hero-red': '#FFBEC3',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(108.88deg, #B53EA4 -2.82%, #FC6F32 34.48%, #FF4A59 93.08%)',
        'hero-gradient-active': 'linear-gradient(106.2deg, #FFD6F9 -12.33%, #FFCBB4 50.28%, #FFBEC3 114.17%)',
        'static-btn-gradient': 'linear-gradient(105.65deg, rgba(150,52,136,0.2) 0.15%, rgba(252,111,50,0.2) 130.58%, rgba(255,74,89,0.2) 263.64%)',
      },
      borderRadius: {
        'hero': '60px',
        'hero-xl': '91px',
      },
    },
  },
  plugins: [],
}; 