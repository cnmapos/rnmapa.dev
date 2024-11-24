```tsx
import Mapa, {RasterLayerStyleProps} from 'react-native-mapa';
// or import { MapView, Camera } from 'react-native-mapa';

const style: RasterLayerStyleProps = {
    rasterOpacity: 0.6,
};
const gdwx = {
    tms: false,
    tiles: [
        'https://webst03.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    ],
};
<Mapa.MapView>
    <Mapa.Camera pitch={60} />
    <Mapa.RasterSource
        id="test-raster-source"
        tileSize={256}
        tms={gdwx.tms}
        tileUrlTemplates={gdwx.tiles}>
        <Mapa.RasterLayer
            id="test-raster-source-layer"
            sourceId="test-raster-source"
            style={style}
        />
    </Mapa.RasterSource>
</Mapa.MapView>
```

# RasterLayer

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

### minZoomLevel?

> **`optional`** **minZoomLevel**: `number`

Minimum zoom level for layer visibility

### maxZoom?

> **`maxZoomLevel`** **maxZoom**: `maxZoomLevel`

Maximum zoom level for layer visibility

### slot?

> **`optional`** **slot**: `"bottom"` \| `"middle"` \| `"top"`

The slot this layer is assigned to. If specified and a slot with this name exists, the layer will be placed at that position in the layer order.

### style

> **style**: [`RasterLayerStyleProps`](RasterLayerStyleProps.md)

Custom rendering style configuration for the raster layer