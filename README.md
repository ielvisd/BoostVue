# BoostVue

## Props
| Property  | Type     | Description                                                                                |   |   |
|-----------|----------|--------------------------------------------------------------------------------------------|---|---|
| href      | String   | The URL to link to when the component is clicked, if the component is rendered as an a tag |   |   |
| type      | String   | The type attribute of the button or a tag                                                  |   |   |
| content   | String   | A required prop that is used as the content parameter in the wrapRelayx function           |   |   |
| onSending | Function | An event handler that is called when the boost method begins to send a transaction         |   |   |
| onSuccess | Function | An event handler that is called when the boost method successfully sends a transaction     |   |   |
| onError   | Function | An event handler that is called when the boost method encounters an error                  |   |   |
| onClick   | Function | An event handler that is called when the component is clicked                              |   |   |
| id        | String   | The id attribute of the button or a tag                                                    |   |   |
| name      | String   | The name attribute of the button or a tag                                                  |   |   |
| size      | String   | The size of the component. Can be sm, md, or lg                                            |   |   |
| outline   | Boolean  | If true, the component will have an outlined style instead of a filled style               |   |   |
| icon      | Boolean  | If true, the component will have a smaller size and padding                                |   |   |
| round     | Boolean  | If true, the component will have rounded corners                                           |   |   |


## Methods
| Method | Description                                                                                                                    |   |
|--------|--------------------------------------------------------------------------------------------------------------------------------|---|
| boost  | Async function that sends a transaction using the wrapRelayx function and handles the onSending, onSuccess, and onError events |   |
|        |                                                                                                                                |   |

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```
