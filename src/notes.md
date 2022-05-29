
Notes:
I chose a fixed container width for this design but I usually design my projects for responsiveness. If you required a fully responsive page I could easily implement those changes.

I also discovered that template literals are somewhat limited in Tailwind. For example, I wanted to use `"green-400"` as a `color` variable, but found that ``className={`text-${color}`}`` will not render correctly. Thus, I used `"bg-green-400/30"` and `"text-green-400"`.

I assumed the data values to be fetched as a JSON object, which I placed in state.


-- straighten x-divider with svg height/inline
-- clean up index.html


data array
    title:
    quantity:
        if >1000 convert to decimal and K
    change:
        if >0 green, if <0 red (and icon)

put values in state
might have to hard code each Detail with props like title, icon, color, border
then use state for values

<App>
<Users>
    <Detail maybe specify icon and color as prop>
    <Detail>
    <Detail specify as percent in prop>
    <Detail specify suffix in prop>
</Users>
<Views>
buttons in state
table for graph
</App>

