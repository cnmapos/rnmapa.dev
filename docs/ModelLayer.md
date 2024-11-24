
```tsx
import Mapa from 'react-native-mapa';
// or import { MapView, Camera } from 'react-native-mapa';

const models = {
    car: require('../assets/models/sportcar.glb'),
};

<Mapa.MapView>
    <Mapa.Models models={models} />
    <Mapa.GeoJSONSource url={gejson} id="geojson-id">
        <Mapa.ModelLayer
            id="model-layer-id"
            sourceId="geojson-id"
            style={style}
        />
    </Mapa.GeoJSONSource>
</Mapa.MapView>
```

# ModelLayer

## Props

### id

> **id**: `string`

Unique identifier for the layer

### sourceLayerID?

> **`optional`** **sourceLayerID**: `string`

Source style layer mapping

### existing?

> **`optional`** **existing**: `boolean`

If the layer ID already exists, don't create a new layer

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

> **style**: [`ModelLayerStyleProps`](ModelLayerStyleProps.md)