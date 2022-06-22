export class Login {
  
    navigate() {
         cy.visit('https://www.parashop.tn/index.php?route=account/login')
    }
    
    enterEmail() {
         cy.get('#input-email').type('ghada.tayeg@talan.com')
    }
    
    enterPassword() {
         cy.get('#input-password').type('azertyuiop')  
    
    }
     
    clickLogin() {
        cy.get('.form-horizontal > .buttons > .pull-right > .btn').click()
    } 
    

    }