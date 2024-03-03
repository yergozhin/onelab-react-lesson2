import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {

    var [name, setName] = useState("")
    var [surname, setSurname] = useState("")
    var [phone, setPhone] = useState("")

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
    const onUpdateName = () => {
        if (!name) return;
        let list = sessionStorage.getItem("list");
        if (!list) {
            list = [];
        } else {
            list = JSON.parse(list);
        }
        var srn = list[list.length - 1].surname;
        var phn = list[list.length - 1].phone;
        list.pop();
        list.push({
            name: name,
            surname: srn,
            phone: phn
        })
        sessionStorage.setItem("list", JSON.stringify(list));
        navigateTo("/");
        
    }
    const onUpdateSurname = () => {
        if (!surname) return;
        let list = sessionStorage.getItem("list");
        if (!list) {
            list = [];
        } else {
            list = JSON.parse(list);
        }
        var nm = list[list.length - 1].name;
        var ph = list[list.length - 1].phone;
        list.pop();
        list.push({
            name: nm,
            surname: surname,
            phone: ph
        })
        sessionStorage.setItem("list", JSON.stringify(list));
        navigateTo("/");
    }
    const onUpdatePhone = () => {
        if (!phone) return;
        let list = sessionStorage.getItem("list");
        if (!list) {
            list = [];
        } else {
            list = JSON.parse(list);
        }
        var nm = list[list.length - 1].name;
        var srn = list[list.length - 1].surname;
        list.pop();
        list.push({
            name: nm,
            surname: srn,
            phone
        })
        sessionStorage.setItem("list", JSON.stringify(list));
        navigateTo("/");
    }
    return (
        <div className="form">
            <div className="form-content">
                <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="First Name"/>
                <button onClick={onUpdateName}>
                    Update
                </button>
                <input value={surname} onChange={handleSurnameChange} type="text" name="surname" placeholder="Last Name"/>
                <button onClick={onUpdateSurname}>
                    Update
                </button>
                <input value={phone} onChange={handlePhoneChange} type="text" name="phonenumber" placeholder="Phone Number"/>
                <button onClick={onUpdatePhone}>
                    Update
                </button>
            </div>
        </div>
    );
}