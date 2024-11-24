```tsx
import Mapa from 'react-native-mapa';
// or import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.Camera pitch={60} />
    <Mapa.GeoJSONSource id={'geojson-id'} url={geojson}>
         <Mapa.LineLayer id="geojson-layer-id" sourceId="gejson-id" style={style} />
    </Mapa.GeoJSONSource>
</Mapa.MapView>
```

# LineLayer

# Props 
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

Source data identifier

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

> **`optional`** **slot**: [`LayerSlot`](LayerSlot.md)

### style

> **style**: [`LineLayerStyleProps`](LineLayerStyleProps.md)

