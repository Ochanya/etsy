
/*let items = require ("./etsy-items.js");
Calculate the average price of all items.

Get an array of items that cost between $14.00 and $18.00 USD

Which item has a "GBP" currency code? Display its name and price.

Display a list of all items which are made of wood. Hint materials
-items.material.includes ("wood")

Which items are made of eight or more materials?
Display the name, number of items and the items it is made of.
How many items were made by their sellers?

   console.log(item.price);


 /*function moreFemales (object) {
     if (object.females > object.males) {
       console.log('more females of age ', object.age)
     }
   }
   //data.forEach(object => console.log('age ', object.age));
   //data.forEach(object => moreFemales(object))
   data.forEach(moreFemales);

   // what is the ratio of male:female in each year?
   function genderRatio (object) {
     return object.males / object.females;
   }
   //let ratios = data.map(genderRatio);
   let ratios = [];
   for (i = 0; i < data.length; i++) {
     ratios[i] = genderRatio(data[i]);
   }
   console.log(ratios);

   // how many teenagers were there in 2010?
   let teens = data.filter(object => object.age > 12 && object.age < 20);
   let teens = [];
   for (i = 0; i < data.length; i++) {
     if (data[i].age > 12 && data[i].age < 20) {
       teens.push(data[i]);
     }
   }
   let teenCount = teens.reduce((total, object) => total + object.females + object.males);
   let total = 0;
   for (i = 0; i < teens.length; i++) {
     total += (teens[i].females + teens[i].males);
   }*/



 console.log(items.length);

 items.forEach(object=>console.log(object.price));


//Calculate the average price of all items.
 function itemsPrice(object) {
        return object.price
        }
 itemPrice=items.map(itemsPrice);
 console.log(itemPrice);

let totalPrice =items.reduce((total, object)=>total + object.price,0);
let avgPrice= totalPrice/items.length;

console.log(avgPrice);


//Get an array of items that cost between $14.00 and $18.00 USD
let itemCost=items.filter (object => object.price >=14 && object.price <=18)
.map(object=>object.title);

console.log(itemCost);

//Which item has a "GBP" currency code? Display its name and price.












//itemCost.push(items[i])
/*let teens = data.filter(object => object.age > 12 && object.age < 20);
let teens = [];
for (i = 0; i < data.length; i++) {
  if (data[i].age > 12 && data[i].age < 20) {
    teens.push(data[i]);


  /*  var numbers = [1, 2, 3, 4, 5],
        squares = []

    function square(v) {
        return v * v
    }

    squares = numbers.map(square)

    console.log(numbers)
    console.log(squares)

    /*function moreFemales (object) {
        if (object.females > object.males) {
          console.log('more females of age ', object.age)
        }
      }
      //data.forEach(object => console.log('age ', object.age));
      //data.forEach(object => moreFemales(object))
      data.forEach(moreFemales);

      // what is the ratio of male:female in each year?
      function genderRatio (object) {
        return object.males / object.females;;
*/


  /*s  function eachPrice (object) {
    return object.price {
    console.log(object.price)
    }
    }
    //let ratios = data.map(genderRatio);
   items.forEach(eachPrice);
console.log(itemPrice);
/*console.log (itemPrice);*/
/*let totalPrice = itemPrice.reduce((total, object) => total + object.price);
let total = 0;
console.log (totalPrice);
 /*function itemPrice (object) {
      return object.price
    }*/
