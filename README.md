# Tailwind CSS Container Bleed Plugin

This plugin generates utilities classes to bleed into container padding and margin at each screen breakpoint.

[View live demo](https://htmlpreview.github.io/?https://github.com/bustoutsolutions/tailwindcss-container-bleed/blob/main/demo/index.html)

```html
<main class="container">
  <div class="bx-container">
    This element breaks out of the container to the edges of the browser
    window. Padding is applied so this content will remain inline with other
    container content.
  </div>
  <div class="bx-container-padding">
    This element breaks out of the container padding only. Padding is applied
    so this content will remain inline with other container content.
  </div>
</main>
```

## Usage

This plugin works in conjunction with the native [Container](https://tailwindcss.com/docs/container) component and its [horizontal padding options](https://tailwindcss.com/docs/container#horizontal-padding). There are no additional options to be configured in the theme.

There are, however, a few options that can be configured when the plugin is included:

```js
// tailwind.config.js

module.exports = {
  plugins: [
    require('./plugins/tailwindcss-container-bleed/index', {
      // Defaults
      rootSelector: ':root',
      screenWidthVar: '--screen-width',
      screenWidthDefault: theme('width.screen'),
      currentScreenVar: '--current-screen',
      currentScreenDefault: screenWidthDefault,
      paddingVar: '--container-padding'
    })
  ]
}
```

Currently, this plugin fully works best when `container.center = true`.

*Note:* This plugin relies on CSS custom properties.

## Utilities

The following utility classes are generated. They can also be used with `@apply`.

### Bleed

```
.b-container-padding
.bl-container-padding
.br-container-padding
.bt-container-padding
.bb-container-padding
.bx-container-padding
.by-container-padding

.bl-container-margin
.br-container-margin
.bx-container-margin

.bl-container
.br-container
.bx-container
```

### Negative Margins

```
.-m-container-padding
.-ml-container-padding
.-mr-container-padding
.-mt-container-padding
.-mb-container-padding
.-mx-container-padding
.-my-container-padding

.-ml-container-margin
.-mr-container-margin
.-mx-container-margin

.-ml-container
.-mr-container
.-mx-container
```

### Padding

```
.p-container-padding
.pl-container-padding
.pr-container-padding
.pt-container-padding
.pb-container-padding
.px-container-padding
.py-container-padding

.pl-container-margin
.pr-container-margin
.px-container-margin

.pl-container
.pr-container
.px-container
```
