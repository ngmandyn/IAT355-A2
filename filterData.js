// searches for whole and decimal numbers
var stripUnitRegex = /[0-9]+\.?/;

// filter units - drop the unit string, convert resulting number to integer
function stripUnits(data) {
  return +data.match(stripUnitRegex);
}

// filter units in columns defined in arrOfColumnNames
function stripUnitsForColumns(data, arrOfColumnNames) {
  arrOfColumnNames.forEach(function(name) {
    if (data[name] && notEmpty(data[name])) {
      data[name] = stripUnits(data[name]);
    }
  });
}