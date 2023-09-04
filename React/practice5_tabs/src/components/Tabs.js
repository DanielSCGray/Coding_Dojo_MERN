import {useState} from 'react';

const Tabs = (props) =>{
    const onClickHandler = (e, content) => {
        e.preventDefault();
        props.onNewContent(content);
    }

    return props.tabList.map ( (tab, i) => {
        return <button className="btn btn-light" type="button" onClick={ (e) => onClickHandler(e, tab.content)} >{tab.name}</button>
        
        });
    
}

export default Tabs;