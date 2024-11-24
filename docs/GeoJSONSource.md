```tsx
import Mapa from 'react-native-mapa';
// or import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.GeoJSONSource id="geojson-id" url={geojson}>
        ...
    </Mapa.GeoJSONSource>
</Mapa.MapView>
```
# GeoJSONSource

## Props
### id

> **id**: `string`

Source identifier

### existing?

> **`optional`** **existing**: `boolean`

Whether the source exists

### url

> **url**: `string` | `GeoJSON.GeometryCollection` | `GeoJSON.Feature` | `GeoJSON.FeatureCollection` | `GeoJSON.Geometry`

HTTP(S) URL, file path, or GeoJSON format object

### tileMaxZoom

> **`optional`** **tileMaxZoom**: `number`

Maximum zoom level for generating vector tiles. The map will automatically generate tiles based on the maximum zoom level to improve rendering performance

### buffer

> **`optional`** **buffer**: `number`

Sets the buffer value for each edge of the tile. 0 means no buffer, 512 means the buffer is the same size as the tile.
When set to a larger value, rendering performance will decrease

### hitbox

> **`optional`** **hitbox**: [`number`, `number`]

Sets the buffer range for press events

### onPress()

> **`optional`** **onPress**: (`e`) => `void`

#### Parameters

• **e**: `OnPressEvent`

#### Returns

`void`

### children

> **children**: `ReactElement` \| `ReactElement`[]
