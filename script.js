var Cheese = 0;
var autoclickercost = 10;
var autoclickers = 0;
var slavecost = 100;
var slaves = 0;
var robots = 0;
var robotcost = 1000;
var grandfathers = 0;
var grandfathercost = 10000;
var clickingpower = 1;
var clickingpowercost = 10000;
var clickingpowerlevel = 1;


function AddToScore(amount){
    Cheese = Cheese + amount;
    document.getElementById("Cheese").innerHTML = Cheese;
}
function buyAutoClicker(){
    if (Cheese >= autoclickercost){
        Cheese = Cheese - autoclickercost;
        autoclickers = autoclickers + 1;
        autoclickercost = Math.round(autoclickercost * 1.1);
        document.getElementById("Cheese").innerHTML = Cheese;
        document.getElementById("autoclickers").innerHTML = autoclickers;
        document.getElementById("autoclickercost").innerHTML = autoclickercost;
    }
}
setInterval (function(){
    Cheese = Cheese + autoclickers *1;
    document.getElementById("Cheese").innerHTML = Cheese;
}, 5000);

function buySlaves(){
    if (Cheese >= slavecost){
        Cheese = Cheese - slavecost;
        slaves = slaves + 1;
        slavecost = Math.round(slavecost * 1.1);
        document.getElementById("Cheese").innerHTML = Cheese;
        document.getElementById("slaves").innerHTML = slaves;
        document.getElementById("slavecost").innerHTML = slavecost;
    }
}
setInterval (function(){
    Cheese = Cheese + slaves * 5;
    document.getElementById("Cheese").innerHTML = Cheese;
}, 2500);

function buyRobots(){
    if (Cheese >= robotcost){
        Cheese = Cheese - robotcost;
        robots = robots + 1;
        robotcost = Math.round(robotcost * 1.1);
        document.getElementById("Cheese").innerHTML = Cheese;
        document.getElementById("robots").innerHTML = robots;
        document.getElementById("robotcost").innerHTML = robotcost;
    }
}
setInterval (function(){
    Cheese = Cheese + robots * 10;
    document.getElementById("Cheese").innerHTML = Cheese;
    document.title = Cheese + "Cheese -- Clicker game"
}, 1000);

function buyGrandfathers(){
    if (Cheese >= grandfathercost){
        Cheese = Cheese - grandfathercost;
        grandfathers = grandfathers + 1;
        grandfathercost = Math.round(grandfathercost * 1.1);
        document.getElementById("Cheese").innerHTML = Cheese;
        document.getElementById("Grandfathers").innerHTML = grandfathers;
        document.getElementById("Grandfatherscost").innerHTML = grandfathercost;
    }
}
setInterval (function(){
    Cheese = Cheese + grandfathers * 100;
    document.getElementById("Cheese").innerHTML = Cheese;
    document.title = Cheese + "Cheese -- Clicker game"
}, 1000);

function buyClickingPower(){
    if (Cheese >= clickingpowercost){
        Cheese = Cheese - clickingpowercost;
        clickingpowerlevel = clickingpowerlevel + 1;
        clickingpower = clickingpower * 2;
        clickingpowercost = Math.round(clickingpowercost * 1.5);
        document.getElementById("clickingpowercost").innerHTML = clickingpowercost;
        document.getElementById("clickingpowerlevel").innerHTML = clickingpowerlevel;
    }
}
