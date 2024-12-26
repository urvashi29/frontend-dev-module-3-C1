describe("example", () => {
  it("visits the homepage", () => {
    cy.visit("/");
    cy.contains("Deploy now");
  });
});
