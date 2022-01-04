import {CardSearch, HeaderSearch, TitleSearch, BodySearch, IconDown, Filter} from "./styles";
import React from "react";


interface SliderFilterProps {
    title: string,
    id: string,
    min: number,
    max: number,
    step: number,
    value: number
    filterChange: (value:number) => void
}

function SliderFilter(props: SliderFilterProps) {
    const {id, title, min, max, step, value} = props;

    function filterChange(newValue:string) {
        props.filterChange(parseFloat(newValue));
    }

    return (
        <CardSearch>
            <HeaderSearch>
                <TitleSearch>{title}</TitleSearch>
                <IconDown/>
            </HeaderSearch>
            <BodySearch>
                <Filter>
                    <input onChange={(event) => filterChange(event.target.value)}type="range" min={min} max={max} step={step} id={id} />
                </Filter>
                <p>{value}</p>
            </BodySearch>
        </CardSearch>

    );
};


export default SliderFilter;