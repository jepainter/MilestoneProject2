# Milestone Project 2: City Safari Website

The deployed website can be accessed from here: [City Safari](https://jepainter.github.io/MilestoneProject2/)

## Goal of the website

The website created is a responsive and interactive travel information website to give the user feedback 
regarding a number of attractions available in a specific city that have been searched. 

The user selects a city and attraction type, for which the results are displayed on the map
together with detail information such as contact numbers, addresses and website links.

### Project Purpose:
The project purpose is to demonstrate accessing, manipulating and displaying data retrieved from a third-party API resource.
The website utilises the Google Maps API and Google Places Library to return and visualise search results.

Limitations:
- The website delivers a maximum of 20 search results for each type of attraction, this can be expanded upon in future by implementation of **pagination** up to 60 search results (as per Google Maps API documentation).
- The website delivers detailed place information, however some information fields may be returned as **undefined** where information is not available from the Google Places Library, this has been caught in the map.js and replaced with N/A for better visual appearance.
- The detailed place information is limited to 10 queries per second (as per Google Places Library documentation), and therefore the request had to be throttled (using setInterval) in order to retrieve data for the full list of 20 places, which affects speed of results returned.
  Upgrading the usage plan will another solution for this problem, however would possibly incur additional costs and are considered outside of the scope of this project.
- Website links to third party sites (populated in data table) cannot be guarenteed to be safe/secure or valid/available as it is dependent on the results returned from the Google Places Library.

## UX

This website provides the relevant functionality to satisfy the requirements, in detail (guided by user stories/requirements):
- Provide the opportunity to sign-up to a newsletter to stay up to date with developments regarding the site (such as future bookings functionality, special offers, etc.).
- Ability to search and display a selected city on a map.
- Ability to select a specific attraction and give details of the establishment in a table format.
- Ability to mark the map with markers for search results of selected attractions within the selected city.
- Ability to provide additional details when a map marker is clicked, such as address and contact information.

### User Stories:
- As a resident of a town, I would like to look up bars and restaurants in the town and be able to get contact numbers.
- As a tourist, I want to view available tourist attactions a specific city, with a view to visit it.
- As a tourist I want to be able to view accommodation within a specific city, to book as part of my planned trip.
- As someone that uses the site frequently, I want to remain updated with new functionality 
of the site (future bookings functionality,etc), by means of signing up to a newsletter.
- As a travel agency, I want to be able to connect to the website of a specific attraction identified.


### Wireframes:
Wireframes for the initial development of the site can be found here:
- [Mobile](https://github.com/jepainter/MilestoneProject2/blob/master/development/Milestone%20Project%202%20-%20Mobile%20Design.pdf)
- [Desktop](https://github.com/jepainter/MilestoneProject2/blob/master/development/Milestone%20Project%202%20-%20Tablet%20%26%20Desktop%20Design.pdf)

### Design considerations:
It was decided to style the website with a simple and clean design:
- High contrast colours.
- Simple one page layout with four main sections (navigation, map area, data table area and footer).
- Minimal/Simple user input requirement for quick and easy result return.

The design utilises the Bootstrap grid system, containers and components responsive
to different screen sizes and devices, styled with the Bootswatch Materia theme. 

This site is limited to interactive front-end design only (HMTL, CSS and JavaScript). 

## Features

### Existing Features
- Feature 1 - Navigation: Simple navigation of the site that jumps to the selected section on the site (at top of index.html).
- Feature 2 - City Selector:  City selector with manual typed input and autocomplete functionality, powered by Google Maps API.
- Feature 3 - Map Display:  Map that displays city selected once input is received, powered by Google Maps API.
- Feature 4 - Attraction Selector:  Common attractions can be selected from a predefined 
  selection list (can be expanded in future for additional attractions i.e. shopping malls, etc.).
- Feature 5 - Data Table: Displays results of searched attractions within the specified city, powered by Google Places Library.
- Feature 6 - Map Markers: Displays results of search attractions on the map using alphabetical identifier for reference with Data Table.
- Feature 7 - Marker Info:  Displays additional results of selected attraction, not populated in data table.
- Feature 8 - Newsletter:  Newsletter sign up that allows user to populate form, which is sent to an email address, powered by EmailJS.
- Feature 9 - Social Media: Links to social media platforms.

### Features Left to Implement
- Feature A - Autocenter map on user's location (geo locate), rather than default to Paris, France.
- Feature B - Booking functionality when an attraction is selected.
- Feature C - Pagination for greater result numbers to be implemented.
- Feature D - Auto close of infowindows if new Map Marker is selected.

## Technologies Used

The following languages, frameworks, libraries, IDE, repositories and tools were used for the creation of this website:

- [HTML](https://en.wikipedia.org/wiki/HTML)
    - This project utilises the **HTML** language and sematic elements for basic layout and function.   

- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    - This project is styled using **CSS** where required for classes and specific elements. 

- [Bootstrap](https://getbootstrap.com/)
    - This project was predominantly created using the **Bootstrap** grid system and components (incorporated through the Bootstrap CDN), to create the layout and responsive design of the page.

- [Bootwatch](https://bootswatch.com/materia/)
    - This project relies on the Bootswatch Materia theme for styling of the site and Bootstrap grid system and components.

- [FontAwesome](https://fontawesome.com/)
    - This project utilises **FontAwesome CDN** for icons utilised on the website, specifically for social media icons. 

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
    - This project utilises **JavaScript** for the executions of functions relating to the API resources (connect, retrieve data, manipulate and display).

- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial)
    - This project utilises the **Google Maps JavaScript API** for searching and displaying locations, as well as retrieve basic data regarding points of interest.

- [Google Places Library](https://developers.google.com/maps/documentation/javascript/places)
    - This project utilises the **Google Places Library** for searching detailed data regarding points of interest.     

- [jQuery](https://jquery.com/)
    - This project utilises **jQuery** for the responsive navbar.

- [Popper.js](https://popper.js.org/)
    - The project uses **Popper.js**  for the responsive navbar.

- [AWS Cloud9](https://www.awseducate.com)
    - This project was created using **AWS Cloud9** IDE for development, as well as committing of progress to GitHub. 

- [GitHub](https://github.com)
    - This project uses **GitHub** for hosting of project repository, as well a publishing of website. 

- [FreeLogoDesign](https://www.freelogodesign.org/)
    - Used **FreeLogoDesign.org** to generate a logo for my site.

- [Favicon](https://www.favicon-generator.org/)
    - Used **Favicon-generator.org** to generate at favicon for my site from a logo designed.

- [W3C Markup Validation Service](https://validator.w3.org/)
    - This project was tested using the **W3C Markup Validation Service** for checking conformity and validity of html content. 

- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
    - This project was tested using the **W3C CSS Validation Service** for checking conformity and validity of css content. 

- [Autoprefixer CSS Online](https://autoprefixer.github.io/)
    - Used **Autoprefixer CSS Online** tool to update/confirm prefixes for style.css code.

## Testing

Testing for this site was performed as follows:

### Code Validation:
The index.html file was firstly tested using the W3C HTML Validation site, with no errors reported, 
however warnings were issued for not having headings for each section (this was ignored as it is nto relevant to the design of the page).
The style.css file was tested using the W3C CSS Validation site, with no errors reported.
The style.css file was run through the Autoprefixer CSS Online tool.

The site was tested on Google Chrome (desktop and mobile through dev tools), Opera (desktop only) and Safari (mobile only iPhone6) for functionality.  Verified working well.

This site was also tested manually in line with the user stories and general functionality.  The following testing scenarios were applied across all screen sizes (as a test of responsive design):

### Testing Scenarios:
1. Newsletter Sign-Up form:
    1. Go to the "Home" page, click on Newsletter Sign Up icon (newspaper) in the footer button.
    2. Modal to appear with input to be filled in form, verified working correctly.
    3. Try to submit the empty form and verified that an error message about the required fields appears.
    4. Try to submit the form with an invalid email address and verified that a relevant error message appears.
    5. Try to submit the form with all inputs valid with no errors, verified working correctly.
    6. Email received in test email mailbox if successfull submission, verified working correctly.
    7. Alert message displayed indicating that for submitted successfully, verified working correctly.
    8. Modal closes after successful submit, and content is cleared from modal, verified working correctly.

2. Footers:
    1. Go to Footer section on page.
    2. Checked that footer content is stacked on top of one another for smaller screen sizes and adjacent to one another on larger displays, verified working correctly.
    3. Checked that icons link to correct social media site (in a new page), verified working correctly.
    4. Checked that transitions on desktop view is applied on hover over social media icons, working correctly.

3. Navigation Bars:
    1. Go to Navigation bar on page.
    2. Check that brand logo resizes on larger screens, verified working correctly.
    3. Check that navigation links collapse to navigation toggle on smaller screens, verified working correctly.
    4. Checked that links navigate to sections on page, verified working correctly.

4. City Selector:
    1. Go to City Selector section on page.
    2. Type in invalid city name, no autocomplete options displayed, verified working correctly.
    3. Type in invalid city name and press enter, no futher action taken by applications, verified working correctly.
    4. Type in valid city name in input field, autocomplete to show valid options for selection, verified working correctly. 
    5. Select valid city option, map should pan to selected city, verified working correctly.
    6. Upon selection of a new city, existing map markers and attraction results are cleared from the map and table area, verified working correctly.

5. Map Display Area:
    1. Go to Map section on page.
    2. Map display area should indicate Paris, France as default, verified working correctly.
    3. Map controls are functioning in terms of zoom out and in, map/satellite toggle, verified working correctly.
    4. Map markers reveal detail of place in infowindow if clicked on, verified working correctly.

6. Attraction Selector:
    1. Select attraction from drop-down list.
    2. Attractions searched for within the confines of the map area/city selected, are populated in table as results are retrieved, verified working correctly.
    3. Map markers are added to the map as results are retrieved and populated to the table, verified working correctly.
    4. Map marker labels are aligned to table # references, verfied working correctly.
    5. Upon new attraction selected, table and map markers are cleared, verfied working correctly.
    6. Upon new attraction selected, a new table and map markers are populated into the page, verified working correctly.

## Deployment

This project is deployed on GitHub and is accessible as follows:
- Website: [GitHub Pages](https://jepainter.github.io/MilestoneProject2/)
- Repository: [GitHub](https://github.com/jepainter/MilestoneProject2)

For this project I used the AWS Cloud9 IDE platform [AWS Cloud9](https://www.awseducate.com) via the AWS Educate portal.
The platform allowed me to commit my pages (and changes) to Git, following which it was pushed through to the [GitHub repository](https://github.com/jepainter/MilestoneProject2).

Deployment of the website from its repository to GitHub Pages were accomplished through the following method: 
1. Logged into the GitHub website. 
2. Selected the **jepainter/MilestoneProject2** repository.
3. Selected **Settings** from the menu items.
4. Found the **GitHub Pages** section by scrolling down in the browser window.
5. Selected the **Master Branch** options from the drop-down list under the **Source** section
6. The web site is deployed once the page refreshes, from where the link to the site can be obtained by scrolling down to the **GitHub Pages** section.

This website can also be **locally deployed** by following the method outlined below:
1. Use the following link to access the project repository: [GitHub](https://github.com/jepainter/MilestoneProject2).
2. Click on the **Clone or Download** button, under the repository name.
3. Copy the clone URL for the repository, found in the **Clone with HTTPS** section. 
4. Open **Git Bash** in your local IDE environment.
5. Select the location to where the cloned directory must be made.
6. Input ```git clone``` together with the copied clone URL into Git Bash and press Enter.

The deployed version on **GitHub Pages** is the same as the development version.

## Credits

### Content
- Map display is obtained using the Google Maps API, default set as Paris, France, refreshing to the selected city once the user inputs a different city.
- Map search autocomplete is powered by the Google Maps API, which provides valid options as the user types.
- Content for the Data Table is obtained using the Google Places Library, to provide detail fields.
- Content for the infowindows (click on a map marker) is obtained from the Google Places Library.
- Wallpaper background obtained from [GetWallpapers.com](http://getwallpapers.com/collection/black-and-white-city-wallpaper) and is used purely for educational purposes.

### Media
- No additional media was sourced for this project/displayed.

### Acknowledgements
- I would like to thank my mentor, Dick Vlaanderen, for input provided during the development of the site.
