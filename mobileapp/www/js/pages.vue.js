Vue.component('page-home', {
  template: `
    <f7-page >
      <div class="center">
        <img src=css/img/Actions-fill-color-icon.png class="half" />
      </div>
      <f7-block>
        <f7-button outline round color="pink" href="/newgame">New Game</f7-button>
        <br>
        <f7-button outline round color="orange">Options</f7-button>
        <br>
        <f7-button outline round color="green">Contact Us</f7-button>
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
  <f7-fab position="center-center" slot="fixed" color="blue">
  <f7-icon ios="f7:add" md="material:add">Levels</f7-icon>
   <f7-icon ios="f7:close" md="material:close"></f7-icon>
   <f7-fab-buttons position="center">
     <f7-fab-button href="/level-one">1</f7-fab-button>
     <f7-fab-button>2</f7-fab-button>
     <f7-fab-button>3</f7-fab-button>
   </f7-fab-buttons>
   </f7-fab>
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
  <f7-swiper pagination navigation>
    <f7-swiper-slide>Heart<f7-link href="/heart-level1"><img src=css/img/heart.jpg class="half"/></f7-link> </f7-swiper-slide>
    <f7-swiper-slide>Slide 2</f7-swiper-slide>
    <f7-swiper-slide>Slide 3</f7-swiper-slide>
  </f7-swiper>
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
Vue.component('heart-level1', {
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
