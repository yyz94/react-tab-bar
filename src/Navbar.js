import React, { useState, useEffect } from 'react'
import './App.css'

const Navbar = ({navigation, onTabChanged}) => {
  const [activeTab, setActiveTab] = useState(navigation[0].value)
  const onTabClicked = (tab) => {
    setActiveTab(tab.value)
    onTabChanged(tab)
  }
  return (
    <div className='navbar'>
      	{
			navigation.map((item, index) => (
				<div className={`nav-item ${activeTab === item.value ? 'active' : ''}`} key={index} onClick={() => onTabClicked(item)}>
				{item.title}
				</div>
			))
		}
    </div>
  )
}
export default Navbar
