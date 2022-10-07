describe('login upn test', () =>{
    it('visit login', () => {
        cy.visit('https://mimundo.upn.edu.pe/')
        cy.get('#userNameInput').type('N00024074')
        cy.get('#passwordInput').type('N00')

        cy.get('#submitButton').click()
     })
   });