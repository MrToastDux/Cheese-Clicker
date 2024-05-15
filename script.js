function saveGame(){
    var gamesave ={
    Cheese :Cheese,
    autoclickercost :  autoclickercost,
    autoclickers : autoclickers,
    slavecost :   slavecost,
    slaves : slaves,
    robots : robots,
    robotcost : robotcost,
    grandfathers : grandfathers,
    grandfathercost : grandfathercost,
    Ricottas : Ricottas,
    Ricottacost :  Ricottacost,
    clickingpower : clickingpower,
    clickingpowercost :  clickingpowercost,
    clickingpowerlevel : clickingpowerlevel,
    autoclickerpower :autoclickerpower,
    autoclickerpowercost :  autoclickerpowercost,
    autoclickerpowerlevel : autoclickerpowerlevel,
    slavespower :slavespower,
    slavespowercost : slavespowercost,
    slavespowerlevel :slavespowerlevel,
    robotpower : robotpower,
    robotpowercost :  robotpowercost,
    robotpowerlevel : robotpowerlevel,
    grandfatherpower :  grandfatherpower,
    grandfatherpowercost :  grandfatherpowercost,
    grandfatherpowerlevel : grandfatherpowerlevel,
    ricottapower : ricottapower,
    ricottapowercost :  ricottapowercost,
    ricottapowerlevel:ricottapowerlevel
    };
    localStorage.setItem("gamesave", JSON.stringify(gamesave));
}
setInterval(function(){
saveGame()
},5000);
function loadgame(){
    var savedGame = JSON.parse(localStorage.getItem("gamesave"));
    if (typeof savedGame.Cheese !== "undefined") Cheese = savedGame.Cheese;
    if (typeof savedGame.autoclickercost !== "undefined") autoclickercost = savedGame.autoclickercost;
    if (typeof savedGame.autoclickers !== "undefined") autoclickers = savedGame.autoclickers;
    if (typeof savedGame.slavecost !== "undefined") slavecost = savedGame.slavecost;
    if (typeof savedGame.slaves !== "undefined") slaves = savedGame.slaves;
    if (typeof savedGame.robots !== "undefined") robots = savedGame.robots;
    if (typeof savedGame.robotcost !== "undefined") robotcost = savedGame.robotcost;
    if (typeof savedGame.grandfathers !== "undefined") grandfathers = savedGame.grandfathers;
    if (typeof savedGame.grandfathercost !== "undefined") grandfathercost = savedGame.grandfathercost;
    if (typeof savedGame.Ricottas !== "undefined") Ricottas = savedGame.Ricottas;
    if (typeof savedGame.Ricottacost !== "undefined") Ricottacost = savedGame.Ricottacost;
    if (typeof savedGame.clickingpower !== "undefined") clickingpower = savedGame.clickingpower;
    if (typeof savedGame.clickingpowercost !== "undefined") clickingpowercost = savedGame.clickingpowercost;
    if (typeof savedGame.clickingpowerlevel !== "undefined") clickingpowerlevel = savedGame.clickingpowerlevel;
    if (typeof savedGame.autoclickerpowerlevel !== "undefined") autoclickerpowerlevel = savedGame.autoclickerpowerlevel;
    if (typeof savedGame.autoclickerpowercost !== "undefined") autoclickerpowercost = savedGame.autoclickerpowercost;
    if (typeof savedGame.autoclickerpower !== "undefined") autoclickerpower = savedGame.autoclickerpower;
    if (typeof savedGame.slavespower !== "undefined") slavespower = savedGame.slavespower;
    if (typeof savedGame.slavespowercost !== "undefined") slavespowercost = savedGame.slavespowercost;
    if (typeof savedGame.slavespowerlevel !== "undefined") slavespowerlevel = savedGame.slavespowerlevel;
    if (typeof savedGame.robotpower !== "undefined") robotpower = savedGame.robotpower;
    if (typeof savedGame.robotpowercost !== "undefined") robotpowercost = savedGame.robotpowercost;
    if (typeof savedGame.robotpowerlevel !== "undefined") robotpowerlevel = savedGame.robotpowerlevel;
    if (typeof savedGame.grandfatherpower !== "undefined") grandfatherpower = savedGame.grandfatherpower;
    if (typeof savedGame.grandfatherpowercost !== "undefined") grandfatherpowercost = savedGame.grandfatherpowercost;
    if (typeof savedGame.grandfatherpowerlevel !== "undefined") grandfatherpowerlevel = savedGame.grandfatherpowerlevel;
    if (typeof savedGame.ricottapower !== "undefined") ricottapower = savedGame.ricottapower;
    if (typeof savedGame.ricottapowercost !== "undefined") ricottapowercost = savedGame.ricottapowercost;
    if (typeof savedGame.ricottapowerlevel !== "undefined") ricottapowerlevel = savedGame.ricottapowerlevel;
}
function resetgame(){
    if(confirm("are you sure")){
        var gamesave = {};
        localStorage.setItem("gamesave", JSON.stringify(gamesave));
        location.reload();
    }
}
window.onload= function(){
loadgame();
document.getElementById("clickingpowercost").innerHTML = clickingpowercost;
document.getElementById("clickingpowerlevel").innerHTML = clickingpowerlevel;
document.getElementById("Ricottas").innerHTML = Ricottas;
document.getElementById("Ricottacost").innerHTML = Ricottacost;
document.getElementById("Grandfathers").innerHTML = grandfathers;
document.getElementById("Grandfathercost").innerHTML = grandfathercost;
document.getElementById("robots").innerHTML = robots;
document.getElementById("robotcost").innerHTML = robotcost;
document.getElementById("slaves").innerHTML = slaves;
document.getElementById("slavecost").innerHTML = slavecost;
document.getElementById('ricottapowercost').innerHTML = ricottapowercost;
document.getElementById('ricottapowerlevel').innerHTML = ricottapowerlevel;
document.getElementById('grandfatherpowercost').innerHTML = grandfatherpowercost;
document.getElementById('grandfatherpowerlevel').innerHTML = grandfatherpowerlevel;
document.getElementById('robotpowercost').innerHTML = robotpowercost;
document.getElementById('robotpowerlevel').innerHTML = robotpowerlevel;
document.getElementById('slavespowercost').innerHTML = slavespowercost;
document.getElementById('slavespowerlevel').innerHTML = slavespowerlevel;
document.getElementById('autoclickerpowercost').innerHTML = autoclickerpowercost;
document.getElementById('autoclickerpowerlevel').innerHTML = autoclickerpowerlevel;
document.getElementById("autoclickers").innerHTML = autoclickers;
document.getElementById("autoclickercost").innerHTML = autoclickercost;
document.getElementById("Cheese").innerHTML = Cheese;
};
 
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
var Ricottacost = 50000;
var clickingpower = 1;
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
        Cheese = Cheese - autoclickerpowercost;
        autoclickerpowercost = Math.round(autoclickerpowercost * 4)
        autoclickerpowerlevel = autoclickerpowerlevel + 1;
        document.getElementById('autoclickerpowercost').innerHTML = autoclickerpowercost;
        document.getElementById('autoclickerpowerlevel').innerHTML = autoclickerpowerlevel;
    }
}
function buyslavespower(){
    if (Cheese >= slavespowercost && slaves>=10){
        slavespower = slavespower * 2;
        Cheese = Cheese - slavespowercost;
        slavespowercost = Math.round(slavespowercost * 4)
        slavespowerlevel = slavespowerlevel + 1;
        document.getElementById('slavespowercost').innerHTML = slavespowercost;
        document.getElementById('slavespowerlevel').innerHTML = slavespowerlevel;
    }
}
function buyrobotpower(){
    if (Cheese >= robotpowercost && robots>=10){
        robotpower = robotpower * 2;
        Cheese = Cheese - robotpowercost;
        robotpowercost = Math.round(robotpowercost * 4)
        robotpowerlevel = robotpowerlevel + 1;
        document.getElementById('robotpowercost').innerHTML = robotpowercost;
        document.getElementById('robotpowerlevel').innerHTML = robotpowerlevel;
    }
}
function buygrandfatherpower(){
    if (Cheese >= grandfatherpowercost && grandfathers>=10){
        grandfatherpower = grandfatherpower * 2;
        Cheese = Cheese - grandfatherpowercost;
        grandfatherpowercost = Math.round(grandfatherpowercost * 4)
        grandfatherpowerlevel = grandfatherpowerlevel + 1;
        document.getElementById('grandfatherpowercost').innerHTML = grandfatherpowercost;
        document.getElementById('grandfatherpowerlevel').innerHTML = grandfatherpowerlevel;
    }
}
function buyricottapower(){
    if (Cheese >= ricottapowercost && Ricottas>=10){
        ricottapower = ricottapower * 2;
        Cheese = Cheese - ricottapowercost;
        ricottapowercost = Math.round(ricottapowercost * 4)
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
    Cheese = Cheese + grandfathers * grandfatherpower;
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