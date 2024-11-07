
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);


const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
hardAlgorithm.play(redBeltNinja);

const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);


const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
unhandledPromiseRejection.play(redBeltNinja);


const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
pairProgramming.play(redBeltNinja);

redBeltNinja.attack(blackBeltNinja);