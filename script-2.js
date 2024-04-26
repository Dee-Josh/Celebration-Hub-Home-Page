
// For getting Get Started Details from Home Page
const getStartedDetails = JSON.parse(localStorage.getItem("getStartedDetails"));


// To display the gotten details
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const dEvent = document.querySelector(".event");

firstName.value = getStartedDetails.firstName;
lastName.value = getStartedDetails.lastName;
dEvent.value =  getStartedDetails.event;




// For Automatic Updating of Web Address
const linkInput = document.querySelector(".link-input");
linkInput.value = `${firstName.value}-${lastName.value}`;

firstName.addEventListener("keyup", ()=>{
    linkInput.value = `${firstName.value}-${lastName.value}`;
})

lastName.addEventListener("keyup", ()=>{
    linkInput.value = `${firstName.value}-${lastName.value}`;
})



