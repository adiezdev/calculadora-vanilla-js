describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
    cy.findByRole("heading", { name: /Calculadora/i }).should("exist");
    cy.findByRole("button", { name: /AC/i }).should("exist");
  });
});
