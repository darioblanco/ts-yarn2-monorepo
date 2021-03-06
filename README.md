# ts-yarn2-monorepo

Repository skeleton example for a TypeScript monorepo set up using yarn2.

The structure of this repository is highly inspired [@yarnpkg/berry](https://github.com/yarnpkg/berry) itself.

## Yarn 2

This monorepo takes advantage of the new Yarn 2 features like Plug'n'Play and zero-installs,
to prevent traditional problems caused by such setups.

### Explanation

- Common `devDependencies` to **all** packages are defined as `dependencies`
  in the root `package.json`.
- Common scripts are defined in the root `package.json`. Other workspaces can inherit from them.
- Each package has its own specific `scripts`, `dependencies` and `devDependencies`.
- There is no `node_modules`, dependencies are commited to the repo via `.yarn/cache`.
  This speeds up greatly CI builds when the monorepo starts to grow.
- Adding new packages is easy with `yarn` either in root or in each workspace.

### Installation

[Installation](https://yarnpkg.com/getting-started/install)

To freshly create a yarn2 project:

1. Install `yarn` in your computer
2. Run `yarn set version berry && yarn set version from sources` in this repository
3. Run `yarn init` (this creates the `package.json` file)
4. Run `yarn install` so [Plug'n'Play](https://yarnpkg.com/getting-started/migration#switching-to-plugnplay)
   creates the required files
5. Follow all the instructions defined in [Editor Support](https://yarnpkg.com/getting-started/migration#editor-support)
   to guarantee a proper Visual Studio Code integration. Steps to other editors are defined in
   [Editor SDKs](https://yarnpkg.com/getting-started/editor-sdks)

This repository already has commited the files generated by the installation steps.

It is very important to periodically run `yarn dlx @yarnpkg/doctor` and fix any problems that
appear (defined as a script in `yarn doctor`).

## Development tools

- **commitlint**: to enforce the [conventional commit](https://www.conventionalcommits.org/) style
- **husky**: commit hooks that run commitlint, yarn and prettier to ensure quality before push
- **eslint**: JavaScript and TypeScript linter
- **prettier**: code auto formatter
- **shellcheck**: lints bash scripts (installable via)

## Configuration files

- `.dockerignore`: makes easier docker COPY commands
- `.eslintignore`: ignores the defined file and folder patterns when running ESLint
- `.eslintrc.js`: defines global ESLint configuration
- `.pnp.cjs`: automatically generated by yarn2
- `.prettierignore`: ignores the defined file and folder patterns when running Prettier
- `.prettierrc`: Prettier configuration
- `.yarnrc`: automatically generated by yarn2
- `.yarnrc.yaml`: yaml2 configuration (important to change `packageExtensions`,
  see [fix dependencies with package extensions](https://yarnpkg.com/getting-started/migration#fix-dependencies-with-packageextensions))
- `docker-compose.yaml`: defines docker image for local testing
- `jest.config.js`: sets global Jest configuration to be inherited by each package
- `tsconfig.json`: global TypeScript configuration to be inherited by each package
- `typedoc.js`: global TypeDoc configuration to be inherited by each package

## Visual Studio Code

This repository already has pushed the `.yarn/sdks` folder that adapts ESLint, Prettier and
TypeScript configurations to be used in your IDE, and using project scoped VSCode settings
(defined in `.vscode/settings.json`). Some manual steps might be needed if you do not
see those tools working on your editor:

- ESLint
  - Command + Shift + P in a TypeScript file
  - Type `ESLint: Select Node Path`
  - Select `Use NODE_PATH value defined via setting .yarn/sdks`
- Typescript
  - Command + Shift + P in a TypeScript file
  - Type `TypeScript: Select TypeScript Version`
  - Select `Use Workspace Version`

In addition, it is important to install the VSCode extensions recommended in
`.vscode/extensions.json`.
