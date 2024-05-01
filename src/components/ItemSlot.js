import small from "./../resources/images/small-slot.PNG";
import smText from "./../resources/images/small-text.PNG";
import med from "./../resources/images/med-slot.PNG";
import medText from "./../resources/images/med-text.PNG";
import large from "./../resources/images/large-slot.PNG";
import lgText from "./../resources/images/large-text.PNG";
import tool from "./../resources/images/tool-slot.PNG";
import medkit from "./../resources/images/medkit.PNG";
import melee from "./../resources/images/melee-weapon.PNG";

export default function ItemSlot(props) {
    
    switch (props.size){
        case 1: return (<>
            <img src={small} alt="weaponslot-small"/>
            <img src={smText} alt="text"/>
            </>)
        case 2: return (<>
            <img src={med} alt="weaponslot-medium"/>
            <img src={medText} alt="text"/>
            </>)
        case 3: return (<>
            <img src={large} alt="weaponslot-large"/>
            <img src={lgText} alt="text"/>
            </>)
        default: break;
    }
    switch (props.toolId){
        case 0: return(<><img src={tool} alt="tool-slot"/></>);
        case 1: return(<><img src={melee}/></>);
        case 2: return(<><img src={medkit}/></>);
        default: return(<><img src={tool} alt="tool-slot"/></>);
    }
}