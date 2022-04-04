// create our namespace object 👇👇
const nasaApp = {};

// create a method that will capture the user's selected option value
const optionElement = document.querySelector("#solarSystem");

optionElement.addEventListener("change", function (event) {
  event.preventDefault();
  const selectId = document.getElementById("solarSystem");
  const selectedId = selectId.value;
  nasaApp.unorderedList(selectedId)
});

// create a method that will store our API call 👇👇

const unorderedList = document.querySelector('ul');
nasaApp.apiUrl = 'https://images-api.nasa.gov/search?q={q}';

nasaApp.unorderedList = (select) => {
    
    const url = new URL(nasaApp.apiUrl);
    url.search = new URLSearchParams({
        q: select,
        media_type: 'image',
        page: 1
    })

    fetch(url).then((response) => {
        return response.json();
    }).then((jsonResponse) => {
      console.log(jsonResponse.collection.items)
    
      // clear out the ul 
      document.querySelector('ul').innerHTML = ''
      nasaApp.displayImages(jsonResponse.collection.items);
    })
}

// function to display the images to our page
nasaApp.displayImages = (nasaPhotos) => {
  // forEach loop to get each individual image
  nasaPhotos.forEach((item, i) => {
    //hey Alex, here I limited the quantity of images being displayed on our page to 10
    const limitItems = 9
    if (i > limitItems) { 
      return
    }


    const links = item.links[0]

    const data = item.data[0]

    // create the html for each image that will be displayed
    const title = document.createElement('h2')
    title.innerText = data.title

    const dateCreated = document.createElement('p')
    dateCreated.innerText = data.date_created

    const image = document.createElement('img')
    image.src = links.href
    image.alt = data.description

    // create a container div
    const div = document.createElement('div')
    div.classList.add("wrapper")

    const list = document.createElement('li')

    const gallery = document.querySelector('#gallery')

    
    unorderedList.appendChild(list)
    list.appendChild(title)
    list.appendChild(dateCreated)
    list.appendChild(image)
    div.appendChild(unorderedList)
    gallery.appendChild(div)

  })
}

// create our init method 🎉
nasaApp.init = () => {
  console.log("Good to go");
  nasaApp.unorderedList('');
};

// calling out the init method
nasaApp.init();
