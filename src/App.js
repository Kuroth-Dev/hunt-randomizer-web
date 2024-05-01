import './App.css';
import EquipmentDisplay from './components/EquipmentDisplay';
import GenerateButton from './components/GenerateButton';
import Settings from './components/Settings'
// import Modal from 'react-modal';
import React, {useState} from 'react';
import ToggleSetting from './components/ToggleSetting';

function App() {

  const [quartermaster, setQuartermaster] = useState(false);
  const [forceMedkit, setMedkit] = useState(false);
  const [forceMeleeTool, setMeleeTool] = useState(false);
  const [allowDualies, setDualies] = useState(false);
  const [allowDuplicates, setDuplicates] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <div className="main">

        <div className='settings'>
          <Settings menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </div>

        <div className='center'>
          <p className='p1'>Kuroth's Hunt Loadout Randomizer</p>
          <GenerateButton/>
          <p className='p2'>{p2}</p>

          <ToggleSetting text={'Force Melee Tool?'} 
            setting={forceMeleeTool} changeSetting={setMeleeTool}
          />   
          <ToggleSetting text={'Force Medkit?'} 
            setting={forceMedkit} changeSetting={setMedkit}
          />
          <ToggleSetting text={'Quartermaster?'} 
            setting={quartermaster} changeSetting={setQuartermaster}
          />
          <ToggleSetting text={'Allow Dual Wield?'} 
            setting={allowDualies} changeSetting={setDualies}
          />
          <ToggleSetting text={'Allow Duplicate Consumables?'} 
            setting={allowDuplicates} changeSetting={setDuplicates}
          />
        </div>

        <div className='equipment'>
          <EquipmentDisplay 
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