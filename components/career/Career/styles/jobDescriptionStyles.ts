import styled from 'styled-components'

export const JobTitle = styled.div`
  font-family: 'Bebas Neue Pro';
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;
  padding-top: 8%;
  font-style: normal;
  letter-spacing: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;

  @media only screen and (max-width: 600px) {
    justify-content: center;

    font-family: Bebas Neue Pro;
    font-style: normal;
    font-size: 80px;
    line-height: 72px;
  }
`

export const JobDescriptionHeader = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 40px;
  margin-top: 40px;
  border-radius: 10px;
  background-color: #29274b;
`

export const JobDescriptionText = styled.div`
  font-family: 'SF Pro Display';
  font-weight: 400px;
  font-style: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
`

export const IconStyle = styled.div`
  display: flex;
  color: white;
  margin-bottom: -10px;
  align-items: center;
`

export const IconPadding = styled.div`
  margin: 5px;
  text-transform: capitalize;
`

export const IconTextSub = styled.div`
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  width: 100%;
  background: -webkit-linear-gradient(#ee0ca1, #d742b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 30px;
  margin-right: 10%;
  letter-spacing: 1px;
`

export const SectionTitle = styled.h1`
  font-weight: 800;
  font-style: normal;
  font-family: 'Bebas Neue Pro';
  font-size: 48px;
  font-color: #ffffff;
`

export const SectionParagraph = styled.p`
  font-weight: 400;
  font-style: normal;
  font-family: 'SF Pro Display';
  font-size: 18px;
  line-height: 24px;
  font-color: #ffffff;
`

export const SectionBullet = styled.li`
  font-weight: 400;
  font-style: normal;
  font-family: 'SF Pro Display';
  font-size: 18px;
  margin-top: 10px;
  line-height: 24px;
  font-color: #ffffff;
`

export const ButtonStyle = styled.div`
  font-weight: 700;
  background-color: #29274b;
  padding: 5px;
  width: 15%;
  text-align: center;
  border-radius: 10px;
  font-style: normal;
  font-family: 'Bebas Neue Pro';
  font-size: 20px;
  line-height: 40px;
  font-color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`

export const DisplayButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 90px;
  margin-bottom: 20%;
`
