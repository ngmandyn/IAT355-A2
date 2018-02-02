var url = "http://www.sfu.ca/~ngmandyn/iat355/All_GPUs.csv";
var dimensions = ['Core_Speed', 'Max_Power', 'Memory', 'Memory_Bandwidth', 'Memory_Speed', 'PSU', 'Texture_Rate'];
var units = ['MHz', 'Watts', 'MB', 'GB/sec', 'MHz', 'Watts', 'GTexel/s'];

d3.csv(url, prepData, function(data) {
  console.log("TOTAL DATA ITEMS: " + data.length)

  // loops through array of dimension names, and prints the output for each function
  dimensions.forEach(function(dimension, i) {
    var title = "\n"+dimension+" ("+units[i]+")\n";
    var max   = "\nMax:   "+getMax(data, dimension);
    var min   = "\nMin:   "+getMin(data, dimension);
    var sum   = "\nSum:   "+getSum(data, dimension);
    var mean  = "\nMean:  "+getMean(data, dimension);
    var count = "\nCount: "+getCount(data, dimension);
    
    var print = title+max+min+sum+mean+count;
    console.log(print);
  });
})

// replaces row(function(d))
// strips units from given dimensions
function prepData(data) {
  stripUnitsForColumns(data, dimensions);
  return data;
}