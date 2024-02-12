import React from 'react'
import Sidebar from '../../sidebar/sidebar'
import Tabledata from '../../Table/Tabledata'
import CardData from '../../cards/carddata'

const Home = () => {
    return (
        <>
            <div>
                <Sidebar />

            </div>
            <div className='carddata'>
                <CardData />
            </div>

            <div className='Tabledata'>
                <Tabledata />
            </div>
           
        </>
    )
}

export default Home
