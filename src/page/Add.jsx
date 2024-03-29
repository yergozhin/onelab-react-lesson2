import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Add() {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")

    const navigateTo = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const onSave = () => {
        if (!name || !surname || !phone) return;
        let list = sessionStorage.getItem("list");
        if (!list) {
            list = [];
        } else {
            list = JSON.parse(list);
        }
        list.push({
            name,
            surname,
            phone
        })
        sessionStorage.setItem("list", JSON.stringify(list));
        navigateTo("/");
    }

    return (
        <div className="form">
            <div className="form-content">
                <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="First Name"/>
                <input value={surname} onChange={handleSurnameChange} type="text" name="surname" placeholder="Last Name"/>
                <input value={phone} onChange={handlePhoneChange} type="text" name="phonenumber" placeholder="Phone Number"/>
                <button onClick={onSave} className="pgbutton">
                    Save
                </button>
            </div>
        </div>
    );
}