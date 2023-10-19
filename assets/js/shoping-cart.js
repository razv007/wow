console.log("wow");
var shoppingCart = (function() {

  cart = [];
  
  // Constructor
  function Item(name, price, count, type, index) {
    this.name = name;
    this.price = price;
    this.count = count;
    this.type= type;
    this.index= index;
  }
  
  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  
    // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }
  var obj = {};
  
  // Add to cart
  obj.addItemToCart = function(name, price, count, type, index) {
    console.log(index);
    for(var item in cart) {
      if(cart[item].index === index) {
        cart[item].count ++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count, type, index);
    cart.push(item);
    saveCart();
  }
  // Set count from item
  obj.setCountForItem = function(index, count) {
    for(var i in cart) {
      if (cart[i].index === index) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function(index) {
      for(var item in cart) {
        if(cart[item].index === index) {
          cart[item].count --;
          if(cart[item].count === 0) {
            cart.splice(item, 1);
          }
          break;
        }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function(index) {
    for(var item in cart) {
      if(cart[item].index === index) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function() {
    cart = [];
    saveCart();
  }

  // Count cart 
  obj.totalCount = function() {
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function() {
    var totalCart = 0;
    for(var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  }

  // List cart
  obj.listCart = function() {
    var cartCopy = [];
    for(i in cart) {
      item = cart[i];
      itemCopy = {};
      for(p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }

  // cart : Array
  // Item : Object/Class
  // addItemToCart : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // saveCart : Function
  // loadCart : Function
  return obj;
})();


// *****************************************
// Triggers / Events
// ***************************************** 
// Add item
$('.add-to-cart').click(function(event) {
  event.preventDefault();
  var name = $(this).data('name');
  var price = Number($(this).data('price'));
  var type = $(this).data('type');
  var index = ($(this).data('index'));
  console.log(index);
  shoppingCart.addItemToCart(name, price, 1, type, index);
  displayCart();
});

// Clear items
$('.clear-cart').click(function() {
  shoppingCart.clearCart();
  displayCart();
});


function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for(var i in cartArray) {
    var photo="assets/img/poza_shop"+ cartArray[i].index+".png";
    output += "<tr class='item'>"
      +"<td><div class='buttons'>"
      +"<span class='delete-btn' data-index=" + cartArray[i].index + ">"
      +"<img class='delete-btn-img'src='assets/img/x.png'>"
      +"</span>"
      +"<span class='like-btn'></span></div></td>"
      +"<td><div class='image'>"
      +"<img class='img_shop_small'src="+photo+"></div></td>"
      +"<td><div class='description'>"
      +"<span>"+cartArray[i].name+"</span>"
      +"<span>'"+cartArray[i].type+"'</span></div></td>"
      +"<td><div class='quantity'>"
      +"<button class='plus-btn' type='button' name='button' data-index=" + cartArray[i].index + ">"
      +"<img src='assets/img/plus.png'/></button>"
      +"<input class='input_box' type='text' name='name' data-index=" + cartArray[i].index + " value=" + cartArray[i].count + ">"
      +"<button class='minus-btn' type='button' name='button' data-index='" + cartArray[i].index + "'>"
      +"<img src='assets/img/minus.png'/></button></div></td>"
      +"<td><div class='total-price'>"+cartArray[i].total+" lei</div></td>"
      +"</div></td></tr>"
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button

$('.show-cart').on("click", ".delete-btn", function(event) {
  var index = $(this).data('index')
  shoppingCart.removeItemFromCartAll(index);
  displayCart();
})


// -1
$('.show-cart').on("click", ".minus-btn", function(event) {
  var index = $(this).data('index');
  shoppingCart.removeItemFromCart(index);
  displayCart();
})
// +1
$('.show-cart').on("click", ".plus-btn", function(event) {
  var name = $(this).data('name');
  var price = Number($(this).data('price'));
  var count = Number($(this).data('count'));
  var type = $(this).data('type');
  var index = ($(this).data('index'));
  shoppingCart.addItemToCart(name,price,count,type,index);
  displayCart();
})

// Item count input
$('.show-cart').on("change", ".input_box", function(event) {
   var index = $(this).data('index');
   var count = Number($(this).val());
   if(count<=0)
   {
    shoppingCart.removeItemFromCartAll(index);
   }
   else
   {
      shoppingCart.setCountForItem(index, count);
   }
  displayCart();
});
$('.show-cart').on('click', ".like-btn", function(event) {
  $(this).toggleClass('is-active');
});
displayCart();