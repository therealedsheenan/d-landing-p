describe("Testing home page", () => {
  it("should go home page route", () => {
    cy.visit("/");
  });

  it("should click and reveal modal placeholders", () => {
    cy.visit("/");

    cy.contains("+").click();
  });
});
