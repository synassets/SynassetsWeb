<template>
  <div>
    <!---pc--->
    <div v-show="!isMobile" style="width: 100%;height: 500px;background: #000000;">
      <div style="width: 1280px;margin: 0 auto;display: flex;">
        <!---left--->

          <img :src="pc_logo" style="margin-top: 75px;height:59px;width: 49px;"/>
         <div style="margin-left: 45px;" >
           <div style="font-size: 30px;font-family: Noto Serif;font-weight: bold;color: #FFFFFF;margin-top: 75px;">SynAssets</div>
           <div style="font-size: 16px;font-family: Selawik;font-weight: 400;color: #FFFFFF;margin-top: 15px;">The first global consensus condensed platform</div>
        </div>
        <div style="margin-left: 115px;" >
          <div style=" font-size: 18px;font-family: Selawik;font-weight: bold;color: #FFFFFF;margin-top: 75px;">Product</div>
          <div @click="tip" style="font-size: 16px; font-family: Selawik;font-weight: 400;color: #FFFFFF;margin-top: 30px;cursor: pointer;">Network Condensed DAO</div>
          <div @click="tip"  style="font-size: 16px; font-family: Selawik;font-weight: 400;color: #FFFFFF;margin-top: 30px;cursor: pointer;">IDO</div>
          <div @click="tip"  style="font-size: 16px; font-family: Selawik;font-weight: 400;color: #FFFFFF;margin-top: 30px;cursor: pointer;">Consensus Invitation</div>
        </div>

        <div style="margin-left: 85px;" >
          <div style=" font-size: 18px;font-family: Selawik;font-weight: bold;color: #FFFFFF;margin-top: 75px;">Resources</div>
          <div   @click="goLink('https://doc.synassets.finance/')"  style="font-size: 16px; font-family: Selawik;font-weight: 400;color: #FFFFFF;margin-top: 30px;cursor: pointer;">Documentation</div>
          <div @click="goLink('https://github.com/synassets')"  style="font-size: 16px; font-family: Selawik;font-weight: 400;color: #FFFFFF;margin-top: 30px;cursor: pointer;">Github</div>
          <div @click="tip"  style="font-size: 16px; font-family: Selawik;font-weight: 400;color: #FFFFFF;margin-top: 30px;cursor: pointer;">Audit Report</div>
          <div @click="goLink('https://www.synassets.finance/Logo_Lockups.zip')"   style="font-size: 16px; font-family: Selawik;font-weight: 400;color: #FFFFFF;margin-top: 30px;cursor: pointer;">Logo Lockups</div>
          <div @click="goLink('https://www.synassets.finance/Image_Assets.zip')"   style="font-size: 16px; font-family: Selawik;font-weight: 400;color: #FFFFFF;margin-top: 30px;cursor: pointer;">Image Assets</div>
        </div>
        <div style="margin-left: 85px;" >
          <div style=" font-size: 18px;font-family: Selawik;font-weight: bold;color: #FFFFFF;margin-top: 75px;">Community</div>
          <div style="display: flex;margin-top: 30px;">
            <img :src="pc_twitter" style="height:32px;width: 32px;cursor: pointer"  @click="goLink('https://twitter.com/SynAssets')" />
            <img :src="pc_github" style="height:32px;width: 32px;margin-left: 25px;cursor: pointer"  @click="goLink('https://github.com/synassets')" />
            <img :src="pc_discord" style="height:32px;width: 32px;margin-left: 25px;cursor: pointer"  @click="goLink('https://discord.gg/EJdByByc')" />
            <img :src="pc_medium" style="height:32px;width: 32px;margin-left: 25px;cursor: pointer"  @click="goLink('https://medium.com/@SynAssets')" />
          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>


import {
  pc_discord,pc_github ,pc_twitter ,
  pc_logo,pc_medium
} from "@/utils/images";
import {mapState} from "vuex";


export default {
  name: "Footer",
  data() {
    return {
      pc_discord,pc_github ,pc_twitter ,
      pc_logo,pc_medium

    }
  },
  computed: {
    ...mapState({
      isMobile: state => state.sys.isMobile,
      inviter: state => state.app.inviter
    })
  },
  mounted() {

  },
  methods: {
    goLink(url) {
      window.open(url);
    },
    tip(){
      this.$message.info("Coming Soon!");
    },
    showDialog(type) {
      this.$emit('showType', type);
    }

  }
}
</script>

<style lang="scss" scoped>
.footer-pc {
  width: 100%;
  height: 400px;
  background-color: #000000;

  .foot-pc-content {
    width: 1280px;
    margin: 0px auto;
    display: flex;
    background-color: #000000;
  }

  .footer-title-pc {
    font-size: 20px;
    font-family: arialbd;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 60px;
  }

  .technology-pc {
    margin-top: 299px;
    font-size: 14px;
    font-family: Arial;
    font-weight: 400;
    color: #8C8C8C;
  }


  .tab {
    font-size: 20px;
    font-family: Arial;
    font-weight: bold;
    color: #FFFFFF;
  }

  .tab-text {
    font-size: 14px;
    font-family: Arial;
    font-weight: 400;
    color: #8C8C8C;
    margin-top: 24px;
  }


}

@media screen and (max-width: 750px) {
  .footer {
    width: 10rem;
    height: 13rem;
    background-color: #000000;

    .footer-title {
      padding-left: 0.4rem;
      padding-top: 0.25rem;
      font-size: 0.32rem;
      font-family: Sanomat SansRegular;
      font-weight: 400;
      color: #F4F0F0;
      opacity: 1;
    }

    .tab {
      font-size: 0.37rem;
      font-family: Sanomat SansMedium;
      font-weight: 500;
      color: #F4F0F0;
      opacity: 1;
      padding-left: 0.53rem;
    }

    .tab-text {
      font-size: 0.27rem;
      font-family: Sanomat SansRegular;
      font-weight: 400;
      margin-top: 0.27rem;
      color: #847E7E;
      opacity: 1;
      padding-left: 0.53rem;

    }

    .div-media {
      width: 1.88rem;
      margin: 2rem auto 0rem auto;
      display: flex;
    }

    .technology {
      font-size: 0.27rem;
      font-family: Sanomat Sans;
      font-weight: 400;
      line-height: 3.8;
      color: #847E7E;
      opacity: 1;
      text-align: center;
    }


  }
}

</style>
