const bar = document.querySelector('.fa-bars');

const sideNav = document.querySelector('.side-nav');

const overlay = document.querySelector('.overlay');

bar.addEventListener('click', ()=>{
    sideNav.classList.add('open');
    overlay.style.display = 'block';
})

overlay.addEventListener('click', ()=>{
    sideNav.classList.remove('open');
    overlay.style.display = 'none';
})




// For Get Started

const isActive = document.querySelectorAll('.curr-status');
const indicator = document.querySelectorAll('.inside');

isActive.forEach((bar, index)=>{
    if(bar.classList.contains('active')){
        indicator[index].style.display = 'block';
        bar.style.background = `linear-gradient(#4FACE9, 2%, #ff0059, 98%,  #4FACE9)`;
        bar.style.color = `white`;
    }
})

// For Radio Box in GET STARTED PAGE

const radioBoxes = document.querySelectorAll('.radio input');
const radioContainer = document.querySelectorAll('.radio');

radioBoxes.forEach((box, index)=>{
    box.addEventListener('click', ()=>{
        console.log(box.checked);
        if(box.checked == true){
            (radioBoxes[index + 1] || radioBoxes[index -1 ]).checked = false;
            (radioContainer[index + 1] || radioContainer[index -1 ]).style.backgroundColor = '';
            radioContainer[index].style.backgroundColor = 'rgb(197, 189, 189)';
        }
    })
})


// For Showing More Details in GET STARTED PAGE


const chevronUp = document.querySelector('.fa-chevron-up');
const moreDetails = document.querySelector('.more-details');

chevronUp.addEventListener('click', ()=>{
    moreDetails.classList.toggle('show');
    chevronUp.classList.toggle('fa-chevron-up')
    chevronUp.classList.toggle('fa-chevron-down')
})

