import React from "react";
import NewRoomForm from './NewRoomForm';

export default function House(props) {
    const { house, updateHouse } = props;
    
    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };

        updateHouse(updatedHouse);
    }

    const addNewRoom = (room) => updateHouse({...house, rooms: [...house.rooms, room]}); 

    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <div class="my-1">
                        <label><b>Room:</b> {`${room.name}`} <b>Area:</b> {`${room.area}`} sq ft</label>
                        <button onClick={(e) => deleteRoom(room._id)} class="btn btn-danger mx-1">Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <span className="card p-1 m-1">
                <h1>{house.name}</h1>
                {rooms({rooms, houseId: house._id, deleteRoom})} 
                <NewRoomForm addNewRoom={addNewRoom} />
            </span>   
        </div>
    );

};