# How to debug like a champ

## Installation and setup

In order to debug like a champ you will need Chrome Dev Tools. First of all you should install Google Chrome. To open dev panel in Google Chrome, you'll need to click the three-dots icon in the upper-right-hand corner of the browser window, click More tools where you'll find Developer Tools in a drop-down list. One more option is to use Chrome Dev Tools hotkey: F12 (on Windows/Linux), and Option + ⌘ + J (on macOS).

Next, you should open the Dev Tools in new tab. You'll need to click the three-dots icon in the upper-right-hand corner of the Dev Tools tab and select the first option in the Dock side. Then, move it to new window in your OS. When debugging most of the time you won't need UI.

Optionally, you can enable debugging for Node.js code with `--inspect` and `--inspect-brk` option (`node --inspect index.js`). The `inspect-brk` option will cause your script to break at the first line of the application code.

After running your script with one of these options, open Chrome and navigate to chrome://inspect and click "Open dedicated DevTools for Node".

You'll then be able to set breakpoints, step through your code, inspect variables, and evaluate expressions in the Console.

In terms of packages, you may find ndb (_https://www.npmjs.com/package/ndb_) interesting. It's an improved debugging experience for Node.js, enabled by Chrome DevTools. This can be installed globally by using `npm install -g ndb`, and then you can use ndb instead of node to run your scripts.

## Debugging itself

You'll need 3 tabs: Console, Sources and Network. Console is for data output, Sources is your code you debug, Network shows your requests and responds via fetch.

We'll look at the Sources tab closer. Click Ctrl + P for search a file you need to debug. Click on a number of the code line in the file to create a break point. The code stops working on this line allowing to watch data of the variables just hovering a mouse on the variables.

Now, some advanced features. If you right click on the breackpoint you'll see an option "Edit breackpoint". A breakpoint can pass any JS code you like. You can change a variable by means of overriding it or pass a condition for a breakpoint. If you change a breakpoint type to logpoint it will type data to the Console tab.
