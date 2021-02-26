const fs = require('fs')
const postcss = require('postcss')
const tailwind = require('tailwindcss')
const CleanCSS = require('clean-css')

function buildDemoFile(filename) {
  return postcss([
    tailwind({
      theme: {
        container: {
          center: true,
          padding: {
            DEFAULT: '1rem',
            md: '2rem',
            lg: '4rem'
          }
        },
        extend: {
          screens: {
            'xl': false,
            '2xl': false
          }
        }
      },
      plugins: [require('../src/index.js')],
    }),
    require('autoprefixer'),
  ])
    .process('@tailwind base; @tailwind components; @tailwind utilities;', {
      from: null,
      to: `./demo/${filename}.css`,
      map: false,
    })
    .then((result) => {
      fs.writeFileSync(`./demo/${filename}.css`, result.css)
      return result
    })
    .then((result) => {
      const minified = new CleanCSS().minify(result.css)
      fs.writeFileSync(`./demo/${filename}.min.css`, minified.styles)
    })
    .catch((error) => {
      console.log(error)
    })
}

console.info('Building CSS...')

Promise.all([buildDemoFile('tailwind')]).then(() => {
  console.log('Finished building demo CSS.')
})
