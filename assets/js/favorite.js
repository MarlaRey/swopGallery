const myApp = document.getElementById('favorite');
const baseUrl = 'assets/img/'
const myImages = ['Choose-01.jpg', 'Choose-02.jpg', 'Choose-03.jpg', 'Choose-04.jpg', 'Choose-05.jpg',];
const myBigImageIndex = 0;
let bigImageContainer = null;

createGrid();

function createGrid() {
    let myBigImageSection = document.createElement('section');
    let mySmallImageSection = document.createElement('section');

    mySmallImageSection.classList.add("favoritSection");

    myImages.map((myImage, index) => {
        if (index == myBigImageIndex) {
            // det store billede
            let myBigImage = document.createElement('img');
            myBigImage.src = baseUrl + myImage;//det er skrevet sådan med plus fordi stien er delt op oppe i variablerne
            bigImageContainer = myBigImage;
            myBigImageSection.appendChild(myBigImage);
        }
        else {
            //resten af billederne
            let mySmallImage = document.createElement('img');
            mySmallImage.src = baseUrl + myImage;//det er skrevet sådan med plus fordi stien er delt op oppe i variablerne
            mySmallImage.addEventListener('click', smallImageClicked);
            mySmallImageSection.appendChild(mySmallImage);
        }
    });
    myApp.appendChild(myBigImageSection);
    myApp.appendChild(mySmallImageSection);
}

function smallImageClicked(event) { //en parantes er en parameter-catcher som griber de værdier vi eftespørger
    console.log('click');
    let bigUrl = bigImageContainer.src;
    console.log(bigImageContainer);
    let smallImageElement = event.target;
    let smallImageUrl = smallImageElement.src;
    console.log(smallImageUrl);
    //swop
    bigImageContainer.src = smallImageUrl;
    smallImageElement.src = bigUrl;
}