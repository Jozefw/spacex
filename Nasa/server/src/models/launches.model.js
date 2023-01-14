const launches = new Map();
let latestFlightNumber = 100;
const launch = {
    flightNumber: 100,
    mission: 'space x',
    launchDate:new Date('December 25 2023'),
    rocket:'Explorer Is1',
    destination:'Kepler 442-b',
    customers:['ZTM','NASA'],
    upcoming:true,
    success:true
}

launches.set(launch.flightNumber,launch);

function getAllLaunches() {
    return Array.from(launches.values())
}

function addNewLaunch(launch) {
    launches.set(latestFlightNumber++,
        {...launch,           
        flightNumber:latestFlightNumber,
        customers:['ZTM','NASA'],
        upcoming:true,
        success:true
    });
}
module.exports = {
    getAllLaunches,
    addNewLaunch
}