import ItemSlot from './ItemSlot';
import toolText from "./../resources/images/tools-text.PNG";
import consumesText from "./../resources/images/consumables-text.PNG";

export default function EquipmentDisplay(props){

    let secondarySize = (props.qm ? 2 : 1);

    let result = (<>
        <ItemSlot size={3} />
        <div className='secondary'>
            <ItemSlot size={secondarySize} />
            {props.dual && !props.qm ? <ItemSlot size={1}/> : <></>}
        </div>

        <div className='equipmentRow'>
            <ItemSlot placeholderId={props.melee ? 1 : 0}/>
            <ItemSlot placeholderId={props.med ? 2: 0}/>
            <ItemSlot />
            <ItemSlot />
        </div>
        <img src={toolText} alt='text'/>        
        <div className='equipmentRow'>
            <ItemSlot />
            <ItemSlot />
            <ItemSlot />
            <ItemSlot />
        </div>
        <img src={consumesText} alt='text'/>
    </>);

    return result;
}