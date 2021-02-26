const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(function(options = {}) {
  return function({ theme, addBase, addUtilities }) {
    const
      screens = theme('container.screens', theme('screens')),
      padding = theme('container.padding', {}),
      rootSelector = options.rootSelector ?? ':root',
      screenWidthVar = options.screenWidthVar ?? '--screen-width',
      screenWidthDefault = options.screenWidthDefault ?? theme('width.screen'),
      currentScreenVar = options.currentScreenVar ?? '--current-screen',
      currentScreenDefault = options.currentScreenDefault ?? screenWidthDefault,
      paddingVar = options.paddingVar ?? '--container-padding',
      paddingDefault = theme('container.padding.DEFAULT', undefined)
    
    
    /* Base */

    const base = {
      [rootSelector]: Object.assign(
        { [screenWidthVar]: screenWidthDefault },
        { [currentScreenVar]: currentScreenDefault },
        paddingDefault ? { [paddingVar]: paddingDefault } : {},
        ...Object.entries(screens).map(([screenKey, screenValue]) => ({
          [`@screen ${screenKey}`]: Object.assign(
            { [currentScreenVar]: screenValue },
            Object.keys(padding).includes(screenKey) ? { [paddingVar]: padding[screenKey] } : {}
          )
        }))
      )
    }
    addBase(base)


    /* Margin */
    
    const
      mContainerPadding = `calc(var(${paddingVar}) / -1)`,
      mContainerMargin = `calc((var(${screenWidthVar}) - var(${currentScreenVar})) / -2)`,
      mContainer = `calc((var(${screenWidthVar}) - var(${currentScreenVar})) / -2 - var(${paddingVar}))`
    
    const m = {
      '.-m-container-padding': { margin: mContainerPadding },
      '.-ml-container-padding': { marginLeft: mContainerPadding },
      '.-mr-container-padding': { marginRight: mContainerPadding },
      '.-mt-container-padding': { marginTop: mContainerPadding },
      '.-mb-container-padding': { marginBottom: mContainerPadding },
      '.-mx-container-padding': { marginLeft: mContainerPadding, marginRight: mContainerPadding },
      '.-my-container-padding': { marginTop: mContainerPadding, marginBottom: mContainerPadding },

      '.-ml-container-margin': { marginLeft: mContainerMargin },
      '.-mr-container-margin': { marginRight: mContainerMargin },
      '.-mx-container-margin': { marginLeft: mContainerMargin, marginRight: mContainerMargin },

      '.-ml-container': { marginLeft: mContainer },
      '.-mr-container': { marginRight: mContainer },
      '.-mx-container': { marginLeft: mContainer, marginRight: mContainer }
    }
    addUtilities(m)


    /* Padding */
    
    const
      pContainerPadding = `var(${paddingVar})`,
      pContainerMargin = `calc((var(${screenWidthVar}) - var(${currentScreenVar})) / 2)`,
      pContainer = `calc((var(${screenWidthVar}) - var(${currentScreenVar})) / 2 + var(${paddingVar}))`
    
    const p = {
      '.p-container-padding': { padding: pContainerPadding },
      '.pl-container-padding': { paddingLeft: pContainerPadding },
      '.pr-container-padding': { paddingRight: pContainerPadding },
      '.pt-container-padding': { paddingTop: pContainerPadding },
      '.pb-container-padding': { paddingBottom: pContainerPadding },
      '.px-container-padding': { paddingLeft: pContainerPadding, paddingRight: pContainerPadding },
      '.py-container-padding': { paddingTop: pContainerPadding, paddingBottom: pContainerPadding },
      
      '.pl-container-margin': { paddingLeft: pContainerMargin },
      '.pr-container-margin': { paddingRight: pContainerMargin },
      '.px-container-margin': { paddingLeft: pContainerMargin, paddingRight: pContainerMargin },
      
      '.pl-container': { paddingLeft: pContainer },
      '.pr-container': { paddingRight: pContainer },
      '.px-container': { paddingLeft: pContainer, paddingRight: pContainer }
    }
    addUtilities(p)


    /* Bleed */
    
    const b = {
      '.b-container-padding': { margin: mContainerPadding, padding: pContainerPadding },
      '.bl-container-padding': { marginLeft: mContainerPadding, paddingLeft: pContainerPadding },
      '.br-container-padding': { marginRight: mContainerPadding, paddingRight: pContainerPadding },
      '.bt-container-padding': { marginTop: mContainerPadding, paddingTop: pContainerPadding },
      '.bb-container-padding': { marginBottom: mContainerPadding, paddingBottom: pContainerPadding },
      '.bx-container-padding': { marginLeft: mContainerPadding, paddingLeft: pContainerPadding, marginRight: mContainerPadding, paddingRight: pContainerPadding },
      '.by-container-padding': { marginTop: mContainerPadding, paddingTop: pContainerPadding, marginBottom: mContainerPadding, paddingBottom: pContainerPadding },
      
      '.bl-container-margin': { marginLeft: mContainerMargin, paddingLeft: pContainerMargin },
      '.br-container-margin': { marginRight: mContainerMargin, paddingRight: pContainerMargin },
      '.bx-container-margin': { marginLeft: mContainerMargin, paddingLeft: pContainerMargin, marginRight: mContainerMargin, paddingRight: pContainerMargin },
      
      '.bl-container': { marginLeft: mContainer, paddingLeft: pContainer },
      '.br-container': { marginRight: mContainer, paddingRight: pContainer },
      '.bx-container': { marginLeft: mContainer, paddingLeft: pContainer, marginRight: mContainer, paddingRight: pContainer }
    }
    addUtilities(b)
  }
})
