# BoostVue
The BoostVue component is in the `components` folder. Will be making this an npm package next. You can change the wallet address on line 113 in BoostButton.vue to tip 0.001 USD to an address of your choice when something is boosted. 
## Props
The 'content' prop is the most important prop. It is what you want to "boost". This is usually a transaction id. 

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


## Usage

`const onBoostSuccess = (response) => {
  alert('boostpow success!', response)
}`

```
<BoostButton 
content="478756843fbd0d3ecaf150e0c67f23481f85560cad3d21ff61cb5472488330b2" 
:onSuccess="onBoostSuccess"
size="sm" 
round 
outline 
class="mt-4">
<p class="text-xl">🦚</p>
</BoostButton>
```

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
