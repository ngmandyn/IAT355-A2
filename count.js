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