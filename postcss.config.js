module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'), // Add this line
    require('autoprefixer'), // Add this line
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })
  ]
}
