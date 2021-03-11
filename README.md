# dataviz-exercise

Exercise on data visualisation using React, VX and GraphQL. Data from FakerQL.

<h2 style="font-size: 1.5rem; font-weight: bold">Post mortem</h2>

This was my first time using VX to visualise data in a browser. I aimed to make something simple experimenting with different types of graph (bar chart and line chart), with heavily simplified data (simple numerical values broken down by month, within a single year).

Even though I tried to make it simple, manipulating the data from a simple GraphQL query to make it usable by the chart components still took more time and calculations than I expected. Even then, the most time-consuming step by far was getting used to VX and the various elements needed to make its built-in components behave as expected.

<h2 style="font-size: 1.5rem; font-weight: bold">What I would do if I had more time</h2>

- Make it look better - including better contrast, axes on the first graph, and improving clarity with colors and hover effects on the topic labels to show which one is active at any time
- Add pointers on both graphs to show the exact value of each bar/data point on hover
- Make it responsive: definitely needed and probably quite time-consuming
- Experiment with more complex data and more chart types

<h2 style="font-size: 1.5rem; font-weight: bold">Steps to launch</h2>

- Fork the repository and clone it on your local machine
- Install the dependencies by running `npm i` in both client and server directories
  In the 'app' folder, create a .env file and add a variable called REACT_APP_API_URI. The value should be the API endpoint providing your data.
- Start the client with `npm run start`
