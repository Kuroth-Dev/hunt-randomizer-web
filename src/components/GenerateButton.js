import tools from "../resources/data/tools.json";
import consumables from "../resources/data/consumables.json";
import weapons from "../resources/data/weapons.json";

export default function GenerateButton(props){

    // let loadout = props.loadout;
    let options = props.options;
    let setLoadout = props.setLoadout;
    // The options prop is an array of booleans in the following order:
    //[forceMedkit, forceMeleeTool, quartermaster, forceAllSlots,
    // allowDualies, allowDuplicates, allowCustom ]

    let primary = [0,0,0,0];
    let secondary = [0,0,0,0];
    let currentTools = [0,0,0,0];
    let currentConsumables = [0,0,0,0];


    function handleClick(){
        console.log("Loadout generation attempt.");
        generate();
    };

    function generate(){
        
        for (let i = 0; i < 4; i++){

            //if forceMedkit is true, sets second slot to the ID for first aid kit
            //without randomizing.
            if (i === 1 && options[0]) {currentTools[1] = 10}
            else{
                //if forceMelee is true, and the first slot does not roll a melee item,
                //decrements i so that it will reroll slot [0] until it gets a melee tool.
                // if (i === 0 && options[1] && )

                currentTools[i] = Math.floor((Math.random() * tools.tools.length)+1);
            }
        }

        for (let i=0; i<4; i++){
            currentConsumables[i] = 
                Math.floor((Math.random() * consumables.consumables.length)+1);
        }

        console.log(currentTools,currentConsumables);
    };

    return (<>
        <button className="generate-button"
            onClick={handleClick}
        >Generate Loadout</button>
    </>)
}