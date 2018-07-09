
app.factory("convert", function($log) {
  
  var kmRates = {
    KM : 1,
    MILE : 0.621371192,
    METER : 1000,
    FEET : 3280.8399
  }
  
  function convertDistance(distance, inUnit, outUnit) {
    return Math.round(distance * kmRates[outUnit] /  kmRates[inUnit]);
  }
  
  
  function convertKmToMile(km) {
    var mile = Math.round(km * 0.621371192);
    return mile
  }
  
  return {
    distanceUnits : kmRates,
    distance : convertDistance,
    km2Mile : convertKmToMile
  }
})