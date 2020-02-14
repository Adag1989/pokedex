import React from 'react';
import { render } from '@testing-library/react';
import Cardcontainer from './Components/container';


function App() {
  render() 
    return (
      <div className={'main-container'}>
        <Cardcontainer/>
      </div>
    )
  
}

export default App;
