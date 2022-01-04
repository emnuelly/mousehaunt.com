import React, { useState } from 'react';
import {Content, Input} from "./styles";

function BoosterTypes() {
    return (
        <Content>
            <input type={"radio"} className={"checkbox-tools"} id={"booster-legendary"} name={"tools"}/>
            <label className={"for-checkbox-tools"} htmlFor={"booster-legendary"}>Legendary Booster</label>
            <input type={"radio"} className={"checkbox-tools"} id={"booster-epic"} name={"tools"}/>
            <label className={"for-checkbox-tools"} htmlFor={"booster-epic"}>Epic Booster</label>
            <input type={"radio"} className={"checkbox-tools"} id={"booster-rare"} name={"tools"}/>
            <label className={"for-checkbox-tools"} htmlFor={"booster-rare"}>Rare Booster</label>
            <input type={"radio"} className={"checkbox-tools"} id={"booster-genesis"} name={"tools"}/>
            <label className={"for-checkbox-tools"} htmlFor={"booster-genesis"}>Genesis Booster</label>
        </Content>
    );

}

export default BoosterTypes;