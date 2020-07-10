
// Toggle Status
let darkModeStatus = false;
// Shorthand of elements
const body = document.body;
const divisor = document.querySelectorAll('.divisor');
const card = document.querySelectorAll('.card');
const mainNumber = document.querySelectorAll('.main-number');
const subNumber = document.querySelectorAll('.sub-number');
const titles = document.querySelectorAll('.titles');
const overTitle = document.querySelectorAll('.overview-title');
const followerText = document.querySelectorAll('.follower-text');
const accountName = document.querySelectorAll('.account-name');
const accountSub = document.querySelectorAll('.account-subtitle');

// ARRAY OF ELEMENTS
const elementsArr = [divisor,
                    card, 
                    mainNumber, 
                    subNumber, 
                    titles, 
                    overTitle, 
                    followerText,
                    accountName,
                    accountSub];
// Function
const darkMode = () => {
    darkModeStatus = !darkModeStatus;
    body.classList.toggle('dark')
    elementsArr.forEach(element => {
        element.forEach(elementIn => {
            elementIn.classList.toggle('dark')
        })
    })
}
