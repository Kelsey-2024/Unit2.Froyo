//create a prompt that asks the user to input their favorite candy separated by comma's
  //create a default option list
const favoriteCandy = prompt(
  `What's your favorite candy? Please separate by commas.`,
  `KitKat,Snickers,KitKat,Skittles,Hershey,Snickers,Skittles,Skittles`
);
//take the single string and separate into multiple strings using .split (',')
const candySelection = favoriteCandy.split(`,`);

//create an object that will take in those strings, which in object terms is a key
//we will leave it empty and will not hard code since the input can change
const candyTypes = {};

//We need to go through the list using a for loop
for(let i = 0; i < candySelection.length; i++){
  //create a variable and set it equal to the array
  const candy = candySelection[i];
  //then we need to add the string to the empty object
  //create a condition based on whether the candy selection is in the object
  if(candyTypes[candy] === undefined){
    candyTypes[candy] = 1;
  } else {
    candies[candy]++;
  }
}

console.log(`Candy Selection:`);
for(let candy in candyTypes){
  console.log(`${candy}: ${candyTypes[candy]}`);
}