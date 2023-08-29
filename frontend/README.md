# A SvelteKit application written in typescript

## Installing

    npm install

## Developing

Running the app under development, with automatic reload :

    npm run dev -- --open

Automatically formatting :

    npm run format

Typechecking :

    npm run check

## Deploying

### Verifying the production build

When building for prod, svelte tries to render server-side as much as possible to make
pages appear rapidly. A lot of our routes can only run in the browser and we disable
server-side-rendering for those.

This step makes sure we haven't forgotten anything.

    npm run build
    npm run preview -- --open

### Deploying to github pages

    npm run gh-pages
