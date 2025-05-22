import {
    FutureWeather__Container,
} from './FutureWeather.styles.js'
import DayCard from "./DayCard/index.jsx";

export default function FutureWeather() {
    let isDesktop = window.innerWidth >= 768;


    return (
      <FutureWeather__Container>
          <DayCard dayNumber={0}/>
          <DayCard dayNumber={1}/>
          <DayCard dayNumber={2}/>
          {isDesktop && <DayCard dayNumber={3}/>}
          {isDesktop && <DayCard dayNumber={4}/>}
      </FutureWeather__Container>
    );
}