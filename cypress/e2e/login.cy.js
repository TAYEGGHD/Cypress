
import { Login } from "../PageObject/loginPO"

describe('login and cart validation action suite', () => {
 
  const login = new Login();

  it('should navigate to login page', function() {
  
    login.navigate();
 })

 it('should enter email', function() {
 
    login.enterEmail();
 })

 it('should enter password', function() {

    login.enterPassword();
 })

 it('should submit', function() {
 
   login.clickLogin();
   login.clickCart();
   login.showCart();
   login.addQuantity();
   login.editQuantity();
   login.removeQuantity();
   login.editQuantity();
   login.validateTheOrder();
   login.paymentAddress();
   login.shippingAddress();
   login.deliveryMethod();
   login.payementMethod();
   login.acceptConditions();
   login.confirmOrder();
})
   

  })


