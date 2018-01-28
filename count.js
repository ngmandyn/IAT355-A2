// count how many records match a particular columnName
function getCount(data, columnName) {
  var arr = [];
  // create an array containging only values within 'columnName'
  d3.map(data, function(d) {
    arr.push(d[columnName]);
  });
  // filter the array for empty or null values
  arr.filter(function(value) {
    return (value.length > 1 || value == null || value !== "")
  });

  return arr.length;
}