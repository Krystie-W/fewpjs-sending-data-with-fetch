
//function to control the existing DB data to render on the page first before the POST request
window.addEventListener('DOMContentLoaded', () => {
  submitData('Lola', 'test@outlook.com');
  })

//function to post the new data to the db
function submitData (name, email) {
    const userInfo = {
        name: `${name}`,
        email: `${email}`
      };
      const objectToSend = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
      };
  fetch("http://localhost:3000/users", objectToSend)
    .then(function(response) {
      return response.json();
    })
    .then(function(userObject) {
      document.body.innerHTML = renderIds(userObject);
    })
    .catch(function(error) {
      documentPage.insertAdjacentHTML('beforeend', error.message);
})
}

const documentPage = document.querySelector('body');
let arrayOfServerData = [];

//Function to render the IDs of the existing data in the db
function renderIds(userObject) {
  console.log(userObject);
  arrayOfServerData.push(userObject);
  console.log(arrayOfServerData);
  for(item of arrayOfServerData) {
    let html = '';
  return html = html + createHtml(item)
  }
}

//Function to create the html - reusable function
function createHtml (item) {
  console.log(item);
    return `<li>${item.id}</li><br>`
}

//Function to render the new ID just posted to the DB
/*function renderNewId (object) {
    //let html = '';
        html = html + createHtml(object);
        console.log(html);
        return html;
    }*/



