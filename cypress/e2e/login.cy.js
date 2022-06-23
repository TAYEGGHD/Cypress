
import { Login } from "../PageObject/loginPO"


describe('login and cart validation action suite', () => {
  

it('login test', function() {

  const login = new Login();

   login.navigate();
   login.enterEmail();
   login.enterPassword();
   login.clickLogin();
   login.clickCart();
   login.showCart();
   login.addQuantity();
   login.editQuantity();
  })



})