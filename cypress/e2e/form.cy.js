describe("Ödev TEST", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("Girilen Veriler Görülüyor mu state ve view baglı mı", () => {
        // cy.get('.btn').should('be.disabled')
        cy.get("[data-cy=isimformu]").type("Burak").should("have.value", "Burak")
        cy.get('#email').type("burakcevizli@gmail.com").should("have.value", "burakcevizli@gmail.com")
        cy.get('#password').type("2511606").should("have.value", "2511606")
        cy.get('#tcKimlik').type("20267367104").should("have.value", "20267367104")
        cy.get('select').select('Mechanic').should('have.value', 'role 3')
        cy.get('#terms').check().should('be.checked')
        // cy.get('.btn').should('be.enabled')
    })

    it("Hatalı giriş yaptıgımda hata gözüküyor mu", () => {
        // cy.get('.btn').should('be.disabled')
        cy.get("[data-cy=isimformu]").type("Burak").should("have.value", "Burak")
        cy.get('#email').type("burakcevizli@gmail.com").should("have.value", "burakcevizli@gmail.com")
        cy.get('#password').type("2511606").should("have.value", "2511606")
        cy.get('#tcKimlik').type("20267367104").should("have.value", "20267367104")
        cy.get('select').select('Mechanic').should('have.value', 'role 3')
        cy.get('#terms').check().should('be.checked')
        // cy.get('.btn').should('be.enabled')
    })
})