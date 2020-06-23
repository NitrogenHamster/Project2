
d3.json("brand.json").then(function(data){ 
  
  console.log(data);
  var dropdownMenu = d3.select("#selDataset");
  var dataset = dropdownMenu.property("value");

    pricearray = []
    yeararray = []
    data.forEach(element => {
      if (element.brand == dataset) {
        pricearray.push(element.Price)
        yeararray.push(element.year)
      }
     });
     console.log(pricearray)
     console.log(yeararray)
     
     trace1 = {
      type: 'scatter',
      x: yeararray,
      y: pricearray,
      mode: 'lines',
      name: dataset,
      line: {
        color: 'rgb(219, 64, 82)',
        width: 3
      }
    }; 
    
    var layout = {
      width: 500,
      height: 500,
      title: "Average Price of Vehicles Based on Year of Make",
      xaxis: { title: "Year of Make of Vehicles", fontColor: "rgb(219, 64, 82)" },
      yaxis: { title: "Average Price of Vehicles", fontColor: "rgb(219, 64, 82)" }
    };
    
    var data1 = [trace1];
    
    Plotly.newPlot('line', data1, layout);
  
    d3.selectAll("#selDataset").on("change", getData);

// // Function called by DOM changes
  function getData() {
    var dropdownMenu = d3.select("#selDataset");
  //   // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
  //   // Initialize an empty array for the country's data
    // var data = [];
    pricearray = []
    yeararray = []
    data.forEach(element => {
      if (element.brand == dataset) {
        pricearray.push(element.Price)
        yeararray.push(element.year)
      }
     });
     console.log(pricearray)
     console.log(yeararray)
     
     trace1 = {
      type: 'scatter',
      x: yeararray,
      y: pricearray,
      mode: 'lines',
      name: dataset,
      line: {
        color: 'rgb(219, 64, 82)',
        width: 3
      }
      
    };
    var data1 = [trace1];
    var layout = {
      width: 500,
      height: 500,
      title: "Average Price of Vehicles Based on Year of Make",
      xaxis: { title: "Year of Make of Vehicles", fontColor: "rgb(219, 64, 82)" },
      yaxis: { title: "Average Price of Vehicles", fontColor: "rgb(219, 64, 82)" }
    };
    
    Plotly.newPlot('line', data1, layout);
    }
});
d3.json("ColorData.json").then(function(data){
  console.log(data);
  var dropdownMenubar = d3.select("#selDatasetBar");
  var datasetbar = dropdownMenubar.property("value");

    colorarray = []
    countarray = []
    data.forEach(element => {
      if(element.year == datasetbar){
        colorarray.push(element.Color)
        countarray.push(element.brand)
      }
      
     });
     console.log(colorarray)
     console.log(countarray)
     
     var trace2 = {
      x: colorarray,
      y: countarray,
      type: "bar"
    };
    
    // Create the data array for the plot
    var data2 = [trace2];
      
        var layout = {
          height: 500,
          width: 500,
          title: "Sale of Vehicles Based on Color",
          xaxis: { title: "Color of Vehicles" },
          yaxis: { title: "Number of Vehicles" }
        };
      
    Plotly.newPlot("bar", data2, layout);
    d3.selectAll("#selDatasetBar").on("change", getData1);

    // // Function called by DOM changes
      function getData1() {
        var dropdownMenu = d3.select("#selDatasetbar");
        var dropdownMenubar = d3.select("#selDatasetBar");
        var datasetbar = dropdownMenubar.property("value");
      
          colorarray = []
          countarray = []
          data.forEach(element => {
            if(element.year == datasetbar){
              colorarray.push(element.Color)
              countarray.push(element.brand)
            }
            
           });
           console.log(colorarray)
           console.log(countarray)
           
           var trace2 = {
            x: colorarray,
            y: countarray,
            type: "bar"
          };
          
          // Create the data array for the plot
          var data2 = [trace2];
          var layout = {
            height: 500,
            width: 500,
            title: "Sale of Vehicles Based on Color",
            xaxis: { title: "Color of Vehicles" },
            yaxis: { title: "Number of Vehicles" }
          };
          Plotly.newPlot("bar", data2, layout);
            };
      
});     
     
     
