// Initialize Variables below
const date = "Monday 2019-03-18";
const time = "10:05:34 AM";
const astronautCount = 7;
const astronautStatus = "ready";
const averageAstronautMassKg = 80.7;
const crewMassKg = astronautCount * averageAstronautMassKg;
const fuelMassKg = 760000;
const shuttleMassKg = 74842.31;
const totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const maximumMassLimit = 850000;
const fuelTempCelsius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
const fuelLevel = 100;
const weatherStatus = "clear";
let preparedForLiftoff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
let astronautCountVerification = false;
if (astronautCount <=7) {
    astronautCountVerification = true;
} 
console.log("astronaut count verified", astronautCountVerification);
// add logic below to verify all astronauts are ready
let astronautStatusVerification = false;
if (astronautStatus === "ready") {
    astronautStatusVerification = true;
}
console.log("astronaut status verified", astronautStatusVerification);

// add logic below to verify the total mass does not exceed the maximum limit of 850000
let totalMassVerification = false;
if (totalMassKg <= 850000) {
    totalMassVerification = true;
}
console.log("total mass verified", totalMassVerification);

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
let fuelTemperatureVerification = false;
if (!(fuelTempCelsius <= minimumFuelTemp || fuelTempCelsius >= maximumFuelTemp)) {
    fuelTemperatureVerification =true;
}
console.log("fuel temperature verified", fuelTemperatureVerification);

// add logic below to verify the fuel level is at 100%
let fuelLevelVerification = false;
if (fuelLevel === 100) {
    fuelLevelVerification = true;
}
console.log("fuel level verified", fuelLevelVerification);

// add logic below to verify the weather status is clear
let weatherStatusVerification = false;
if (weatherStatus === "clear") {
    weatherStatusVerification = true;
}
console.log("weather status verified", weatherStatusVerification);
// Verify shuttle launch can proceed based on above conditions
preparedForLiftoff = astronautCountVerification && astronautStatusVerification && totalMassVerification && fuelTemperatureVerification && fuelLevelVerification && weatherStatusVerification;

console.log("prepared for liftoff", preparedForLiftoff);

if (preparedForLiftoff) {
    console.log("all systems are go!");
    console.log("date: ", date);
    console.log("time: ", time);
    console.log("astronaut count: ", astronautCount);
    console.log("crew mass: ", crewMassKg);
    console.log("fuel mass: ", fuelMassKg);
    console.log("shuttle mass: ", shuttleMassKg);
    console.log("total mass: ", )
}   
