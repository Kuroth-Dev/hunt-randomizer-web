
export default function GenerateButton(){

    function handleClick(){
        console.log("Loadout generated!");
    }

    return (<>
        <button className="generate-button"
            onClick={handleClick}
        >Generate Loadout</button>
    </>)
}