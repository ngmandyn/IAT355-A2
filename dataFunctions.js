// returns the max within the columnName of data
function getMax(data, columnName) {
  return d3.max(data, function(d) {
    return d[columnName];
  })
}

// returns the min within the columnName of data
function getMin(data, columnName) {
  var arr = [];
  d3.map(data, function(d) {
    arr.push(d[columnName]);
  });
  return d3.min(arr.filter(notEmpty));
}

// returns the sum of the columnName of data
function getSum(data, columnName) {
  return d3.sum(data, function(d) {
    return d[columnName];
  })
}

// average a set of values from 'columnName'
function getMean(data, columnName) {
  // use d3's mean method
  var mean = d3.mean(data, function(d) {
    return d[columnName];
  });
  return mean;
}

// count how many records match a particular columnName
function getCount(data, columnName) {
  var arr = [];
  // create an array containging only values within 'columnName'
  d3.map(data, function(d) {
    arr.push(d[columnName]);
  });
  // filter the array for empty or null values
  var filtered = arr.filter(notEmpty);

  return filtered.length;
}