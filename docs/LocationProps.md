# Type LocationProps

> **LocationProps**: `Object`

Location props

## visible

> **visible**: `boolean`

Whether the location icon is displayed on the map

#### Default Value

```ts
true
```

## style

> **`optional`** **style**: `PositionStyle` \| [`PositionSlot`](../../types/type-aliases/PositionSlot.md)

Default displays in the bottom right corner of the screen, can set style to customize position

#### Example

```
{ right: 5, bottom: 5 }
or 'right-top'
```

## locateWhenInit?

> **`optional`** **locateWhenInit**: `boolean`

Auto locate when initialized

#### Default Value

```ts
false
```

## onChange()?

> **`optional`** **onChange**: (`e`) => `void`

Listen for latest location information

#### Parameters

• **e**: `LocationEvent`

Event information

#### Returns

`void`
