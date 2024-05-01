import iconActive from "../resources/images/slider-active.png";
import iconInactive from "../resources/images/slider-inactive.png";

export default function ToggleSetting(props){

    function handleClick() {
        props.changeSetting(!props.setting);
    }

    let icon = props.setting ? iconActive : iconInactive;

    return (<>
        <img src={icon} className="toggleIcon" onClick={handleClick}/>
        <p className="toggleText">{props.text}</p>
    </>)

}