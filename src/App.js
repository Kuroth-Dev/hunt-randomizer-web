import './App.css';
import EquipmentDisplay from './components/EquipmentDisplay';
import GenerateButton from './components/GenerateButton';
import Settings from './components/Settings'
// import Modal from 'react-modal';
import React, {useState} from 'react';
import ToggleSetting from './components/ToggleSetting';

function App() {

  //I will likely come up with a more elegant solution to represent the 
  //loadout, but for now I just want to get a quick and dirty proof of concept
  //working. Loadout will be represented simply as ID integers in a 2d array.
  //For dual wield and ammo, 0 represents "n/a" and "normal" respectively.
  let defaultLoadout = [
    [0,0,0,0], // [Primary ID, dual wield ID, ammo, ammo]
    [0,0,0,0], // [Secondary ID, dual wield (0 for none), ammo, ammo]
    [0,0,0,0], // [Tool IDs]
    [0,0,0,0]  // [Consumable IDs]
  ];

  const [currentLoadout, setLoadout] = useState(defaultLoadout);
  const [playerRank, setPlayerRank] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [forceMedkit, setMedkit] = useState(false);
  const [forceMeleeTool, setMeleeTool] = useState(false);
  const [quartermaster, setQuartermaster] = useState(false);
  const [allowDualies, setDualies] = useState(false);
  const [forceAllSlots, setAllSlots] = useState(false);
  const [allowDuplicates, setDuplicates] = useState(true);
  const [allowCustom, setCustom] = useState(false);

  let options = [ 
    forceMedkit,
    forceMeleeTool,
    quartermaster,
    forceAllSlots,
    allowDualies,
    allowDuplicates,
    allowCustom,
    playerRank
  ];

  return (
    <div className="App">
      <div className="main">

        <div className='settings'>
          <Settings menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </div>

        <div className='center'>
          <p className='p1'>Hunt Showdown Loadout Randomizer</p>
          <GenerateButton 
            loadout={currentLoadout} 
            setLoadout={setLoadout}
            options={options}
          />
          <p className='p2'>{p2}</p>

          <ToggleSetting text={'Force Medkit?'} 
            setting={forceMedkit} changeSetting={setMedkit}
          />
          <ToggleSetting text={'Force Melee Tool?'} 
            setting={forceMeleeTool} changeSetting={setMeleeTool}
          />
          <ToggleSetting text={'Quartermaster?'} 
            setting={quartermaster} changeSetting={setQuartermaster}
          />
          <ToggleSetting text={`Force Full Weapon Slot Capacity?`}
            setting={forceAllSlots} changeSetting={setAllSlots}
          />
          <ToggleSetting text={'Allow Dual Wield?'} 
            setting={allowDualies} changeSetting={setDualies}
          />
          <ToggleSetting text={`Allow Duplicate Consumables?`}
            setting={allowDuplicates} changeSetting={setDuplicates}
          />
          {/* <ToggleSetting text={`Allow Custom Ammo?`}
            setting={allowCustom} changeSetting={setCustom}
          /> */}
        </div>

        <div className='equipment'>
          <EquipmentDisplay
            loadout={currentLoadout}
            qm={quartermaster} 
            med={forceMedkit}
            melee={forceMeleeTool}
            dual={allowDualies}
          />
          
        </div>
        
      </div>
    </div>
  );
}

export default App;

let p2 = `Use the button above to generate a random loadout! 
    You can configure a wide variety of settings by clicking on the gear
    icon to the top left of the page. More generalized settings are below.`;