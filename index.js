const app = "I don't do much."

function runs(){
  return true
}

function Sandwich(bread, ingredients, name) {
  this.bread = bread
  this.ingredients = ingredients
  this.name = name
  this.describe = function(){
    console.log(`Your ${this.name} includes ${this.ingredients.join(", ")}. Yum!`)
  }
}

function serve() {
    if(arguments.length > 0) {
        var customers = Array.prototype.slice.call(arguments)
        last = customers.pop()
        console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!")
    }else {
        console.log(this.name + ". Order up!")
    }
}

function deliverFood(customer, table) {
  console.log("Delivering " + this.name + " to " + customer + " at table " + table)
}

function visitTable() {
  console.log("The server is visiting " + this.name + " at table number " + this.tableNumber)
}

function Customer(name, tableNumber) {
  this.name = name
  this.tableNumber = tableNumber
}

var gc = new Sandwich("white", ["cheese"], "Grilled Cheese")
var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"], "Peanut Butter & Jelly")

var pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PB&Jam");

var salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
  name: "Steak Caesar"
}

salad.describe = pbj.describe.bind(salad)
