<template>
  <div style="width: 100%;">
  <!--pc-->
    <div v-show="!isMobile"  style="padding-bottom:1rem;width: 100%;min-height: 1680px;background: #161616">
      <!--div1-->
      <div class="pc-index-div-bg1">
        <div style="width: 100%;height: 70px;background: rgba(25, 27, 31, 0.8);">
          <div style="max-width: 1240px;margin: 0 auto;position: relative;display: flex;">
            <img :src="pc_index_img2"  style="width: 50px;height: 50px;margin-top: 15px;cursor: pointer" alt />
            <div class="pc-index-div-btn2" @click="tip" >Audit Report</div>

            <div class="pc-index-div-btn1" @click="tip">Launch App</div>
          </div>
        </div>

        <div style="width: 100%;text-align: center;font-size: 60px;font-family: Noto Serif;font-weight: bold;color: #FFFFFF;margin-top: 190px;">Crypto Consensus Network</div>
        <div style="width: 100%;text-align: center;font-size: 16px;font-family: Selawik;font-weight: 400;color: #FFFFFF;margin-top: 15px;">Stake, IDO and Bond to earn treasury on the most popular decentralized consensus platform</div>

        <div style="width: 459px;margin: 0 auto;display: flex;margin-top: 27px;">
          <img :src="pc_index_img3"  style="width: 32px;height: 32px;cursor: pointer" @click="goLink('https://twitter.com/SynAssets')" alt />
          <img :src="pc_index_img4"  style="width: 32px;height: 32px;cursor: pointer;margin-left: 27px;" @click="goLink('https://github.com/synassets')"  alt />
          <img :src="pc_index_img5"  style="width: 32px;height: 32px;cursor: pointer;margin-left: 27px;" @click="goLink('https://discord.gg/EJdByByc')"  alt />
          <img :src="pc_index_img17"  style="width: 32px;height: 32px;cursor: pointer;margin-left: 27px;" @click="goLink('https://medium.com/@SynAssets')"  alt />

          <div class="pc-index-div-btn3"  @click="tip">Launch App</div>
        </div>
      </div>

      <div style="max-width: 1920px;height: 3px;background: rgba(190, 225, 220, 0.7);margin: 0 auto;"></div>

      <div style="max-width: 1200px;margin: 0 auto;display: flex;font-size: 24px;font-family: Segoe UI;font-weight: 400;color: #FFFFFF;margin-top: 35px;">
         <div style="flex: 1;padding-left: 30px">Treasury Balance</div>
         <div style="flex: 1;text-align: center;">Total Value Locked</div>
         <div style="flex: 1;text-align: right;padding-right: 30px;">Current APY</div>
      </div>
      <div style="max-width: 1200px;margin: 0 auto;display: flex;font-size: 36px;font-family: Segoe UI;font-weight: 900;color: #FFFFFF;margin-top: 20px;">
        <div style="flex: 1;">$ --</div>
        <div style="flex: 1;text-align: center;">$ --</div>
        <div style="flex: 1;text-align: right;padding-right: 30px;">-- %</div>
      </div>
      <div style="max-width: 1920px;height: 3px;background: rgba(190, 225, 220, 0.7);margin:35px auto 0px auto;"></div>

      <!----div 3---->
      <div style="max-width: 1200px;margin: 0 auto;display: flex;font-size: 36px;font-family: Segoe UI;font-weight: 900;color: #FFFFFF;">
           <div>
             <div style="font-size: 40px;font-family: Noto Serif;font-weight: 400; color: #FFFFFF;margin-top: 168px;">Fair Financial Game</div>
             <div style="max-width: 620px;font-size: 16px;font-family: Selawik;font-weight: 400; color: #FFFFFF;margin-top: 50px;line-height: 2;">
               We hope to contrust a stronger (5, 5) consensus network based on Polygon chain. All consensus-builder of SynAssets ecosystem will gain the wealth growth.
             </div>
             <div class="pc-index-div-btn4"  @click="goLink('https://doc.synassets.finance/')" >
               View SynAssets
             </div>
           </div>
        <img :src="pc_index_img6"  style="width: 328px;height: 474px;margin-top: 87px;margin-left: 180px;" alt />
      </div>
      <div style="max-width: 1920px;height: 3px;background: rgba(190, 225, 220, 0.7);margin:100px auto 0px auto;"></div>
      <!---div4-->
      <div style="font-size: 40px;font-family: Noto Serif;font-weight: 400;color: #FFFFFF;max-width: 1240px;margin: 120px auto 0 auto;text-align: center;">
        Fair produce Worth, Worth creat Fortune </div>

      <div style="max-width: 1240px;margin: 80px auto 0 auto;display: flex;" >
          <div class="div-bg" style="width: 800px;min-height: 360px; border-radius: 20px;position: relative;padding-bottom: 30px;">
            <img :src="pc_index_img7"  style="width: 145px;height: 94px;margin-top: 54px;margin-left: 40px;" alt />
            <img :src="pc_index_img13"  style="width: 128px;height: 123px;position: absolute;right: 40px ;top: 40px;" alt />
            <div style="position: absolute;left: 40px;top: 240px;font-size: 25px;font-family: Selawik;font-weight: 600;color: #FFFFFF;">Fair Launch</div>
            <div  style="position: absolute;left: 40px;top: 290px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;max-width: 730px;line-height: 2">
              No VC investment, SAT will only be published by IDO , everyone can take part in Initial Offering .
            </div>
          </div>

        <div class="div-bg" style="width: 400px;min-height: 360px; border-radius: 20px;margin-left: 40px;position: relative;padding-bottom: 30px;">
          <img :src="pc_index_img8"  style="width: 174px;height: 97px;margin-top: 54px;margin-left: 40px;" alt />
          <img :src="pc_index_img13"  style="width: 128px;height: 123px;position: absolute;right: 40px ;top: 40px;" alt />

          <div style="position: absolute;left: 40px;top: 240px;font-size: 25px;font-family: Selawik;font-weight: 600;color: #FFFFFF;">(5, 5) Consensus</div>
          <div  style="position: absolute;left: 40px;top: 290px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;max-width: 330px;">
            Based on gamble theory，SynAssets contributor will gain the increase of wealth with (5, 5) cosensus.
          </div>
        </div>
      </div>


      <div style="max-width: 1240px;margin: 35px auto 0 auto;display: flex;" >
        <div class="div-bg" style="width: 600px;min-height: 360px; border-radius: 20px;position: relative;padding-bottom: 30px;">
          <img :src="pc_index_img9"  style="width: 129px;height:149px;margin-top: 54px;margin-left: 40px;" alt />
          <img :src="pc_index_img13"  style="width: 128px;height: 123px;position: absolute;right: 40px ;top: 40px;" alt />
          <div style="position: absolute;left: 40px;top: 240px;font-size: 25px;font-family: Selawik;font-weight: 600;color: #FFFFFF;">Synthetic Assets</div>
          <div  style="position: absolute;left: 40px;top: 290px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;max-width: 540px;line-height: 2">
            sBTC, sMATIC, sETH, sAAPL, sAMZN，etc. will join SynAssets to build a new the world of synthetic assets.
          </div>
        </div>
        <div class="div-bg" style="width: 600px;min-height: 360px; border-radius: 20px;margin-left: 40px;position: relative;padding-bottom: 30px;">
          <img :src="pc_index_img10"  style="width: 113px;height: 112px;margin-top: 54px;margin-left: 40px;" alt />
          <img :src="pc_index_img13"  style="width: 128px;height: 123px;position: absolute;right: 40px ;top: 40px;" alt />

          <div style="position: absolute;left: 40px;top: 240px;font-size: 25px;font-family: Selawik;font-weight: 600;color: #FFFFFF;">High safety</div>
          <div  style="position: absolute;left: 40px;top: 290px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;max-width: 540px;line-height: 2">
            SynAssets codes will be open on GitHub,professional auditors and multi-signature wallet  to improve SynAssets security
          </div>
        </div>
      </div>

      <div style="max-width: 1240px;margin: 35px auto 0 auto;display: flex;" >
        <div class="div-bg" style="width: 450px;min-height: 360px; border-radius: 20px;position: relative;padding-bottom: 40px;">
          <img :src="pc_index_img11"  style="width: 93px;height:93px;margin-top: 54px;margin-left: 40px;" alt />
          <img :src="pc_index_img13"  style="width: 128px;height: 123px;position: absolute;right: 40px ;top: 40px;" alt />
          <div style="position: absolute;left: 40px;top: 240px;font-size: 25px;font-family: Selawik;font-weight: 600;color: #FFFFFF;">Consensus Aggregation</div>
          <div  style="position: absolute;left: 40px;top: 290px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;max-width: 540px;line-height: 2">
            SynAssets contributor would be rewarded if they invite more users participate in the consensus network.
          </div>
        </div>
        <div class="div-bg" style="width: 800px;min-height: 360px;border-radius: 20px;margin-left: 40px;position: relative;padding-bottom: 40px;">
          <img :src="pc_index_img12"  style="width: 79px;height: 105px;margin-top: 54px;margin-left: 40px;" alt />
          <img :src="pc_index_img13"  style="width: 128px;height: 123px;position: absolute;right: 40px ;top: 40px;" alt />

          <div style="position: absolute;left: 40px;top: 240px;font-size: 25px;font-family: Selawik;font-weight: 600;color: #FFFFFF;">Deflation Protocol</div>
          <div  style="position: absolute;left: 40px;top: 290px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;max-width: 720px;line-height: 2">
            Every transaction outside the protocol will be collected x% tax as protocol control the liquidity, which will be used to add liquidity and deposited in the treasury, meanwhile, the SAT in these pairs will be destroyed.
          </div>
        </div>
      </div>
      <div style="max-width: 1920px;height: 3px;background: rgba(190, 225, 220, 0.7);margin:100px auto 0px auto;"></div>
      <!----div5--->
      <div class="pc-index-div-bg5" >
        <div style=" margin: 0 auto;max-width: 1100px;font-size: 36px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;">Synthetic assets( <span style="font-size: 45px;">sAssets</span>  ) gain growth of wealth for you</div>

        <div style="margin: 45px auto 0px auto;max-width: 1100px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;">
         <span style="font-size: 20px;font-weight: 500;">sAssets</span> : We will enter the era of synthetic assets 2.0 which including sMatic, sBTC, sETH, etc.</div>

        <div style="margin: 30px auto 0px auto;max-width: 1100px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;">
          <span style="font-size: 20px;font-weight: 500;">Stake</span>  : Gain rewards after stake sMatic, sBTC,etc at the end of every epoch, which is a passive, long-term strategy.</div>

        <div style="margin: 30px auto 0px auto;max-width: 1100px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;">
          <span style="font-size: 20px;font-weight: 500;">Bond</span>  : You can buy bond at a discount price, which is an active, short-term strategy.</div>

        <div  style="margin: 30px auto 0px auto;max-width: 1100px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;">
          <span style="font-size: 20px;font-weight: 500;">POL</span>  : Protocol Owned Liquidity is the amount of LP the treasury owns and controls.</div>


        <div style="max-width: 1920px;height: 3px;background: rgba(190, 225, 220, 0.7);margin:120px auto 0px auto;"></div>

        <div style=" margin: 110px auto 0px auto;max-width: 1100px;font-size: 36px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;">
          <span style="font-size: 40px;">IDO</span> gain reward in the early stage</div>

        <div style="margin: 45px auto 0px auto;max-width: 1100px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;line-height: 2;">
          SAT is launched fairly in IDO method, which is the platform token for the SynAssets and SAT holder can participate in the IDO of sAssets, SAT will be destroyed at the end.</div>
        <div style="max-width: 1920px;height: 3px;background: rgba(190, 225, 220, 0.7);margin:250px auto 0px auto;"></div>

        <div style=" margin: 110px auto 0px auto;max-width: 1100px;font-size: 36px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;">
          Ambassador, Eco-builder can earn consensus rewards
          </div>

        <div style="margin: 45px auto 0px auto;max-width: 1100px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;">
          SynAssets consensus participants invite more consensus participants to join and gain consensus reward.</div>
      </div>
      <div style="max-width: 1920px;height: 3px;background: rgba(190, 225, 220, 0.7);margin:0px auto 0px auto;"></div>
      <div style=" margin: 110px auto 0px auto;max-width: 1100px;font-size: 40px;font-family: Noto Serif;font-weight: 400;color: #FFFFFF;text-align: center;">Governed by Community</div>
      <div style="text-align: center;margin: 45px auto 110px auto;max-width: 1100px;font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;">
        SynAssets protocol is governed by both SAT token holder and ecosystem builder.</div>
      <div class="pc-index-div-btn5" @click="tip">Start SynAssets</div>
      <!----div6--->
    </div>
  <!--h5--->





  </div>
</template>


<script>
import { mapState } from "vuex";


import {
  pc_medium,
  pc_index_img2,
  pc_index_img3,
  pc_index_img4,
  pc_index_img5,
  pc_index_img6,
  pc_index_img7,
  pc_index_img8,
  pc_index_img9,
  pc_index_img10,
  pc_index_img11,
  pc_index_img12,
  pc_index_img13,
  pc_index_img14,
  pc_index_img15,
  pc_index_img16,
  pc_index_img17,
} from "@/utils/images";






export default {
  name: "Index",
  components: {

  },
  data() {
    return {
      pc_medium,
      pc_index_img2,
      pc_index_img3,
      pc_index_img4,
      pc_index_img5,
      pc_index_img6,
      pc_index_img7,
      pc_index_img8,
      pc_index_img9,
      pc_index_img10,
      pc_index_img11,
      pc_index_img12,
      pc_index_img13,
      pc_index_img14,
      pc_index_img15,
      pc_index_img16,
      pc_index_img17,
    };
  },
  computed: {
    ...mapState({

      isMobile: state => state.sys.isMobile,

    }),

  },
  mounted() {

  },

  methods: {

   tip(){
     this.$message.info("Coming Soon!");
   },

    goLink(url) {
      window.open(url);
    },

  }
};
</script>


<style lang="scss" scoped>

.pc-index-div-bg1{
  max-width: 1920px;
  min-height: 820px;
  margin: 0px auto 0px auto;
  background: url("../../assets/img/pc_index_img1.png")  no-repeat;
  //z-index: -1;
}
.pc-index-div-btn1{
  position: absolute;right: 0px;top: 20px;width: 120px;height: 40px;background: linear-gradient(-45deg, #F3E6E9 0%, #DBD5EC 100%);border-radius: 5px;
  cursor: pointer;line-height: 40px;font-size: 16px;text-align: center;font-family: PingFang SC;font-weight: 800;color: #2D2D2D;
}
.pc-index-div-btn1:hover{
  background: linear-gradient(45deg, #F3E6E9 0%, #DBD5EC 100%);
}
.pc-index-div-btn2{
  position: absolute;right: 150px;top: 30px;font-size: 16px;font-family: PingFang SC;color: #9FA0A2;
  cursor: pointer;
}
.pc-index-div-btn2:hover{
  color: #FFFFFF;
}

.pc-index-div-btn3{
  margin-left: 60px;width: 120px;height: 36px;background: linear-gradient(-45deg, #F3E6E9 0%, #DBD5EC 100%);border-radius: 5px;
  cursor: pointer;line-height: 36px;font-size: 16px;text-align: center;font-family: PingFang SC;font-weight: 800;color: #2D2D2D;
}
.pc-index-div-btn3:hover{
  background: linear-gradient(45deg, #F3E6E9 0%, #DBD5EC 100%);
}
.pc-index-div-btn4{
  text-align: center;line-height: 35px;width: 160px; height: 35px; background: linear-gradient(-45deg, #F3E6E9 0%, #DBD5EC 100%);margin-top: 76px;
  font-size: 16px;font-family: PingFang SC;font-weight: 800; color: #2D2D2D;cursor: pointer;
}
.pc-index-div-btn4:hover{
  background: linear-gradient(45deg, #F3E6E9 0%, #DBD5EC 100%);
}
.pc-index-div-bg5{
  max-width: 1920px;
  min-height: 1317px;
  margin: 100px auto 0px auto;
  background: url("../../assets/img/pc_index_img14.png")  no-repeat;
  //z-index: -1;
}
.pc-index-div-btn5{
  text-align: center;line-height: 35px;width: 160px; height: 35px; background: linear-gradient(-45deg, #F3E6E9 0%, #DBD5EC 100%);
  font-size: 16px;font-family: PingFang SC;font-weight: 800; color: #2D2D2D;cursor: pointer;margin: 76px auto 0px auto ;
}
.pc-index-div-btn5:hover{
  background: linear-gradient(45deg, #F3E6E9 0%, #DBD5EC 100%);
}
.div-bg{
  border: 2px solid #797979;
  background: rgba(0, 0, 0, 0.7);
}
.div-bg:hover{

  background: linear-gradient(-45deg,   rgba(153,216,225,.3)  0%,  rgba(215,177,218,.3) 100%);
  border: 2px solid transparent;
  //opacity: 0.3; #99D8E1 D7B1DA
}




.el-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  background: rgba(44, 56, 82, 0.3);
}



/deep/.el-dialog__headerbtn .el-dialog__close {
  color: #ffffff;
}
/deep/.el-dialog__header {
  padding:  0px 0px;
}
/deep/ .el-dialog__body {
  padding: 0px 0px ;
  color: #606266;
  font-size: 14px;
  word-break: break-all;
}
/deep/.el-dialog {
  background-color: #ffffff;


  border-radius: 10px;
}
</style>
