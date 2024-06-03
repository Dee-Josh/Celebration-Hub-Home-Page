
// Array for the features

export const freeFeatures = [
    {
        bold: "No ads. Ever",
    },
    {
        bold: "Selection of beautiful themes",
        text: "Customize your website with one of many available themes.",
    },
    {
        bold: "Photo gallery",
        text: "Import and share photos of your loved one from your PC, mobile device, or Facebook page. Collaborators may also share photos.",
        status: "5 PHOTOS"
    },
    {
        bold: "Share your memories",
        text: "Create biography, share stories, light virtual candles, leave other tributes celebrating the life of a family member or friend who passed away.",
    },
    {
        bold: "Unlimited collaborators",
        text: "Invite as many family, friends, and colleagues as you would like to collaborate and create the online memorial page together.",
    },
    {
        bold: "Integration with popular online services",
        text: "Invite your Facebook friends, share on your Timeline, and import media directly from YouTube and your Facebook page.",
    },
    {
        bold: "Privacy Controls",
        text: "You may choose to keep your memorial website and its content visible only to you or allow everyone to visit and contribute.",
    },
]

{/* <div class="mobile-features">
    <div class="mob-feat">
        <p>
            Photo gallery
            <br>
            Import and share photos of your loved one from your PC, mobile device, or Facebook page. Collaborators may also share photos.
        </p>
        <i class="fa-solid fa-check"></i>
    </div>
</div> */}

freeFeatures.forEach((feature)=>{
    mobileFeatures.innerHTML += `
        <div class="mob-feat">
            <p>
                ${feature.bold}
                <br>
                ${feature.text}
            </p>
            ${
                feature.status == null ?
                (<i class="fa-solid fa-check"></i>)
                :(<p>feature.status</p>)
            }
        </div>
    `
})



// Premium features

export const premiumFeatures = [
    {
        bold: "All basic features",
        text: "Includes all features available on a FREE website.",
    },
    {
        bold: "Photo gallery",
        text: "Import and share photos of your loved one from your PC, mobile device, or Facebook page. Collaborators may also share photos.",
    },
    {
        bold: "Advanced privacy controls",
        text: "Control who can see your memorial by blocking strangers and inviting only selected guests. Your memorial will not be visible to anyone else.",
    },
    {
        bold: "Video and music galleries",
        text: "Enhance the memorial website with favorite music and videos of your loved one. You may add media from your PC or mobile device, YouTube, and your Facebook profile.Control who can see your memorial by blocking strangers and inviting only selected guests. Your memorial will not be visible to anyone else.",
    },
    {
        bold: "Video and music galleries",
        text: "Enhance the memorial website with favorite music and videos of your loved one. You may add media from your PC or mobile device, YouTube, and your Facebook profile.",
    },
    {
        bold: "Video and music galleries",
        text: "Enhance the memorial website with favorite music and videos of your loved one. You may add media from your PC or mobile device, YouTube, and your Facebook profile.",
    },
    {
        bold: "Enhanced stories",
        text: "Illustrate stories and Life Story chapters with photo, video, and audio attachments.",
    },
    {
        bold: "Background music playlist",
        text: "Upload your favorite songs and use them as a musical background for the website.",
    },
    {
        bold: "Additional administrators",
        text: "Designate trusted friends and family members as additional memorial administrators.",
    },
    {
        bold: "Manage guest notifications",
        text: "Control what kind of notifications your guests will be receiving from this website. You can choose to notify them of new posts, remind them of special dates, or turn off notifications for more privacy.",
    },
];

premiumFeatures.forEach((feature)=>{
    mobileFeatures.innerHTML += `
        <div class="mob-feat">
            <p>
                ${feature.bold}
                <br>
                ${feature.text}
            </p>
            <i class="fa-solid fa-check"></i>
        </div>
    `
});


// Isaiah 14 12




// Lifetime features

export const lifetimeFeatures = [
    {
        bold: "All basic features",
        text: "Includes all features available on a FREE website.",
    },
    {
        bold: "Photo gallery",
        text: "Import and share photos of your loved one from your PC, mobile device, or Facebook page. Collaborators may also share photos.",
    },
    {
        bold: "Advanced privacy controls",
        text: "Control who can see your memorial by blocking strangers and inviting only selected guests. Your memorial will not be visible to anyone else.",
    },
    {
        bold: "Video and music galleries",
        text: "Enhance the memorial website with favorite music and videos of your loved one. You may add media from your PC or mobile device, YouTube, and your Facebook profile.",
    },
    {
        bold: "Enhanced stories",
        text: "Illustrate stories and Life Story chapters with photo, video, and audio attachments.",
    },
    {
        bold: "Background music playlist",
        text: "Upload your favorite songs and use them as a musical background for the website.",
    },
    {
        bold: "Additional administrators",
        text: "Designate trusted friends and family members as additional memorial administrators.",
    },
    {
        bold: "Manage guest notifications",
        text: "Control what kind of notifications your guests will be receiving from this website. You can choose to notify them of new posts, remind them of special dates, or turn off notifications for more privacy.",
    },
];

lifetimeFeatures.forEach((feature)=>{
    mobileFeatures.innerHTML += `
        <div class="mob-feat">
            <p>
                ${feature.bold}
                <br>
                ${feature.text}
            </p>
            <i class="fa-solid fa-check"></i>
        </div>
    `
});




