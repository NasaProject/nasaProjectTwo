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
const nasaApp = {};

// create a method that will capture the user's selected option value

const optionElement = document.querySelector("#solarSystem");

optionElement.addEventListener("change", function (event) {
  event.preventDefault();
  const selectId = document.getElementById("solarSystem");
  const selectedId = selectId.value;
  nasaApp.gallery(selectedId)
});

//create a method that will store our API call 👇👇

const gallery = document.querySelector('ul');
nasaApp.apiUrl = 'https://images-api.nasa.gov/search?q={q}';

nasaApp.gallery = (select) => {
    
    const url = new URL(nasaApp.apiUrl);
    url.search = new URLSearchParams({
        q: select,
        media_type: 'image',
        
    })

    fetch(url).then((response) => {
        return response.json();
    }).then((jsonResponse) => {
        console.log(jsonResponse)
    })

    
}

// created our init method 🎉
nasaApp.init = () => {
  console.log("Good to go");
  nasaApp.gallery();
};
// called out init method
nasaApp.init();