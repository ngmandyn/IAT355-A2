// average a set of values from 'columnName'
function getMean(data, columnName) {
  // use d3's mean method
  var mean = d3.mean(data, function(d) {
    return d[columnName];
  });
  return mean;
}