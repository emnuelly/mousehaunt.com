import {
    Select
} from "./styles";
import React, {useState} from "react";


interface DatePickerProps {
    changeEvent: (date: string) => void
}

function SelectExpirationDate({changeEvent} :DatePickerProps) {

    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (date: any) => {
        setSelectedDate(date);
        changeEvent(date)
    };

    return (
        <Select>
            <option value="" hidden>
                Select
            </option>
            <option value="1-hour">1 hour</option>
            <option value="1-day">1 day</option>
            <option value="1-week">1 week</option>
            <option value="1-month">1 month</option>
            <option value="3-months">3 months</option>
        </Select>


    );
};

export default SelectExpirationDate;