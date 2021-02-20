# planet-input



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute | Description | Type                                                | Default     |
| ------------ | --------- | ----------- | --------------------------------------------------- | ----------- |
| `label`      | `label`   |             | `string`                                            | `undefined` |
| `validators` | --        |             | `(() => Validator<PlanetValueInterface<string>>)[]` | `[]`        |
| `value`      | --        |             | `PlanetValueInterface<string>`                      | `undefined` |


## Events

| Event     | Description | Type                                        |
| --------- | ----------- | ------------------------------------------- |
| `changed` |             | `CustomEvent<PlanetValueInterface<string>>` |


## Dependencies

### Used by

 - [planet-crud](../planet-crud)

### Graph
```mermaid
graph TD;
  planet-crud --> planet-input
  style planet-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
