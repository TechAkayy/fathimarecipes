// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  name: 'Fathima Recipes',
  description: 'Vue Designer Nuxt Tailwind CSS - Quick start template',
  logo: 'i-vscode-icons:file-type-coffeelint',
  author: 'Pinegrow',
  url: 'https://fathima-recipes.netlify.app',
  github: 'https://github.com/techakayy/fathima-recipes',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    {
      text: 'Home',
      link: '/',
      type: 'primary',
      icon: 'i-mdi-home',
    },
    {
      text: 'Recipes',
      link: '/recipes',
      type: 'primary',
      icon: 'i-mdi-home',
    },
  ],
}
