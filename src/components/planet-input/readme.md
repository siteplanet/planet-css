# planet-input



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute | Description | Type                                             | Default                             |
| ------------ | --------- | ----------- | ------------------------------------------------ | ----------------------------------- |
| `label`      | `label`   |             | `string`                                         | `undefined`                         |
| `name`       | `name`    |             | `string`                                         | `'__name'`                          |
| `type`       | `type`    |             | `"text" \| "toggle"`                             | `'text'`                            |
| `validators` | --        |             | `(() => Validator<PlanetValueInterface<any>>)[]` | `[]`                                |
| `value`      | --        |             | `PlanetValueInterface<any>`                      | `{ description: 'x', value: true }` |


## Events

| Event     | Description | Type                   |
| --------- | ----------- | ---------------------- |
| `pChange` |             | `CustomEvent<boolean>` |


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
