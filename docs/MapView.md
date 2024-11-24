```tsx
import Mapa from 'react-native-mapa';
// or import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
 <Mapa.Camera pitch={60} />
</Mapa.MapView>
```
# MapView

## Props
### projection?

> **`optional`** **projection**: `"mercator"` \| `"globe"`

Coordinate projection system

### style?

> **`optional`** **style**: `'AmapSatellite' | 'AmapSatellite' | 'MapboxVector' | 'MapboxSatellite'`

Map style, supports AMap vector map, AMap satellite map, Mapbox vector map, Mapbox satellite map. Default is AMap vector map.

To customize the base map, you can use the [`Background`](Background.md) component.

### onPress()

> **`optional`** **onPress**: (`feature`) => `void`

Map click event

#### Parameters

• **feature**: `PressFeature`

Click location information

### onLongPress()?

> **`optional`** **onLongPress**: (`feature`) => `void`

Long press map event

#### Example

```
{
 "geometry": {"coordinates": [104.06190928823503, 30.657739121986168], "type": "Point"},
 "properties": {"screenPointX": 197.3333282470703, "screenPointY": 372.3333333333333},
 "type": "Feature"
}
```

#### Parameters

• **feature**: `PressFeature`

### onMapIdle()?

> **`optional`** **onMapIdle**: (`e`) => `void`

Triggered when the map is idle

#### Parameters

• **e**: `MapIdleEvent`

## Methods
### getCenter()

Get the center coordinates of the map view
 #### Returns ```Promise<Position>```

### getPointInView(location: Position): Promise```<Position>```;
Get the view coordinates based on latitude and longitude
 #### Returns view coordinates [x, y]
 #### arguments
 | Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
| location | `Position` | ✓ | Latitude and longitude coordinates |

### getCoordinateFromView(location: Position): Promise```<Position>```;
Get the latitude and longitude coordinates based on view coordinates
 #### Returns latitude and longitude coordinates [lng, lat]
#### arguments
 | Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
| location | `Position` | ✓ | View coordinates [x, y] |

### setCenter(location: Position);
Set the center coordinates
 #### Returns void
#### arguments
 | Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
location | `Position` | ✓ | Latitude and longitude coordinates [lng, lat] |

### setSourceVisibility(visible: boolean, sourceId: string, sourceLayerId: string | null): void;
Set the visibility of the source
#### Returns void
#### arguments
 | Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
visible | `boolean` | ✓ | Visibility |
sourceId | `string` | ✓ | Source ID |
sourceLayerId | `string` |  | Source layer ID, if null, all layer visibility is set

### zoomTo(step: number, duration?: number): void;
#### Returns void
#### arguments
 | Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
step | `number` | ✓ | Zoom step, for example, 1 represents zoom+1, -1 represents zoom - 1 |
duration | `number` |  | Animation transition time, default 100 milliseconds |

### flyTo(center: Position, duration?: number)
Set the center coordinates and fly to that location
 #### Returns void
 #### arguments
 | Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
| center | `Position` | ✓ | Latitude and longitude coordinates [lng, lat] |
| duration | `number` |  | Flight time, default 100 milliseconds |

### getZoom(): Promise<number | undefined>;
Get the current map zoom level
### Returns zoom level

### querySourceFeatures(sourceId: string, filter: FilterExpression, layerIDs: string[]): Promise```<FeatureCollection>```

Query the feature collection based on the source

#### Returns Promise```<FeatureCollection>```
#### arguments
 | Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
| sourceId | `string` | ✓ | Source ID |
| filter | `FilterExpression` | ✓ | Filter condition, mapbox style expression |
| layerIDs | `string[]` | ✓ | Layer ID list |

### queryRenderFeatures(bbox: BBox, filter: FilterExpression | [], layerIDs?: string[]): ```Promise<FeatureCollection>```
Query the feature collection of the visible area based on bbox
#### Returns Promise```<FeatureCollection>```
#### arguments
 | Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
| bbox | `BBox` | ✓ | [minX, minY, maxX, maxY] |
| filter | `FilterExpression` | ✓ | Filter condition, mapbox style expression |
| layerIDs | `string[]` |  | Layer ID list |

### getVisibleBounds(): Promise<[Position, Position] | undefined>;
Get the visible view area bounds [ne, sw]
#### Returns Promise```<[Position, Position] | undefined>```
