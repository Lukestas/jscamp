// @ts-check
import { test, expect } from '@playwright/test';

test("Buscar empleos y aplicar a una oferta", async ({page})=>{
  await page.goto("http://localhost:5173")

  const searchInput=page.getByRole("searchbox")
  await searchInput.fill("React")

  await page.getByRole("button",{name:"Buscar"}).click()

  const jobCard= page.getByRole("article")
  await expect(jobCard.first()).toBeVisible()

  const firstJobTitle= jobCard.filter().getByRole("link")
  await expect(firstJobTitle).toHaveText("Desarrollador de Software Senior")
})
