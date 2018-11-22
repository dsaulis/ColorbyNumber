Vue.component('page-home', {
  template: `
    <f7-page>
      <f7-navbar>
        <f7-nav-left>
          <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
        </f7-nav-left>
        <f7-nav-title>{{$root.appName}}</f7-nav-title>
        <f7-nav-right>
          <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
        </f7-nav-right>
      </f7-navbar>
      <f7-block-title>Framework7 Vue</f7-block-title>
      <div class="center">
        <img src="img/logo.svg" class="half" />
      </div>
      <f7-block-title>Navigation</f7-block-title>
      <f7-list>
        <f7-list-item link="/about" title="About"></f7-list-item>
        <f7-list-item link="/contact" title="Contact"></f7-list-item>
      </f7-list>
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

Vue.component('page-about', {
  template: `
    <f7-page>
      <f7-navbar title="Contact Us" back-link="Back"></f7-navbar>
      <f7-block-title>About Us</f7-block-title>
    </f7-page>
  `,
  props: {
    
  },
  data: function(){return{
    
  }},
  methods: {
    
  }
})


Vue.component('page-contact', {
  template: `
    <f7-page>
      <f7-navbar title="Contact Us" back-link="Back"></f7-navbar>
      <f7-block-title>Contact Us</f7-block-title>
    </f7-page>
  `,
  props: {
    
  },
  data: function(){return{
    
  }},
  methods: {
    
  }
})