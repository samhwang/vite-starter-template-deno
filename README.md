# Getting Started with Vite - React - Deno starter template

This project was bootstrapped with [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project), and was created
to be very similar to Create-React-App, but with more nuts and bolts and faster via Vite!

## Using this template

There are 3 ways that you can adopt this template.

- Click the `Use this template` button on this repo, or click on [this link](https://github.com/samhwang/vite-starter-template-deno/generate).
- Clone this repo, delete the .git folder and re-init the Git tree.
- Use `degit`: `npx degit samhwang/vite-starter-template project-name`

## Batteries included

- [Vite](https://vitejs.dev/), [React](https://reactjs.org) and [TypeScript](https://www.typescriptlang.org/) - The core of this template.
- [Deno](https://deno.land) - A modern JS runtime.
- [msw](https://mswjs.io/) to fake a service worker request to intercept API calls.
- [GitHub Actions](https://github.com/features/actions) pipeline to deploy into [GitHub Pages](https://pages.github.com/).

## Available Scripts

In the project directory, you can run:

### `deno task dev`

Runs the app in the development mode.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `deno fmt`

Reformat the code to Deno standards

### `deno task build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Deployment

This template includes some [GitHub Actions](https://github.com/features/actions) pipeline to deploy into [GitHub Pages](https://pages.github.com/).

To configure this, first [enable GH Actions in your repo](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository) then [configure publishing from an Action workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow).
If you don't want to use GitHub Pages, feel free to delete the `.github` folder, and see the [deployment](https://vitejs.dev/guide/static-deploy.html) section on Vite Docs
for more information.

## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/guide/).

To learn React, check out the [React documentation](https://reactjs.org/).
