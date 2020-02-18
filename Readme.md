

### Deployed App: 

 (https://cart-blanch.herokuapp.com/)

### Guest Credentials: 

## User Name: asdf@asdf.com
## Pass: asdfasdf

#### App Description: 

This app is a mock online  store where  a user can browse/search products from the home page, add products to their cart and modify their cart (remove or change the quantity of a particular product).  Authenticated users can add their own products or edit/delete products they have added. The checkout page uses simple form input validation. The user can also see a list of orders they've made and the dates/times the order was made. 


#### Typical User Flow

  1. the user visits the ['landging page'](https://cart-blanch.herokuapp.com/) where they can see several product cards displayed in a flexbox grid. Each card has left and right arrows so the user can browse images directly without having to visit the product page ('/produc/productId')

      * the Nav bar has a search bar where you can type in a query string and filter the products on the page. Every time the user types a character an event is fired which makes an AJAX request to the database where if any part of the product name matches the query string it is returned. I.e. typing 'he' will return 'leather jacket' & 'headphones'\

      * a dropdown next to the search input can also be used to filter products.

  2. When the user sees a product they like they can click the 'see more' button on each card. This will bring them  to the '/product/productId' page which will show additional info and larger pictures. From here the user can add products to cart or go back to shop to keep browsing

  3. After the user has added enough products to their cart they can visit the cart page by clicking the cart icon in the navigation. This will bring up the '/cart' page which allows the user to modify the quantity of a particular item in their cart or delete the item all together

  4. When the user is satisfied with their cart they can click the 'checkout' button on the '/cart' page which will lead to the checkout page. Here the user's order is displayed in a table at the very top and a payment information is collected. This page uses rudimentary form input validation. I decided purposefully not to disable the purchase button so that visitors dont have to go through the whole form. 

  5. Authenticated users can see their products by clicking the 'My Products' nav link. From the '/myProducts' page users cand edit or delete any of  their products. 

#### App outlook:

I would like to connect shipping api's to this app so that when the user inputs their mock address data an actual shipping price is calculated. Also, I would like add a reviews section to the '/product/productId' page where authenticated users can post their thoughts.
