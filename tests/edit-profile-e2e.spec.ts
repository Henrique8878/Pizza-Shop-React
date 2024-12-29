import {test,expect} from '@playwright/test'

test('testing edit profile',async ({page})=>{
    await page.goto('/sign-in',{waitUntil:'networkidle'})
    await page.getByLabel('Seu e-mail').fill('henriquetomazparticular@gmail.com')
    await page.getByRole('button', { name: 'Acessar painel' }).click()
   
    const toast = await page.getByText('Enviamos um link de autenticação para seu e-mail')
    await expect(toast).toBeVisible()
    await page.goto('/',{waitUntil:'networkidle'})
    await page.getByRole('button', { name: 'Pizza Shop' }).click()
    const store_profile = await page.getByRole('button', { name: 'Perfil da loja' })
    await store_profile.click()
    await page.locator('input[name="name"]').fill('Rocket Pizza')
    await page.getByRole('button', { name: 'Salvar' }).click()
    await expect(page.getByText('Perfil atualizado com sucesso!')).toBeVisible()
})
    
   
    