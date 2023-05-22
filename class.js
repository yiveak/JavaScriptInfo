// * JavaScript Classes
class Pizza {
  constructor(pizzaType, pizzaSize, pizzaCrust) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = pizzaCrust;
  }
  bake() {
    console.log(
      `Baking a ${this.size} ${this.crust} ${this.type} crust pizza...`
    );
  }
}

/* const myPizza = new Pizza();
myPizza.bake(); */
const myPizzaPepperOni = new Pizza("pepperoni", "large", "original");
myPizzaPepperOni.bake();
