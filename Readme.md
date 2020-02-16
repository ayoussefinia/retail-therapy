# Cart-Blanch 

[Deployed App] (https://cart-blanch.herokuapp.com/)

* This app is meant to showcase a mock online store with both admin, customer and guest user flows featuring: 
   * Full CRUD functionality for adding/editing products (admin privelege)
   * cart functionality, where a users e-cart is dynamically persisted to the database
   * User Authentication 
   * query the database for products by name / category from the UI
   * product details page for each product
   * order summary page for orders 



## The Problem / Solution



## Technologies

1. MERN stack
2. User Authentication (passport, bcrypt)

## User Flow 

  ### Guest User Flow:

  1. the landing page is a list of all the business products:
  ![homepage](/images/homepage.png)
   * from here guest can query products from the search bar or view images without visiting the actual product

  2. if user decides they want to visit a product and click "see more":
  ![product page](/images/product_page.png)
  * this page shows more about the product amd quantity info. from here guest can decide weather or not to add product to cart or go back to the "shop".

  3. If guest adds product to cart:
  ![cart](/images/cart.png)
   * this page displays cart products, making it easy to change quantity and displays the cart total. 

  4. when user is satisfied with their cart and decides to checkout: 
  ![checkout](/images/checkout.png)
  * from here the user sees order summary and provides payment information

  ### Admin Flow:

  * if logged in as an admin, user will see additional tabs for "add prodcut" and 

  * If logged in as an admin you will see  an extra tab for adding products. as well 

  * If you visit the page as a guest you can add products to your  guest cart which is persisted to local storage

* Goals by the end of my development (not quite here yet).
  1. create user log in that is not for admins, this will allow to keep track of orders.
  2. 
