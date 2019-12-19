# Cart-Blanch 

[Deployed App] (https://cart-blanch.herokuapp.com/)

* This app is meant to showcase a mock online store with both admin, customer and guest user flows featuring: 
   * Full CRUD functionality for adding/editing products (admin privelege)
   * cart functionality, where a users e-cart is dynamically persisted to the database
   * User Authentication (not quite here yet but soon to come)
   * query the database for products by name / category from the UI
   * payment processing via stripe and tested using stripe test card #'s
   * form validation during checkout (also soon to come)


## The Problem / Solution

* most small business e-commerce is handled by "software-solutions" or content management systems such as Wordpress, Shopify, Bigcommerce etc... sites that  charge monthly memberships that vary depending on how much you sell or business support level. On the other ends of the spectrum we have craigslist for second hand goods, Facebook marketplace (sligtly more trustworthy second hand goods), ebay (my personal favorite because of its flexibility), and etsy for the homeade feel. These sites are cool because theyre accessable and free to the masses. My goal was to borrow the easy search/browsing functionality of a site like Amazon, make it look professional enough to seem like it may be hosted by a solution platform, and make it accessable to the home business masses. In one line: type in your business name, add products and you're good to go. 


## Technologies

1. MERN stack
2. Stripe,
3. User Authentication (passport, bcrypt)
4. ***Shipping API 

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
