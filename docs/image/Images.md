```tsx
import Mapa from 'react-native-mapa';
// or import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.Images images={images} onImageMissing={onImageMissing} />
</Mapa.MapView>
```
# Images
## Props
### images?

> **`optional`** **images**: `{ [key in string]: string | ImageSourcePropType }`

Image sources, supported formats:
\{uri: 'http://...'\} or require('image.png') or import 'image.png'

### onImageMissing()?

> **`optional`** **onImageMissing**: (`imageKey`) => `void`

When the layer cannot find the image corresponding to imageKey during rendering, it triggers the onImageMissing event, which can be used to dynamically update the images collection

#### Example

```
 <Images
   images={images}
    onImageMissing={(key) => {
      if (key != 'pin-known') {
        this.setState({
          images: { ...this.state.images, [imageKey]: pinIcon },
        });
      }
    }}
  >
```

#### Parameters

• **imageKey**: `string`

#### Returns

`void`

### children?

> **`optional`** **children**: `TypedReactNode`\<*typeof* [`Image`](../functions/Image.md)\>
