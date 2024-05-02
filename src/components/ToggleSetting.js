import {iconActive, iconInactive}from "../resources/images/index";

export default function ToggleSetting(props){

    function handleClick() {
        props.changeSetting(!props.setting);
    }

    let icon = props.setting ? iconActive : iconInactive;

    return (<>
        <img src={icon} 
        className="toggleIcon" 
        onClick={handleClick} 
        alt="settings toggle"/>

        <p className="toggleText">{props.text}</p>
    </>)

}