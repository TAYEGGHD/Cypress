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
        cy.wait(2000)
    }

    showCart() {
        cy.get('.cart-buttons > .btn-cart').click()
        cy.wait(3000)
    }
    
    addQuantity() {
        cy.get('span > .fa-angle-up').click()
        cy.wait(3000)
    }


    editQuantity() {
        cy.get('.btn-update').click()
        cy.wait(3000)
    }
    removeQuantity() {
        cy.get('.fa-angle-down').click()
        cy.wait(3000)
    }

    editQuantity() {
        cy.get('.btn-update').click()
        cy.wait(3000)
    }

    validateTheOrder() {
        cy.get('.pull-right > .btn > span').click()
        cy.wait(3000)
    }
    paymentAddress() {
        cy.get('#button-payment-address > span').click()
        cy.wait(2000)
    }
    shippingAddress() {
        cy.get('#button-shipping-address > span').click()
        cy.wait(2000)
    }
    deliveryMethod() {
        cy.get('.panel-body > :nth-child(5) > label').click()
        cy.wait(2000)
        cy.get('#button-shipping-method > span').click()
        cy.wait(2000)
    }
    payementMethod() {
        cy.get('#button-payment-method > span').click()
        cy.wait(2000)
    }

    acceptConditions() {
        cy.get('.pull-right > input').click()
        cy.wait(2000)
        cy.get('#button-payment-method > span').click()
        cy.wait(2000)
    }

    confirmOrder() {
        cy.get('#button-confirm').click()
        cy.wait(2000)
    }
    }