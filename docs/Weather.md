```tsx
import Mapa from 'react-native-mapa';
// or import { MapView, Camera } from 'react-native-mapa';

 <Mapa.MapView>
    <Mapa.Camera />
    <Mapa.Weather akey={'XXX'} />
</Mapa.MapView>
```

# Weather
### akey

> **akey**: `string`

Weather REST request key

### request?

> **`optional`** **request**: [`WeatherReuqest`](WeatherReuqest.md)

Weather request interface extension
Implements AMap weather REST service request by default

### style?

> **`optional`** **style**: `PositionStyle`

Default displays in the bottom right corner of the screen, can set style to customize position

#### Example

```
{ right: 5, bottom: 5 } or 'right-top'
```

### detailEle()?

> **`optional`** **detailEle**: (`props`: [`WeatherData`]()) => `React.ReactElement` \| `null`

Custom weather forecast detail component
