class ninja {
    constructor (name ,health, speed , strength,){
        this.name = name;
        this.health = 90;
        this.speed=3
        this.strength=3
    }
    sayName(){
        console.log(this.name)
    }
    showState(){
        console.log(this.name,this.health,this.speed,this.strength)
        }
    drinkSake(){
       this.health= this.health += 10;
        return this;
    }
}
const ninja1 = new ninja("ninja")
ninja1.sayName();
ninja1.showState();
ninja1.drinkSake();
ninja1.showState();