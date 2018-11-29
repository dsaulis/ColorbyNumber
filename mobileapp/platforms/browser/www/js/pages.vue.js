Vue.component('page-home', {
  template: `
    <f7-page id="pghome">
      <div class="center">
        <img src=css/img/Actions-fill-color-icon.png class="half" />
      </div>
      <f7-block>
        <f7-button outline round color="hotpink" href="/newgame">New Game</f7-button>
        <br>
        <f7-button outline round color="orange">Options</f7-button>
        <br>
        <f7-button outline round color="blueviolet">Contact Us</f7-button>
      </f7-block>
    </f7-page>
  `,
  props: {

  },
  data: function(){return{
    console: console
  }},
  methods: {

  }
})

Vue.component('newgame', {
  template: `
  <f7-page>
  <div class="levels">
  <f7-button color="pink">Level One</f7-button>
  <br>
  <f7-button color="yellow">Level Two</f7-button>
  <br>
  <f7-button color="red">Level Three</f7-button>
  <br>
  </div>
  </f7-page>
  `,
  props: {

  },
  data: function(){return{
    console: console
  }},
  methods: {

  }
})
Vue.component('options', {
  template: `
  <f7-page>
  </f7-page>
  `,
  props: {

  },
  data: function(){return{
    console: console
  }},
  methods: {

  }
})
