/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

var votingAge = 33 //declared a variable

if (votingAge >= 18) { //checks if variable entered is greater or equal to 18
    //console.log('True') //console log will only happen if the check is true
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let dinner = 'well, this does not work'; //variable dinner given value that should never print for testing purposes
let deanIsHungry = false; //false-ish text works for this value. 

if (deanIsHungry){ //true or 1 will return that dean is hungry and dinner is hamborgers. 
    dinner = 'Hamborgers';
} else {
    dinner = 'Forage for yourself'; //false, 0, or any other entry will return that he is not hungry and to forage
}
//console.log(dinner); 



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

var string = '1999' //set a string to be 1999, not integer
//console.log(string.valueOf())  //prints the previous string as an integer





//Task d: Write a function to multiply a*b 

function taskD(a, b){  //creates a function that takes two inputs called a and b
    return a * b; //the function will return the value of a multiplied by b
}
//console.log(taskD(2, 8)); //prints the returned value from function



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(humanAge){ //creates a function called dogYears with an input variable called humanAge
    return humanAge * 7; //returns the value of the input humanAge multiplied by 7
}

let myDogAge = dogYears(33); //declares myDogAge to be the returned value from the dogYears function using a humanAge value of 33
//console.log(myDogAge);



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function feedDog(dogAge, dogWeight) { //function feedDog takes two inputs, dogAge and dogWeight
    let poundsFed = 0; //pounds fed starts at 0. a dog less than 2 months, or .17 of a year, old will return 0
    if (dogAge < 1) { //if the dog is less than a year old, it will follow these rules, otherwise skip to line 86
        if (dogAge >= 0.17 && dogAge <= 0.33) { //dog age between these ages goes to next line, otherwise skip to 81
            poundsFed = dogWeight * 0.1;
        } else if (dogAge >=0.34 && dogAge <=0.58) { //dog age between these ages goes to next line, otherwise skip to 81
            poundsFed = dogWeight * 0.05;
        } else if (dogAge >=0.59) {
            poundsFed = dogWeight * 0.04;
        }
    } else {
        if (dogWeight <= 5) {
            poundsFed = dogWeight * 0.05;
        } else if (dogWeight >=6 && dogWeight <=10) {
            poundsFed = dogWeight * 0.04;
        } else if (dogWeight >=11 && dogWeight <=15) {
            poundsFed = dogWeight * 0.03;
        } else if (dogWeight <15) {
            poundsFed = dogWeight * 0.02;
        }
    }
    return poundsFed;
}
 //console.log(feedDog(1, 15))



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
// rock=1 paper=2 scissors=3     1 beats 3,                          2 beats 1,                           3 beats 2 
//                              3 loses to 1                        1 loses to 2,                        2 loses to 3

function rockPaperScissors(myHand) {
    const compHand = (Math.floor(Math.random() * 3) +1);
    let myChallenge;
    if (myHand === 'rock'){
        myChallenge = 1;
    }else if (myHand === 'paper'){
        myChallenge = 2;
    }else if (myHand === 'scissors'){
        myChallenge = 3;
    }

    
    let result;

    if (myChallenge===1 && compHand === 1) { //rock rock
        result = 'You both threw rock! It\'s a tie';
    } else if (myChallenge === 1 && compHand === 2) { //rock paper
        result = 'Your rock is no match for paper. You lose!';
    } else if (myChallenge === 1 && compHand === 3) { //rock scissors
        result = 'Your rock defeated scissors. You win!';
    } else if (myChallenge === 2 && compHand === 1) { //paper rock
        result = 'Your paper defeated rock. You win!';
    } else if (myChallenge === 2 && compHand === 2) { //paper paper
        result = 'You both threw paper! It\'s a tie!';
    } else if (myChallenge === 2 && compHand === 3) { //paper scissors
        result = 'Your paper is no match for scissors. You lose!';
    } else if (myChallenge === 3 && compHand === 1) { //scissors rock
        result = 'Your scissors are no match for rock. You lose!';
    } else if (myChallenge === 3 && compHand === 2) { //scissors paper
        result = 'Your scissors defeated paper. You win!';
    } else if (myChallenge === 3 && compHand === 3) { //scissors scissors
        result = 'You both threw scissors! It\'s a tie!';
    } else {
        result = 'Check your spelling, comrade. Hand not supported';
    }

    return result
}

    //console.log(rockPaperScissors('scissors'));

  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function makeImperial(convertKM){
   return convertKM / 1.609
}

//console.log(makeImperial(3)) 


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
let convertFT = 3
//console.log(convertFT * 30.48)



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(count) {
    var word = "bottles";
    while (count > 0) {
        if (count == 1){
            word = "bottle"
        }
        console.log(count + " " + word + " of soda on the wall");
        console.log(count + " " + word + " of soda,");
        console.log("Take one down, pass it around,");
        count = count - 1;
        if (count > 0) {
            if (count == 1){
                word = "bottle"
            }
            console.log(count + " " + word + " of soda on the wall.");
        } else {
            console.log("No more " + 'bottles' + " of soda on the wall.");
        }
    }
}
//console.log(annoyingSong(5))



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

function letterGrade(percent){
    if (percent >89){
        result = 'A';
    } else if(percent >79){
        result = 'B';
    } else if(percent >69){
        result = 'c';
    } else if(percent >59){
        result = 'D'
    } else{
        result = 'F'
    }
    return result
}
//console.log(letterGrade(80))

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object


function rpsOnClick(myHand) {
    const compHand = (Math.floor(Math.random() * 3) +1);
    let myChallenge;
    if (myHand === 'rock'){
        myChallenge = 1;
    }else if (myHand === 'paper'){
        myChallenge = 2;
    }else if (myHand === 'scissors'){
        myChallenge = 3;
    }
    
    let result;

    if (myChallenge===1 && compHand === 1) { //rock rock
        result = 'You both threw rock! It\'s a tie';
    } else if (myChallenge === 1 && compHand === 2) { //rock paper
        result = 'Your rock is no match for paper. You lose!';
    } else if (myChallenge === 1 && compHand === 3) { //rock scissors
        result = 'Your rock defeated scissors. You win!';
    } else if (myChallenge === 2 && compHand === 1) { //paper rock
        result = 'Your paper defeated rock. You win!';
    } else if (myChallenge === 2 && compHand === 2) { //paper paper
        result = 'You both threw paper! It\'s a tie!';
    } else if (myChallenge === 2 && compHand === 3) { //paper scissors
        result = 'Your paper is no match for scissors. You lose!';
    } else if (myChallenge === 3 && compHand === 1) { //scissors rock
        result = 'Your scissors are no match for rock. You lose!';
    } else if (myChallenge === 3 && compHand === 2) { //scissors paper
        result = 'Your scissors defeated paper. You win!';
    } else if (myChallenge === 3 && compHand === 3) { //scissors scissors
        result = 'You both threw scissors! It\'s a tie!';
    } else {
        result = 'Check your spelling, comrade. Hand not supported';
    }

    return result
}

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissors');

rockButton.addEventListener('click', function(e) {
    const gameResult = rpsOnClick('rock');
    alert(gameResult);
});
paperButton.addEventListener('click', function(e) {
    const gameResult = rpsOnClick('paper');
    alert(gameResult);
});
scissorButton.addEventListener('click', function(e) {
    const gameResult = rpsOnClick('scissors');
    alert(gameResult);
});


