import './home.css';
import goto from './goto.jpg';

const homepage = () =>{
    const homeElement = document.createElement('div');
    const nameDiv = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const aboutP = document.createElement('p');
    
    const gotoImg = new Image();
    gotoImg.src = goto;



    homeElement.className = 'homeContent';
    nameDiv.className = 'restaurantName'
    h1.textContent = "Bodjie's goto and mami house";
    p.textContent = "Mr. Bodjie created a canteen in the year 2013. Canteen that serves their very own recipe of goto and mami"
    aboutP.textContent = `It all started when Mr. Bodjie noticed someone selling rice porridge or congee (goto) while riding a bus,
    and his friend (a cook) suggested he should try to start a canteen business which serves Goto and Mami.
          Mr. Bodjie worked as a cook at Jerry's Grill, and her wife, who is skilled and experienced in canteen cooking, assisted her in operating the business.
          Moreover, they claimed that, it took them a year to perfect the rice porridge or congee (goto) recipe. at last the business ran on October 04, 2013.
    `
    
    homeElement.appendChild(nameDiv);
    homeElement.appendChild(gotoImg);
    nameDiv.appendChild(h1);
    nameDiv.appendChild(p);

    nameDiv.appendChild(aboutP);


    return homeElement;
    
}

export {homepage}


