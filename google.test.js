/* global describe, beforeAll, page, it, expect */

describe('Google', () => {
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage()
    await page.goto('https://google.com')
  })

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google')
  })
})
