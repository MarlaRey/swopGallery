//Globale variabler
const myApp = document.getElementById('favorite');//denne refererer til det sted i htmllen hvor vi vil have galleriet
const baseUrl = 'assets/img/'//første del af billedestien
const myImages = ['Choose-01.jpg', 'Choose-02.jpg', 'Choose-03.jpg', 'Choose-04.jpg', 'Choose-05.jpg',];//2.del af billedestien
const myBigImageIndex = 0; //det er det første billede i arrayet ('choose-01.jpg') starter med at være det store billede
// let bigImageContainer = null; //det domelement som skal indeholde vores store billede, det er sat til null fordi vi ved ikke hvilket billede containeren skal containe

createGrid(); //js starter med at køre createGrid, hvis funktion står herunder.

function createGrid() {
    let myBigImageSection = document.createElement('section'); //lokale variabler som kun virker i dette scope. Vi skaber 2 sections ude i dommen, som skal indeholde vores grid-galleri
    let mySmallImageSection = document.createElement('section'); 

    mySmallImageSection.classList.add("favoritSection"); //den sektion med de små billeder tildeler vi en klasse, som vi kan ramme med css'en

    myImages.map((myImage, index) => {
        if (index == myBigImageIndex) { //vi kører denne del hvis det drejer sig om det indexbillede, som er det første billede i arrayet (vi har defineret myBigImageIndex til at være det første billede)
            let myBigImage = document.createElement('img'); //lokal variabel som skaber et img tag i dommen
            myBigImage.src = baseUrl + myImage;//det tag vi lige har skabt, skal være det, vi finder, ved at følge denne sti. det er skrevet sådan med plus, fordi stien til billederne er delt op oppe i variablerne
            test = myBigImage; //den globale variabel "BigimageContainer" er det samme det som billede, som vi lige har skrevet sti til.
            myBigImageSection.appendChild(myBigImage);//dette store billede sætter vi ind i det section-tag vi skabte i toppen af createGrid.
        }
        else { //skal forstås på den måde at det handler om de billeder, som så ikke er det store billede - resten af billederne. Det foregår omtrent på samme måde som ved det store billede
            let mySmallImage = document.createElement('img');
            mySmallImage.src = baseUrl + myImage;
            mySmallImage.addEventListener('click', smallImageClicked); //vi sætter til forskel fra det store billede, en eventListener på de små, som trickes og kører "smallImageClicked"-funktionen, når der bliver klikket på dem
            mySmallImageSection.appendChild(mySmallImage);
        }
    });
    myApp.appendChild(myBigImageSection); //de to sektioner sættes ind i myApp, som er det sted i htmllen med id'et 'favorite'(global variabel i toppen)
    myApp.appendChild(mySmallImageSection);
}

function smallImageClicked(event) { //en parantes er en parameter-catcher som griber de værdier vi eftespørger. Her griber vi clik-eventet fra eventlisteneren på de små billeder
    let smallImageElement = event.target; //og endnu en ny variabel, som siger at det sted, hvor klik-eventet finder sted, det kalder vi smallImageElement

    //Selve swop-delen:
    test.src = smallImageElement.src; //når der klikkes, bytter sourcen fra bigimagecontaineren plads med sourcen fra smallImage
  
}