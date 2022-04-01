// Create an app Object

// Obtain apiUrl
// Add user query (searchParams)

// Form submit will inside a click event function
// - Create an event listener that captures user input (selected input from the dropdown menu)
// Create a method (getPlanet) to make API call, which will take the user input as a parameter (userQuery)
// When the API call is successful, display the results as image gallery
// - create an empty ul in index file
// - create an li with an img and p tag inside

// - append to the empty ul
// If the API is unsuccessful, display a error message

// Create an init method so we can use our application
// call local methods


// created our namespace object 👇👇
const nasaApp = {}

// create a method that will capture the user's selected option value

nasaApp.dropDownMenu = () => {
    const userSelect = document.getElementById('option').value;
    console.log(userSelect);
}

// created our init method 🎉
nasaApp.init = () => {
    console.log('Good to go');
}
// called out init method 
nasaApp.init();