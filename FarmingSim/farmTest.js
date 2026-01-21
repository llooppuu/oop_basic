const BulkTank  = require('./bulktank.js');
const Cow  = require('./cow.js');
const MilkingRobot  = require('./milkingrobot.js');
const Barn = require('./barn.js')
const Farm = require('./farm.js')

// 1) Tühi kari
let farm1 = new Farm("Esko", new Barn(new BulkTank()));
console.log(farm1.print());
console.log("");
console.log(farm1.getOwner() + " is a tough guy!");
console.log("");

// 2) Kolm lehma, kohe prindi
farm1 = new Farm("Esko", new Barn(new BulkTank()));
farm1.addCow(new Cow());
farm1.addCow(new Cow());
farm1.addCow(new Cow());
console.log(farm1.print());
console.log("");

// 3) Elagu tunnike paar ja siis prindi
farm1 = new Farm("Esko", new Barn(new BulkTank()));
farm1.addCow(new Cow());
farm1.addCow(new Cow());
farm1.addCow(new Cow());
farm1.liveHour();
farm1.liveHour();
console.log(farm1.print());
console.log("");

// 4) Paigalda robot, lase lehmadel elada, siis lüpsi (manageCows)
farm1 = new Farm("Esko", new Barn(new BulkTank()));
const robot = new MilkingRobot();
farm1.installMilkingRobot(robot);
farm1.addCow(new Cow());
farm1.addCow(new Cow());
farm1.addCow(new Cow());
farm1.liveHour();
farm1.liveHour();
farm1.manageCows();
console.log(farm1.print());