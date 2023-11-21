import React, { useState } from 'react';
import './App.css'
import { TabMenu } from 'primereact/tabmenu';

import About from './About';
import Homes from './Homes';
import Service from './Service';
import Portfolio from './Portfolio';
import Contact from './Contact';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(3);
  console.log(activeIndex)
  switch (activeIndex) {
    case 0:
      return <Homes/>
    case 1:
      return <About/>
    case 2:
      return <Service/>
    case 3 :
      return <Portfolio/>
    case 4:
      return <Contact/>
    default:
      break;
  }
  const items = [
    {label: 'Home'},
    {label: 'About'},
    {label: 'Service'},
    {label: 'Portfolio'},
    {label: 'Contact'}
];


  return (
    <div className="card">
    <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}/>
</div>
  )
}

export default App