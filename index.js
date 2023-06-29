// ship needs to have hull of 20, firePower 7, accuracy .5
// ship1(7,.5,20)- can not put this way. needs to be in the order that your constructor shows. will not show correct information if it's not


// class Ship{
//     constructor(shipHull, firePower, accuracy) {
//         this.shipHull = shipHull
//         this.firePower = firePower
//         this.accuracy = accuracy
//     }


// fire(target){
//     if(Math.random() < this.accuracy){
//         target,shipHull -= this.firePower;
//         }
    
//     }
// }  

// const maverick = new Ship (20 , 5 , .7)
// console.log(maverick);



//  random number 1-10
// var randomNumber =Math.floor (Math.random()*10)+1;
// console.log("number is", randomNumber);

class Aliens {
    constructor () {
        this.ships = []
    }
    addAliens (){
        this.shiphull = Math.round(Math.random()*(6-3) + 3) // enemy hull is between 3 and 6
        this.firepower = Math.round(Math.random()*(4-2) + 2) // enemy firepower is between 2 and 4
        this.accuracy = Math.round(Math.random()*(.12 - .6) + .2) //enemy accuracy is between .6 and .8
        this.ships.push (new Ship (shiphull, firepower, accuracy));
    }
}
