import { test, expect } from '@playwright/test';

test('testing page sign-in, test email', async ({ page }) => {
  await page.goto('/sign-in',{waitUntil:'networkidle'});
 await page.getByLabel('Seu e-mail').fill('henriquetomazparticular@gmail.com')
 await page.getByRole('button', { name: 'Acessar painel' }).click()

 const toast = await page.getByText('Enviamos um link de autenticação para seu e-mail')

 await expect(toast).toBeVisible()

});

test('testing navigate for page sign-up', async ({ page }) => {
  await page.goto('/sign-in',{waitUntil:'networkidle'});

  const new_businsess = await page.getByRole('link', { name: 'Novo estabelecimento' })
  await new_businsess.click()
  await expect(page.url()).toContain('/sign-up')
});



