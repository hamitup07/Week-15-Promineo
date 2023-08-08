import React from 'react';
import House from './House';
import {housesApi} from '../rest/housesAPI.js';
import { useState, useEffect } from 'react';
import Navbar from './Navbar.js';

export class HousesList extends React.Component {
    state = {
        houses:  []
    };

    // const [houses, setHouses] = useState([]);

    componentDidMount() {
        this.fetchHouses();
    };

    // useEffect(() => {
    //     fetchHouses();
    // }, []);

    fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({houses});
    };

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    };


    render() {
        return (
            <>
                <Navbar />
                <div className='col-md-8 my-2 mx-auto'>
                    <div className='col-md-8 p-1 my-1 mx-2'>
                        <div className='house-list'>
                            {this.state.houses.map((house) => (
                                <div>
                                    <House 
                                        house={house}
                                        key={house._id}
                                        updateHouse={this.updateHouse}
                                    />
                                    
                                    ---------------
                                    <br></br>
                                </div>
                        ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }
};