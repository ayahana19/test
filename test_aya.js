
//rosa07にあるtest.htmlの実行で、このファイルが動く




var app_1 = new Vue({
  el: '#app_1',
  data: {
    message: 'Hello Vue! 『Vue.js入門』を上手く導入できたよ💞 2021/04/14 '
  }
})





// ルートオプションを渡してVue Routerを初期化します
var router = new VueRouter({
  // 各ルートにコンポーネントをマッピングします
  routes: [
    {
      path: '/',
      component: {
        template: `
          <div>
            <h1 style="color:purple"><font color="hotpink" size="4">トップページです 💓</font></h1>
          </div>
        `
      }
    },
    
    {
      path: '/fruits',
      component: {
        template: `
          <div>
            <h1 style="color:violet"><font color="hotpink" size="4">フルーツの一覧ページです🍈</font></h1>
            <div v-for="fruit in fruits" :key="fruit.id">
              <h2><font color="purple" size="4">{{ fruit.name }} </font></h2>
            </div>
          </div>
        `,
        data () {
          return {
            fruits: [
              {
                id: 1,
                name: 'りんご 🍎'
              },
              {
                id: 2,
                name: 'みかん 🍊'
              },
              {
                id: 3,
                name: 'バナナ 🍌'
              }
            ]
          }
        }
      }
    }
  ]
})

// Vueの初期化を行います
var app_2 = new Vue({
  router: router
}).$mount('#app_2')

