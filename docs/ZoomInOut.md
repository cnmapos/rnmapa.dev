```tsx
import Mapa from 'react-native-mapa';
// or import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.ZoomInOut />
</Mapa.MapView>
```

ZoomInOut

## Props

### step

> **`optional`** **step**: `number`

Zoom in or out step size

#### Default Value

```ts
1
```

### duration

> **`optional`** **duration**: `number`

Zoom in/out animation duration

#### Default Value

```ts
100
```

### style

> **`optional`** **style**: `PositionStyle`

Default displays in the top right corner of the screen, can set style to customize position

#### Example

```
{ right: 5, bottom: 5 }
or 'right-top'
```

## Methods