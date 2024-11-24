```tsx
import Mapa from 'react-native-mapa';
// or import { MapView, Camera } from 'react-native-mapa';
const gdwx = {
    tms: false,
    tiles: [
        'https://webst03.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    ],
};
<Mapa.MapView>
    <Mapa.RasterSource
        id="test-raster-source"
        tileSize={256}
        tms={gdwx.tms}
        tileUrlTemplates={gdwx.tiles}>
        ...
    </Mapa.RasterSource>
</Mapa.MapView>
```

# RasterSource

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

### tileUrlTemplates

> **`optional`** **tileUrlTemplates**: `string`[]

URL template list, supports multiple tileJSON address templates

#### Example

```ts
["https://mapa.example.com/vector/tiles/{z}/{x}/{y}.pbf"]
```

### minZoomLevel

> **`optional`** **minZoomLevel**: `number`

Minimum display zoom level, range [0, 22]

#### Default Value

```ts
0
```

### maxZoomLevel

> **`optional`** **maxZoomLevel**: `number`

Maximum display zoom level, range [0, 22]

#### Default Value

```ts
22
```

### tileSize
> **`optional`** **tileSize**: `number`

Size of map tiles.
Mapbox URLs default to 256, all others default to 512.

### tms

> **`optional`** **tms**: `boolean`

Whether to invert the Y-direction of tiles, default starts from the top-left position

#### Default

```ts
false
```



