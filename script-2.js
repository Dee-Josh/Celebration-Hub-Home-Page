
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



// FOR MOBILE INDICATOR

const isMobileActive = document.querySelector('.mobile-status');
const mobileIndicator = document.querySelector('.mobile-status .inside');


if(isMobileActive.classList.contains('active')){
    mobileIndicator.style.display = 'block';
    isMobileActive.style.background = `linear-gradient(#4FACE9, 2%, #ff0059, 98%,  #4FACE9)`;
    isMobileActive.style.color = `white`;
}

