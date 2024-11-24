```tsx
import Mapa from 'react-native-mapa';
// or import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
 <Mapa.Camera zoom={zoom} center={center} heading={heading} pitch={pitch}  />
</Mapa.MapView>
```
MapView

## Props
### zoom

> **`optional`** **zoom**: `number`

Map zoom level

#### Default Value

```ts
15
```

### maxzoom

> **`optional`** **maxzoom**: `number`

Maximum zoom level

#### Default Value

```ts
21
```

### minzoom

> **`optional`** **minzoom**: `number`

Minimum zoom level

#### Default Value

```ts
3
```

### center

> **`optional`** **center**: `PositionLike`

Set center coordinates

### heading

> **`optional`** **heading**: `number`

Heading angle

### pitch

> **`optional`** **pitch**: `number`

Pitch angle

### bounds

> **`optional`** **bounds**: [`Bounds`](./Bounds.md)

Map visible range
Example: [104.061891, 30.65796, 104.062304, 30.65900]
or \{ sw: [104.061891, 30.65796], ne: [104.062304, 30.65900] \}

### followLocation

> **`optional`** **followLocation**: `boolean`

Follow user location

### followZoomLevel

> **`optional`** **followZoomLevel**: `number`

Zoom level when following user location

### followPitch

> **`optional`** **followPitch**: `number`

Pitch angle when following user location

### followHeading

> **`optional`** **followHeading**: `number`

Heading angle when following user location

### onChange()

> **`optional`** **onChange**: (`e`) => `void`
Triggered when camera position, heading angle, or pitch angle changes
#### Parameters

• **e**: [`CameraEvent`](./CameraEvent.md)

#### Returns

`void`

## Methods
