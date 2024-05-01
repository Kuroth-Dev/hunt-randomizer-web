import ItemSlot from './ItemSlot';
import toolText from "./../resources/images/tools-text.PNG";
import consumesText from "./../resources/images/consumables-text.PNG";

export default function EquipmentDisplay(props){

    let secondarySize = (props.dual ? 3 : props.qm ? 2 : 1);

    let result = (<>
        <ItemSlot size={3} />
        <ItemSlot size={secondarySize} />
        
        <div className='equipmentRow'>
            <ItemSlot toolId={props.melee ? 1 : 0}/>
            <ItemSlot toolId={props.med ? 2: 0}/>
            <ItemSlot toolId={0}/>
            <ItemSlot toolId={0}/>
        </div>
        <img src={toolText} alt='text'/>        
        <div className='equipmentRow'>
            <ItemSlot toolId={0}/>
            <ItemSlot toolId={0}/>
            <ItemSlot toolId={0}/>
            <ItemSlot toolId={0}/>
        </div>
        <img src={consumesText} alt='text'/>
    </>);

    return result;
}