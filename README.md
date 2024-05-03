# Get Average of Some Numbers

This application allows users to input a series of numbers and calculates the average of these numbers. It is hosted on a custom domain using Google Apps Script, which serves the application through an embedded iframe (as seen in [`iframe-trick.html`](https://github.com/motoemoto47ark123/get-average-of-some-numbers/blob/main/iframe-trick.html)).

The backend logic, written in Google Apps Script ([`code.gs`](https://github.com/motoemoto47ark123/get-average-of-some-numbers/blob/main/code.gs)), processes the form data to compute the average and dynamically generates a Google Spreadsheet with the inputted numbers and their calculated average. This spreadsheet is then visualized using a line chart.

You can try out the application here: [Get Average of Some Numbers](https://testing.motoemotovps.us.to/get-average-of-some-numbers/)

## How It Works
- The user inputs numbers via a web form hosted on a custom domain.
- Upon form submission, the Google Apps Script processes the input to calculate the average.
- The results are displayed in a Google Spreadsheet, which includes a line chart visualization of the data.
- The application is embedded into a custom domain using an iframe in [`iframe-trick.html`](https://github.com/motoemoto47ark123/get-average-of-some-numbers/blob/main/iframe-trick.html).

Feel free to explore the application and use it to calculate averages for your datasets!
