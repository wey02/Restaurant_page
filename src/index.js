import { homepage } from "./Home";
import { menu } from "./Menu";
import './index.css';

function modules () {
    
    const content = document.getElementById('content');
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');

    const homeModule = () =>{
        content.appendChild(homepage());
    };

    const menuModule = () =>{
        content.appendChild(menu());
    }

    homeBtn.addEventListener('click', ()=>{
        
    })
    
    homeModule();
    menuModule();

    return content;

}

document.body.appendChild(modules());