<template>
  <div class="layout">

    <router-view
      ref="mainPage"
      class="content_body"

    />
 <Footer class="footer"  />


  </div>
</template>

<script>
import Footer from "@/views/layout/components/Footer";



import {mapState} from "vuex";


export default {
  name: "layout",
  components: {
    Footer
  },
  data() {
    return {


    };
  },
  computed: {
    ...mapState({
      isMobile: state => state.sys.isMobile,

    })
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
.layout {

  width: 100%;
  background: #ffffff;
  //    background-size: cover;
}
.header {
  width: 100%;
  margin: 0 auto;
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  z-index: 100;
  //   background: $color-bgcolor;
  //   box-shadow: 0 0.06rem 0.13rem rgba(0, 0, 0, 0.3);
}
.content_body {
  //   padding-top: 1.2rem;
}

@media screen and (max-width: 750px) {
  .content_body {
    // padding-top: 1.8rem;
  }
}
</style>
