## Design Shine

### Team Members:

#### Bhavna Gupta
  * Send user-submitted reviews to Firebase
  * Pull data from Firebase to webpage

#### Jenna Ohira
  * Firebase for user accounts
  * Store and update user favorites across pages
  * Display beaches on map with Google Maps API
  * Access Google reviews through Google Places API

#### Tina Ahamad
  * Gathered current data from Spitcast API
  * Firebase for beach spot ids needed for API
  * Created popups with current beach conditions
  * Search function

#### Sarah Hall
  * Developed the layout structure on pages
  * Created the user interface and styling

### File Descriptions

#### index.html
Login page for the app. First page users see when they come to the site, allows them to create a new account or login with a pre-existing account.

#### home.html
Main page of app. Here users can view beaches clustered and marked on a map to the left, or they can view beaches closest to their current location on a list to the right. Users can search for specific beaches in the search bar at the top. The beaches will dynamically filter depending on what the user types. If a beach name is clicked in the list, a popup will appear with that beach's current weather data and reviews from users of the app and Google maps. The user can leave reviews here as well. The same popup will appear if a user finds a beach on the map and clicks the "view weather details" button. The user can mark their favorite beaches by clicking the star in the popup and these will be saved to their profile if they have logged in.

#### profile.html
This is where users can find and easily access their favorite beaches. By clicking on one of the listed beaches, they can view the current weather conditions, as well as remove the beach from their favorites.

#### reviews.html
This page displays all the reviews for that particular beach. Users can submit their own review, which will then be added under the ‘Reviews’ section along with any other reviews from our database. Underneath the user-submitted reviews are reviews from Google for the same beach and includes an average Google rating out of five stars. Users also have the option of adding or removing the beach from their favorites list.

#### index.css
Styling and structure for the login page

#### home.css
Styling and structure for the home page, separating the map and the list of beaches into two divs.

#### profile.css
Styles the profiles page, displaying the username, email and the user’s favorites listed below. It also styles the pop-up content that is displayed when the user clicks on one of the beaches on the list.

#### reviews.css
Styling and structure for the reviews page, first displaying an area for users to write their own review, then showing other user-submitted reviews, and finally displaying Google reviews.

#### server.js
Node.js + Express server backend for Tidekick. To start the server, run node server.js, and open the webpage at http://localhost:3000/

#### script.js
Connects to the spitcast API to get a list of beaches in San Diego County.It then displays the beach names in a list on the home page of Tidekick for the user to read and search through.

### Final Slide Link
https://docs.google.com/presentation/d/1gbf40r-wSdtomNjCIKwE_kSt7p_Zmzy306VmIlV9WxA/edit?usp=sharing

### Demo Video Link
https://www.youtube.com/watch?v=a6wguW5FDQ4
