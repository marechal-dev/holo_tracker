import { HoloGirlCard } from '../HoloGirlCard'

import { Container } from './styles'

// EN HoloMembers
import moriCalliope from '../../assets/HoloGirlsImages/EN/moriCalliope.png';
import takanashiKiara from '../../assets/HoloGirlsImages/EN/takanashiKiara.png';

// ID HoloMembers
import kurejiOllie from '../../assets/HoloGirlsImages/ID/kurejiOllie.png';
import ayundaRisu from '../../assets/HoloGirlsImages/ID/ayundaRisu.png';

// JP HoloMembers
import inugamiKorone from '../../assets/HoloGirlsImages/JP/inugamiKorone.png';
import nekomataOkayu from '../../assets/HoloGirlsImages/JP/nekomataOkayu.jpg';
import { JSXElementConstructor } from 'react';

interface HoloGirlData {
  imageUrl: string
  name: string,
  isStreaming: boolean
}

interface HoloGirlCardsWrapperProps {
  HoloLiveGroupSlug: string,
  HoloGirlCardAmount: number,
  HoloGirlDataList: HoloGirlData[]
}

// Data sets
const enData: HoloGirlData[] = [
  {
    imageUrl: moriCalliope,
    name: 'Mori Calliope',
    isStreaming: true 
  }
];
const idData: HoloGirlData[] = [
  {
    imageUrl: kurejiOllie,
    name: 'Kureji Ollie',
    isStreaming: true 
  }
];
const jpData: HoloGirlData[] = [
  {
    imageUrl: inugamiKorone,
    name: 'Inugami Korone',
    isStreaming: true 
  }
];

export function HoloGirlCardsWrapper({ HoloLiveGroupSlug, HoloGirlCardAmount, HoloGirlDataList }: HoloGirlCardsWrapperProps) {
  /**Generate Cards
   * 
   * This function is used to create multiple cards at once, the params are the amount of cards and the data set. Return a TSX Element.
   * @param cardAmount Card Amount
   * @param dataSet Data Set
   * @returns HoloGirlCard Array
   */
  function generateCards(cardAmount: number, dataSet: Array<HoloGirlData>) {
    let n = 0;
    let cards: Array<JSX.Element> = []

    while (n < cardAmount) {
      dataSet.forEach((card) => {
        cards.push(<HoloGirlCard holoGirlImageUrl={card.imageUrl} holoGirlName={card.name} isHoloGirlStreaming={card.isStreaming} />);
      });

      n++;
    }
    
    return cards;
  }

  const enCards = generateCards(2, enData);
  const idCards = generateCards(2, idData);
  const jpCards = generateCards(2, jpData);

  return (
    <Container>
      <h1>{HoloLiveGroupSlug}</h1>

    </Container>
  );
}