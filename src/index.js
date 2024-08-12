import { homepage } from "./Home";
import { menu } from "./Menu";
import { aboutPage } from "./about";
import './index.css';


function modules () {
    
    const content = document.getElementById('content');
    const buttons = [
        { btn: document.getElementById('home'), module: homepage },
        { btn: document.getElementById('menu'), module: menu },
        { btn: document.getElementById('about'), module: aboutPage }
    ];

    const renderModules = () =>{
        buttons.forEach(({btn, module}) => {
        
            btn.addEventListener('click', ()=>{
                content.innerHTML = '';
                content.appendChild(module());
            })
        });

   

     return content.appendChild(homepage());;
    }

    renderModules();
    

}

document.body.appendChild(modules());