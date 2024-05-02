import {
    small, smText, med, medText, large, lgText,
    tool, melee, medkit
} from "./../resources/images/index";

export default function ItemSlot(props) {
    
    switch (props.size){
        case 1: return (<>
            <div className="weaponslot">
                <img src={small} alt="weaponslot-small"/>
                <img src={smText} alt="text"/>
            </div></>)
        case 2: return (<>
            <div className="weaponslot">
                <img src={med} alt="weaponslot-medium"/>
                <img src={medText} alt="text"/>
            </div></>)
        case 3: return (<>
            <img src={large} alt="weaponslot-large"/>
            <img src={lgText} alt="text"/>
            </>)
        default: break;
    }
    switch (props.toolId){
        case 0: return(<><img src={tool} alt="tool-slot"/></>);
        case 1: return(<><img src={melee} alt="tool-slot"/></>);
        case 2: return(<><img src={medkit} alt="tool-slot"/></>);
        default: return(<><img src={tool} alt="tool-slot"/></>);
    }
}