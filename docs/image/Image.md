```tsx
import Mapa from 'react-native-mapa';
// or import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.Images>
        <Mapa.Image name="viewIcon">
            <View style={styles.image}>
                <Text>Custom Image</Text>
            </View>
        </Mapa.Image>
    </Mapa.Images>
</Mapa.MapView>
```

# Image

## Props
### name
> **name**: `string`
Image key

### scale
> **`optional`** **scale**: `number`
Image scale ratio

### children
> **children**: `ReactElement`
Custom image display content
