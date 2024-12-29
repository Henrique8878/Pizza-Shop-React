import {test,expect} from '@playwright/test'

test('testing for verify navigate page signin',async ({page})=>{
    await page.goto('/sign-up',{waitUntil:'networkidle'})
    await page.getByRole('link', { name: 'Fazer login' }).click()
    await expect(page.url()).toContain('sign-in')
})

test('testing insert data in inputs and register for correctly new business', async ({page})=>{
   await page.goto('/sign-up',{waitUntil:'networkidle'})
    await page.locator('input[name="restaurantName"]').fill('Pizza Shop')
    await page.locator('input[name="managedName"]').fill('Henrique')
    await page.locator('input[name="email"]').fill('henriquetomazparticular@gmail.com')
    await page.locator('input[name="phone"]').fill('35999047684')
    await page.getByRole('button', { name: 'Finalizar cadastro' }).click()
    const message_toast = await page.getByText('Cadastro finalizado com sucesso!')
    await expect(message_toast).toBeVisible()
})