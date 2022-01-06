import {
    Select
} from "./styles";
import React, {useEffect, useState} from "react";


interface DatePickerProps {
    changeEvent: (date: string) => void
}

function SelectExpirationDate({changeEvent} :DatePickerProps) {

    const initialValue = [
        { id: 0, value: "Select" }];

    const allowedState = [
        { id: 1, value: "1 hour" },
        { id: 2, value: "1 day" },
        { id: 4, value: "1 week" },
        { id: 5, value: "1 month" },
        { id: 6, value: "3 month" }
    ];

    const [stateOptions, setStateValues] = useState(initialValue);

    console.log(initialValue.length);

    useEffect(() => {
        setStateValues(allowedState);
    }, []);

    const handleAddTypeChange = (e: any) => {
    }

    return (
        <Select>
            <select onChange={handleAddTypeChange}>
                {stateOptions.map((localState, index) => (
                    <option key={localState.id}>{localState.value}</option>
                ))}
            </select>
        </Select>


    );
};

export default SelectExpirationDate;