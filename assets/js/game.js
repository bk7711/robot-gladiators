
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth= 50;
var enemyAttack = 12;

//Game States
//"WIN" - Player robot has defeated all enemy-robots
    //*fight all enemy-robots
    //*defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less




//This creates a function named "fight"

var fight = function(enemyName){
   
    //repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 && enemyHealth > 0){
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP"){
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?")

        // if yes (true), leave fight
        if (confirmSkip){
            window.alert(playerName + " has decided to skip this fight. Goodbye!")
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney)
            break;
        }
    }
        //remove enemy's health by subtracting the amount set in the playerAttack variable
        // subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
        //log a resulting messge to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        //check enemy's health
            if (enemyHealth <= 0){
                window.alert(enemyName + " has died!");
                break;
            }
            else{
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
                //subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
            playerHealth = playerHealth - enemyAttack;
            //log a resulting message to the console so we know that it worked.
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
            // check player's health
        
            if (playerHealth <= 0){
                window.alert(playerName + " has died!");
                //leave while loop since enemy is dead
                break;
            }else{
                window.alert(playerName + " still has " + playerHealth + " health left.");
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





var startGame = function(){
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i< enemyNames.length; i++){
    if(playerHealth > 0){
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        //call fight function with enemy-robot
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);

            //if the player is still alive and we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1){
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
    if (playerHealth > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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
            if(playerMoney >= 7){
                window.alert("Refilling player's health by 20 for 7 dollars.");

            //increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney -7;
            }
            else{
                window.alert("You don't have enough money!");
            }

            break;
        case "UPGRADE";
        case "upgrade":
            if(playerMoney >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            //increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else{
                window.alert("You don't have enough money!");
            }
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