Vue.component('page-home', {
  template: `
    <f7-page>
      <div class="center">
        <img src=css/img/Actions-fill-color-icon.png class="half" />
      </div>
      <f7-block>
        <f7-button fill round color="red" href="/newgame">New Game</f7-button>

        <f7-button fill round color="green">Options</f7-button>
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
  <f7-popup:open>
  <f7-list inset center>
  <f7-list-button title="Level 1" color="red"></f7-list-button>
  <f7-list-button title="Level 2 " color="green"></f7-list-button>
  <f7-list-button title="Level 3" color="orange"></f7-list-button>
  </f7-list>
  </f7-popup:open>
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
