import tools from "../resources/data/tools.json";
import consumables from "../resources/data/consumables.json";
import weapons from "../resources/data/weapons.json";

export default function GenerateButton(props){

    let options = props.options;
    let setLoadout = props.setLoadout;

    // The options prop is an array of booleans in the following order:
    //[ 0 = forceMedkit, 1 = forceMeleeTool, 2 = quartermaster, 3 = forceAllSlots,
    // 4 = allowDualies, 5 = allowDuplicates, 6 = allowCustom, 7 = playerRank ]


    function handleClick(){
        console.log("Loadout generation attempt.");
        generate();
    };

    function generate(){

        let primary = [0,0,0,0];
        let secondary = [0,0,0,0];
        let currentTools = [0,0,0,0];
        let currentConsumables = [0,0,0,0];

        //Loop to roll and validate Primary weapon.
        let validPrimary = false;
        while (!validPrimary){

            validPrimary = true;
        }

        //Loop to roll and validate Tool slots.
        for (let i = 0; i < 4; i++){

            //if forceMedkit is true, sets second slot to the ID (10) for first aid kit
            //and skips to the next slot, unless the first slot is already ID 10.
            if (i === 1 && options[0] && currentTools[0] !== 10) {          
                currentTools[1] = 10;
                // console.log(`forced first aid kit ${currentTools}`);
                i++;
            }
            
            currentTools[i] = Math.floor((Math.random() * (tools.tools.length - 1))+1);
            
            //check to see if player rank is high enough to use selected tool
            if (tools.tools[currentTools[i]].rank > options[7]) {
                // console.log(`player rank of ${options[7]} means player can't use ${tools.tools[currentTools[i]].name}`)
                i--;
            }

            //if forceMelee is true, and the first slot did not roll a melee item,
            //decrements i so that it will reroll slot [0] until it gets a melee tool.
            if (i === 0 && options[1] && !tools.tools[currentTools[0]].isMelee) {
                // console.log(`rerolling for melee`);
                i--;
            }

            //Checking for duplicate tools which are impossible to equip
            //within the game and rerolling if found.
            for (let j = i-1; j > -1; j--){
                if (currentTools[i] === currentTools[j]) {
                    i--;
                }
            }
        }//end Tool gen

        //Loop to roll and validate Consumable slots
        for (let i=0; i<4; i++){
            currentConsumables[i] = 
                Math.floor((Math.random() * (consumables.consumables.length - 1)) + 1);

            //Checking for duplicate consumables and rerolling the slot if
            //  "allowDuplicates" option (options[5]) is not true.
            for (let j = i-1; j > -1; j--){
                if (currentConsumables[i] === currentConsumables[j] && !options[5]) {

                    console.log(`rerolling consumable ${currentConsumables[i]}`);
                    i--;
                }
            }
        }// end Consumable gen

        console.log(currentTools,currentConsumables);

    } //end Generate()

    return (<>
        <button className="generate-button"
            onClick={handleClick}
        >Generate Loadout</button>
    </>)
}