import img from './photo3.jpg';
import './about.css'

const aboutPage = () =>{
    const aboutContent = document.createElement('div');
    aboutContent.className = 'about';
    const aboutP = document.createElement('p');
    const aboutImg = new Image();
    aboutImg.src = img;

    aboutP.textContent = `offers homemade and delicious foods
Can do pick-up orders in the physical store at Purok 5, Tabuyuc Apalit, Pampanga
can place an order by dialing the number or sending a Facebook message. then, pick up with the given time
offers homemade and delicious foods`

    aboutContent.appendChild(aboutImg);
    aboutContent.appendChild(aboutP);

    return aboutContent;
}

export {aboutPage}