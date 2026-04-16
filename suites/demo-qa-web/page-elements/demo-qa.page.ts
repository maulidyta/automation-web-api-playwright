import { test as baseTest } from '@playwright/test';
import { AutomationPracticeFormPage } from './automation-practice-form.page.js';

type Fixtures = {
  automationPracticeFormPage: AutomationPracticeFormPage;
};

export const test = baseTest.extend<Fixtures>({
//   loginPage: async ({page}, use) => {
//     await use(new LoginPage(page));
//   },
  automationPracticeFormPage: async ({page, context}, use) => {
    await use(new AutomationPracticeFormPage(page, context));
  }
});
