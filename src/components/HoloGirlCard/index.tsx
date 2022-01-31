import { Container } from './styles'

interface HoloGirlCardProps {
  holoGirlImageUrl: string,
  holoGirlName: string,
  isHoloGirlStreaming: boolean
}

export function HoloGirlCard({ holoGirlImageUrl, holoGirlName, isHoloGirlStreaming }: HoloGirlCardProps) {
  return (
    <Container>
      <img src={holoGirlImageUrl} alt={holoGirlName} />
      <h2>{holoGirlName}</h2>
      <p>{isHoloGirlStreaming}</p>
    </Container>
  );
}
