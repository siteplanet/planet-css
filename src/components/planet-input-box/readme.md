# planet-input-box



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute   | Description | Type                                             | Default     |
| ------------ | ----------- | ----------- | ------------------------------------------------ | ----------- |
| `label`      | `label`     |             | `string`                                         | `undefined` |
| `showHelp`   | `show-help` |             | `boolean`                                        | `false`     |
| `validators` | --          |             | `(() => Validator<PlanetValueInterface<any>>)[]` | `[]`        |
| `value`      | --          |             | `PlanetValueInterface<any>`                      | `undefined` |


## Events

| Event    | Description | Type                |
| -------- | ----------- | ------------------- |
| `pClear` |             | `CustomEvent<void>` |
| `pFocus` |             | `CustomEvent<void>` |
| `pHelp`  |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [planet-input](../planet-input)

### Depends on

- [planet-button-group](../planet-button-group)
- [planet-button](../planet-button)

### Graph
```mermaid
graph TD;
  planet-input-box --> planet-button-group
  planet-input-box --> planet-button
  planet-input --> planet-input-box
  style planet-input-box fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
