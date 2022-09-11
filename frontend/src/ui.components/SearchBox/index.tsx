import React from 'react';
import './style.css';
import searchIcon from "../../static/images/magnifier.svg";

const list = [
    {key:"Grocery", value:"grocery"},
    {key:"Electronics", value:"electronics"},
    {key:"Home", value:"home"},
    {key:"Appliances", value:"appliances"},
    {key:"Travel", value:"travel"},
    {key:"Fashion", value:"fashion"},
    {key:"Toys", value:"toys"},
    {key:"Beayty", value:"beayty"},
    {key:"Music", value:"music"}
]

const SearchBox = () => {
    return (
        <div className="searchbox">
            <div className="catagory-container container">
                <div className="catagory-name">Catagory</div>
                {/* <ul className="catagories">
                    {list.map( item => <li className='container'><a href="" className="catagory container">{item.key}</a></li>)}
                </ul> */}
            </div>
            <div className="action-container">
                <input type="text" className="input-container" placeholder="Search..." />
                <button className="search-action"><img  src={searchIcon} alt="S" /></button>
            </div>
        </div>
    );
};

export default SearchBox;
