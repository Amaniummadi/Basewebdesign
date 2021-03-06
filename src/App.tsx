import React from 'react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import './App.css';
import Navbar from './component/Navbar';

import ChartFordata from './component/ChartFordata';
import CardComponent from './component/CardComponent';
import WorldwideCases from './component/WorldwideCases';

import ModalBox from './component/ModalBox';



const engine = new Styletron();
const Centered = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    color:'green',
    flexWrap:"wrap",
    position:"relative"
    
   
  });

function App() {
 
  return (
    <div className="App" style={{backgroundColor: "#f9fafd" ,padding:"10px"}}>
       <StyletronProvider value={engine}>
           <BaseProvider theme={LightTheme}>
        <Centered>
           <Navbar/>
           {/* <MainComponent/> */}
           <WorldwideCases/>
            <ChartFordata/>
            <CardComponent/>
            {/* <OverRides/> */}
            <ModalBox/>
        </Centered>
      </BaseProvider>
           </StyletronProvider>
       
    </div>
  );
}

export default App;
