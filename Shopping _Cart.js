var cart=[];

//items in a cart
var Item = function(name,price,category,quantity){
    this.name=name;
    this.price=price;
    this.category=category;
    this.quantity=quantity;
    
};

//add item to the cart
function addItemToCart(name,price,category,quantity){
    for(var i in cart){
        if(cart[i].name===name){
            cart[i].quantity++;
            return;
        } 
    }
    if(price>=1 && quantity>=1){
        //logic for discount to 2nd item of same category
        var sameCategory=cart.filter(element=>(element.category==category));
        if(sameCategory.length>0){
            price=(price/2);
        }
    var item = new Item(name,price,category,quantity);
    cart.push(item);
}
else{
    console.log("please enter correct price "+name + " can not be added.\n")
    }
}

//remove item from the cart
function removeItem(name){
    for(var i in cart){
        if(cart[i].name===name){
            cart[i].quantity--;
            if(cart[i].quantity==0){
                var category=cart[i].category;
                cart.splice(i,1);
                discountItem(category);
                return false;
            }
        }else{
            console.log(name+" does not exist in the cart.\n")
        }
    }
}

function discountItem(category){
    var count=0;
    cart=cart.map((element,index)=>{
        if((category==element.category) && count==0){
            element.price=(element.price*2)
            count=1;
        }
        return element;
    })
    
}

//calculate total price of items

function totalPRice(){
    var totalPrice=0;
    for(var i in cart){
        totalPrice=totalPrice+cart[i].quantity*cart[i].price;
    }
    return totalPrice;
}

//count total number of products in a cart
function countCart(){
    var totalCount=0;
    for(var i in cart ){
  totalCount +=cart[i].quantity;
    }
    return totalCount;
}


function listCart(){
    var cartCopy=[];
    for(var i in cart){
        var item=cart[i];
        var itemCopy={};
        for(var j in item){
            itemCopy[j]=item[j];
        }
        cartCopy.push(itemCopy);
    }
    return cartCopy;
}

//display cart
function displayCart(){
    console.log("\n+++++++++++++ your selected items in shopping cart ++++++++++++++");
    var cartArray=listCart();
    var output="";
    for(var i in cartArray){
        output+="\n"+cartArray[i].name + " : "+ cartArray[i].quantity;
    }
    console.log(output);
}
// delete all items from the cart
    function emptyCart() {
    cart = [];
    console.log("cart is empty.")
}


console.log("\n***********************WELCOME TO SHOP***************************\n");

//  addItemToCart("Notebook", 110.00,"Stationary",3);
//  addItemToCart("samsung TV",20000.50,"Electronics",1);
//  addItemToCart("Mi Mobile",9999.99,"Electronics",1);
//  addItemToCart("sparkey_Shirt",1000.00,"Clothes",2);
//  addItemToCart("LeeCoper_Jeans",1200,"Clothes",1);
//  addItemToCart("levis jeans",2000,"Clothes",1);

//  removeItem("sparkey_Shirt"); 

 //for full information of the product in cart
//  console.log(cart);

//  displayCart("\n");

emptyCart();

 console.log("\n Total items in cart : "+ countCart());

 console.log("\n you have to pay Rupees  : "+ totalPRice());

 console.log("\n************************** THANK YOU ****************************");

