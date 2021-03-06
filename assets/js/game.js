


//Game States
//"WIN" - Player robot has defeated all enemy-robots
    //*fight all enemy-robots
    //*defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less




//This creates a function named "fight"

var fight = function(enemy){
   
    //repeat and execute as long as the enemy-robot is alive
    while(enemy.health > 0 && enemy.health > 0){
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP"){
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?")

        // if yes (true), leave fight
        if (confirmSkip){
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!")
            //subtract money from playerInfo.money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money)
            break;
        }
    }
        //remove enemy's health by subtracting the amount set in the playerInfo.attack variable
        // subtract the value of 'playerInfo.attack' from the value of 'enemy.health' and use that result to update the value in the 'enemy.health' variable
        //generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        //log a resulting messge to the console so we know that it worked.
        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
        //check enemy's health
            if (enemy.health <= 0){
                window.alert(enemy.name + " has died!");
                break;
            }
            else{
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
                //subtract the value of 'enemy.attack' from the value of 'playerInfo.health' and use that result to update the value in the 'playerInfo.health' variable.
            var damage = randomNumber(enemy.attack - 3, enemy.attack);

            playerInfo.health = Math.max(0, playerInfo.health - damage);
            //log a resulting message to the console so we know that it worked.
            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
            // check player's health
        
            if (playerInfo.health <= 0){
                window.alert(playerInfo.name + " has died!");
                //leave while loop since enemy is dead
                break;
            }else{
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
    }
};

// At end of game ask player to play again

// restart game from the beginning of the for loop


// prompt after player defeats enemy robot or skip to visit shop

// prompt options through conditional statements

// if player types refill Health, set health to max

// else if player chooses to upgrade change attack value

// else leave shop and return to fight

//function to generate a random numeric value
var randomNumber = function(min,max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money:10,
    reset:function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        if(this.money >7){
            this.health += 20;
            this.money -= 7;
        }
        else{
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function(){
        if(this.money >=7){
            window.alert("Upgrading player's attack by 6 for 7 dollars."):
            this.attack +=6;
            this.money -= 7;
        }
        else{
            window.alert("You don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];

var startGame = function(){
    //reset player stats
    playerInfo.reset();

    for(var i = 0; i< enemyInfo.length; i++){
    if(playerInfo.health > 0){
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        //call fight function with enemy-robot
        var pickedEnemyObj = enemyInfo[i];
        pickedEnemyObj.health = randomNumber(40,60);
        fight(pickedEnemyObj);

            //if the player is still alive and we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemy.names.length - 1){
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm){
                    shop();
                }
                
            }
    }else{
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
    
}
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

//function to end the entire game
var endGame = function(){
    //if player is still alive, player wins!
    if (playerInfo.health > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }else{
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm(" Would you like to play again?")
    
    if (playAgainConfirm){
        //restart the game
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function(){
    //ask player what they's like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop");

    //use switch to carry out action
    switch(shopOptionPrompt){
        case"REFILL":
        case "refill":
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            
            //do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            //call shop() again to force player to pick a valid option
            shop();
            break;
    }
};


//start the game when the page loads
startGame();