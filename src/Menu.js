import sideDish from './side_dish.jpg';
import snacks from './snacks.jpg';
import solo from './solo.jpg';
import ulam from './ulam.jpg';
import combo from './combo.jpg';
import comboRice from './comboRice.jpg';

const menu = () =>{

    const menuContent = document.createElement('div');

    const restoMenu = 
    {
        menuImages: [sideDish, snacks, solo, ulam, combo, comboRice],
        menuNames:['Side Dish', 'Snacks', 'Solo', 'Ulam', 'Combo', 'Combo Rice']


    };
    
   

    const displayMenu = () =>{
        for (let i = 0; i < restoMenu.menuImages.length; i++){
            const menuImg = new Image();
            menuImg.src = restoMenu.menuImages[i];
            menuContent.appendChild(menuImg);
      };
    };

    displayMenu();

    
    

    return menuContent;

    

};

export {menu};