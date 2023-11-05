import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Tabu = () => {
  return (
   <>
     <Tabs>
    <TabList>
      <Tab>All Jobs</Tab>
      <Tab>Onsite</Tab>
      <Tab>Remote</Tab>
      <Tab>Hybrid</Tab>
      <Tab>Part Time</Tab>
    </TabList>

    <TabPanel>
      <h2>All Jobs</h2>
    </TabPanel>
    <TabPanel>
      <h2>Onsite</h2>
    </TabPanel>
    <TabPanel>
      <h2>Remote</h2>
    </TabPanel>
    <TabPanel>
      <h2>Hybrid</h2>
    </TabPanel>
    <TabPanel>
      <h2>Part Time</h2>
    </TabPanel>
  </Tabs>
  </>
  );
};

export default Tabu;