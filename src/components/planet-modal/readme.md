# planet-modal



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description | Type     | Default     |
| -------------- | ---------------- | ----------- | -------- | ----------- |
| `titleOfModal` | `title-of-modal` |             | `string` | `undefined` |


## Events

| Event    | Description | Type                |
| -------- | ----------- | ------------------- |
| `pClose` |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [planet-crud](../planet-crud)

### Depends on

- [planet-backdrop](../planet-backdrop)
- [planet-button-group](../planet-button-group)
- [planet-button](../planet-button)

### Graph
```mermaid
graph TD;
  planet-modal --> planet-backdrop
  planet-modal --> planet-button-group
  planet-modal --> planet-button
  planet-crud --> planet-modal
  style planet-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
