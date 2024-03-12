//Prompt user to enter a list of comma-separated froyo flavors
  //e.g they type vanilla,vanilla,vanilla,strawberry,coffee,coffee
  //In the console, they should be able to see a table listing how many of each flavor they ordered. (vanilla: 3, coffee: 2, strawberry: 1)

//create a function called froyoOrder that prompts the user for flavors separated by comma's
const froyoOrder = prompt(
  `Please enter your flavor of choice, separated by commas.`,
  `Plain,Chocolate,Chocolate,Vanilla,Blueberry,Blueberry,Blueberry`
);
//We need to be able to store the data from the prompt and separate the data into new strings since it's in a single string.

const flavors = froyoOrder.split(`,`);

//create an variable(NO) object that takes in key/value
const flavorTypes = {};
//key is the flavors
//value qty of the flavors

//create a for loop
for(let i = 0; i < flavors.length; i++){
  //go through each individual flavor, the value will increase
  const flavor = flavors[i];
  //if the flavor is not in the object, then we need to add it to the object
  if (flavorTypes[flavor] === undefined){
    flavorTypes[flavor] = 1;
  } else { 
    //else the value will increase
    flavorTypes[flavor]++;
  } 
}
console.table(flavorTypes);
//get the total count of each flavor
//turn it into a table