# Playwright demo

Tests written in Typescript using Playwright framework.

Tested application is a demo site [Practice Software Testing](https://practicesoftwaretesting.com/) created by [Testsmith](https://github.com/testsmith-io). You can find a source code [here](https://github.com/testsmith-io/practice-software-testing).

## Prepare

### Local recommended tools:

- VS Code
- Git
- Node.js (version >16)

### Installation and setup

- (optional) install VSC recommended plugins
- install dependencies: `npm install`
- setup Playwright with: `npx playwright install --with-deps chromium`
- setup husky with: `npx husky`

## Use

Run all tests:

```
npx playwright test
```

For more usage cases look in `package.json` scripts section.
