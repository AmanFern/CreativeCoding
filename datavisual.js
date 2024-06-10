let table;

function preload() {
  table = loadTable('Forecast.csv', 'csv', 'header'); // Load the CSV file
}

function setup() {
  createCanvas(600, 500); // Increased canvas height for title space
  background(102, 235, 195); // Light green background
  noLoop(); // Prevent draw from looping
}

function draw() {
  let data = [];
  for (let r = 0; r < table.getRowCount(); r++) {
    let category = table.getString(r, 'Category');
    let value = table.getNum(r, 'Value');
    data.push({ category, value });
  }

  // Draw the title
  fill(0); // Black color for text
  textSize(36);
  textAlign(CENTER);
  text("Weather Forecast for Next Week", width / 2, 60); // Title at top center

  let graphX = 50; // X position for graph start
  let graphY = 80; // Y position for graph start (below title)
  let graphWidth = width - 2 * graphX; // Graph width with margins
  let graphHeight = height - graphY - 60; // Graph height with bottom margin

  // Draw the bar graph
  let barWidth = graphWidth / data.length;
  for (let i = 0; i < data.length; i++) {
    // Randomize the color
    fill(random(255), random(255), random(255));

    // Base height from the value
    let baseHeight = map(data[i].value, 0, 100, 0, graphHeight);
    
    // Introduce a random variation in height
    let variation = random(-0.1, 0.1) * baseHeight; // 10% variation
    let barHeight = baseHeight + variation;

    rect(graphX + i * barWidth, graphY + (graphHeight - barHeight), barWidth - 10, barHeight);

    // Draw labels
    fill(0); // Black color for text
    textSize(12);
    textAlign(CENTER);
    text(data[i].category, graphX + i * barWidth + barWidth / 2, graphY + graphHeight + 15);
    text(data[i].value, graphX + i * barWidth + barWidth / 2, graphY + (graphHeight - barHeight) - 10);
  }
}
