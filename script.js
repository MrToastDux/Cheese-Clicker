var Cheese = 0;
var autoclickercost = 10;
var autoclickers = 0;
var slavecost = 100;
var slaves = 0;
var robots = 0;
var robotcost = 1000;
var grandfathers = 0;
var grandfathercost = 10000;
var Ricottas = 0;
var Ricottacost = 10000;
var clickingpower = 10000;
var clickingpowercost = 10000;
var clickingpowerlevel = 1;
var autoclickerpower = 1;
var autoclickerpowercost = 20000;
var autoclickerpowerlevel = 1;
var slavespower = 5;
var slavespowercost = 60000;
var slavespowerlevel = 1;
var robotpower = 10;
var robotpowercost = 100000;
var robotpowerlevel = 1;
var grandfatherpower = 100;
var grandfatherpowercost = 200000;
var grandfatherpowerlevel = 1;
var ricottapower = 500;
var ricottapowercost = 500000;
var ricottapowerlevel = 1;

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
    Cheese = Cheese + autoclickers *autoclickerpower;
    document.getElementById("Cheese").innerHTML = Cheese;
}, 5000);

function buyAutoclickerpower(){
    if (Cheese >= autoclickerpowercost && autoclickers>=10){
        autoclickerpower = autoclickerpower * 2;
        Cheese = Cheese - autoclickerpower;
        autoclickerpowercost = Math.round(autoclickerpowercost * 2)
        autoclickerpowerlevel = autoclickerpowerlevel + 1;
        document.getElementById('autoclickerpowercost').innerHTML = autoclickerpowercost;
        document.getElementById('autoclickerpowerlevel').innerHTML = autoclickerpowerlevel;
    }
}
function buyslavespower(){
    if (Cheese >= slavespowercost && slaves>=10){
        slavespower = slavespower * 2;
        Cheese = Cheese - slavespower;
        slavespowercost = Math.round(slavespowercost * 2)
        slavespowerlevel = slavespowerlevel + 1;
        document.getElementById('slavespowercost').innerHTML = slavespowercost;
        document.getElementById('slavespowerlevel').innerHTML = slavespowerlevel;
    }
}
function buyrobotpower(){
    if (Cheese >= robotpowercost && robots>=10){
        robotpower = robotpower * 2;
        Cheese = Cheese - robotpower;
        robotpowercost = Math.round(robotpowercost * 2)
        robotpowerlevel = robotpowerlevel + 1;
        document.getElementById('robotpowercost').innerHTML = robotpowercost;
        document.getElementById('robotpowerlevel').innerHTML = robotpowerlevel;
    }
}
function buygrandfatherpower(){
    if (Cheese >= grandfatherpowercost && grandfathers>=10){
        grandfatherpower = grandfatherpower * 2;
        Cheese = Cheese - grandfatherpower;
        grandfatherpowercost = Math.round(grandfatherpowercost * 2)
        grandfatherpowerlevel = grandfatherpowerlevel + 1;
        document.getElementById('grandfatherpowercost').innerHTML = grandfatherpowercost;
        document.getElementById('grandfatherpowerlevel').innerHTML = grandfatherpowerlevel;
    }
}
function buyricottapower(){
    if (Cheese >= ricottapowercost && Ricottas>=10){
        ricottapower = ricottapower * 2;
        Cheese = Cheese - ricottapower;
        ricottapowercost = Math.round(ricottapowercost * 2)
        ricottapowerlevel = ricottapowerlevel + 1;
        document.getElementById('ricottapowercost').innerHTML = ricottapowercost;
        document.getElementById('ricottapowerlevel').innerHTML = ricottapowerlevel;
    }
}

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
    Cheese = Cheese + slaves * slavespower;
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
    Cheese = Cheese + robots * robotpower;
    document.getElementById("Cheese").innerHTML = Cheese;
    document.title = Cheese + "Cheese -- Clicker game"
}, 1000);

function buyGrandfather(){
    if (Cheese >= grandfathercost){
        Cheese = Cheese - grandfathercost;
        grandfathers = grandfathers + 1;
        grandfathercost = Math.round(grandfathercost * 1.1);
        document.getElementById("Cheese").innerHTML = Cheese;
        document.getElementById("Grandfathers").innerHTML = grandfathers;
        document.getElementById("Grandfathercost").innerHTML = grandfathercost;
    }
}
setInterval (function(){
    Cheese = Cheese + grandfathers * grandfatherspower;
    document.getElementById("Cheese").innerHTML = Cheese;
    document.title = Cheese + "Cheese -- Clicker game"
}, 1000);

function buyRicotta(){
    if (Cheese >= Ricottacost){
        Cheese = Cheese - Ricottacost;
        Ricottas = Ricottas + 1;
        Ricottacost = Math.round(Ricottacost * 1.1);
        document.getElementById("Cheese").innerHTML = Cheese;
        document.getElementById("Ricottas").innerHTML = Ricottas;
        document.getElementById("Ricottacost").innerHTML = Ricottacost;
        
    }
}
setInterval (function(){
    Cheese = Cheese + Ricottas * ricottapower;
    document.getElementById("Cheese").innerHTML = Cheese;
    document.title = Cheese + "Cheese -- Clicker game"
}, 2000);

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
function updatecps(){
    cps = (autoclickers * autoclickerpower)+(slaves*slavespower)+(robots*robotpower)+(grandfathers*grandfatherpower)+(Ricottas*ricottapower);
    document.getElementById('cps').innerHTML = cps;
}
setInterval(function(){
    updatecps();
}, 100);