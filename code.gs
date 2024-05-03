function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}

function processFormData(formData) {
  const ss = SpreadsheetApp.create("FormData");
  const sheet = ss.getActiveSheet();
  const values = Object.values(formData);

  
  values.forEach((value, index) => {
    const numericValue = isNaN(Number(value)) ? 0 : Number(value);
    sheet.getRange(index + 1, 1).setValue(numericValue);
  });

 
  const numericValues = values.filter(value => !isNaN(parseFloat(value))).map(Number);
  const average = numericValues.length > 0 ? numericValues.reduce((acc, curr) => acc + curr, 0) / numericValues.length : "N/A";
  sheet.getRange(numericValues.length + 1, 1).setValue(average);

  
  if (numericValues.length > 0) {
    const chart = sheet.newChart()
       .setChartType(Charts.ChartType.LINE)
       .addRange(sheet.getRange(`A1:A${numericValues.length + 1}`))
       .setPosition(5, 1, 0, 0)
       .build();
    sheet.insertChart(chart);
  }

  
  return ss.getUrl();
}
