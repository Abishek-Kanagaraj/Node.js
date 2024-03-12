const PizzaShop = require('./pizzaShop')
const pizzashop = new PizzaShop

pizzashop.on("order", (size, topping) => {
    console.log(`Order received! on ${topping} pizza ${size}`);
})

pizzashop.order("large", "chicken");
pizzashop.displayOrderNumber();
