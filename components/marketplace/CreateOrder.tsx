import React, { useState, useContext } from 'react';
import { Card, FlexWidth } from './styles/SuccessPage';
import { MarketContext } from '../../contexts/MarketPlaceContext';
import {
  MiceContainerImage,
  ImageStack,
  BackgroundEffect,
  Mice,
} from './styles';
import DatePicker from 'react-datepicker';
import { AiOutlineInfoCircle, AiOutlineCalendar } from 'react-icons/ai';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import 'react-datepicker/dist/react-datepicker.css';
import cuteRat from '../../public/images/game-related/hero-6.png';
import {
  ListingTitle,
  Label,
  FlexHeight,
  CardBackground,
  CardBackgroundText,
  Body,
  LabelCard,
  Choices,
  DateExpiration,
} from './styles/CreateOrderPage';
import { useRouter } from 'next/router';
import { decideColour } from './utils/ratinhos';
import { GradientColor } from '../../styles/Home';
import Select, { components } from 'react-select';

import Image from 'next/image';

interface Props {
  object: any;
}

const options = [
  { value: 'MHT', label: '$MHT' },
  {
    value: 'USD',
    label: 'USD',
  },
];

const CreateOrder: React.FC<Props> = ({ object }) => {
  const { mices, addMices } = useContext(MarketContext);
  const [selectValue, setSelectedValue] = useState('');
  const [startDate, setStartDate] = useState();
  const [amount, setAmount] = useState(0.45);
  const [fillEverything, setFillEverything] = useState(false);
  const [listingCreated, setListingCreated] = useState(false);
  const router = useRouter();

  const submitForm = e => {
    if (!selectValue.value || !startDate || !amount) {
      e.preventDefault();
      return setFillEverything(true);
    }
    e.preventDefault();

    const newId = object.id + 23;
    addMices({
      id: newId,
      rarity: object.rarity,
      name: object.name,
      priceUsd: object.priceUsd,
      priceMTH: object.priceMTH,
      date_posted: startDate,
      image: cuteRat,
      currency: selectValue.value,
    });
    setListingCreated(true);
  };
  const setOption = e => {
    setSelectedValue(e);
  };

  const amountChange = e => {
    setAmount(e.target.value);
  };

  const colourStyles = {
    control: (styles, state) => {
      return {
        ...styles,
        backgroundColor: '#29274B',
        border: 0,
        boxShadow: state.isFocused ? '0 0 5px #D742B6' : 0,
        outlineStyle: state.isFocused ? 'solid' : 0,
        outlineColor: state.isFocused ? '#D742B6' : 0,
        borderRadius: '8px',
        minHeight: '35px',
        height: '35px',
      };
    },
    option: styles => {
      return {
        ...styles,
        backgroundColor: '#29274B',
        color: 'white',
        border: '0',
        height: '40px',
      };
    },
    dropdownIndicator: style => ({
      ...style,
      color: 'white',
      '&:hover': {
        color: '#D742B6',
      },
    }),
    valueContainer: (style, state) => ({
      ...style,
      height: '40px',
      padding: '0 6px',
    }),
    menuPortal: (style, state) => ({ ...style, zIndex: 9999, color: 'red' }),
    menuList: (style, state) => ({
      ...style,
      paddingTop: '0px',
      paddingBottom: '0px',
    }),
  };

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <MdOutlineArrowDropDown />
      </components.DropdownIndicator>
    );
  };

  const CustomInput = ({ value, onClick, onChange }) => (
    <label className="custom-input">
      <AiOutlineCalendar onClick={onClick} />
      <input value={value} onClick={onClick} onChange={onChange} />
    </label>
  );

  const showAlerts = () => {
    if (listingCreated)
      return (
        <div
          className="fail"
          style={{
            textAlign: 'center',
            color: 'white',
            padding: '20px',
            backgroundColor: '#04AA6D',
          }}
        >
          Your listing was created.
        </div>
      );

    if (fillEverything)
      return (
        <div
          className="success"
          style={{
            textAlign: 'center',
            padding: '20px',
            color: 'white',
            backgroundColor: '#ff9800',
          }}
        >
          Please fill all fields
        </div>
      );
    return null;
  };

  if (!object) return null;
  return (
    <Card style={{ position: 'relative', zIndex: '2' }}>
      {showAlerts()}

      <form onSubmit={submitForm}>
        <Body>
          <FlexWidth>
            <ListingTitle>
              <div>List item for sale</div>
            </ListingTitle>
            <Label>
              <div>Price</div>
              <div>
                <AiOutlineInfoCircle />
              </div>
            </Label>
            <Choices>
              <div style={{ width: '130px', marginLeft: '25px' }}>
                <Select
                  value={selectValue}
                  menuPortalTarget={document.body}
                  onChange={setOption}
                  options={options}
                  components={{ DropdownIndicator }}
                  styles={colourStyles}
                  placeholder={'Currency'}
                />
              </div>
              <input
                className="input-dollar"
                type="number"
                value={amount}
                onChange={e => amountChange(e)}
              />
            </Choices>

            <DateExpiration>
              <div>
                <div>Expiration time</div>
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  placeholderText="Start Date"
                  customInput={<CustomInput />}
                />
              </div>
            </DateExpiration>

            <input
              className="input-submit"
              type="submit"
              value="PLACE ORDER"
              placeholder="Amount"
            />
          </FlexWidth>
          <FlexHeight>
            <MiceContainerImage style={decideColour(object?.rarity)}>
              <ImageStack>
                <BackgroundEffect>
                  <Image
                    alt={'decor'}
                    width={'20px'}
                    height={'20px'}
                    src="/../public/images/other/store-effect.png"
                    layout="responsive"
                  />
                </BackgroundEffect>
                <Mice>
                  <Image
                    src={object?.image}
                    alt={object?.name}
                    width={'250px'}
                    height={'250px'}
                    layout="responsive"
                  />
                </Mice>
              </ImageStack>
              <CardBackground>
                <CardBackgroundText>
                  <h3>{object?.name}</h3>
                  <span className="posted">posted: {object?.date_posted}</span>

                  <LabelCard>
                    <GradientColor>{object?.priceMTH} $MHT</GradientColor>
                    <div>{object?.priceUsd} Usd</div>
                  </LabelCard>
                </CardBackgroundText>
              </CardBackground>
            </MiceContainerImage>
          </FlexHeight>
        </Body>
      </form>
    </Card>
  );
};

export default CreateOrder;
