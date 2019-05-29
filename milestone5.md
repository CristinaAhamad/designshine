## Design Shine

### Team Members:

Bhavna Gupta, Jenna Ohira, Tina Ahamad & Sarah Hall

## Target User
The target demographic of users for our app are surfers in California.  For someone that lives far from the beach, wave and weather information is hard to ascertain; in the app, users can look up wave conditions of various beaches in the area to see which beach is the ideal location to surf at that time. Users can find which beach they would like to visit, so they don’t have to physically go to different beaches in order to find the ideal surfing location at that time. This prevents users from wasting time and going to a beach where the surfing conditions are not ideal.

## UI Screenshots
<img width="986" alt="Screen Shot 2019-05-28 at 11 31 09 PM" src="https://user-images.githubusercontent.com/20780820/58536155-9111e700-81a4-11e9-92e3-49eb43745c3e.png">

<img width="1151" alt="Screen Shot 2019-05-28 at 11 24 23 PM" src="https://user-images.githubusercontent.com/20780820/58536154-9111e700-81a4-11e9-8c68-697faa816fb4.png">

## Improvements
In Milestone 4, the wave information appeared underneath the beach’s name (in the beach list); for Milestone 5, when the user clicks on a beach, the wave information is displayed in a popup window instead, making it easier to read for the user. Additionally, the current conditions (“fair”, “poor”, etc.) has a bar beneath it that will display a color corresponding to how good the conditions are. For example, “poor-fair” has a yellow bar, whereas “good” conditions will have a green bar. Finally, when a user hovers the mouse over a beach, the beach is highlighted and a darker blue in order to show the user that the name of the beach is clickable. This indicates to users that there is more to the app then just a list of beaches in the area. 

## Data Visualization
Beach forecasts were taken from an API called Spitcast. Beaches were grouped based on county, we used San Diego county, which are displayed as a list to the right of the map on the home page. Each beach has a spot id that was collected and saved in Firebase, along with user submitted reviews. When the user clicks on a beach in the list of nearby beaches, a popup displays that beach’s current weather, tide, swell, and wave size. The popup includes a meter to show the user a visual representation of the current conditions (described above). The name of the beach clicked is the key used in Firebase to get the spot id value which is then used in the API  request of the forecast data. Firebase also contains reviews submitted by users on the app which are also displayed on the popup. The Google Maps API is used to display beaches  in a map view on the left of the home page. The map clusters beaches together to show the user where there is a higher concentration of beaches. The user can click on these clusters and the map will zoom into this location and the clusters will decrease until they are single, pinned locations that the user can click on to get beach information. The Maps API is also used to get Google reviews of each beach displayed in the popup.

## Additional Implementation
For the ratings portion of the app, we would ideally like to implement an “experience level” to each beach, indicating whether the current conditions are best for beginner surfers, intermediate surfers, or advanced surfers. This could be displayed through the letters “B”, “I”, and “A” in a circle; when the user hovers over the circle with the mouse, the label would change to “advanced beach”, or whatever the current conditions dictate the experience level to be at that time. We would also like to add more visuals for the forecast information. For example, for wave sizes, we would like to have icons of waves that varied in size; a small wave would have an icon with a smaller height, and so on. There would similarly be icons for swell, tide, and wind.
