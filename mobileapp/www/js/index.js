Vue.use(Framework7Vue, Framework7)

// Init Vue App
var app = new Vue({
  // App Root Element
  el: '#app',
  framework7: {
    root: '#app', // App root element for framework7
    theme: 'auto',
    routes: [
      {
        path: '/',
        component: 'page-home'
      },
      {
        path: '/newgame',
        component: 'newgame'
      },
      {
        path: '/level-one',
        component: 'level-one'
      },
      {
        path: '/heart-level1',
        component: 'heart-level1'
      },
    ],
    on: { //Run functions when Framework7 events happen
      init: function(){ //The framework7 equivalent of VueJS's created: function(){}

      }
    }
  },
  data: {
    appName: "Color by Number"
  },
  methods: {

  }
})
