d3.json("depreciation_age_milage.json").then(function(data1){ 
  
  console.log(data1);
  var dropdownMenu = d3.select("#selDataset2");
  var dataset2 = dropdownMenu.property("value");

    pricearray = []
    odometerarray = []
    data1.forEach(element => {
      if (element.Manufacturer == dataset2) {
        pricearray.push(element.Price)
        odometerarray.push(element.Odometer)
      }
     });

     console.log(pricearray)
     console.log(odometerarray)
     
     ///change to scatter plot 
     trace1 = {
      type: 'scatter', 
      x: pricearray,
      y: odometerarray,
      mode: 'markers',
      //name: dataset2,
      //line: {
      //  color: 'rgb(219, 64, 82)',
      //  width: 3
      }
  
    var layout = {
      width: 1000,
      height: 500,
      title: "Vehicle Depreciation based on Kilometers",
      xaxis:{
        range:[-100,35000],
        title: "Kilometers(Km)", fontColor: "rgb(219, 64, 82)"
      },
      yaxis:{
        range:[-100,400000],
        title: "Price ($)", fontColor: "rgb(219, 64, 82)"
      }
    };
    
    var data_test = [trace1];
    
    Plotly.newPlot('scatter', data_test, layout);
  
    d3.selectAll("#selDataset2").on("change", getData);

// // Function called by DOM changes
    function getData() {
    var dropdownMenu = d3.select("#selDataset2");
  //   // Assign the value of the dropdown menu option to a variable
    var dataset2 = dropdownMenu.property("value");
  //   // Initialize an empty array for the country's data
    // var data = [];
    pricearray = []
    odometerarray = []
    data1.forEach(element => {
      if (element.Manufacturer == dataset2) {
        pricearray.push(element.Price)
        odometerarray.push(element.Odometer)
      }
     });
     console.log(pricearray)
     console.log(odometerarray)
     
     trace1 = {
      type: 'scatter',
      x: pricearray,
      y: odometerarray,
      mode: 'markers',
      //name: dataset2,
      //line: {
      //  color: 'rgb(219, 64, 82)',
      //  width: 3
      }
      
    };
    var data_test = [trace1];
    var layout = {
      width: 1000,
      height: 500,
      title: "Vehicle Depreciation based on Kilometers",
      xaxis:{
        range:[-100,35000],
        title: "Kilometers(Km)", fontColor: "rgb(219, 64, 82)"
      },
      yaxis:{
        range:[-100,400000],
        title: "Price ($)", fontColor: "rgb(219, 64, 82)"
      }
    };
    
    
    Plotly.newPlot('scatter', data_test, layout);
    
});
