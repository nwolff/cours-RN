## Installing

    npm install

## Developing

npm run dev -- --open

## Deploying

### Verify building for prod

When building for prod, svelte tries to render server-side as much as possible to make
pages appear as fast as possible.
A lot of our routes run only in the browser and we disable ssr for those.

This step makes sure we haven't forgotten anything.

    npm run build
    npm run preview -- --open

### Deploying to github pages

    npm run gh-pages
