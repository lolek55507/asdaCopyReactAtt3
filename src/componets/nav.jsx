import { useState } from 'react'
import './nav.css'

function Nav(props) {


    return (
        
        <nav className={props.scrollPercent > 2 ? 'navB' : 'nav'}>
            <div className='logo'>ASDA</div>
            <div className='right-section-container'>
            <ul className='nav-list'>
                <li className={props.scrollPercent > 2 ? 'nav-itemB' : 'nav-item'}>Home</li>
                <li className={props.scrollPercent > 2 ? 'nav-itemB' : 'nav-item'}>Everything</li>
                <li className={props.scrollPercent > 2 ? 'nav-itemB' : 'nav-item'}>Locations</li>
                <li className={props.scrollPercent > 2 ? 'nav-itemB' : 'nav-item'}>Process</li>
                <li className={props.scrollPercent > 2 ? 'nav-itemB' : 'nav-item'}>Roles</li>
                <li className={props.scrollPercent > 2 ? 'nav-itemB' : 'nav-item'}>My Basket</li>
            </ul>
            <div className={props.scrollPercent > 2 ? 'separatorB' : 'separator'}></div>
            <ul className='nav-listB'>
                <li className={props.scrollPercent > 2 ? 'nav-itemB' : 'nav-item'}>Login</li>
                <li className={props.scrollPercent > 2 ? 'nav-itemB' : 'nav-item'}>Sign Up</li>
            </ul>
            </div>
            
        </nav>
    )
}


export default Nav
