var url = "http://www.sfu.ca/~ngmandyn/iat355/All_GPUs.csv";

var gpuData = d3.csv(url);

d3.csv(url, function(data) {

  console.log(" # GPUs: " + data.length)

  var lowROP = data.filter(function(d){
    return (d.ROPs < 2 && d.ROPs != "");
  });

  console.log(lowROP);

//   var calculateMax = d3.max(data, function(d) {
//     return d['ROPs'];
//   });

//   console.log(calculateMax);

})

function calculateMax (columnName, dataName) {
  // d3.max(dataName, function(d) {
  //   return d[columnName];
  // });
  return d3.max(dataName, d => d[columnName]);
}
console.log(calculateMax('ROPs', gpuData));


function calculateMin (columnName, dataName) {
  d3.min(dataName, function(d) {
    return d[columnName];
  });
}
console.log(calculateMin('ROPs', gpuData));