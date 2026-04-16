import type { BrowserContext, Locator, Page} from '@playwright/test';
import { expect } from '@playwright/test';
import { ROUTES } from '../constants/routes.const.js';

export class AutomationPracticeFormPage {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly userForm: Locator;
  readonly firstNameTextBox: Locator;
  readonly lastNameTextBox: Locator;
  readonly emailTextBox: Locator;
  readonly genderRadioButton: Locator;
  readonly mobileNumberTextBox: Locator;
  readonly birthDateTextBox: Locator;
  readonly subjectTextBox: Locator;
  readonly hobbyCheckBox: Locator;
  readonly uploadPictureFileBrowser: Locator;
  readonly currentAddressTextArea: Locator;
  readonly regionDropdown: Locator;
  readonly cityDropdown: Locator;
  readonly submitButton: Locator;
  readonly successModalTitle: Locator;
  readonly closeModalButton: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    this.userForm = page.getByTestId('userForm');
    this.firstNameTextBox = page.getByTestId('firstName');
    this.lastNameTextBox = page.getByTestId('lastName');
    this.emailTextBox = page.getByTestId('userEmail');
    this.genderRadioButton = page.getByTestId('gender-radio-2');
    this.mobileNumberTextBox = page.getByTestId('userNumber');
    this.birthDateTextBox = page.getByTestId('dateOfBirthInput');
    this.subjectTextBox = page.getByTestId('subjectsInput');
    this.hobbyCheckBox = page.getByTestId('hobbies-checkbox-3');
    this.uploadPictureFileBrowser = page.getByTestId('uploadPicture');
    this.currentAddressTextArea = page.getByTestId('currentAddress');
    this.regionDropdown = page.getByTestId('react-select-3-input');
    this.cityDropdown = page.getByTestId('react-select-4-input');
    this.submitButton = page.getByTestId('submit');
    this.successModalTitle = page.getByTestId('example-modal-sizes-title-lg');
    this.closeModalButton = page.getByTestId('closeLargeModal');
  }

  async navigateToPendingRefundPage() {
    await this.page.goto(`${ROUTES.practiceForm}`);
    await expect(this.userForm).toBeVisible();
  }

  async selectRegion(region: string){
    await this.regionDropdown.click();
    await this.page.getByRole('option', { name: region }).click();
  }

  async selectCity(city: string){
    await this.cityDropdown.click();
    await this.page.getByRole('option', { name: city }).click();
  }

  async validateSuccessModal() {
    await expect(this.successModalTitle).toBeVisible();
    await expect(this.successModalTitle).toHaveText('Thanks for submitting the form');
    await this.closeModalButton.click();
  }
}
