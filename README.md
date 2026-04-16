# 🧪 QA Automation Project (Playwright + TypeScript)

## 📌 Overview

This project contains automated testing for both **UI (Web)** and **API** using Playwright and TypeScript with a scalable multi-suite structure.

---

## 🚀 Tech Stack

* Playwright
* TypeScript
* Superstruct (schema validation)

---

## 📂 Project Structure

```
.
├── core/                         # Base classes (BaseApi, utilities)
├── suites/                       # Test suites (modular by domain)
│   ├── {web-suite-name}/         # UI automation suite
│   │   ├── constants/            # Static values (routes, config)
│   │   ├── helpers/              # Utility/helper functions
│   │   ├── images/               # Test assets (upload, etc)
│   │   ├── page-elements/        # Page Object Models (POM)
│   │   └── tests/                # UI test cases
│   │
│   └── {api-suite-name}/         # API automation suite
│       ├── apis/                 # API classes (endpoint abstraction)
│       ├── data/                 # Test data / payloads
│       ├── schemas/              # Response validation schema
│       └── tests/                # API test cases
│
├── test-results/                 # Raw test results
├── playwright-report/            # HTML report
├── .env                          # Environment variables
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

---

## ⚙️ Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Setup environment variables

Create `.env` file in root:

```env
BASE_URL=https://demoqa.com
API_BASE_URL=https://fakerestapi.azurewebsites.net/api/v1
```

---

## ▶️ Run Tests

### Run all tests

```bash
npx playwright test
```

### Run specific suite/project

```bash
npx playwright test suites/{suite-name}
```
or
```bash
npx playwright test project="{project-name}"
```

### Run in UI mode

```bash
npx playwright test --ui
```

### Run by tag

```bash
npx playwright test --grep {tag}
```

### Run headed (debug)

```bash
npx playwright test --headed
```

---

## 📊 Test Reports

```bash
npx playwright show-report
```

---

## 🧱 Framework Design

### Base Layer

* `core/` → shared logic (BaseApi, reusable utilities)

### Suite-Based Architecture

* Each domain has its own:

  * tests
  * data
  * schema
  * API/page objects

👉 makes project scalable & maintainable

---

## 👨‍💻 Author

Nisfah Maulid Dyta