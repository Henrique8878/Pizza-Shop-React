import {test,expect} from '@playwright/test'

test('has total revenue month',async ({page})=>{
    await page.goto('/',{waitUntil:'networkidle'})
    await expect(page.getByText('R$ 200,00',{exact:true})).toBeVisible()
})

test('has orders month',async ({page})=>{
    await page.goto('/',{waitUntil:'networkidle'})
    await expect(page.getByText('200',{exact:true})).toBeVisible()
})

test('has orders day',async ({page})=>{
    await page.goto('/',{waitUntil:'networkidle'})
    await expect(page.getByText('12',{exact:true})).toBeVisible()
})

test('has cancel month',async ({page})=>{
    await page.goto('/',{waitUntil:'networkidle'})
    await expect(page.getByText('10',{exact:true})).toBeVisible()
})