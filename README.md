# General info

This is sample project presenting Playwright Visual Testing.
Design patters, such as POM or builders etc, were not implemented, to focus on simple visual testing.

More info: https://playwright.dev/docs/test-snapshots

> Want to learn Playwright? 
>
> Check our [advanced courses](https://jaktestowac.pl/playwright/) and [free resources](https://jaktestowac.pl/darmowy-playwright/)!
>
> At the end of this README you will find  [more resources to learn Playwright](#-learning-resources), both in Polish and English.

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

---

# 📞 Contact

Feel free to reach out to us:

- 🌐 **Website**: [jaktestowac.pl](https://jaktestowac.pl)
- 💼 **LinkedIn**: [jaktestowac.pl](https://www.linkedin.com/company/jaktestowac/)
- 💬 **Discord**: [Polish Playwright Community](https://discord.gg/mUAqQ7FUaZ)
- 📧 **Support**: Check our website for contact details

---

# 📚 Learning Resources

We have gathered a collection of resources to help you learn and master Playwright, both in Polish and English. Whether you're a beginner or an advanced user, these resources will help you enhance your skills and knowledge.

## 🇵🇱 Polish Resources

- [JavaScript and TypeScript for Testers](https://jaktestowac.pl/js-ts/) - Comprehensive (13h+) course on JavaScript and TypeScript for testers, with practical examples and exercises
- [Professional Test Automation with Playwright](https://jaktestowac.pl/playwright/) - Comprehensive (100h+) course on Playwright, test automation, CI/CD and test architecture
- [Back-end Test Automation](https://jaktestowac.pl/api/) - Comprehensive (45h+) course on Back-end Test Automation with Postman, Mocha, Chai, and Supertest
- [Free Playwright Resources](https://jaktestowac.pl/darmowy-playwright/) - Comprehensive and Free Polish learning materials
- [Playwright Basics](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cD2TCB__K7NP5XARaCzZYn7) - YouTube series (Polish)
- [Playwright Elements](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cAcpd-XN4pKeo-l4YK35FDA) - Advanced concepts (Polish)
- [Playwright MCP](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cCqD34AG5YRejujaBqCBgl4) - MCP course (Polish)
- [Discord Community](https://discord.gg/mUAqQ7FUaZ) - First Polish Playwright community!
- [Playwright Info](https://playwright.info/) - first and only Polish Playwright blog

## 🇬🇧 English Resources

- [VS Code Extensions](https://marketplace.visualstudio.com/publishers/jaktestowac-pl) - Our free Playwright plugins
- [Playwright Documentation](https://playwright.dev/docs/intro) - Official documentation
- [Playwright GitHub](https://github.com/microsoft/playwright) - Source code and issues

_PS. For more resources and updates, follow us on our [website](https://jaktestowac.pl) and [GitHub](https://github.com/jaktestowac)._

---

**Happy testing and automation!** 🚀

**jaktestowac.pl Team** ❤️💚

_PS. For more resources and updates, follow us on our [website](https://jaktestowac.pl) and [GitHub](https://github.com/jaktestowac)._

---

_Built with ❤️💚 for the Playwright and test automation community_
