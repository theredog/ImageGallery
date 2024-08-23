# image-el



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
| `elementId` | `element-id` |             | `string` | `undefined` |
| `imgAlt`    | `img-alt`    |             | `string` | `undefined` |
| `imgSrc`    | `img-src`    |             | `string` | `undefined` |


## Events

| Event          | Description | Type                                                                                        |
| -------------- | ----------- | ------------------------------------------------------------------------------------------- |
| `passToModule` |             | `CustomEvent<{ id: number; name: string; details: string; price: number; image: string; }>` |


## Dependencies

### Depends on

- [image-popup](../image-popup)

### Graph
```mermaid
graph TD;
  image-el --> image-popup
  style image-el fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
