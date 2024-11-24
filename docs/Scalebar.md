```tsx
import Mapa from 'react-native-mapa';
// or import { MapView, Scalebar } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.Scalebar pitch={60} />
</Mapa.MapView>;
```

# Scalebar

## Props

> **ScalebarProps**: `Object`

ScaleBar Props

## Type declaration

### visible?

> **`optional`** **visible**: `boolean`

Whether to display, optional, default `true`

### options?

> **`optional`** **options**: `Options`

Optional configuration types are modified as follows:

```ts
type Options = {
    maxWidth?: number;
    unit?: Unit;
};
```

maxWidth: Indicates the maximum width of the scale bar (note this is not the rendered length, the actual rendered length of the scale bar is calculated based on the scale, maxWidth is used to specify the upper limit). `maxWidth default 100`

unit: Indicates the Scalebar calculation method. Available values are `'imperial' | 'metric' | 'nautical'`, default `'metric'`.

> Configuration is optional, see `defaultOptions` for default values

**defaultOptions** values are as follows:

```ts
{
    maxWidth: 100,
    unit: 'metric',
}
```

## Example

```
import Mapa, {Scalebar} from 'react-native-mapa';
import {SafeAreaView} from 'react-native';
import React from 'react';

function ScalebarView(): React.JSX.Element {
   return (
       <SafeAreaView style={{height: '100%'}}>
           <Mapa.MapView>
               <Scalebar />
           </Mapa.MapView>
       </SafeAreaView>
   );
}

export default ScalebarView;

```
