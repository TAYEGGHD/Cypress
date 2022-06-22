export class Cart {

clickCart() {
    cy.get('i[class="fa fa-shopping-cart"]').click()
}

showCart() {
    cy.get('.cart-buttons > .btn-cart').click()
    
}




}