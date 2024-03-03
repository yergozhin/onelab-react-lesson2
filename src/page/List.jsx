import { useEffect, useState } from "react";
import styled from "styled-components";
import Person from "../components/Person";


export default function List() {

    const [data, setData] = useState([]);

    useEffect(() => {
        let list = sessionStorage.getItem("list");
        if (!list) {
            list = []
        } else {
            list = JSON.parse(list);
        }
        setData(list);
    }, [])

    return (
        <div className = "table">
            <h1 className="header">A List of People</h1>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Phone Number</th>
            </tr>
            {
                data.map((person) => (
                    <Person person={person} />
                ))
            }
        </div>
    );
}