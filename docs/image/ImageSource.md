```tsx
import Mapa from 'react-native-mapa';
// or import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.ImageSource
        coordinates={coordinates} id={'test-10'} url={imageUrl}>
        ...
    </Mapa.ImageSource>
</Mapa.MapView>
```

# ImageSource
## Props

### id

> **id**: `string`

Unique identifier for the source

### url

> **url**: `string`

Network request URL or local path

### coordinates

> **coordinates**: [`Position`, `Position`, `Position`, `Position`]

Image display coordinates: top-left, top-right, bottom-right, bottom-left

### children
Image layer
> **children**: `ReactElement` \| `ReactElement`[]