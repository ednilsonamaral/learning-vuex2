# Vue.js - Learning Vuex 2.0

É uma estrutura de dados que está à disposição de todos os componentes de nossa aplicação, global. Ela pode ser acessada e lida de qualquer componente. E, qualquer componente pode alterar as informações que nela se encontram.

A partir da versão 2.0, o Vuex passou a poder ser utilizado não apenas em projetos Vue.js, mas também em projetos com Angular.js e/ou React.js.

Para instalar o Vuex 2.0 em seu projeto Vue.js, basta executar o seguinte comando: `npm install --save vuex`.

Dentro do projeto, para manter um padrão de modularização, na pasta `src` podemos criar uma pasta chamada `store`, onde iremos salvar todos os códigos referentes ao Vuex do nosso projeto. No arquivo principal do Vuex do projeto, `src/store/index.js` ou `src/store/store.js`, precisamos:  

* Importar o Vuex;  
* Dizer ao Vue que iremos utilizar o Vuex;  
* Exportar o objeto do Vuex.

Exemplo:

```js  
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ })
```


Então, no arquivo `src/main.js` precisamos importar o *store* do Vuex e passar a nossa instância o mesmo. Como no exemplo abaixo:  


```js  
import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
```


Para compartilhar os dados através da nossa aplicação, precisamos de um objeto comum que contenha-os para nós. Podemos criar o `state` dentro do `Vuex.Store({ })`, porém ficaria gigantesco dependendo da aplicação. Então, tratando-se de modularização, criamos um arquivo apenas para o `state`, chamando de `state.js`:

```js  
export default {
	user: {
		name: 'Ednilson Amaral',
		email: 'ednilsonamaral.ti@gmail.com',
		nivel: 'admin'
	},

	token: 'adsadcc2WQDsdaAHjk03558SckZy'
}
```


Agora, no `Vuex.Store({ })` só referenciamos ele, após ter importado.

```js  
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({ state })
```


Para acessarmos os dados contidos no Vuex, iremos utilizar *computed properties*, por exemplo:  

```html  
<template>
    <div>
        <h1>Hello, world!</h1>
        <h2>{{ user }}</h2>
    </div>
</template>

<script>
export default {
    computed: {
        user() {
            const { name, email } = this.$store.state.user
            return `O usuário logado é ${ name } e possui o e-mail ${ email }.`
        }
    }
}
</script>
```


No Vuex, temos à nossa disposição o método `mapState`. Com ele não precisamos utilizar `this.$store.state.user`. Por exemplo:

```js  
import { mapState } from 'vuex'

// (...)
computed: {
  ...mapState({
    user: state => {
      const { name, email } = state.user
      return `O usuário logado é ${ name } e possui o e-mail ${ email }.`
    }
  })
}
// ...
```
