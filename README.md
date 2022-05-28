# Web Base
A basic project that can be used/forked to skip all the web setup bull shit

## VS Code Extensions
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

## Setup
1. `npm install`: should install all dependencies, `babel`, `jest`, `jsdom`, `eslint`, etc...
2. `npm run build`: after any changes. I wish this would build on save, there for sure is a way, I have not tried.
3. `npm test`: tests code, but should run automatically if `ESLint` extension installed

## Editing Code
1. Edit files under `src/`
2. `npm run build` - compiles code to `lib/`
3. `npm test` - runs unit tests
4. Refresh the `index.html` file in your browser
5. Repeat!