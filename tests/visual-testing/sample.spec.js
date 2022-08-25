const { test, expect } = require('@playwright/test')
// Playwright visual testing: https://playwright.dev/docs/test-snapshots

test.describe('Sample Visual comparisons tests', () => {
    test.beforeEach(async ({ page, baseURL }) => {
        await page.goto(baseURL)
    })

    test('whole product page', async ({ page }) => {
        // act:
        await Promise.all([page.locator('text=Little Black Top').click(), page.waitForNavigation()])

        // assert:
        await expect(page).toHaveScreenshot()
    })
    test('whole Most Wanted page', async ({ page }) => {
        // act:
        await Promise.all([page.locator('[title="Most Wanted"]').click(), page.waitForNavigation()])

        // assert:
        await expect(page).toHaveScreenshot()
    })
    test('element main slider info', async ({ page }) => {
        // act:
        const element = await page.locator('.main-slider-bar')

        // assert:
        await expect(element).toHaveScreenshot()
    })
    test('element main slider', async ({ page }) => {
        // act:
        const element = await page.locator('#main-slider')

        // assert:
        await expect(element).toHaveScreenshot()
    })
    test('add one product to cart - only My Cart with products [presentation of failures]', async ({ page }) => {
        // act:
        await Promise.all([
            page.waitForResponse((resp) => resp.url().includes('?wc-ajax=add_to_cart') && resp.status() === 200),
            page.locator('[data-product_id="17"]').click(),
        ])

        // // TODO: failure presentation by adding new product:
        // await Promise.all([
        //     page.waitForResponse(
        //         (resp) =>
        //             resp.url().includes("?wc-ajax=add_to_cart") &&
        //             resp.status() === 200
        //     ),
        //     page.locator('[data-product_id="17"]').click(),
        // ])
        // //

        await Promise.all([page.locator('.top-cart').click(), page.waitForNavigation()])
        const element = await page.locator('.woocommerce-cart-form')

        // assert:
        await expect.soft(element).toHaveScreenshot() // TODO: demonstrate soft assertions with expect.soft

        // // TODO: demonstrate soft assertions with expect.soft
        const subPrice = await page.locator('[data-title="Subtotal"]')
        const actualSubPrice = (await subPrice.textContent()).trim().replace(/\s/g, ' ')
        await expect.soft(actualSubPrice, `Subprice of added product was incorrect`).toEqual('20 zł')

        const totalPrice = await page.locator('.cart_totals [data-title="Total"]')
        const actualTotalPrice = (await totalPrice.textContent()).trim().replace(/\s/g, ' ')
        await expect
            .soft(actualTotalPrice, `Total price (with shipping) of added product was incorrect`)
            .toEqual('32.00 zł')
    })
    test('add two products to cart - only My Cart with products', async ({ page }) => {
        // act:
        await Promise.all([
            page.waitForResponse((resp) => resp.url().includes('?wc-ajax=add_to_cart') && resp.status() === 200),
            page.locator('[data-product_id="17"]').click(),
        ])
        await Promise.all([
            page.waitForResponse((resp) => resp.url().includes('?wc-ajax=add_to_cart') && resp.status() === 200),
            page.locator('[data-product_id="15"]').click(),
        ])
        await Promise.all([page.locator('.top-cart').click(), page.waitForNavigation()])
        const element = await page.locator('.woocommerce-cart-form')

        // assert:
        await expect(element).toHaveScreenshot()
    })
})
