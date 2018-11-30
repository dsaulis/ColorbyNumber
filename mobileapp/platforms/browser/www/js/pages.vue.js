Vue.component('page-home', {
  template: `
    <f7-page >
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
  <f7-button color="pink" href="/level-one">Level One</f7-button>
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
Vue.component('level-one', {
  template: `
  <f7-page>
  <f7-list contacts-list>
      <f7-list-group>
        <f7-list-item title="For Beginners" group-title class="L1">        </f7-list-item>
      </f7-list-group>
      <f7-list-group media-list>
  <f7-list-item title="Ivan Petrov" after="CEO">
    <f7-icon slot="media" f7="alarm"></f7-icon>
  </f7-list-item>
        <f7-list-item title="heart">
          <f7-icon slot="media" icon="icon-cat"></f7-icon>
        </f7-list-item>
      </f7-list-group>
      <f7-list-group>
        <f7-list-item title="Dog" group-title></f7-list-item>
      </f7-list-group>
      <f7-list-group>
        <f7-list-item title="House" group-title></f7-list-item>
      </f7-list-group>
    </f7-list>
  </f7-page>
  `,
  props: {

  },
  data: function(){return{
    console: console
  }},
  methods: {
    onIndexSelect(itemContent) {
        console.log(itemContent);
      },
  }
})
