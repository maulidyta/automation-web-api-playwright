import type { Page } from '@playwright/test';

export class Helper {
	async scrollTo(page: Page, x: number = 0, y: number = 0): Promise<void> {
    await page.evaluate(({ scrollX, scrollY }) => {
        window.scrollBy(scrollX, scrollY);
    }, { scrollX: x, scrollY: y }); // Pass x and y as a single object
	}
}