# planet-pagination



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute     | Description | Type       | Default     |
| --------------------- | ------------- | ----------- | ---------- | ----------- |
| `allowedItemsPerPage` | --            |             | `number[]` | `undefined` |
| `page`                | `page`        |             | `number`   | `1`         |
| `totalItems`          | `total-items` |             | `number`   | `undefined` |


## Events

| Event     | Description | Type                                            |
| --------- | ----------- | ----------------------------------------------- |
| `pUpdate` |             | `CustomEvent<{ limit: number; skip: number; }>` |


## Dependencies

### Used by

 - [planet-crud](../planet-crud)

### Depends on

- [planet-button-group](../planet-button-group)
- [planet-button](../planet-button)

### Graph
```mermaid
graph TD;
  planet-pagination --> planet-button-group
  planet-pagination --> planet-button
  planet-crud --> planet-pagination
  style planet-pagination fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
