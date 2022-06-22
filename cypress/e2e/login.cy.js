
import { Login } from "../PageObject/loginPO"
import {Cart} from "../PageObject/cartPO"

describe('login and cart validation action suite', () => {
  

it('login test', function() {

  const login = new Login();

   login.navigate();
   login.enterEmail();
   login.enterPassword();
   login.clickLogin();
   
  })

it('validate the order', function(){
  
  const cart = new Cart();
  cart.clickCart();
  cart.showCart();




})

})