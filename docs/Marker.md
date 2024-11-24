```
import Mapa from 'react-native-mapa';
// or import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.Marker position={position1} allowOverlap={true}>
        <View>
            <Button onPress={ () => onPress() } >
                I am clickable marker 1
            </Button>
        </View>
    </Mapa.Marker>
</Mapa.MapView>
```

#  Marker

## Props

### position

> **position**: `[number, number]`

Marker longitude and latitude coordinates

### anchor?

> **`optional`** **anchor**: `[number, number]`

Marker anchor point, x and y values range from [0, 1]
When anchor is [0, 0] it represents top-left, when anchor is [1, 1] it represents bottom-right

#### Default Value
```ts
[0.5, 0.5]
```

### allowOverlap?

> **`optional`** **allowOverlap**: `boolean`

Whether nearby markers on the map can overlap. If false, only one of the overlapping markers will be displayed on the map

#### Default Value

```ts
false
```

### children

> **children**: `ReactElement`

Custom Marker display content