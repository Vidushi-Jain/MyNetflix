import React ,{useState} from 'react'
import { tabLabels } from './Constant';
import Tabs from './Tabs';

function TabComponents() {
    const[activeTab,setactiveTab] = useState(tabLabels.CANCEL_AT_ANY_TIME)
       
    const onClickTab=(tab)=>{
        setactiveTab(tab);
    }
  return (
    <div>
    <Tabs activeTabName={activeTab} onClickTab={onClickTab}/>
    </div>
  )
}

export default TabComponents
