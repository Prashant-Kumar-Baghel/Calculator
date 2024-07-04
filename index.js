// const asideElement=document.getElementById('aside');
// const crossElement=document.getElementById('cross-img');
// const knowElements=document.getElementsByClassName('sec-3-card-a');

// // Loop through all elements with the class 'sec-3-card-a'
// for (let i = 0; i < knowElements.length; i++) {
//     knowElements[i].addEventListener('click', () => {
//         asideElement.classList.toggle('active');
//     });
// }
// crossElement.addEventListener('click',()=>{
//     asideElement.classList.toggle('active')
// })

// const asideElement = document.getElementById('aside');
// const crossElement = document.getElementById('cross-img');
// const knowElements = document.getElementsByClassName('sec-3-card-a');

// // Function to toggle the drawer
// const toggleDrawer = () => {
//     asideElement.classList.toggle('active');
// }

// // Loop through all elements with the class 'sec-3-card-a'
// for (let i = 0; i < knowElements.length; i++) {
//     knowElements[i].addEventListener('click', toggleDrawer);
// }

// crossElement.addEventListener('click', toggleDrawer);

// // Hide drawer when clicking outside
// document.addEventListener('click', (event) => {
//     if (!asideElement.contains(event.target) && !event.target.classList.contains('sec-3-card-a')) {
//         asideElement.classList.remove('active');
//     }
// });

// // ------------------ 

// document.querySelector('.cross-symbol i').addEventListener('click', function() {
//     document.querySelector('.aside').classList.remove('active');
//     document.querySelector('.overlay').classList.remove('active');
// });

// function openDrawer() {
//     document.querySelector('.aside').classList.add('active');
//     document.querySelector('.overlay').classList.add('active');
// }

// // Call openDrawer() to open the drawer and show the overlay



const asideElement = document.getElementById('aside');
const overlayElement = document.querySelector('.overlay');
const crossElement = document.getElementById('cross-img');
const knowElements = document.getElementsByClassName('sec-3-card-a');

// Function to toggle the drawer and overlay
const toggleDrawer = () => {
    asideElement.classList.toggle('active');
    overlayElement.classList.toggle('active');
}

// Loop through all elements with the class 'sec-3-card-a'
for (let i = 0; i < knowElements.length; i++) {
    knowElements[i].addEventListener('click', toggleDrawer);
}

// Add event listener to the cross symbol
crossElement.addEventListener('click', toggleDrawer);

// Hide drawer when clicking outside
document.addEventListener('click', (event) => {
    if (!asideElement.contains(event.target) && !event.target.classList.contains('sec-3-card-a')) {
        asideElement.classList.remove('active');
        overlayElement.classList.remove('active');
    }
});



//Filter 
// script.js

// script.js

document.addEventListener("DOMContentLoaded", () => {
    const scholarshipTypeDropdown = document.getElementById('scholarshipType');
    const showAllBtn = document.getElementById('showAllBtn');
    const cards = document.querySelectorAll('.sec-3-card');
    const govTittle = document.getElementById('gov-tittle');
    const privTittle = document.getElementById('priv-Tittle');
    const girlTittle = document.getElementById('girl-Tittle');

    const showAllScholarships = () => {
        cards.forEach(card => {
            card.style.display = 'block';
        });
        govTittle.style.display="block";
            privTittle.style.display="block";
            girlTittle.style.display="block";
    };

    showAllBtn.addEventListener('click', () => {
        scholarshipTypeDropdown.value = 'All'; // Reset dropdown to 'All'
        showAllScholarships();
    });

    scholarshipTypeDropdown.addEventListener('change', () => {
        const selectedType = scholarshipTypeDropdown.value;

        if (selectedType === 'All') {
            showAllScholarships();
            
        } else {
            cards.forEach(card => {
                if (card.dataset.type === selectedType) {
                    card.style.display = 'block';
                    if (selectedType === 'Government') {
                        govTittle.style.display = 'block';
                    } else if (selectedType === 'Private') {
                        privTittle.style.display = 'block';
                    } else if (selectedType === 'Girls') {
                        girlTittle.style.display = 'block';
                    }
                } else {
                    card.style.display = 'none';
                    if (card.dataset.type === 'Government') {
                        govTittle.style.display = 'none';
                    } else if (card.dataset.type === 'Private') {
                        privTittle.style.display = 'none';
                    } else if (card.dataset.type === 'Girls') {
                        girlTittle.style.display = 'none';
                    }
                }

            });
        }
    });



    // JavaScript code to show only the first five words in the card p tags
    cards.forEach(card => {
        const cardP = card.querySelector('.sec-3-card-p');
        const cardH = card.querySelector('.sec-3-card-h3');
        const fullText = cardP.innerText;
        const firstFiveWords = fullText.slice(0, 50)+ '...';
        cardP.setAttribute('data-full-text', fullText);
        cardP.innerText = firstFiveWords;
        const shortHeading=cardH.innerText.slice(0,35)+"...";
        const fullH=cardH.innerText;
        cardH.setAttribute('Full-Heading',fullH);
        cardH.innerText=shortHeading;
    });

    //drawer data should be same as blog
    const knowMoreButtons = document.querySelectorAll('.know-more-btn');
    const drawerTitle = asideElement.querySelector('.side-drawer-h3');
    const drawerContent = asideElement.querySelector('.side-drawer-p');


    knowMoreButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.sec-3-card');
            const cardTitle = card.querySelector('.sec-3-card-h3').getAttribute('Full-Heading');
            const cardContent = card.querySelector('.sec-3-card-p').getAttribute('data-full-text');

            // Update drawer content
            drawerTitle.innerText = cardTitle;
            drawerContent.innerText = cardContent;
            

        });
    });
});






