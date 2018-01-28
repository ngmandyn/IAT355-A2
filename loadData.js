var url = "http://www.sfu.ca/~ngmandyn/iat355/All_GPUs.csv";

var gpuData = d3.csv(url);

d3.csv(url, function(data) {

  console.log("Total GPUs: " + data.length)

  console.log("Max: " + calculateMax(data, 'Core_Speed'));

  console.log("Min: " + calculateMin(data, 'Core_Speed'));

  console.log("Sum: " + calculateSum(data, 'Core_Speed'));

})

function notEmpty(value) {
  if(value.length >= 1 && value !== null && value !== "" && value !== "\n" && value !== "↵- ") return true;
  else return false;
}

function calculateMax(data, columnName) {
  var arr = [];
  d3.map(data, function(d) {
    arr.push(d[columnName]);
  });
  console.log(arr.filter(notEmpty))
  return d3.max(arr.filter(notEmpty));
}

function calculateMin(data, columnName) {
  var arr = [];
  d3.map(data, function(d) {
    arr.push(d[columnName]);
  });
  console.log(arr.filter(notEmpty))
  return d3.min(arr.filter(notEmpty));
}

function calculateSum(data, columnName) {
  var arr = [];
  d3.map(data, function(d) {
    arr.push(d[columnName]);
  });
  return d3.sum(arr.filter(notEmpty));
}