/// Depreciation formula 
/// Initial Cost (MRSP) - Asking / Lifespan = $ Depreciation per year /1000 = depreciation % per year

var MRSP = 25000
var ask_Price = 10000
var lifeSpan = 6

/// Depreciation Formula
dep_percentage_rate = ((MRSP - ask_Price) / lifeSpan)/1000

/// Print/console.log statements ---ADD THE % SIGN INTO THE statement
print (dep_percentage_rate)
console.log(dep_percentage_rate)

//// Formula for line chart - dep_percentage_rate x age_year
var age_year = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
dep_Life = dep_percentage_rate * age_year
print(dep_Life)

var top_Sellers = [
    {
    makeModel : "2019 Ford EcoSport",
    dealerPrice : 16627,
    msrpPrice: 24849
    },
    {
        makeModel : "Nissan Kicks",
        dealerPrice : 17230,
        msrpPrice: 18298
    },
    {
        makeModel : "Chevrolet Trax",
        dealerPrice : 17403,
        msrpPrice: 25700
    }];

var yAxis = [5000,10000,15000,20000,25000,30000,35000,40000,45000,50000,55000,60000,65000,70000,75000,80000,85000,90000,95000,100000];
/// Depreciation rate line chart 

chart = {
    const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height])
        .style("overflow", "visible");
  
    svg.append("g")
        .call(age_year);
  
    svg.append("g")
        .call(yAxis);
  
    const path = svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
      .selectAll("path")
      .data(data.series)
      .join("path")
        .style("mix-blend-mode", "multiply")
        .attr("d", d => line(d.values));
  
    svg.call(hover, path);
  
    return svg.node();
  }
  data = Object {
    y: "MRSP"
    series: top_sellers[Object, Object, Object]
    dates: age_year
  }
  data = {
    const data = d3.jsParse(await FileAttachment("Top_Sellers_SUV_Autotrader.js").text());
    const columns = data.columns.slice(1);
    return {
      y: "MRSP",
      series: data.map(d => ({
        name: d.name.replace(/, ([\w-]+).*/, " $1"),
        values: columns.map(k => +d[k])
      })),
      dates: columns.map(d3.utcParse("age_year"))
    };
  }
  hover = ƒ(svg, path)
  function hover(svg, path) {
  
    if ("ontouchstart" in document) svg
        .style("-webkit-tap-highlight-color", "transparent")
        .on("touchmove", moved)
        .on("touchstart", entered)
        .on("touchend", left)
    else svg
        .on("mousemove", moved)
        .on("mouseenter", entered)
        .on("mouseleave", left);
  
    const dot = svg.append("g")
        .attr("display", "none");
  
    dot.append("circle")
        .attr("r", 2.5);
  
    dot.append("text")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "middle")
        .attr("y", -8);
  
    function moved() {
      d3.event.preventDefault();
      const mouse = d3.mouse(this);
      const xm = x.invert(mouse[0]);
      const ym = y.invert(mouse[1]);
      const i1 = d3.bisectLeft(data.dates, xm, 1);
      const i0 = i1 - 1;
      const i = xm - data.dates[i0] > data.dates[i1] - xm ? i1 : i0;
      const s = d3.least(data.series, d => Math.abs(d.values[i] - ym));
      path.attr("stroke", d => d === s ? null : "#ddd").filter(d => d === s).raise();
      dot.attr("transform", `translate(${x(data.dates[i])},${y(s.values[i])})`);
      dot.select("text").text(s.name);
    }
  
    function entered() {
      path.style("mix-blend-mode", null).attr("stroke", "#ddd");
      dot.attr("display", null);
    }
  
    function left() {
      path.style("mix-blend-mode", "multiply").attr("stroke", null);
      dot.attr("display", "none");
    }
  }
  margin = Object {top: 20, right: 20, bottom: 30, left: 30}
  margin = ({top: 20, right: 20, bottom: 30, left: 30})

  x = ƒ(n)
  x = d3.scaleUtc()
    .domain(d3.extent(data.dates))
    .range([margin.left, width - margin.right])

  y = ƒ(n)
  y = d3.scaleLinear()
    .domain([0, d3.max(data.series, d => d3.max(d.values))]).nice()
    .range([height - margin.bottom, margin.top])

  xAxis = ƒ(g)
  xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))

  yAxis = ƒ(g)
  yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
    .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(data.y))

  line = ƒ(a)
  line = d3.line()
    .defined(d => !isNaN(d))
    .x((d, i) => x(data.dates[i]))
    .y(d => y(d))
d3 = Object {format: ƒ(t), formatPrefix: ƒ(t, n), timeFormat: ƒ(t), timeParse: ƒ(t), utcFormat: ƒ(t), utcParse: ƒ(t), FormatSpecifier: ƒ(t), active: ƒ(t, n), arc: ƒ(), area: ƒ(), areaRadial: ƒ(), ascending: ƒ(t, n), autoType: ƒ(t), axisBottom: ƒ(t), axisLeft: ƒ(t), axisRight: ƒ(t), axisTop: ƒ(t), bisect: ƒ(n, r, e, o), bisectLeft: ƒ(n, r, e, o), bisectRight: ƒ(n, r, e, o), …}
d3 = require("d3@5", "d3-array@2")
