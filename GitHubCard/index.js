import axios from "axios";
// import "regenerator-runtime/runtime";

/*
  STEP 1: using ax
  ios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
async function fetchData(url) {
	let store;
	let cards = document.getElementsByClassName("cards")[0];
	await axios
		.get(url)
		.then((data) => {
			store = data.data;
			cards.appendChild(card(store));
		})
		.catch((error) => {
			console.log(error);
		});
}

fetchData("https://api.github.com/users/melissaannee");

const followersArray = [
	"aaronamendez",
	"berenikaahmetaj",
	"marcosamartinez",
	"tannerlinsley",
	"isaiahjturner",
];

followersArray.forEach((elem) => {
	fetchData(`https://api.github.com/users/${elem}`);
});
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function card(obj) {
	let divCard = document.createElement("div");
	divCard.classList.add("card");

	let img = document.createElement("img");
	img.src = obj.avatar_url;

	let divCardInfo = document.createElement("div");
	divCardInfo.classList.add("card-info");

	let h3 = document.createElement("h3");
	h3.classList.add("name");
	h3.textContent = obj.name;

	let p1 = document.createElement("p");
	p1.classList.add("username");
	p1.textContent = obj.login;

	let p2 = document.createElement("p");
	p2.textContent = `Location: ${obj.location}`;

	let p3 = document.createElement("p");
	p3.textContent = "Profile: ";

	let aTag = document.createElement("a");
	aTag.href = obj.html_url;
	aTag.textContent = obj.html_url;

	p3.appendChild(aTag);

	let p4 = document.createElement("p");
	p4.textContent = `Followers: ${obj.followers}`;

	let p5 = document.createElement("p");
	p5.textContent = `Following: ${obj.following}`;

	let p6 = document.createElement("p");
	p6.textContent = `Bio: ${obj.bio}`;

	// Appends
	divCard.appendChild(img);
	divCard.appendChild(divCardInfo);

	divCardInfo.appendChild(h3);
	divCardInfo.appendChild(p1);
	divCardInfo.appendChild(p2);
	divCardInfo.appendChild(p3);
	divCardInfo.appendChild(p4);
	divCardInfo.appendChild(p5);
	divCardInfo.appendChild(p6);

	return divCard;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
