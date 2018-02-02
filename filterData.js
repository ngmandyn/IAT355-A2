// searches for whole and decimal numbers
var stripUnitRegex = /[0-9]+\.?/;
// searches for all alphanumeric and underscore characters
var parseEmptyRegex = /\w+/;

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

// returns a boolean of whether the parameter value is empty or not
function notEmpty(value) {
  return (typeof value === 'number' || value.match(parseEmptyRegex) !== null);
}