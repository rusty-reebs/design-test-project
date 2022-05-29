## Notes

Hi! 

Install packages with `npm install`.

Run the app with `npm start`.

***A few comments:***

- Although I chose a fixed container width for simplicity, I usually design my projects for responsiveness. If you required a fully responsive page I could easily implement those changes.

- I also discovered that template literals are somewhat limited in Tailwind. For example, I wanted to use `"green-400"` as a `color` variable, but found that ``className={`text-${color}`}`` will not render correctly. Thus, I used both `"bg-green-400/30"` and `"text-green-400"` as color props.

- I noticed that the grid lines `first:border-b first:border-r last:border-t last:border-l` on the Detail components don't intersect perfectly (at least it looks that way on my machine). With more time, I would investigate this further and try solutions like `divide-x`, `divide-y`, or possibly pass the borders for each component through props.

- I assumed the data values to be fetched as a JSON object, which I placed in state.

- I used react-chartjs-2 and Chart.js to generate the chart, but I didn't spend too much time on it.
  

I'd be happy to discuss more details on a call! Thank you for your consideration. - Russell
