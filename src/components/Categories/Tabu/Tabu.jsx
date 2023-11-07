import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import AllJob from './AllJob/AllJob';
const Tabu = () => {
    const [active, setActive] = useState(0)
    console.log(active);
    const handleTabChange = index => {
        setActive(index)
    }

  return (
   <>
     <Tabs selectedIndex={active}  onSelect={handleTabChange}>
    <TabList>
      <Tab>All Jobs</Tab>
      <Tab>Remote</Tab>
      <Tab>Hybrid</Tab>
      <Tab>Part Time</Tab>
      <Tab>On Site</Tab>
    </TabList>

    <TabPanel>
          {active === 0 && <AllJob></AllJob>}
        </TabPanel>
        <TabPanel>
          {active === 1 && <AllJob jobCategory="Remote"></AllJob>}
        </TabPanel>
        <TabPanel>
          {active === 2 && <AllJob jobCategory="Hybrid"></AllJob>}
        </TabPanel>
        <TabPanel>
          {active === 3 && <AllJob jobCategory="Part-Time"></AllJob>}
        </TabPanel>
        <TabPanel>
          {active === 4 && <AllJob jobCategory="On Site"></AllJob>}
        </TabPanel>
  </Tabs>
  </>
  );
};

export default Tabu;