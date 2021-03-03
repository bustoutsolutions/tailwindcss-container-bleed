const fs = require('fs')
const postcss = require('postcss')
const tailwind = require('tailwindcss')
const CleanCSS = require('clean-css')

function buildDocsFile(filename) {
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
      corePlugins: [
        'preflight',
        'container',
        'alignItems',
        'backgroundColor',
        'borderRadius',
        'display',
        'flex',
        'fontFamily',
        'fontSize',
        'fontWeight',
        'height',
        'inset',
        'margin',
        'maxWidth',
        'objectFit',
        'padding',
        'position',
        'textColor',
        'textAlign',
        'width',
        'zIndex'
      ],
      plugins: [require('../dist/index.js')],
      variants: []
    }),
    require('autoprefixer'),
  ])
    .process('@tailwind base; @tailwind components; @tailwind utilities;', {
      from: null,
      to: `./docs/${filename}.css`,
      map: false,
    })
    .then((result) => {
      fs.writeFileSync(`./docs/${filename}.css`, result.css)
      return result
    })
    .then((result) => {
      const minified = new CleanCSS().minify(result.css)
      fs.writeFileSync(`./docs/${filename}.min.css`, minified.styles)
    })
    .catch((error) => {
      console.log(error)
    })
}

console.info('Building docs CSS...')

Promise.all([buildDocsFile('tailwind')]).then(() => {
  console.log('Finished building docs CSS.')
})
