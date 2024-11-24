```tsx
import Mapa from 'react-native-mapa';
// or import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.Camera pitch={60} />
    <Mapa.GeoJSONSource id={'geojson-id'} url={geojson}>
        <Mapa.FillLayer id="geojson-layer-id" sourceId="geojson-id" style={style}
        />
    </Mapa.GeoJSONSource>
</Mapa.MapView>
```
# FillLayer

## Props

### id

> **id**: `string`

Unique identifier for the layer

### sourceLayerID?

> **`optional`** **sourceLayerID**: `string`

Source style layer mapping

### existing?

> **`optional`** **existing**: `boolean`

If the layer ID already exists, a new layer will not be created

### sourceId?

> **`optional`** **sourceId**: `string`

Source identifier

### layerIndex?

> **`optional`** **layerIndex**: `number`

Insert layer at specified index

### aboveLayerID?

> **`optional`** **aboveLayerID**: `string`

Insert above the specified layer ID

### belowLayerID?

> **`optional`** **belowLayerID**: `string`

Insert below the specified layer ID

### filter?

> **`optional`** **filter**: `Expression`

Mapbox filter expression

### minZoom?

> **`optional`** **minZoom**: `number`

Minimum zoom level for layer visibility

### maxZoom?

> **`optional`** **maxZoom**: `number`

Maximum zoom level for layer visibility

### slot?

> **`optional`** **slot**: `"bottom"` \| `"middle"` \| `"top"`

### style

> **style**: [`FillLayerStyleProps`](FillLayerStyleProps.md)
