describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/")
  })
  it("front page can be opened", () => {
    cy.get("h1").contains("الحلول المتكاملة لتجهيزات الفنادق والمطاعم")
  })
  it("products page can be opened", () => {
    cy.get('[data-sy="products"]').click()
    cy.url().should("include", "/products")
    cy.get("h1").contains("منتجاتنا")
  })
})
