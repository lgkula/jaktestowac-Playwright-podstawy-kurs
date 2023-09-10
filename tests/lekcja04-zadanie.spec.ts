import { test, expect } from '@playwright/test';

test.describe('Test funkcjonalności doładowania w banku', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demo-bank.vercel.app/');
        await expect(page).toHaveTitle(/Logowanie/);
        await page.getByTestId('login-input').fill('12345678');
        await page.getByTestId('password-input').fill('haslo123')
        await expect(page.getByTestId('login-button')).toBeEnabled;
        await page.getByTestId('login-button').click();
        await expect(page).toHaveURL('https://demo-bank.vercel.app/pulpit.html');
        await expect(page).toHaveTitle('Demobank - Bankowość Internetowa - Pulpit')
    })

test.only('Doładuje telefon o 100zł test', async ({ page }) => {
    await expect(page).toHaveTitle('Demobank - Bankowość Internetowa - Pulpit')
    await page.locator('#widget_1_topup_receiver').selectOption('502 xxx xxx');
    await expect(page.locator('#uniform-widget_1_topup_receiver > span')).toHaveText('502 xxx xxx');
    await page.locator('#widget_1_topup_amount').fill('100');
    await page.locator('#widget_1_topup_agreement').check();
    await page.locator('#execute_phone_btn').click();
    await expect(page.locator('#ui-id-1')).toHaveText('Doładowanie wykonane');
    // await expect(page.locator('#i-info')).toContainText(' Doładowanie wykonane!');
    // await expect(page.locator('#i-info')).toContainText('100,00PLN');
    // await expect(page.locator('#i-info')).toContainText('502 xxx xxx');
    await page.getByTestId('close-button').click();
    await expect(page.getByTestId('message-text')).toHaveText('Doładowanie wykonane! 100,00PLN na numer 502 xxx xxx');
})

test.only('Doładuje telefon o 222zł test', async ({ page }) => {
    await expect(page).toHaveTitle('Demobank - Bankowość Internetowa - Pulpit')
    await page.locator('#widget_1_topup_receiver').selectOption('502 xxx xxx');
    await expect(page.locator('#uniform-widget_1_topup_receiver > span')).toHaveText('502 xxx xxx');
    await page.locator('#widget_1_topup_amount').fill('222');
    await page.locator('#widget_1_topup_agreement').check();
    await page.locator('#execute_phone_btn').click();
    await expect(page.locator('#ui-id-1')).toHaveText('Doładowanie wykonane');
    // await expect(page.locator('#i-info')).toContainText(' Doładowanie wykonane!');
    // await expect(page.locator('#i-info')).toContainText('100,00PLN');
    // await expect(page.locator('#i-info')).toContainText('502 xxx xxx');
    await page.getByTestId('close-button').click();
    await expect(page.getByTestId('message-text')).toHaveText('Doładowanie wykonane! 222,00PLN na numer 502 xxx xxx');
    })
    
test.only('Doładuje telefon o 333zł test', async ({ page }) => {
    await expect(page).toHaveTitle('Demobank - Bankowość Internetowa - Pulpit')
    await page.locator('#widget_1_topup_receiver').selectOption('502 xxx xxx');
    await expect(page.locator('#uniform-widget_1_topup_receiver > span')).toHaveText('502 xxx xxx');
    await page.locator('#widget_1_topup_amount').fill('333');
    await page.locator('#widget_1_topup_agreement').check();
    await page.locator('#execute_phone_btn').click();
    await expect(page.locator('#ui-id-1')).toHaveText('Doładowanie wykonane');
    // await expect(page.locator('#i-info')).toContainText(' Doładowanie wykonane!');
    // await expect(page.locator('#i-info')).toContainText('100,00PLN');
    // await expect(page.locator('#i-info')).toContainText('502 xxx xxx');
    await page.getByTestId('close-button').click();
    await expect(page.getByTestId('message-text')).toHaveText('Doładowanie wykonane! 333,00PLN na numer 502 xxx xxx');
})


})
