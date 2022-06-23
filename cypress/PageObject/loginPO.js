export class Login {
  
    navigate() {
         cy.visit('https://www.parashop.tn/index.php?route=account/login')
         cy.wait(1000)
    }
    
    enterEmail() {
         cy.get('#input-email').type('ghada.tayeg@talan.com')
         cy.wait(500)
    }
    
    enterPassword() {
         cy.get('#input-password').type('azertyuiop') 
         cy.wait(500) 
    }
     
    clickLogin() {
        cy.get('.form-horizontal > .buttons > .pull-right > .btn').click()
        cy.wait(2000)
    } 

    clickCart() {
        cy.get('.dropdown-toggle > .fa').click()
    }

    showCart() {
        cy.get('.cart-buttons > .btn-cart').click()
    }
    
    addQuantity() {
        cy.get('span > .fa-angle-up').click()
    }


    editQuantity() {
        cy.get('.btn-update').click()
    }
    }