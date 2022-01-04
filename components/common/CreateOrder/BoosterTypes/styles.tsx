import styled from "styled-components";

export const Content = styled.div`
display: contents;

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked),
[type="radio"]:checked,
[type="radio"]:not(:checked){
    position: absolute;
    left: -9999px;
    width: 0;
    height: 0;
    visibility: hidden;
}

.checkbox-tools:checked + label,
.checkbox-tools:not(:checked) + label{
    position: relative;
    display: inline-block;
    padding: 25px;
    width: 124px;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    margin: 0a auto;
    margin-left: 5px;
    margin-right: 5px;
    text-align: center;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    color: #fff;
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear; 
}
.checkbox-tools:not(:checked) + label{
    background-color: #29274B;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.checkbox-tools:checked + label{
    background-image: linear-gradient(96.82deg, #EE0CA1 0%, #D742B6 100%);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-tools:not(:checked) + label:hover{
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-tools:checked + label::before,
.checkbox-tools:not(:checked) + label::before{
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-image: linear-gradient(298deg, #F2089F, #F2089F);
    z-index: -1;
}
.checkbox-tools:checked + label .uil,
.checkbox-tools:not(:checked) + label .uil{
    font-size: 24px;
    line-height: 24px;
    display: block;
    padding-bottom: 10px;
}

.checkbox:checked ~ .section .container .row .col-12 .checkbox-tools:not(:checked) + label{
    background-color: #29274B;
    color: #fff;
    box-shadow: 0 1x 4px 0 rgba(0, 0, 0, 0.05);
}

`

export const Input = styled.input.attrs({type: 'checkbox'})``
