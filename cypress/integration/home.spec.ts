context("Homepage", () => {
  describe("Testing home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("Should click the links in the Navigation bar and redirect to home page", () => {
      const nav = cy.get(".navbar");

      // home button
      nav.contains("Home").click();
      cy.url().should("include", "/");

      // collapse navbar
      // home item
      const navLink1 = cy.get(".nav-link");
      navLink1.contains("Home").click();
      cy.url().should("include", "/");

      // item 1
      const navLink2 = cy.get(".nav-link");
      navLink2.contains("Item 1").click();
      cy.url().should("include", "/");
    });

    it("should click and reveal modal placeholders", () => {
      // modal1
      const btn1 = cy.get(".btn.btn-primary[data-target='#modal1']");
      btn1.contains("+").click();

      const modal1 = cy.get(".modal#modal1");
      modal1.should("have.class", "show");
      modal1.contains("Close").click();
      modal1.should("not.have.class", "show");

      // modal2
      const btn2 = cy.get(".btn.btn-primary[data-target='#modal2']");
      btn2.contains("+").click();

      const modal2 = cy.get(".modal#modal2");
      modal2.should("have.class", "show");
      modal2.contains("Close").click();
      modal2.should("not.have.class", "show");

      // modal3
      const btn3 = cy.get(".btn.btn-primary[data-target='#modal3']");
      btn3.contains("+").click();

      const modal3 = cy.get(".modal#modal3");
      modal3.should("have.class", "show");
      modal3.contains("Close").click();
      modal3.should("not.have.class", "show");
    });
  });
});
