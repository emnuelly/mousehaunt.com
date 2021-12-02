import React, { useState } from 'react';
import { formatTimeDays } from './utils/ratinhos';
import Card from '../common/Card';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Props } from './utils/ratinhos';

const DisplayMices: React.FC<Props> = ({ mices }: Props) => {
  const [hoveredIcon, setHoveredIcon] = useState(0);
  const [chosenMice, setChosenMice] = useState<any[]>([]);
  const [trackFavouriteMice, setTrackFavouriteMice] = useState<Array<number>>(
    []
  );

  const hoverState = (id: number) => {
    return setHoveredIcon(id);
  };

  const displayHeart = (id?: number) => {
    if (trackFavouriteMice.some(e => e === id))
      return (
        <AiFillHeart
          onClick={() => {
            checkIfNotThere(id);
          }}
        />
      );
    if (hoveredIcon >= 0 && hoveredIcon === id)
      return (
        <AiFillHeart
          onClick={() => {
            checkIfNotThere(id);
          }}
        />
      );
    return <AiOutlineHeart />;
  };

  const checkIfNotThere = (id: number) => {
    if (trackFavouriteMice.some(e => e === id)) {
      setTrackFavouriteMice(trackFavouriteMice.filter(r => r !== id));
    } else {
      setTrackFavouriteMice(add => [...add, id]);
    }
  };

  const clickedChosenMice = (mice: any) => {
    if (chosenMice.some(e => e.id === mice.id)) {
      setChosenMice(chosenMice.filter(r => r.id !== mice.id));
    } else {
      setChosenMice(chosenMice => [...chosenMice, mice]);
    }
  };

  const displayCards = () => {
    if (!mices) return <div>No mices found.</div>;

    const sizeStyle = { width: '380px', height: '430px' };
    const ratObject = {
      mices,
      hoverState,
      clickedChosenMice,
      displayHeart,
      sizeStyle,
      formatTimeDays,
    };

    return <Card ratMarketPlace={ratObject} />;
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '25%' }}>
        Filters
        <br />
        <div>{JSON.stringify(chosenMice, null, 2)}</div>
      </div>
      {displayCards()}
    </div>
  );
};

export default DisplayMices;

// return Object.values(mices).map(e => (
//   <Cards
//     key={e.id}
//     style={{ backgroundColor: '#29274B', marginBottom: '5%' }}
//   >
//     <CardsBody>
//       <MiceContainerImage style={decideColour(e.rarity)}>
//         <AlignItemsCenter>
//           <ImageStack>
//             <MiceLikeButton>
//               <div
//                 onMouseEnter={() => hoverState(e.id)}
//                 onMouseLeave={() => hoverState(0)}
//                 onClick={() => {
//                   clickedChosenMice(e);
//                   displayHeart(e.id);
//                 }}
//               >
//                 {displayHeart(e.id)}
//               </div>
//             </MiceLikeButton>
//             <BackgroundEffect>
//               <Image
//                 alt={'decor'}
//                 width={'300px'}
//                 height={'300px'}
//                 src="/../public/images/other/store-effect.png"
//                 layout="responsive"
//               />
//             </BackgroundEffect>

//             <Mice>
//               <Image
//                 src={e.image}
//                 alt={e.name}
//                 width={sizeStyle.width}
//                 height={sizeStyle.height}
//               />
//             </Mice>
//           </ImageStack>
//         </AlignItemsCenter>
//       </MiceContainerImage>
//       <CardsTitle>
//         <MiceTitle>{e.name}</MiceTitle>
//         <MiceSubTitle>posted: {formatTimeDays(e.date_posted)}</MiceSubTitle>
//       </CardsTitle>
//       <ButtonGroup>
//         <ColorHighlight>
//           <FormatMHT>
//             <NumberFormat
//               thousandsGroupStyle="thousand"
//               thousandSeparator={true}
//               decimalSeparator="."
//               suffix={' MHT'}
//               value={e.priceMTH}
//               displayType={'text'}
//               renderText={(value: number, props: any) => {
//                 const icon = { marginTop: '-4px', fontSize: '25px' };
//                 return (
//                   <div {...props}>
//                     <IconStyle>
//                       <BsCurrencyDollar style={icon} />
//                       {value}
//                     </IconStyle>
//                   </div>
//                 );
//               }}
//             />
//           </FormatMHT>
//         </ColorHighlight>

//         <FormatUSD>
//           <NumberFormat
//             thousandsGroupStyle="thousand"
//             thousandSeparator={true}
//             decimalSeparator="."
//             suffix={' USD'}
//             value={e.priceMTH}
//             displayType={'text'}
//             renderText={(value: number, props: any) => {
//               return <div {...props}>{value}</div>;
//             }}
//           />
//         </FormatUSD>
//       </ButtonGroup>
//     </CardsBody>
//   </Cards>
// ));
