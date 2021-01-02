---
description: ''
sidebar: 'docs'
next: '/docs/installation/'
---

# Introduction

Forge is a modern Jamstack hosting platform for the fast web. Replace your old hosting infrastructure with a single seamless workflow. Forge will evolve with you and your projects - from simple HTML static sites, to rich and dymanic single page applications (SPA's), e-Commerce stores, news & content sites and many other use-cases besides. Easily add more advanced, dynamic functionality such as hosted web forms, authentication, full-text search, notifications and full backend APIs.

## Fast by default

Whether you are writing plan old HTML, using a static site generator or web application framework - Forge grinds away to make sure speed and performance are at the highest level.

During deployment, Forge optimises your site with XYZ

Achieving optimal lighthouse and Google Page Speed scores has never been easier out of the box.

## Iron clad security

With server-side processes abstracted into microservice APIs, surface areas for attacks are reduced. You can also leverage the domain expertise of specialist third-party services.

## Search

The search component which is shipped with this theme, automatically indexes all headlines in your markdown pages and provides instant client side search powered by [Fuse.js](https://fusejs.io/).

## Dark Mode

This seems to be a must have for any site in current year. Click the icon at the top of the page and try it out for yourself!

## TailwindCSS

This starter uses [TailwindCSS](https://tailwindcss.com/) for layout and styling. You can easily configure it by editing the `tailwind.config.js` file. [PurgeCSS](https://purgecss.com/) is included as well to keep the bundle size as low as possible and the website fast and snappy!

### Changing Colors

The most inportant colors are defined in the `src/layouts/Default.vue` file at the top of the `style` block via CSS variables. If you want to change the primary color to orange for example, you would simply touch that value there.

```css
:rrot {
  --color-ui-primary: theme('colors.orange.600');
}
```

## Make it your own

Of course this is just a starter to quickly get you going. After downloading and installing you can do whatever you want with this theme. Check out the `src` folder and take a look at the components.

Docc uses [TailwindCSS](https://tailwindcss.com/). Colors and spacing can easily configured. To change the accent color, you only need to touch a single line in the code.

Don't like how something was designed or implemented? Just change the code and **make it your way**.

### Contribute

If you find any spelling mistakes or have improvements to offer, I am open to anyone who has ideas and wants to contribute to this starter theme.