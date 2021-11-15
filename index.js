const documentPage = document.querySelector("body");
let arrayOfServerData = [];

//function to control the existing DB data to render on the page first before the POST request
window.addEventListener("DOMContentLoaded", async () => {
  await submitData("Lola", "test@outlook.com");
});

//function to post the new data to the db
async function submitData(name, email) {
  const userInfo = {
    name: `${name}`,
    email: `${email}`,
  };

  const objectToSend = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userInfo),
  };

  try {
    const response = await fetch("http://localhost:300/users", objectToSend);
    const data = await response.json();

    document.body.innerHTML = renderIds(data);
  } catch (error) {
    console.log("erorr! I got caught in the catch block");
    documentPage.innerText = error.message;
  }
}

//Function to render the IDs of the existing data in the db
function renderIds(userObject) {
  arrayOfServerData.push(userObject);

  let html = "";

  for (item of arrayOfServerData) {
    html = html + createHtml(item);
  }

  return html;
}

//Function to create the html - reusable function
function createHtml(item) {
  return `<li>${item.id}</li>`;
}

//Function to render the new ID just posted to the DB
/*function renderNewId (object) {
    //let html = '';
        html = html + createHtml(object);
        console.log(html);
        return html;
    }*/
