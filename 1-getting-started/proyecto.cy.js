describe('login proyecto', () =>{
    it('visit login', () => {
        cy.visit('https://localhost:44319/Auth/Login/')
        cy.get('#userNameInput').type('N00024074')
        cy.get('#input_type').type('N00024074')
        
     })
   });