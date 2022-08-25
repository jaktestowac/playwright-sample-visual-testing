# General info

This is sample project presenting Playwright Visual Testing.
Design patters, such as POM or builders etc, were not implemented, to focus on simple visual testing.

More info: https://playwright.dev/docs/test-snapshots

# Steps to run project locally

1. Install packages (before first run):

    ```
    npm i
    npx playwright install
    ```

1. Run all tests by:

    ```
    npm run all
    ```

## Additional Tools

### Reports

All reports are generated into directory `playwright-report`.
Additional files are generated into directory `test-results`.

### Visual comparisons

Run all tests for Visual comparisons with:

```
npm run vt
```

Update screenshots with:

```
npm run vt-update
```

More: https://playwright.dev/docs/test-snapshots

### Codegen

To use codegen:

```
npx playwright codegen [PAGE_ADDRESS]
```

More: https://playwright.dev/docs/codegen

### Trace Viewer

Playwright Trace Viewer is a GUI tool that helps exploring recorded Playwright traces after the script ran.

To use it:

1. run test with trace set to ON - in config : `trace: 'on'`
1. after test run check where it was created (check `outputDir` in your config file),
1. run command with proper path to zip file:

    ```
    npx playwright show-trace trace.zip
    ```

More: https://playwright.dev/docs/trace-viewer

### Using custom config

To use custom config file:

```
npx playwright test --config=config/playwright.config.ts
```
