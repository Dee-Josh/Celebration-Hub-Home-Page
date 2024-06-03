// Array for the features
const freeFeatures = [
    {
        bold: "No ads. Ever",
        text: "",
        iconHTML: `<i class="fa-solid fa-check"></i>`,
    },
    {
        bold: "Selection of beautiful themes",
        text: "Customize your website with one of many available themes.",
        iconHTML: `<i class="fa-solid fa-check"></i>`,
    },
    {
        bold: "Photo gallery",
        text: "Import and share photos of your loved one from your PC, mobile device, or Facebook page. Collaborators may also share photos.",
        iconHTML: `5<br><span>PHOTOS</span></i>`,
    },
    {
        bold: "Share your memories",
        text: "Create biography, share stories, light virtual candles, leave other tributes celebrating the life of a family member or friend who passed away.",
        iconHTML: `<i class="fa-solid fa-check"></i>`,
    },
    {
        bold: "Unlimited collaborators",
        text: "Invite as many family, friends, and colleagues as you would like to collaborate and create the online memorial page together.",
        iconHTML: `<i class="fa-solid fa-check"></i>`,
    },
    {
        bold: "Integration with popular online services",
        text: "Invite your Facebook friends, share on your Timeline, and import media directly from YouTube and your Facebook page.",
        iconHTML: `<i class="fa-solid fa-check"></i>`,
    },
    {
        bold: "Privacy Controls",
        text: "You may choose to keep your memorial website and its content visible only to you or allow everyone to visit and contribute.",
        iconHTML: `<i class="fa-solid fa-check"></i>`,
    },
]

// Premium features
const premiumFeatures = [
    {
        bold: "All basic features",
        text: "Includes all features available on a FREE website.",
        iconHTML: `<i class="fa-solid fa-check"></i>`,
    },
    {
        bold: "Photo gallery",
        text: "Import and share photos of your loved one from your PC, mobile device, or Facebook page. Collaborators may also share photos.",
        iconHTML: `<i class="fa-solid fa-infinity"></i><br><span>UNLIMITED</span>`,
    },
    {
        bold: "Advanced privacy controls",
        text: "Control who can see your memorial by blocking strangers and inviting only selected guests. Your memorial will not be visible to anyone else.",
        iconHTML: `<i class="fa-solid fa-check"></i>`,
    },
    {
        bold: "Video and music galleries",
        text: "Enhance the memorial website with favorite music and videos of your loved one. You may add media from your PC or mobile device, YouTube, and your Facebook profile.",
        iconHTML: `<i class="fa-solid fa-infinity"></i><br><span>UNLIMITED</span>`,
    },
    {
        bold: "Enhanced stories",
        text: "Illustrate stories and Life Story chapters with photo, video, and audio attachments.",
        iconHTML: `<i class="fa-solid fa-check"></i>`,
    },
    {
        bold: "Background music playlist",
        text: "Upload your favorite songs and use them as a musical background for the website.",
        iconHTML: `<i class="fa-solid fa-infinity"></i><br><span>UNLIMITED</span>`,
    },
    {
        bold: "Additional administrators",
        text: "Designate trusted friends and family members as additional memorial administrators.",
        iconHTML: `<i class="fa-solid fa-check"></i>`,
    },
    {
        bold: "Manage guest notifications",
        text: "Control what kind of notifications your guests will be receiving from this website. You can choose to notify them of new posts, remind them of special dates, or turn off notifications for more privacy.",
        iconHTML: `<i class="fa-solid fa-check"></i>`,
    },
];

// Lifetime features
const lifetimeFeatures = [
    {
        bold: "All basic features",
        text: "Includes all features available on a FREE website.",
        iconHTML: `<i class="fa-solid fa-check"></i>`,
    },
    {
        bold: "Photo gallery",
        text: "Import and share photos of your loved one from your PC, mobile device, or Facebook page. Collaborators may also share photos.",
        iconHTML: `<i class="fa-solid fa-infinity"></i><br><span>UNLIMITED</span>`,
    },
    {
        bold: "Advanced privacy controls",
        text: "Control who can see your memorial by blocking strangers and inviting only selected guests. Your memorial will not be visible to anyone else.",
        iconHTML: `<i class="fa-solid fa-check"></i>`,
    },
    {
        bold: "Video and music galleries",
        text: "Enhance the memorial website with favorite music and videos of your loved one. You may add media from your PC or mobile device, YouTube, and your Facebook profile.",
        iconHTML: `<i class="fa-solid fa-infinity"></i><br><span>UNLIMITED</span>`,
    },
    {
        bold: "Enhanced stories",
        text: "Illustrate stories and Life Story chapters with photo, video, and audio attachments.",
        iconHTML: `<i class="fa-solid fa-check"></i>`,
    },
    {
        bold: "Background music playlist",
        text: "Upload your favorite songs and use them as a musical background for the website.",
        iconHTML: `<i class="fa-solid fa-infinity"></i><br><span>UNLIMITED</span>`,
    },
    {
        bold: "Additional administrators",
        text: "Designate trusted friends and family members as additional memorial administrators.",
        iconHTML: `<i class="fa-solid fa-check"></i>`,
    },
    {
        bold: "Manage guest notifications",
        text: "Control what kind of notifications your guests will be receiving from this website. You can choose to notify them of new posts, remind them of special dates, or turn off notifications for more privacy.",
        iconHTML: `<i class="fa-solid fa-check"></i>`,
    },
];





const allFeaturesArray = [
    freeFeatures,
    premiumFeatures,
    lifetimeFeatures
]

console.log(allFeaturesArray);





const allFeaturesContainer = document.querySelectorAll(".display-all-features");
const viewFeaturesButton = document.querySelectorAll(".view-features");
const viewFeaturesButtonText = document.querySelectorAll(".view-features span");
const viewFeaturesButtonArrow = document.querySelectorAll(".view-features .fa-chevron-down");

allFeaturesArray.forEach((feature, index)=>{
    feature.forEach((input)=>{
        allFeaturesContainer[index].innerHTML += `
            <div class="mob-feat">
                <p class="mob-feat-dis">
                    ${input.bold}
                    <br>
                    <span>
                        ${input.text}
                    </span>
                </p>
                <p class="mob-feat-icon">${input.iconHTML}</p>
            </div>
        `
    })
});

allFeaturesContainer.forEach((container)=>{
    container.classList.add("display-none")
})



viewFeaturesButton.forEach((btn, index)=>{
    btn.addEventListener("click", ()=>{
        // Ensuring that everything is normal or closwwd before performing the function
        for (let i = 0; i < 3; i++) {
            if (i == index) {
                continue;
            }
            allFeaturesContainer[i].classList.add('display-none');
            viewFeaturesButtonText[i].textContent = "View all features";
            viewFeaturesButtonArrow[i].classList.remove('rotate')
        }
    
        // Performing the function : showing the features when button is clicked
        allFeaturesContainer[index].classList.toggle("display-none");

        // Change the text when button is clicked
        viewFeaturesButtonText[index].textContent = (viewFeaturesButtonText[index].textContent == "View all features" ? "Close features" : "View all features")

        // Rotate the arrow icon when button is clicked
        viewFeaturesButtonArrow[index].classList.toggle('rotate')


        
    })
})


// Rotate the arrow icon and change the text when button is clicked















// // Array for the features
// const freeFeatures = [
//     {
//         bold: "No ads. Ever",
//     },
//     {
//         bold: "Selection of beautiful themes",
//         text: "Customize your website with one of many available themes.",
//     },
//     {
//         bold: "Photo gallery",
//         text: "Import and share photos of your loved one from your PC, mobile device, or Facebook page. Collaborators may also share photos.",
//         status: "5 PHOTOS"
//     },
//     {
//         bold: "Share your memories",
//         text: "Create biography, share stories, light virtual candles, leave other tributes celebrating the life of a family member or friend who passed away.",
//     },
//     {
//         bold: "Unlimited collaborators",
//         text: "Invite as many family, friends, and colleagues as you would like to collaborate and create the online memorial page together.",
//     },
//     {
//         bold: "Integration with popular online services",
//         text: "Invite your Facebook friends, share on your Timeline, and import media directly from YouTube and your Facebook page.",
//     },
//     {
//         bold: "You may choose to keep your memorial website and its content visible only to you or allow everyone to visit and contribute.",
//     },
// ]

// // Premium features
// const premiumFeatures = [
//     {
//         bold: "All basic features",
//         text: "Includes all features available on a FREE website.",
//     },
//     {
//         bold: "Photo gallery",
//         text: "Import and share photos of your loved one from your PC, mobile device, or Facebook page. Collaborators may also share photos.",
//     },
//     {
//         bold: "Advanced privacy controls",
//         text: "Control who can see your memorial by blocking strangers and inviting only selected guests. Your memorial will not be visible to anyone else.",
//     },
//     {
//         bold: "Video and music galleries",
//         text: "Enhance the memorial website with favorite music and videos of your loved one. You may add media from your PC or mobile device, YouTube, and your Facebook profile.Control who can see your memorial by blocking strangers and inviting only selected guests. Your memorial will not be visible to anyone else.",
//     },
//     {
//         bold: "Video and music galleries",
//         text: "Enhance the memorial website with favorite music and videos of your loved one. You may add media from your PC or mobile device, YouTube, and your Facebook profile.",
//     },
//     {
//         bold: "Video and music galleries",
//         text: "Enhance the memorial website with favorite music and videos of your loved one. You may add media from your PC or mobile device, YouTube, and your Facebook profile.",
//     },
//     {
//         bold: "Enhanced stories",
//         text: "Illustrate stories and Life Story chapters with photo, video, and audio attachments.",
//     },
//     {
//         bold: "Background music playlist",
//         text: "Upload your favorite songs and use them as a musical background for the website.",
//     },
//     {
//         bold: "Additional administrators",
//         text: "Designate trusted friends and family members as additional memorial administrators.",
//     },
//     {
//         bold: "Manage guest notifications",
//         text: "Control what kind of notifications your guests will be receiving from this website. You can choose to notify them of new posts, remind them of special dates, or turn off notifications for more privacy.",
//     },
// ];

// // Lifetime features
// const lifetimeFeatures = [
//     {
//         bold: "All basic features",
//         text: "Includes all features available on a FREE website.",
//     },
//     {
//         bold: "Photo gallery",
//         text: "Import and share photos of your loved one from your PC, mobile device, or Facebook page. Collaborators may also share photos.",
//     },
//     {
//         bold: "Advanced privacy controls",
//         text: "Control who can see your memorial by blocking strangers and inviting only selected guests. Your memorial will not be visible to anyone else.",
//     },
//     {
//         bold: "Video and music galleries",
//         text: "Enhance the memorial website with favorite music and videos of your loved one. You may add media from your PC or mobile device, YouTube, and your Facebook profile.",
//     },
//     {
//         bold: "Enhanced stories",
//         text: "Illustrate stories and Life Story chapters with photo, video, and audio attachments.",
//     },
//     {
//         bold: "Background music playlist",
//         text: "Upload your favorite songs and use them as a musical background for the website.",
//     },
//     {
//         bold: "Additional administrators",
//         text: "Designate trusted friends and family members as additional memorial administrators.",
//     },
//     {
//         bold: "Manage guest notifications",
//         text: "Control what kind of notifications your guests will be receiving from this website. You can choose to notify them of new posts, remind them of special dates, or turn off notifications for more privacy.",
//     },
// ];





// const allFeaturesArray = [
//     freeFeatures,
//     premiumFeatures,
//     lifetimeFeatures
// ]

// console.log(allFeaturesArray);





// const allFeaturesContainer = document.querySelectorAll(".display-all-features");
// const viewFeaturesButton = document.querySelectorAll(".view-features");
// const viewFeaturesarrow = document.querySelectorAll(".view-features .fa-chevron-down");

// allFeaturesArray.forEach((feature, index)=>{
//     allFeaturesContainer[index].innerHTML += `
//         <div class="mob-feat">
//             <p>
//                 ${feature.bold}
//                 <br>
//                 ${feature.text}
//             </p>
        
//         </div>
        
//     `;
//     allFeaturesContainer[index].classList.toggle("display-none")
// })




// viewFeaturesButton.forEach((btn, index)=>{
//     btn.addEventListener("click", ()=>{
//         console.log("Clicked", index);
//         allFeaturesContainer[index].classList.toggle('display-none');
//         viewFeaturesarrow[index].classList.toggle('.rotate');
//     })
// })
