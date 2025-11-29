

class foods {
    constructor(food, giveHunger, giveExp, healthPoints, giveHealth, levelNeeded) {
        this.food = food;
        this.giveHunger = giveHunger;
        this.giveExp = giveExp;
        this.giveHealth = giveHealth;
        this.healthPoints = healthPoints;
        this.levelNeeded = levelNeeded;
    }
     
}
class drinks {
    constructor(drink, giveHunger, giveExp, healthPoints, giveHealth, levelNeeded) {
        this.drink = drink;
        this.giveHunger = giveHunger;
        this.giveExp = giveExp;
        this.giveHealth = giveHealth;
        this.healthPoints = healthPoints;
        this.levelNeeded = levelNeeded;
    }
     
}

const foodItems = [
    
    new foods('Cake', 20, 9, 2, false, 0),
    new foods('Carrot', 7, 9, 6, true, 0),
    new foods('Banana', 7, 9, 4, true, 0),
    new foods('Cheese', 10, 12, 9, true,2),
    new foods('Steak', 12, 6, 3, false, 2),
    new foods('Chocolate', 2, 10, 7, false, 4),
];

const drinkItems = [
    new drinks('Milk', 5, 5, 5, true, 0),
    new drinks('Water', 2, 2, 8, true, 0),
    new drinks('Coffee', 1, 6, 3, true, 3)
]





export {foods, foodItems, drinks, drinkItems};

