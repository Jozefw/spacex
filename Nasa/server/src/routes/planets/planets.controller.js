const {getAllPlanets} = require('../../models/planets.model');

function httpGetAllPlanets(req,res){
   return res.status(200).json(getAllPlanets());
    console.log(getAllPlanets);
};

module.exports = {
    httpGetAllPlanets,
}