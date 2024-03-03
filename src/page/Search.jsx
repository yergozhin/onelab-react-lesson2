import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {

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

    const onSearch = () => {
        if (!name || !surname || !phone) return;
        let list = sessionStorage.getItem("list");
        if (!list) {
            list = [];
        } else {
            list = JSON.parse(list);
        }
        var elementFound = false;
        for (var i = 0; i < list.length; i++) {
            //console.log(list[i]);
            if(list[i].name === name && list[i].surname === surname && list[i].phone === phone){
                elementFound = true;
            }
        }
        if(elementFound){
            var indexFound = false;
            for (var j = 0; j < list.length; j++) {
                //console.log(list[i]);
                if(list[j].name === name && list[j].surname === surname && list[j].phone === phone){
                    indexFound = true;
                }
                if(indexFound && j + 1 < list.length){
                    var temp = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = temp;
                }
            }
            sessionStorage.setItem("list", JSON.stringify(list));
            /*list.pop({
                name,
                surname,
                phone
            })*/
            navigateTo("/update");
        }
        //sessionStorage.setItem("list", JSON.stringify(list));
        //navigateTo("/");
    }

    return (
        <div className="form">
            <div className="form-content">
                <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="First Name"/>
                <input value={surname} onChange={handleSurnameChange} type="text" name="surname" placeholder="Last Name"/>
                <input value={phone} onChange={handlePhoneChange} type="text" name="phonenumber" placeholder="Phone Number"/>
                <button onClick={onSearch}>
                    Search
                </button>
            </div>
        </div>
    );
}