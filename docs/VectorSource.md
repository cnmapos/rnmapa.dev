```tsx
import Mapa from 'react-native-mapa';
// or import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
     <Mapa.VectorSource
                url={tileJSONUrl}
                id="geojson-source"
                onPress={e => {
                    console.log(
                        `VectorSource onPress: ${e.features}`,
                        e.features,
                    );
                }}>
        ...
    </Mapa.VectorSource>
</Mapa.MapView>
```

# VectorSource

## Props
### id

> **id**: `string`

Source identifier

### existing

> **`optional`** **existing**: `boolean`

ID maps to an existing source. If true, a new source will not be created

### url

> **`optional`** **url**: `string`

TileJSON source information configuration address

### urlTemplates

> **`optional`** **urlTemplates**: `string`[]

URL template list, supports multiple tileJSON address templates

### minZoom

> **`optional`** **minZoom**: `number`

Minimum display zoom level, range [0, 22]

### maxZoom

> **`optional`** **maxZoom**: `number`

Maximum display zoom level, range [0, 22]

### tms

> **`optional`** **tms**: `boolean`

Whether to invert the Y-direction of tiles, default starts from the top-left position

### onPress()

> **`optional`** **onPress**: (`e`) => `void`

The onPress event will be triggered when the layer corresponding to the current source is above (higher z-index) the layers of other sources

#### Parameters

• **e**: `OnPressEvent`

Event information

### hitbox

> **`optional`** **hitbox**: [`number`, `number`]

Sets the buffer range for press events
