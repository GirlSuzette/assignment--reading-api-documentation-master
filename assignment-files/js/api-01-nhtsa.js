/*
  API #1 - NHTSA Product Information Catalog Vehicle Listing
          https://vpic.nhtsa.dot.gov/api/
*/

//========================================================================
//  (1) How many *total car makes* are registered with the NHTSA?
//     - https://vpic.nhtsa.dot.gov/api/[path/to/data]

const answerElement_nhtsa_1 = document.getElementById('nhtsa-1')

request.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json')
  .then(function (serverRes) {
    const apiData = serverRes.body
    //console.log(apiData)
    // note, put your answer on the dom element for this porblem
    answerElement_nhtsa_1.innerHTML = serverRes.body.Count
  })

//========================================================================
//  (2) How many *Chevrolet models* are registered with the NHTSA?
//
//     - https://vpic.nhtsa.dot.gov/api/[path/to/data]
//     - Hint: models for make

const answerElement_nhtsa_2 = document.getElementById('nhtsa-2')

request.get("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/chevrolet?format=json")
  .then(function (response) {

    const apiModelChevrole = response.body
    // console.log(apiModelChevrole)

    answerElement_nhtsa_2.innerHTML = response.body.Count
  })


//========================================================================
//  (3) What are the *vehicle types* that Nissan has?
//      - Hint: vehicle types for make by name

const answerElement_nhtsa_3 = document.getElementById('nhtsa-3')

request.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/nissan?format=json")
  .then(function (response) {

    const apiModelNissan = response.body.Results
    // console.log(apiModelNissan)
    var carType = [];
    apiModelNissan.forEach(function (model) {
      carType.push(model.VehicleTypeName)

    });

    answerElement_nhtsa_3.innerHTML = carType
  })

//========================================================================
//  (4) Which are the *models* that exist for Toyota trucks in 2017?
//      - Hint: models for make, year and vehicle type

const answerElement_nhtsa_4 = document.getElementById('nhtsa-4')


request.get("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/toyota/modelyear/2017/vehicleType/truck?format=json")
  .then(function (response) {

    const apiModelNissan = response.body.Results
    // console.log(apiModelNissan)
    var carModel = [];
    apiModelNissan.forEach(function (model) {
      carModel.push(model.Model_Name)

    });

    answerElement_nhtsa_4.innerHTML = carModel
  })