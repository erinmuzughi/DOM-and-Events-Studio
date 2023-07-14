// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    let takeoffButton = document.getElementById('takeoff');
    let flightStatus1 = document.getElementById('flightStatus');
    let shuttleBackgroundColor = document.getElementById('shuttleBackground');
    //function goes here
    takeoffButton.addEventListener("click", function(event){
        console.log("Confirm the shuttle is ready to takeoff.");
        flightStatus1.innerHTML = 'Shuttle in flight.';
        shuttleBackgroundColor.style.backgroundColor = "blue";
    }); 
    

}     window.addEventListener('load', init)

