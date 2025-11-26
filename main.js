let currentPet = null;

// const petNameButton =document.querySelector('#petname');
const egg = document.querySelector('.egg');
const penguin = document.querySelector('.penguin')
const startEgg = document.querySelector('#start')
const dead = document.querySelector('.dead')
const reset = document.querySelector('#dead')
const nameInput = document.querySelector('#name')
const nameForm = document.querySelector('#name-input')
const popup = document.querySelector('#popup');

nameForm.style.display = 'block';


egg.addEventListener('click', () => {
    
    popup.style.display = 'block';
    nameForm.style.display ='block'
});
    
    nameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let chosenName = nameInput.value.trim();
   
    
    if (chosenName) {
        currentPet = pet(chosenName);
        displayLevel.textContent = currentPet.level;
        displayName.textContent = currentPet.name;
        penguin.style.display = 'block';
        egg.style.display = 'none';
        startEgg.style.display = 'none'
        updateBars(currentPet);
        currentPet.startHungerDecay()
        popup.style.display = 'none'
        
        }
    });

reset.addEventListener('click', () => {
   this.health = 10;
   this.hunger = 10;
   this.maxHealth = 10;
   this.maxHunger = 10;
   this.name = null;
   this.exp = 0;
   this.level = 0;
    location.reload()
})


const closeBtn = document.createElement('div');
closeBtn.setAttribute('class', 'closebtn');
const deathPop = document.createElement('div')
        popup.appendChild(closeBtn);
        popup.appendChild(deathPop)


popup.style.display = 'none';


closeBtn.addEventListener('click', () => {
    popup.style.display =  'none';
})
function pet(name) {
return{
        name,
        level: 0,
        health: 10,
        exp: 0,
        hunger: 10,
        maxHealth: 10,
        maxHunger: 10,
        hungerTimer: null,

       
       
        increaseLevel() {
            this.expNeeded = this.level**2 * 20;
            if (this.exp >= this.expNeeded)
            {
                this.level++;
                this.maxHealth += 5;
                this.maxHunger += 5;
                this.exp = 0;
                this.health += 5;
            }
            updateLevel(this)
        },
        increaseHealth(healthPoints) { if (this.health < this.maxHealth) this.health += healthPoints; 
            updateBars(this)
        },
        decreaseHealth(healthPoints) { if (this.health > 0) this.health -= healthPoints; 
            if (this.health <= 0) {
                      dead.style.display = 'block';
        penguin.style.display = 'none';
        nameForm.style.display = 'none'
       const deathHealth = `${this.name} has died from poor health`
        popup.style.display = 'block';
        deathPop.textContent = deathHealth
        closeBtn.textContent = 'X'
        this.stopHungerDecay();
            }
        },
        increaseHunger() { if (this.hunger < this.maxHunger) this.hunger++; },
        decreaseHunger() {  if (this.hunger > 0) {
        this.hunger--;
        //console.log(`${this.name}'s hunger is now ${this.hunger}`)
    } else if (this.hunger === 0 ) {
        nameForm.style.display = 'none'
        dead.style.display = 'block';
        penguin.style.display = 'none';
       const deathHunger = `${this.name} has died of hunger`
        popup.style.display = 'block';
        closeBtn.textContent = 'X'
        deathPop.textContent = deathHunger
        this.stopHungerDecay();
    }
    
},
gainExp(amount = 1) { 
    this.exp += amount; 
    console.log(`${this.name} now has ${this.exp} EXP`);
    this.increaseLevel();
},

         feed(food) {
            if (this.hunger >= this.maxHunger) {
                console.log(`${this.name} isn't hungry!`);
            } else {
                this.hunger = Math.min(this.hunger + food.giveHunger, this.maxHunger);
                this.gainExp(food.giveExp);

                 if (food.giveHealth) {
    this.increaseHealth(food.healthPoints);
  } else {
    this.decreaseHealth(food.healthPoints);
  }
            }
            updateBars(this)
        },

        
        startHungerDecay() {
    this.hungerTimer = setInterval(() => {
        this.decreaseHunger()
        updateBars(this)
    }, 5000); //5 seconds
},
stopHungerDecay() {
    clearInterval(this.hungerTimer);
    this.hungerTimer = null;
}

   
};


}





function foods(food, giveHunger, giveExp, healthPoints, giveHealth) {
 
    return{food, giveHunger, giveExp, healthPoints, giveHealth }
}



const foodItems = []

const milk = foods('Milk', 5, 5, 5, true)
const cake = foods('Cake', 20, 20, 2, false)

const foodNames = foodItems.map( food => food.food)
console.log(foodNames)



const btnsArea = document.querySelector('.btns-area')
milkButton = document.createElement('button');
milkButton.setAttribute('class', 'btn')
milkButton.textContent = 'Milk'
btnsArea.appendChild(milkButton)

cakeButton = document.createElement('button');
cakeButton.setAttribute('class', 'btn')
cakeButton.textContent = 'Cake'
btnsArea.appendChild(cakeButton)

milkButton.addEventListener('click', () => {
    currentPet.feed(milk);
})
cakeButton.addEventListener('click', () => {
    currentPet.feed(cake);
})
const hungerBar = document.querySelector('#hunger-bar')
const expBar = document.querySelector('#exp-bar')
const healthBar = document.querySelector('#health-bar')

updateBars = (pet) => {
    hungerBar.value = pet.hunger
    hungerBar.max = pet.maxHunger
    expBar.value = pet.exp
    expBar.max = pet.level ** 2 * 20
    healthBar.value = pet.health
    healthBar.max = pet.maxHealth
     console.log(pet)
    return {hungerBar, expBar, healthBar}
    
}



const stats = document.querySelector('.stats')

const displayName = document.createElement('h1');
const displayLevel = document.createElement('h1');

stats.appendChild(displayName);
stats.appendChild(displayLevel);

updateLevel = (pet) => {
    displayLevel.textContent = currentPet.level;
     displayName.textContent = currentPet.name;
}

//health choices

