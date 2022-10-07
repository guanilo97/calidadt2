describe('login upn test', () =>{
    it('visit login', () => {
        cy.visit('https://localhost:44320/auth/login')
        cy.get('#userNameInput').type('admin')
        cy.get('#PasswordInput').type('admin')
//focus seleccionar campor, ejemplo click al emlemento
        cy.get('#boton').click()
        cy.get('#libro').click()
        cy.get('#textarea').type('admin')
        cy.get('#puntaje').type('4')
        cy.get('#enviar').click()
        cy.visit('https://localhost:44320/Libro/Details?id=2')
       
     })
   });
   describe('agrgar', () =>{
    it('agregar libro', () => {
        cy.visit('https://localhost:44320/auth/login')
        cy.get('#userNameInput').type('admin')
        cy.get('#PasswordInput').type('admin')
        cy.get('#boton').click()
        cy.get('#agregar').click()
        cy.get('#biblioteca').click()
        cy.get('#lee').click()
        cy.get('#termina').click()
        cy.visit(' https://localhost:44320/Biblioteca')
        cy.visit('https://localhost:44320')
        
       
     })
   });