/**
 * It's time to create a hero to dispatch these pesky monsters.
 *
 * Copy your code from the previous exercise.
 *
 * Add a SETTER method to your LivingThing class named "setHealth" that lets you update the value
 * of the "health" property.
 *
 * Now, create a NEW object called "Hero" that EXTENDS the LivingThing class.
 *
 * NOTE: Check out the following to figure out how to extend an object
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
 *
 * Add a method to the Hero class named "attack" that takes as a parameter a LivingThing object.
 * The method should do three things:
 * 1. Reduce the LivingThing object's health by a random value between 0 and 10.
 * 2. Reduce the hero's health by a random value between 0 and 10.
 * 3. Print out how much damage the monster and hero did to each other.
 *
 * NOTE: To point you in the right direction: check out
 * the getRandomInt function on this page:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 *
 * Give the Hero object another method named "fight" that takes as a parameter an array of LivingThing objects
 * and does the following:
 *  - For each LivingThing object in the array, call the "attack" method so the hero can attack the monster.
 *     - But, don't attack if the LivingThing is already dead!
 *  - Repeat the process until all the monsters or the hero is dead.
 *
 * Finally, you will need to instantiate your hero object with the name into a variable named "hero". Give them 100 health and a
 * name of your choice.
 */


 (function(){
    //@see https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
    'use strict';

    ///////////////////////////
    // Put your code here!
    ///////////////////////////
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    }

    function LivingThing(monsterName, monsterHealth) {
      var name = monsterName;
      var health = monsterHealth;

      this.isAlive = function(){
        return (health > 0)
      }
      // getter for name
      this.getName = function(){
        return (name)
      }
      // getter for health
      this.getHealth = function(){
        return (health)
      }
      // added a setter
      this.setHealth = function(newHealth){
        health = newHealth;
      }

    }

    function Hero(heroName, heroHealth){

        LivingThing.call(this, heroName, heroHealth)

        this.attack = function(monster){
          // generate random numbers between 0 and 10 for the damage taken in the attach for both
          // the hero and the monster
          let heroDamage = getRandomIntInclusive(0, 10);
          let monsterDamage = getRandomIntInclusive(0, 10);
          // decreased the health of the living thing with the random number generated
          monster.setHealth(monster.getHealth() - monsterDamage);
          // decease the health of the hero (this) with the random number generated
          this.setHealth(this.getHealth() - heroDamage);

          console.log(this.getName() + "took " + heroDamage + "damage")
          console.log(monster.getName() + "took " + monsterDamage + "damage")

        }

        this.fight = function(arrayOfMonsters){

          //loop over passed an array of monsters
          //only call attack if that monster is still alive or the hero is dead
          for(let i=0; i < arrayOfMonsters.length; i++){
            //need another type of loop in here
            //arrayOfMonsters[i].isAlive();
            //this.attack(arrayOfMonsters[i]);

            while (arrayOfMonsters[i].isAlive() && this.isAlive()){
              this.attack(arrayOfMonsters[i]);
              if(!this.isAlive()){
                break;
              }
            }
          }
        }

    }

    let hero1 = new Hero("superman", 100);
    // console.log(hero1.isAlive())

    let Rat = new LivingThing("Rat", 5);
    let Goblin = new LivingThing("Goblin", 30);
    let Ogre = new LivingThing("Ogre", 80);

    let monsters = [Rat, Goblin, Ogre]

    let hero = new Hero("batman", 100);


    //The code below should work when you are done
    console.log("A hero emerges!");

    console.log("The noble " + hero.getName() + " has vowed to defeat the monsters and save the realm");
    console.log("Will they be victorious?");

    hero.fight(monsters);

    if (hero.isAlive()) {
        console.log("The hero, " + hero.getName() + ", prevailed!");
    }
    else {
        console.log(hero.getName() + " was bested by the monsters. We are doomed");
    }

})();
