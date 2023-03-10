const API_URL = 'http://localhost:8000'

async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
}


async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`)
  const allLaunches =  await response.json();
  return allLaunches.sort((a, b) =>{
    return(a.allLaunches.flightNumber - b.allLaunches.flightNumber)
  })
  
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};