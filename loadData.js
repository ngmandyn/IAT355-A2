var url = "http://www.sfu.ca/~ngmandyn/iat355/All_GPUs.csv";
var parseEmptyRegex = /\w+/;
var dimensions = ['Core_Speed', 'Max_Power', 'Memory', 'Memory_Bandwidth', 'Memory_Speed', 'PSU', 'Texture_Rate'];
var units = ['MHz', 'Watts', 'MB', 'GB/sec', 'MHz', 'Watts', 'GTexel/s'];

d3.csv(url, prepData, function(data) {
  console.log("TOTAL DATA ITEMS: " + data.length)
  // calculate maximum values for 7 dimensions
  for (i = 0; i < dimensions.length; i++) {
    console.log("Max " + dimensions[i] + " (" + units[i] + "): " + getMax(data, dimensions[i]));
  }
  // calculate minimum values for 7 dimensions
  for (i = 0; i < dimensions.length; i++) {
    console.log("Min " + dimensions[i] + " (" + units[i] + "): " + getMin(data, dimensions[i]));
  }
  // calculate sum for 7 dimensions
  for (i = 0; i < dimensions.length; i++) {
    console.log("Sum - " + dimensions[i] + " (" + units[i] + "): " + getSum(data, dimensions[i]));
  }
  // calculate mean for 7 dimensions
  for (i = 0; i < dimensions.length; i++) {
    console.log("Average " + dimensions[i] + " (" + units[i] + "): " + getMean(data, dimensions[i]));
  }
  // calculate number of records for 7 dimensions
  for (i = 0; i < dimensions.length; i++) {
    console.log("Count - " + dimensions[i] + " (" + units[i] + "): " + getCount(data, dimensions[i]));
  }
})

function prepData(data) {
  stripUnitsForColumns(data, dimensions);
  return data;
}

function notEmpty(value) {
  if(typeof value === 'number' || value.match(parseEmptyRegex) !== null) return true;
  else return false;
}

function getMax(data, columnName) {
  return d3.max(data, function(d) {
    return d[columnName];
  })
}

function getMin(data, columnName) {
  var arr = [];
  d3.map(data, function(d) {
    arr.push(d[columnName]);
  });
  return d3.min(arr.filter(notEmpty));
}

function getSum(data, columnName) {
  return d3.sum(data, function(d) {
    return d[columnName];
  })
}