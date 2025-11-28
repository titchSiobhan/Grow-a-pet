

class foods {
    constructor(food, giveHunger, giveExp, healthPoints, giveHealth) {
        this.food = food;
        this.giveHunger = giveHunger;
        this.giveExp = giveExp;
        this.giveHealth = giveHealth;
        this.healthPoints = healthPoints;
    }
     
}
class drinks {
    constructor(drink, giveHunger, giveExp, healthPoints, giveHealth) {
        this.drink = drink;
        this.giveHunger = giveHunger;
        this.giveExp = giveExp;
        this.giveHealth = giveHealth;
        this.healthPoints = healthPoints;
    }
     
}

const foodItems = [
    
    new foods('Cake', 20, 20, 2, false ),
    new foods('Carrot', 7, 9, 6, true),
    new foods('Banana', 7, 9, 4, true),
    new foods('Cheese', 10, 12, 9, true),
    new foods('Steak', 12, 6, 3, false),
];

const drinkItems = [
    new drinks('Milk', 5, 5, 5, true),
    new drinks('Water', 2, 2, 8, true),
    new drinks('Coffee', 1, 2, 3, true)
]





export {foods, foodItems, drinks, drinkItems};

