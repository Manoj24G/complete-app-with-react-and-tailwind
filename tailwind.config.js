module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
    sm: '640px',
    // => @media (min-width: 64@px) { ... }
    md: '768px',
    // => @media (min-width: 768px) { ... }
    lg: '1024px',
    // => emedia (min-width: 1024px) {'...'}
    xl: '1280px',
    // => @media (min-width: 1280px) {... }
    '2x1': '1536px' ,
    // => @media (min-width: 1536px) (... }
  },
},
  plugins: [],
}
