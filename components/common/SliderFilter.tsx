import styled from "styled-components";
import React from "react";

const Filter = styled.div`
    width: 100%;
    
    input{
      -webkit-appearance: none;
      width: 100%;
      height: 10px;
      background: #131524;
      outline: none;
      opacity: 0.7;
      border-radius: 10px;
      -webkit-transition: .2s;
      transition: opacity .2s;  
   }
   
     input:hover {
      opacity: 1;
    }
    
    input::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 15px;
      height: 15px;
      border-radius: 20px;
      background: #EE0CA1;
      cursor: pointer;
    }
    
    input::-moz-range-thumb {
      width: 25px;
      height: 25px;
      background: #EE0CA1;
      cursor: pointer;
    }

`;

const CardSearch = styled.div`
    width: 282px;
    height: auto;
    left: 0px;
    top: 100px;
    
    margin-top: 20px;
    background: #29274B;
    
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    
    @media only screen and (max-width: 600px) {
       width: 100%;
       display: inline-block;
    }

`;

const HeaderSearch = styled.div`
    display: flex;
    flex-direction: row;
     place-content: space-between;
     padding: 20px;
`;


const TitleSearch = styled.div`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
`;

const IconDown = styled.div`
    width: 25px;
    height: 20px;
    margin-right: 10px;
    background-image: url("/images/icon-down.png");
    background-repeat: no-repeat;
    background-position: center;
   
`;

const BodySearch = styled.div`
    width: 100%;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    padding: 0px 20px 20px 20px;
  
`;


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