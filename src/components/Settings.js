import icon from '../resources/images/settings-icon.png';

export default function Settings(props){
    
    function handleClick(){
        props.setMenuOpen(!props.menuOpen);
    };

    let iconClass = "settingsIcon";
    if (props.menuOpen) iconClass +="Open";

return (<>
    <img className={iconClass} 
        src={icon}
        onClick={handleClick}
        alt='settings-icon'
    />
</>)
}