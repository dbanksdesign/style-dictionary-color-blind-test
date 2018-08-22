# style-dictionary-color-blind-test

This is an example style dictionary to show how you can run color blindness simulations on the colors of a style dictionary.

## Running

Install dependencies
```
npm i
```

Run the thing (it just runs `node build.js`)
```
npm run build
```

This will create 3 test html pages, you can open each of them to see how all the colors of the style dictionary look to different color blindnesses. You should see this output in your terminal:

```
protanopia
✔︎ build/blindnesses/protanopia.html

deuteranopia
✔︎ build/blindnesses/deuteranopia.html

deuteranomaly
✔︎ build/blindnesses/deuteranomaly.html
```

You can open those files to see!

Feel free to mess around with the formatter or build logic.