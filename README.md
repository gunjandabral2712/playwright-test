# Playwright Test Automation Suite

A modern end-to-end testing framework built using **Playwright**, **TypeScript**, and the **Page Object Model (POM)** pattern. This repository automates UI testing workflows against the demo application [SauceDemo (Swag Labs)](https://www.saucedemo.com/).

---

## 🛠️ Tech Stack & Architecture

* **Test Runner:** Playwright Test
* **Language:** TypeScript (Strictly typed)
* **Design Pattern:** Page Object Model (POM)
* **CI/CD:** GitHub Actions (configured via `.github/workflows/playwright.yml`)

### Project Directory Structure

```text
playwright-test/
├── .github/workflows/   # CI/CD pipelines
│   └── playwright.yml   # GitHub Actions configuration
├── src/
│   ├── pages/           # Page Object classes (PascalCase)
│   │   └── LoginPage.ts
│   └── utils/           # Shared automation helpers
└── tests/
    └── e2e/             # Automated test specs (kebab-case)
        └── login.spec.ts