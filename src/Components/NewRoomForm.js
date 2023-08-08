import React, {useState} from "react";


export default function NewRoomForm(props) {
    const[ name, setName ] = useState('');
    const[ area, setArea ] = useState('');

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : "");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area});
            setName("");
            setArea('');
        } else {
            alert("Invalid Input");
        }
    };

    return (
        <div>
            <h5>Add a new room</h5>
            <form onSubmit={onSubmit} >
                <input  class="mx-1"
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input  class="mx-1"
                    type="text"
                    placeholder="Area"
                    onChange={handleAreaInput}
                    value={area}
                />
                <button type="submit" class="btn btn-success mx-1 my-1">Add Room</button>
            </form>
        </div>
    );
};