# Tailwind CSS Container Bleed Plugin

This plugin generates utilities classes to bleed into container padding and margin at each screen breakpoint.

[View live demo](https://bustoutsolutions.github.io/tailwindcss-container-bleed)

```html
<main class="container">
  <section class="bx-container">
    This element breaks out of the container to the edges of the browser
    window. Padding is applied so this content will remain inline with other
    container content.
  </section>
  <section class="bx-container-padding">
    This element breaks out of the container padding only. Padding is applied
    so this content will remain inline with other container content.
  </section>
  <!-- See more utilities in demo -->
</main>
```

## Installation

Install the plugin from npm:

```sh
# Using npm
npm install --save-dev tailwindcss-container-bleed

# Using Yarn
yarn add -D tailwindcss-container-bleed
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-container-bleed'),
    // ...
  ],
}
```

## Usage

This plugin works in conjunction with the native [container](https://tailwindcss.com/docs/container) component and its [horizontal padding options](https://tailwindcss.com/docs/container#horizontal-padding). There are no additional options to be configured in the theme.

There are, however, a few options that can be configured when the plugin is included:

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('tailwindcss-container-bleed', {
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

**Notes:**
* Requires Tailwind CSS v1.3+
* Fully works best when `container.center = true`
* Relies on CSS custom properties

## Utilities

The following utility classes are generated. They can also be used with `@apply`.

### Bleed

The bleed classes are a combination of the respective negative margin and padding utilites below. For example, `.bx-container` is equal to `.-mx-container .px-container`.

```
.bl-container
.br-container
.bx-container

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
```

### Negative Margins

```
.-ml-container
.-mr-container
.-mx-container

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
```

### Padding

```
.pl-container
.pr-container
.px-container

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
```
