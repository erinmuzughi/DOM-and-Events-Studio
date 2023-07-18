// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const takeoffButton = document.getElementById('takeoff');
    const flightStatus1 = document.getElementById('flightStatus');
    const shuttleBackgroundColor = document.getElementById('shuttleBackground');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');
    const landButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');

    // rocket items
    let rocketPosX = 0;
    let rocketPosY = 0;
    let altitude = 0;
    const rocket = document.getElementById('rocket');

    //function goes here
    takeoffButton.addEventListener("click", function(){
        let shouldTakeoff = confirm("Confirm the shuttle is ready to takeoff.");
        if (shouldTakeoff === true) {
            flightStatus1.innerHTML = 'Shuttle in flight.';
            shuttleBackgroundColor.style.backgroundColor = "blue";
            altitude = 10000;
            shuttleHeight.innerHTML = altitude;
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
        }

    }); 
    landButton.addEventListener("click", function() {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus1.innerHTML =  "The shuttle has landed.";
        resetRocket();
    });
    abortButton.addEventListener("click", function () {
        let shouldAbort = confirm('Confirm that you want to abort the mission.');
            if (shouldAbort === true) {
                flightStatus1.innerHTML =  "Mission aborted.";
                resetRocket();
            }
    });
    // use event delegation for directional buttons
    document.addEventListener("click", function(event){
        let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));
        console.log('background width is', bkgWidth);

        if (event.target.id === "left" && rocketPosX > -(bkgWidth / 2 - 40)) {
            rocketPosX -=10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === "right" && rocketPosX < (bkgWidth / 2 - 40)) {
            rocketPosX +=10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === "up" && altitude < 250000) {
            rocketPosY +=10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude += 10000;
            shuttleHeight.innerHTML = altitude;
        }
        if (event.target.id === "down" && altitude > 0) {
            rocketPosY -=10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude -= 10000;
            shuttleHeight.innerHTML = altitude;
        }
    });
    function resetRocket() {
        shuttleBackgroundColor.style.backgroundColor = "green";
        altitude = 0;
        shuttleHeight.innerHTML = altitude;
        rocketPosX = 0;
        rocketPosY = 0;
        rocket.style.marginLeft = rocketPosX + 'px';
        rocket.style.marginBottom = rocketPosY + 'px';
    }

}     window.addEventListener('load', init)

