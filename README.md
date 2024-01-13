# dualsense_battery
Get the battery level from a playstation dual sense game controller via bluetooth.

Output looks like this:

when charging: `Battery %: 90 ↑`  
not charging: `Battery %: 90 ↓`

install node-hid:  
`npm install node-hid`

run:  
`node dualsense.js`

note: battery levels are in ~10% increments
