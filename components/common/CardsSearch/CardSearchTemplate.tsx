import styled from "styled-components";
import Link from "../Link";
import React from "react";
import CheckBoxDefault from "../CheckboxDefault";
import PropTypes from 'prop-types';

const CardSearch = styled.div`
    width: 282px;
    height: auto;
    left: 0px;
    top: 100px;
    
    margin-top: 20px;
    background: #29274B;
    
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
    border-radius: 10px;

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

const TextWithoutResults = styled.div`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    padding-bottom: 20px;
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

const TextCheckbox = styled.div`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    padding-left: 28px;
  
`;

const CheckboxContainer = styled.div`
      flex-direction: row;
`;


CardSearchTemplate.propTypes = {
    title: PropTypes.string,
    textsCheckbox: PropTypes.string
};

function CardSearchTemplate(props: any) {
    const {title, textsCheckbox} = props;

    return (
        <CardSearch>
            <HeaderSearch>
                <TitleSearch>{title}</TitleSearch>
                <IconDown/>
            </HeaderSearch>
            <BodySearch>
                    <CheckBoxDefault option={textsCheckbox}/>
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

export default CardSearchTemplate;