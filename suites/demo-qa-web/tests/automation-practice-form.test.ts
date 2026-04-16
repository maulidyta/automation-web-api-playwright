import { test } from '../page-elements/demo-qa.page.js';
import path from 'path';
import { fileURLToPath } from 'url';

test.describe('Automation Practice Form', {tag: '@web-automation'}, () => {
  test.beforeEach(async ({ automationPracticeFormPage }) => {
    await automationPracticeFormPage.navigateToPendingRefundPage();
  });

  test('Successfully register new student', async ({ automationPracticeFormPage }) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.resolve(__dirname, '../images/portrait.jpg');

    await automationPracticeFormPage.firstNameTextBox.fill('Nisfah');
    await automationPracticeFormPage.lastNameTextBox.fill('Maulid');
    await automationPracticeFormPage.emailTextBox.fill('maulidyta@gmail.com');
    await automationPracticeFormPage.genderRadioButton.click();
    await automationPracticeFormPage.mobileNumberTextBox.fill('082310169611');
    await automationPracticeFormPage.birthDateTextBox.fill('13 Apr 1996');
    await automationPracticeFormPage.subjectTextBox.fill('Math');
    await automationPracticeFormPage.subjectTextBox.press('Enter');
    await automationPracticeFormPage.hobbyCheckBox.check();
    await automationPracticeFormPage.uploadPictureFileBrowser.setInputFiles(filePath);
    await automationPracticeFormPage.currentAddressTextArea.fill('Malang, Indonesia');
    await automationPracticeFormPage.selectRegion('NCR');
    await automationPracticeFormPage.selectCity('Delhi');
    await automationPracticeFormPage.submitButton.click();
    await automationPracticeFormPage.validateSuccessModal();
  });
});