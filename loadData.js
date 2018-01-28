var url = "http://www.sfu.ca/~ngmandyn/iat355/All_GPUs.csv";

var gpuData = d3.csv(url);

var parseEmptyRegex = /\w+/;

d3.csv(url, prepData, function(data) {
  console.log("Total GPUs: " + data.length)
  console.log("Max: " + getMax(data, 'Core_Speed'));
  console.log("Min: " + getMin(data, 'Core_Speed'));
  console.log("Sum: " + getSum(data, 'Core_Speed'));
  console.log("Average: " + getMean(data, 'Core_Speed'));
  console.log("Count: " + getCount(data, 'Core_Speed'));
})

function prepData(data) {
  stripUnitsForColumns(data, ['Core_Speed', 'ROPs']);
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