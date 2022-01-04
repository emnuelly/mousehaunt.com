import Link from "../Link";
import React from "react";
import CheckBoxDefault from "../CheckboxDefault/CheckboxDefault";
import {CardSearch, HeaderSearch, TitleSearch, IconDown, BodySearch, TextWithoutResults} from "./styles";



interface CheckBoxFilterProps {
    title: string,
    options: string[]
}

function CheckBoxFilter(props: CheckBoxFilterProps) {
    const {title, options} = props;

    return (
        <CardSearch>
            <HeaderSearch>
                <TitleSearch>{title}</TitleSearch>
                <IconDown/>
            </HeaderSearch>
            <BodySearch>
                    {options.map((current: string) => {
                        return (<CheckBoxDefault option={current}/>)
                    })}
                    
            </BodySearch>
        </CardSearch>
    );
}


const NoResults = () => (
    <BodySearch>
        <TextWithoutResults>No hero selected</TextWithoutResults>
        <Link>CHOOSE HEROES</Link>
    </BodySearch>
)

export default CheckBoxFilter;