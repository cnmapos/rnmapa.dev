```tsx
import Mapa from 'react-native-mapa';

const backgroundList: BackgroundListItem[] = [
    {
        id: 'MapboxVector',
        name: 'Mapbox Vector',
        style: 'mapbox://styles/mapbox/dark-v10',
    },
    {
        id: 'Satellite',
        name: 'Mapbox Satellite',
        style: 'mapbox://styles/mapbox/satellite-v9',
    },
];

<Mapa.MapView>
    <Mapa.Background
        list={backgroundList}
        backgroundId={backgroundList[1].id}
    />
</Mapa.MapView>
```

Background Layer Component

## Props

### backgroundId
Default selected background layer ID. If not set, defaults to the ID of the first item in the list

> **`optional`** **backgroundId**: string


### list

> **`optional`** **list**: [`BackgroundListItem[]`](BackgroundListItem.md)

Background layer list. If not provided, defaults to AMap Vector, AMap Satellite, Mapbox Vector, Mapbox Satellite

##### Default Value

```ts
const defaultBackgroundList: BackgroundListItem[] = [
    {
        id: 'AmapVector',
        name: 'AMap Vector',
        style: {
            //...    
        },
    {
        id: 'AmapSatellite',
        name: 'AMap Satellite',
        style: {
            // ...
        },
    },
    {
        id: 'MapboxVector',
        name: 'Mapbox Vector',
        style: 'mapbox://styles/mapbox/dark-v10',
    },
    {
        id: 'Satellite',
        name: 'Mapbox Satellite',
        style: 'mapbox://styles/mapbox/satellite-v9',
    },
];
```

### renderItem()?

> **`optional`** **renderItem**: `(item: BackgroundListItem, active: boolean) => ReactNode`

Customize the UI rendering style for each background layer option

#### Parameters

• **item**: `BackgroundListItem` Layer configuration item

• **active**: `boolean` Whether the current background layer is this layer

#### Returns

`ReactNode` Returns a React component

#### Example
```ts
    const renderListItem = (item, active) => {
        return (
            <View
                style={{
                    marginBottom: 10,
                    width: itemWidth,
                }}>
                <Text
                    style={{
                        color: active ? 'red' : '#000',
                        textAlign: 'center',
                    }}>
                    {item.name}
                </Text>
            </View>
        );
    };
    <Mapa.Background
        list={...}
        renderItem={renderListItem}
    />
```

### children?

> **`optional`** **children**: `(operation: { close, open, changeBg, getCurrentBg }, list: BackgroundListItem) => ReactNode`

Customize the entire background component layer panel. Will inject two properties to child components: operation and list

#### Parameters

• **operation**: `{ close, open, changeBg, getCurrentBg }` Provides four methods for users to control the background layer

• **list**: `BackgroundListItem[]` Background layer configuration list

#### Example
```ts
    function CustomView(props: any) {
        const {list, operation} = props;
        return (
            <View>
                <Button onPress={operation?.close}> Close </Button>
                {list.map((item: BackgroundListItem) => {
                    return (
                        <Button
                            type="outline"
                            key={item.id}
                            onPress={() => operation.changeBg(item.id)}>
                            {item.name}
                        </Button>
                    );
                })}
            </View>
        );
    }
    <Mapa.Background
        list={backgroundList}
    >
        <CustomView/>
    </Mapa.Background>
```

## Methods

> **close**

Close the background layer component popup

#### Returns

`void`

> **open**

Open the background layer component popup

#### Returns

`void`

> **getCurrentBg**

Get the current background layer ID

#### Returns

`string`

> **changeBg**: `(id: string) => void`

Change the background layer to the specified one. The ID must exist in the list, otherwise it will not take effect

#### Returns

`void`
