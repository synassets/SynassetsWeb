<template>
  <div>
    <div v-show="!isMobile" style="width: 100%;">
      <!--pc-->
      <div style="padding-bottom:1rem;width: 100%;min-height: 1680px;background: #161616">
        <!--div1-->
        <div class="pc-index-div-bg1">
          <div style="width: 100%;height: 70px;background: rgba(25, 27, 31, 0.8);">
            <div style="max-width: 1240px;margin: 0 auto;position: relative;display: flex;">
              <img
                :src="pc_index_img2"
                style="width: 50px;height: 50px;margin-top: 15px;cursor: pointer"
                alt
              />
              <div class="pc-index-div-btn2"   @click="goLink('https://github.com/solidproof/projects/blob/main/Consensus/SmartContract_Audit_Solidproof_Consensus.pdf')" >Audit Report</div>

              <div class="pc-index-div-btn1" @click="launchApp()">Launch App</div>
            </div>
          </div>

          <div class="div-text1">Crypto Consensus Network</div>
          <div
            class="div-text2"
          >Stake, IDO and Bond to earn treasury on the most popular decentralized consensus platform</div>

          <div style="width: 459px;margin: 0 auto;display: flex;margin-top: 27px;">
            <img
              :src="pc_index_img3"
              style="width: 32px;height: 32px;cursor: pointer"
              @click="goLink('https://twitter.com/SynAssets')"
              alt
            />
            <img
              :src="pc_index_img4"
              style="width: 32px;height: 32px;cursor: pointer;margin-left: 27px;"
              @click="goLink('https://github.com/synassets')"
              alt
            />
            <img
              :src="pc_index_img5"
              style="width: 32px;height: 32px;cursor: pointer;margin-left: 27px;"
              @click="goLink('https://discord.gg/BzVUJJszaU')"
              alt
            />
            <img
              :src="pc_index_img17"
              style="width: 32px;height: 32px;cursor: pointer;margin-left: 27px;"
              @click="goLink('https://medium.com/@SynAssets')"
              alt
            />

            <div class="pc-index-div-btn3" @click="launchApp">Launch App</div>
          </div>
        </div>

        <div
          style="max-width: 1920px;height: 3px;background: rgba(190, 225, 220, 0.7);margin: 0 auto;"
        ></div>

        <div
          style="max-width: 1200px;margin: 0 auto;display: flex;font-size: 24px;font-family: Segoe UI;font-weight: 400;color: #FFFFFF;margin-top: 35px;"
        >
          <div style="flex: 1;padding-left: 30px">Treasury Balance</div>
          <div style="flex: 1;text-align: center;">Total Value Locked</div>
          <div style="flex: 1;text-align: right;padding-right: 30px;">Current APY</div>
        </div>
        <div
          style="max-width: 1200px;margin: 0 auto;display: flex;font-size: 36px;font-family: Segoe UI;font-weight: 900;color: #FFFFFF;margin-top: 20px;"
        >
          <div style="flex: 1;">$ --</div>
          <div style="flex: 1;text-align: center;">$ --</div>
          <div style="flex: 1;text-align: right;padding-right: 30px;">-- %</div>
        </div>
        <div
          style="max-width: 1920px;height: 3px;background: rgba(190, 225, 220, 0.7);margin:35px auto 0px auto;"
        ></div>

        <!----div 3---->
        <div
          style="max-width: 1200px;margin: 0 auto;display: flex;font-size: 36px;font-family: Segoe UI;font-weight: 900;color: #FFFFFF;"
        >
          <div>
            <div class="div-text3">Fair Financial Game</div>
            <div
              class="div-text4"
            >We hope to contrust a stronger (5, 5) consensus network based on Polygon chain. All consensus-builder of SynAssets ecosystem will gain the wealth growth.</div>
            <div
              class="pc-index-div-btn4"
              @click="goLink('https://doc.synassets.finance/')"
            >View SynAssets</div>
          </div>
          <img
            :src="pc_index_img6"
            style="width: 328px;height: 474px;margin-top: 87px;margin-left: 180px;"
            alt
          />
        </div>
        <div
          style="max-width: 1920px;height: 3px;background: rgba(190, 225, 220, 0.7);margin:100px auto 0px auto;"
        ></div>
        <!---div4-->
        <div
          style="font-size: 40px;font-family: Noto Serif;font-weight: 400;color: #FFFFFF;max-width: 1240px;margin: 120px auto 0 auto;text-align: center;"
        >Fair produce Worth, Worth creat Fortune</div>

        <div style="max-width: 1240px;margin: 80px auto 0 auto;display: flex;">
          <div
            class="div-bg"
            style="width: 800px;min-height: 360px; border-radius: 20px;position: relative;padding-bottom: 30px;"
          >
            <img
              :src="pc_index_img7"
              style="width: 145px;height: 94px;margin-top: 54px;margin-left: 40px;"
              alt
            />
            <img
              :src="pc_index_img13"
              style="width: 128px;height: 123px;position: absolute;right: 40px ;top: 40px;"
              alt
            />
            <div
              style="position: absolute;left: 40px;top: 240px;font-size: 25px;font-family: Selawik;font-weight: 600;color: #FFFFFF;"
            >Fair Launch</div>
            <div
              style="position: absolute;left: 40px;top: 290px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;max-width: 730px;line-height: 2"
            >No VC investment, SAT will only be published by IDO , everyone can take part in Initial Offering .</div>
          </div>

          <div
            class="div-bg"
            style="width: 400px;min-height: 360px; border-radius: 20px;margin-left: 40px;position: relative;padding-bottom: 30px;"
          >
            <img
              :src="pc_index_img8"
              style="width: 174px;height: 97px;margin-top: 54px;margin-left: 40px;"
              alt
            />
            <img
              :src="pc_index_img13"
              style="width: 128px;height: 123px;position: absolute;right: 40px ;top: 40px;"
              alt
            />

            <div
              style="position: absolute;left: 40px;top: 240px;font-size: 25px;font-family: Selawik;font-weight: 600;color: #FFFFFF;"
            >(5, 5) Consensus</div>
            <div
              style="position: absolute;left: 40px;top: 290px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;max-width: 330px;"
            >Based on gamble theory，SynAssets contributor will gain the increase of wealth with (5, 5) cosensus.</div>
          </div>
        </div>

        <div style="max-width: 1240px;margin: 35px auto 0 auto;display: flex;">
          <div
            class="div-bg"
            style="width: 600px;min-height: 360px; border-radius: 20px;position: relative;padding-bottom: 30px;"
          >
            <img
              :src="pc_index_img9"
              style="width: 129px;height:149px;margin-top: 54px;margin-left: 40px;"
              alt
            />
            <img
              :src="pc_index_img13"
              style="width: 128px;height: 123px;position: absolute;right: 40px ;top: 40px;"
              alt
            />
            <div
              style="position: absolute;left: 40px;top: 240px;font-size: 25px;font-family: Selawik;font-weight: 600;color: #FFFFFF;"
            >Synthetic Assets</div>
            <div
              style="position: absolute;left: 40px;top: 290px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;max-width: 540px;line-height: 2"
            >sBTC, sMATIC, sETH, sAAPL, sAMZN，etc. will join SynAssets to build a new the world of synthetic assets.</div>
          </div>
          <div
            class="div-bg"
            style="width: 600px;min-height: 360px; border-radius: 20px;margin-left: 40px;position: relative;padding-bottom: 30px;"
          >
            <img
              :src="pc_index_img10"
              style="width: 113px;height: 112px;margin-top: 54px;margin-left: 40px;"
              alt
            />
            <img
              :src="pc_index_img13"
              style="width: 128px;height: 123px;position: absolute;right: 40px ;top: 40px;"
              alt
            />

            <div
              style="position: absolute;left: 40px;top: 240px;font-size: 25px;font-family: Selawik;font-weight: 600;color: #FFFFFF;"
            >High safety</div>
            <div
              style="position: absolute;left: 40px;top: 290px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;max-width: 540px;line-height: 2"
            >SynAssets codes will be open on GitHub,professional auditors and multi-signature wallet to improve SynAssets security</div>
          </div>
        </div>

        <div style="max-width: 1240px;margin: 35px auto 0 auto;display: flex;">
          <div
            class="div-bg"
            style="width: 450px;min-height: 360px; border-radius: 20px;position: relative;padding-bottom: 40px;"
          >
            <img
              :src="pc_index_img11"
              style="width: 93px;height:93px;margin-top: 54px;margin-left: 40px;"
              alt
            />
            <img
              :src="pc_index_img13"
              style="width: 128px;height: 123px;position: absolute;right: 40px ;top: 40px;"
              alt
            />
            <div
              style="position: absolute;left: 40px;top: 240px;font-size: 25px;font-family: Selawik;font-weight: 600;color: #FFFFFF;"
            >Consensus Aggregation</div>
            <div
              style="position: absolute;left: 40px;top: 290px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;max-width: 540px;line-height: 2"
            >SynAssets contributor would be rewarded if they invite more users participate in the consensus network.</div>
          </div>
          <div
            class="div-bg"
            style="width: 800px;min-height: 360px;border-radius: 20px;margin-left: 40px;position: relative;padding-bottom: 40px;"
          >
            <img
              :src="pc_index_img12"
              style="width: 79px;height: 105px;margin-top: 54px;margin-left: 40px;"
              alt
            />
            <img
              :src="pc_index_img13"
              style="width: 128px;height: 123px;position: absolute;right: 40px ;top: 40px;"
              alt
            />

            <div
              style="position: absolute;left: 40px;top: 240px;font-size: 25px;font-family: Selawik;font-weight: 600;color: #FFFFFF;"
            >Deflation Protocol</div>
            <div
              style="position: absolute;left: 40px;top: 290px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;max-width: 720px;line-height: 2"
            >Every transaction outside the protocol will be collected x% tax as protocol control the liquidity, which will be used to add liquidity and deposited in the treasury, meanwhile, the SAT in these pairs will be destroyed.</div>
          </div>
        </div>
        <div
          style="max-width: 1920px;height: 3px;background: rgba(190, 225, 220, 0.7);margin:100px auto 0px auto;"
        ></div>
        <!----div5--->
        <div class="pc-index-div-bg5">
          <div
            style=" margin: 0 auto;max-width: 1100px;font-size: 36px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;"
          >
            Synthetic assets(
            <span style="font-size: 45px;">sAssets</span> ) gain growth of wealth for you
          </div>

          <div
            style="margin: 45px auto 0px auto;max-width: 1100px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;"
          >
            <span style="font-size: 20px;font-weight: 500;">sAssets</span> : We will enter the era of synthetic assets 2.0 which including sMatic, sBTC, sETH, etc.
          </div>

          <div
            style="margin: 30px auto 0px auto;max-width: 1100px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;"
          >
            <span style="font-size: 20px;font-weight: 500;">Stake</span> : Gain rewards after stake sMatic, sBTC,etc at the end of every epoch, which is a passive, long-term strategy.
          </div>

          <div
            style="margin: 30px auto 0px auto;max-width: 1100px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;"
          >
            <span style="font-size: 20px;font-weight: 500;">Bond</span> : You can buy bond at a discount price, which is an active, short-term strategy.
          </div>

          <div
            style="margin: 30px auto 0px auto;max-width: 1100px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;"
          >
            <span style="font-size: 20px;font-weight: 500;">POL</span> : Protocol Owned Liquidity is the amount of LP the treasury owns and controls.
          </div>

          <div
            style="max-width: 1920px;height: 3px;background: rgba(190, 225, 220, 0.7);margin:120px auto 0px auto;"
          ></div>

          <div
            style=" margin: 110px auto 0px auto;max-width: 1100px;font-size: 36px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;"
          >
            <span style="font-size: 40px;">IDO</span> gain reward in the early stage
          </div>

          <div
            style="margin: 45px auto 0px auto;max-width: 1100px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;line-height: 2;"
          >SAT is launched fairly in IDO method, which is the platform token for the SynAssets and SAT holder can participate in the IDO of sAssets, SAT will be destroyed at the end.</div>
          <div
            style="max-width: 1920px;height: 3px;background: rgba(190, 225, 220, 0.7);margin:250px auto 0px auto;"
          ></div>

          <div
            style=" margin: 110px auto 0px auto;max-width: 1100px;font-size: 36px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;"
          >Ambassador, Eco-builder can earn consensus rewards</div>

          <div
            style="margin: 45px auto 0px auto;max-width: 1100px;font-size: 14px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;"
          >SynAssets consensus participants invite more consensus participants to join and gain consensus reward.</div>
        </div>
        <div
          style="max-width: 1920px;height: 3px;background: rgba(190, 225, 220, 0.7);margin:0px auto 0px auto;"
        ></div>
        <div
          style=" margin: 110px auto 0px auto;max-width: 1100px;font-size: 40px;font-family: Noto Serif;font-weight: 400;color: #FFFFFF;text-align: center;"
        >Governed by Community</div>
        <div
          style="text-align: center;margin: 45px auto 110px auto;max-width: 1100px;font-size: 16px;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;"
        >SynAssets protocol is governed by both SAT token holder and ecosystem builder.</div>
        <div class="pc-index-div-btn5" @click="tip">Start SynAssets</div>
        <!----div6--->
      </div>
      <!--h5--->
    </div>
    <div v-show="isMobile" style="width: 100%;background:#000000;">
      <div
        style="width: 10rem;height: 1.87rem;background: rgba(25, 27, 31, 0.8);position: relative;"
      >
        <img
          :src="h5_logo"
          style="width: 0.89rem;height: 0.47rem;cursor: pointer; position: absolute;left:0.45rem;top:0.7rem;"
          alt
        />
        <div class="h5-index-div-btn1" @click="launchApp">Launch App</div>
      </div>

      <div style="width: 10rem;height:12.4rem;position: relative;margin-top:3.5rem;  background: url('../../assets/img/h5_bg.png') no-repeat;">
        <!-- <img
          :src="h5_bg"
          style="width: 10rem;height:12.4rem; position: absolute;left:0rem;top:0rem;"
          alt
        /> -->

        <div
          style="font-size: 1.33rem;font-family: Noto Serif;font-weight: bold;color: #FFFFFF;padding-left:0.45rem;padding-top:2.9rem;line-height:1;"
        >Consensus</div>
        <div
          style="font-size: 1.33rem;font-family: Noto Serif;font-weight: bold;color: #FFFFFF;padding-left:0.45rem;line-height:1;"
        >Network</div>

        <div
          style="font-size:  0.48rem;font-family:Selawik;font-weight: 600;color: #FFFFFF;padding-left:0.45rem;padding-top:0.8rem;width: 7rem;line-height:1.5;"
        >
          Stake, IDO and Bond to earn
          treasury on the most popular
          decentralized consensus
          platform.
        </div>

        <div class="h5-index-div-btn2" @click="launchApp" style="z-index:1111">Launch App</div>

        <div style="display:flex;padding-left:0.45rem;padding-top:0.4rem;z-index:999;">
          <img
            :src="pc_index_img3"
            style="width:0.51rem;height:0.51rem;z-index:999"
            @click="goLink('https://twitter.com/SynAssets')"
            alt
          />
          <img
            :src="pc_index_img4"
            style="width:0.51rem;height:0.51rem;margin-left:0.52rem;z-index:999"
            @click="goLink('https://github.com/synassets')"
            alt
          />
          <img
            :src="pc_index_img5"
            style="width:0.51rem;height:0.51rem;margin-left:0.52rem;z-index:999"
            @click="goLink('https://discord.gg/BzVUJJszaU')"
            alt
          />
          <img
            :src="pc_index_img17"
            style="width:0.51rem;height:0.51rem;margin-left:0.52rem;z-index:999"
            @click="goLink('https://medium.com/@SynAssets')"
            alt
          />
        </div>
      </div>

      <div
        style="padding-left:0.45rem;font-size: 0.48rem;font-family: PingFang SC;font-weight: 800;color: #00A0E9;padding-top:3rem;"
        @click="goLink('https://doc.synassets.finance/')"
      >Documentation</div>
      <div
        style="padding-left:0.45rem;font-size: 0.48rem;font-family: PingFang SC;font-weight: 800;color: #00A0E9;padding-top:0.2rem;"
        @click="goLink('https://github.com/synassets')"
      >GitHub</div>
      <div
        style="padding-left:0.45rem;font-size: 0.64rem;font-family:  Noto Sans;font-weight: 600;color: #FFFFFF;padding-top:0.8rem;"
      >Fair Financial Game</div>
      <div
        style="padding-left:0.45rem;font-size: 0.4rem;font-family: Selawik;font-weight: 400;color: #FFFFFF;padding-top:0.7rem;width: 8rem;line-height:1.7;"
      >
        We hope to contrust a stronger DAO (5, 5)
        consensus network based on Polygon chain.
        All consensus-builder of SynAssets ecosystem
        will gain the wealth growth.
      </div>

      <div style="display:flex;">
        <div style="flex:1;padding-top:0.9rem;">
          <div
            class="h5-index-div-btn4"
            @click="goLink('https://doc.synassets.finance/')"
          >View SynAssets</div>
        </div>
        <div style="flex:1;padding-top:0.9rem;">
          <img
            :src="h5_circle1"
            style="width:4.37rem;height:6.32rem;margin-left:0.1rem;z-index:999"
            alt
          />
        </div>
      </div>

      <div
        style="width: 8.91rem;height: 4.8rem;background: #1E1F23;border: 1px solid #626262;border-radius: 0.4rem;margin:2rem auto 0.4rem auto;"
      >
        <div
          style="font-size: 0.48rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-top:0.8rem;padding-left:0.67rem;"
        >Fair Launch</div>

        <div
          style="width: 7.12rem;font-size: 0.4rem;font-family: Selawik;font-weight: 400;color: #FFFFFF;padding-top:0.4rem;margin-left:0.67rem;line-height:1.5;"
        >No VC investment, SAT will only be published by IDO , everyone can take part in Initial Offering .</div>
      </div>

      <div
        style="width: 8.91rem;height: 4.2rem;background: #1E1F23;border: 1px solid #626262;border-radius: 0.4rem;margin:0.5rem auto 0.4rem auto;"
      >
        <div
          style="font-size: 0.48rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-top:0.8rem;padding-left:0.67rem;"
        >(5, 5) Consensus</div>

        <div
          style="width: 7.12rem;font-size: 0.4rem;font-family: Selawik;font-weight: 400;color: #FFFFFF;padding-top:0.4rem;margin-left:0.67rem;line-height:1.5;"
        >Based on gamble theory，SynAssets contributor will gain the increase of wealth with (5, 5) cosensus.</div>
      </div>

      <div
        style="width: 8.91rem;height: 5.2rem;background: #1E1F23;border: 1px solid #626262;border-radius: 0.4rem;margin:0.5rem auto 0.4rem auto;"
      >
        <div
          style="font-size: 0.48rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-top:0.8rem;padding-left:0.67rem;"
        >Synthetic Assets</div>

        <div
          style="width: 7.12rem;font-size: 0.4rem;font-family: Selawik;font-weight: 400;color: #FFFFFF;padding-top:0.4rem;margin-left:0.67rem;line-height:1.5;"
        >sBTC, sMATIC, sETH, sAAPL, sAMZN，etc. will join SynAssets to build a new the world of synthetic assets.</div>
      </div>

      <div
        style="width: 8.91rem;height: 5.2rem;background: #1E1F23;border: 1px solid #626262;border-radius: 0.4rem;margin:0.5rem auto 0.4rem auto;"
      >
        <div
          style="font-size: 0.48rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-top:0.8rem;padding-left:0.67rem;"
        >High safety</div>

        <div
          style="width: 7.12rem;font-size: 0.4rem;font-family: Selawik;font-weight: 400;color: #FFFFFF;padding-top:0.4rem;margin-left:0.67rem;line-height:1.5;"
        >SynAssets codes will be open on GitHub,professional auditors and multi-signature wallet to improve SynAssets security</div>
      </div>

      <div
        style="width: 8.91rem;height: 5.2rem;background: #1E1F23;border: 1px solid #626262;border-radius: 0.4rem;margin:0.5rem auto 0.4rem auto;"
      >
        <div
          style="font-size: 0.48rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-top:0.8rem;padding-left:0.67rem;"
        >Consensus Aggregation</div>

        <div
          style="width: 7.12rem;font-size: 0.4rem;font-family: Selawik;font-weight: 400;color: #FFFFFF;padding-top:0.4rem;margin-left:0.67rem;line-height:1.5;"
        >SynAssets contributor would be rewarded if they invite more users participate in the consensus network.</div>
      </div>

      <div
        style="width: 8.91rem;height:6.5rem;background: #1E1F23;border: 1px solid #626262;border-radius: 0.4rem;margin:0.5rem auto 0.4rem auto;"
      >
        <div
          style="font-size: 0.48rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-top:0.8rem;padding-left:0.67rem;"
        >Deflation Protocol</div>

        <div
          style="width: 7.12rem;font-size: 0.4rem;font-family: Selawik;font-weight: 400;color: #FFFFFF;padding-top:0.4rem;margin-left:0.67rem;line-height:1.5;"
        >Every transaction outside the protocol will be collected x% tax as protocol control the liquidity, which will be used to add liquidity and deposited in the treasury, meanwhile, the SAT in these pairs will be destroyed.</div>
      </div>

      <div
        style=" width: 10rem;padding-bottom: 2.8rem;background: #25434A;border-radius: 1rem 0rem 0rem 0rem;margin-top:2rem;"
      >
        <div
          style="font-size: 0.48rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;width:7.8rem;padding-top:1.2rem;margin-left:0.88rem;line-height:1.7;"
        >Synthetic assets( sAssets ) gain growth of wealth for you</div>

        <div
          style="font-size: 0.4rem;font-family: Selawik;font-weight: 400;color: #FFFFFF;width:8.39rem;padding-top:0.7rem;margin-left:0.88rem;line-height:1.7;"
        >
          sAssets : We will enter the era of synthetic assets 2.0 which including sMatic, sBTC, sETH, etc.
          </br></br>
          Stake : Gain rewards after stake sMatic, sBTC,etc at the end of every epoch, which is a passive, long-term strategy.
          </br></br>
          Bond : You can buy bond at a discount price, which is an active, short-term strategy.
          </br></br>
          POL : Protocol Owned Liquidity is the amount of LP the treasury owns and controls.
        </div>
      </div>



 <div
        style=" width: 10rem;padding-bottom: 1.8rem;background: #1E1F23;;border-radius:  1rem  0rem   0rem  0rem ;margin-top:-1rem;"
      >
        <div
          style="font-size: 0.48rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;width:7.8rem;padding-top:1.2rem;margin-left:0.88rem;line-height:1.7;"
        >IDO gain reward in the early stage</div>

        <div
          style="font-size: 0.4rem;font-family: Selawik;font-weight: 400;color: #FFFFFF;width:8.39rem;padding-top:0.7rem;margin-left:0.88rem;line-height:1.7;"
        >
        SAT is launched fairly in IDO method, which is the platform token for the SynAssets and SAT holder can participate in the IDO of sAssets, SAT will be destroyed at the end.
        </div>
      </div>





    <div
        style=" width: 10rem;padding-bottom: 1.8rem;background: #322630;border-radius: 0rem 1rem  0rem 0rem;margin-top:-1rem;"
      >
        <div
          style="font-size: 0.48rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;width:7.8rem;padding-top:1.2rem;margin-left:0.88rem;line-height:1.7;"
        >Ambassador, Eco-builder can earn consensus rewards</div>

        <div
          style="font-size: 0.4rem;font-family: Selawik;font-weight: 400;color: #FFFFFF;width:8.39rem;padding-top:0.7rem;margin-left:0.88rem;line-height:1.7;"
        >
         SynAssets consensus participants invite more consensus participants to join and gain consensus reward.
        </div>
      </div>



<div
        style=" width: 10rem;padding-bottom: 1.8rem;background: #000000;border-radius: 0rem 1rem  0rem 0rem;margin-top:-1rem;"
      >
        <div
          style="font-size: 0.48rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;width:7.8rem;padding-top:1.2rem;margin-left:0.88rem;line-height:1.7;"
        >Governed by Community</div>

        <div
          style="font-size: 0.4rem;font-family: Selawik;font-weight: 400;color: #FFFFFF;width:8.39rem;padding-top:0.7rem;margin-left:0.88rem;line-height:1.7;"
        >
        SynAssets protocol is governed by both SAT token holder and ecosystem builder.
        </div>
      </div>



 <div class="h5-index-div-btn5" @click="tip">Start SynAssets</div>

    <div style=" width: 10rem;padding-top: 1rem;background: #FFFFFF;margin-top:2rem;">
        <div style="font-size: 0.4rem;font-family: Selawik;font-weight: bold;color: #0D0D0D;padding-left:0.68rem;">Product</div>
       <div style="display:flex;margin-left:0.65rem;margin-top:0.5rem;">
           <div style="width: 0.1rem;height:0.1rem;border-radius:0.1rem;background: #000000;margin-top:0.25rem;"></div>
           <div style="font-size: 0.4rem;font-family: Selawik;font-weight: 400;color: #00A0E9;margin-left:0.4rem; cursor: pointer;"  @click="tip">Network Condensed DAO</div>
       </div>

       <div style="display:flex;margin-left:0.65rem;margin-top:0.5rem;">
           <div style="width: 0.1rem;height:0.1rem;border-radius:0.1rem;background: #000000;margin-top:0.25rem;"></div>
           <div style="font-size: 0.4rem;font-family: Selawik;font-weight: 400;color: #00A0E9;margin-left:0.4rem; cursor: pointer;"  @click="tip">IDO</div>
       </div>

       <div style="display:flex;margin-left:0.65rem;margin-top:0.5rem;">
           <div style="width: 0.1rem;height:0.1rem;border-radius:0.1rem;background: #000000;margin-top:0.25rem;"></div>
           <div style="font-size: 0.4rem;font-family: Selawik;font-weight: 400;color: #00A0E9;margin-left:0.4rem; cursor: pointer;"  @click="tip">Consensus Invitation</div>
       </div>
       <div style="font-size: 0.4rem;font-family: Selawik;font-weight: bold;color: #0D0D0D;padding-left:0.68rem;margin-top:1rem;">Resources</div>
       <div style="display:flex;margin-left:0.65rem;margin-top:0.5rem;">
           <div style="width: 0.1rem;height:0.1rem;border-radius:0.1rem;background: #000000;margin-top:0.25rem;"></div>
           <div style="font-size: 0.4rem;font-family: Selawik;font-weight: 400;color: #00A0E9;margin-left:0.4rem; cursor: pointer;"   @click="goLink('https://doc.synassets.finance/')" >Documentation</div>
       </div>
       <div style="display:flex;margin-left:0.65rem;margin-top:0.5rem;">
           <div style="width: 0.1rem;height:0.1rem;border-radius:0.1rem;background: #000000;margin-top:0.25rem;"></div>
           <div style="font-size: 0.4rem;font-family: Selawik;font-weight: 400;color: #00A0E9;margin-left:0.4rem; cursor: pointer;"  @click="goLink('https://github.com/synassets')" >Github</div>
       </div>
      <div style="display:flex;margin-left:0.65rem;margin-top:0.5rem;">
        <div style="width: 0.1rem;height:0.1rem;border-radius:0.1rem;background: #000000;margin-top:0.25rem;"></div>
        <div style="font-size: 0.4rem;font-family: Selawik;font-weight: 400;color: #00A0E9;margin-left:0.4rem; cursor: pointer;"   @click="goLink('https://github.com/synassets/SynassetsWeb/blob/main/source/SynAssets_SG_2021.pdf')" >Pitch Deck</div>
      </div>
       <div style="display:flex;margin-left:0.65rem;margin-top:0.5rem;">
           <div style="width: 0.1rem;height:0.1rem;border-radius:0.1rem;background: #000000;margin-top:0.25rem;"></div>
           <div style="font-size: 0.4rem;font-family: Selawik;font-weight: 400;color: #00A0E9;margin-left:0.4rem; cursor: pointer;"   @click="goLink('https://github.com/solidproof/projects/blob/main/Consensus/SmartContract_Audit_Solidproof_Consensus.pdf')" >Audit Report</div>
       </div>
       <div style="display:flex;margin-left:0.65rem;margin-top:0.5rem;">
           <div style="width: 0.1rem;height:0.1rem;border-radius:0.1rem;background: #000000;margin-top:0.25rem;"></div>
           <div style="font-size: 0.4rem;font-family: Selawik;font-weight: 400;color: #00A0E9;margin-left:0.4rem; cursor: pointer;"   @click="goLink('https://github.com/synassets/Synassets-frontend/tree/main/source')" >Logo Lockups</div>
       </div>


       <div style="width: 10rem;height:2rem;position: relative;">
           <img
            :src="h5_t"
            style="width:0.59rem;height:0.48rem;position: absolute;z-index:999;right:3rem;bottom:0.6rem;"
             @click="goLink('https://twitter.com/SynAssets')"
            alt
          />
          <img
            :src="h5_g"
            style="width:0.61rem;height:0.57rem;position: absolute;z-index:999;right:1.75rem;bottom:0.6rem;"
             @click="goLink('https://github.com/synassets')"
            alt
          />
         <img
            :src="h5_d"
            style="width:0.53rem;height:0.6rem;position: absolute;z-index:999;right:0.6rem;bottom:0.6rem;"
             @click="goLink('https://discord.gg/BzVUJJszaU')"
            alt
          />
       </div>
    </div>
    </div>
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
  h5_logo,
  h5_bg,
  h5_circle1,
  h5_d, h5_g, h5_t
} from "@/utils/images";

export default {
  name: "Index",
  components: {},
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
      h5_logo,
      h5_bg,
      h5_circle1,
      h5_d, h5_g, h5_t
    };
  },
  computed: {
    ...mapState({
      isMobile: state => state.sys.isMobile
    })
  },
  mounted() {},

  methods: {
    tip() {
      this.$message.info("Coming Soon!");
    },

    goLink(url) {
      window.open(url);
    },
    launchApp(){
         window.open('https://dapp.synassets.finance');
    }
  }
};
</script>


<style lang="scss" scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.div-text1 {
  width: 100%;
  text-align: center;
  font-size: 60px;
  font-family: Noto Serif;
  font-weight: bold;
  color: #ffffff;
  margin-top: 190px;
  animation: fade-in;
  animation-duration: 1.5s;
  -webkit-animation: fade-in 1.5s;
}
.div-text2 {
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-family: Selawik;
  font-weight: 400;
  color: #ffffff;
  margin-top: 15px;
  animation: fade-in;
  animation-duration: 1.5s;
  -webkit-animation: fade-in 1.5s;
}
.div-text3 {
  font-size: 40px;
  font-family: Noto Serif;
  font-weight: 400;
  color: #ffffff;
  margin-top: 168px;
  animation: fade-in;
  animation-duration: 1.5s;
  -webkit-animation: fade-in 1.5s;
}
.div-text4 {
  max-width: 620px;
  font-size: 16px;
  font-family: Selawik;
  font-weight: 400;
  color: #ffffff;
  margin-top: 50px;
  line-height: 2;
  animation: fade-in;
  animation-duration: 1.5s;
  -webkit-animation: fade-in 1.5s;
}
.pc-index-div-bg1 {
  max-width: 1920px;
  min-height: 820px;
  margin: 0px auto 0px auto;
  background: url("../../assets/img/pc_index_img1.png") no-repeat;
  //z-index: -1;
}
.pc-index-div-btn1 {
  position: absolute;
  right: 0px;
  top: 20px;
  width: 120px;
  height: 40px;
  background: linear-gradient(-45deg, #f3e6e9 0%, #dbd5ec 100%);
  border-radius: 5px;
  cursor: pointer;
  line-height: 40px;
  font-size: 16px;
  text-align: center;
  font-family: PingFang SC;
  font-weight: 800;
  color: #2d2d2d;
}
.pc-index-div-btn1:hover {
  background: linear-gradient(45deg, #f3e6e9 0%, #dbd5ec 100%);
}
.pc-index-div-btn2 {
  position: absolute;
  right: 150px;
  top: 30px;
  font-size: 16px;
  font-family: PingFang SC;
  color: #9fa0a2;
  cursor: pointer;
}
.pc-index-div-btn2:hover {
  color: #ffffff;
}

.pc-index-div-btn3 {
  margin-left: 60px;
  width: 120px;
  height: 36px;
  background: linear-gradient(-45deg, #f3e6e9 0%, #dbd5ec 100%);
  border-radius: 5px;
  cursor: pointer;
  line-height: 36px;
  font-size: 16px;
  text-align: center;
  font-family: PingFang SC;
  font-weight: 800;
  color: #2d2d2d;
}
.pc-index-div-btn3:hover {
  background: linear-gradient(45deg, #f3e6e9 0%, #dbd5ec 100%);
}
.pc-index-div-btn4 {
  text-align: center;
  line-height: 35px;
  width: 160px;
  height: 35px;
  background: linear-gradient(-45deg, #f3e6e9 0%, #dbd5ec 100%);
  margin-top: 76px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 800;
  color: #2d2d2d;
  cursor: pointer;
}
.pc-index-div-btn4:hover {
  background: linear-gradient(45deg, #f3e6e9 0%, #dbd5ec 100%);
}

.h5-index-div-btn4 {
  text-align: center;
  line-height: 0.93rem;
  width: 4rem;
  height: 0.93rem;
  background: linear-gradient(-45deg, #4a3e48 0%, #25434a 100%);
  margin-top: 0.3px;
  font-size: 0.4rem;
  font-family: Selawik;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  margin-left: 0.45rem;
  border-radius: 0.13rem;
}
.h5-index-div-btn4:hover {
  background: linear-gradient(45deg, #25434a 0%, #4a3e48 100%);
}
.pc-index-div-bg5 {
  max-width: 1920px;
  min-height: 1317px;
  margin: 100px auto 0px auto;
  background: url("../../assets/img/pc_index_img14.png") no-repeat;
  //z-index: -1;
}
.pc-index-div-btn5 {
  text-align: center;
  line-height: 35px;
  width: 160px;
  height: 35px;
  background: linear-gradient(-45deg, #f3e6e9 0%, #dbd5ec 100%);
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 800;
  color: #2d2d2d;
  cursor: pointer;
  margin: 76px auto 0px auto;
}
.pc-index-div-btn5:hover {
  background: linear-gradient(45deg, #f3e6e9 0%, #dbd5ec 100%);
}
.h5-index-div-btn5 {
   text-align: center;
  line-height: 0.93rem;
  width: 4rem;
  height: 0.93rem;
  background: linear-gradient(-45deg, #4a3e48 0%, #25434a 100%);

  font-size: 0.4rem;
  font-family: Selawik;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  margin-left: 0.88rem;
  border-radius: 0.13rem;
}
.h5-index-div-btn5:hover {
  background: linear-gradient(45deg, #25434a 0%, #4a3e48 100%);
}
.div-bg {
  border: 2px solid #797979;
  background: rgba(0, 0, 0, 0.7);
}
.div-bg:hover {
  background: linear-gradient(
    -45deg,
    rgba(153, 216, 225, 0.3) 0%,
    rgba(215, 177, 218, 0.3) 100%
  );
  border: 2px solid transparent;
  //opacity: 0.3; #99D8E1 D7B1DA
}

.h5-index-div-btn1 {
  position: absolute;
  right: 0.45rem;
  top: 0.51rem;
  width: 2.4rem;
  height: 0.85rem;
  background: linear-gradient(-45deg, #f3e6e9 0%, #dbd5ec 100%);
  border-radius: 0.13rem;
  cursor: pointer;
  line-height: 0.85rem;
  font-size: 0.32rem;
  text-align: center;
  font-family: PingFang SC;
  font-weight: 800;
  color: #2d2d2d;
}
.h5-index-div-btn1:hover {
  background: linear-gradient(45deg, #f3e6e9 0%, #dbd5ec 100%);
}

.h5-index-div-btn2 {
  z-index: 999;
  margin-left: 0.45rem;
  width: 3.5rem;
  height: 1.55rem;
  background: linear-gradient(-45deg, #4a3e48 0%, #25434a 100%);
  border-radius: 0.13rem;
  cursor: pointer;
  line-height: 1.55rem;
  font-size: 0.4rem;
  text-align: center;
  font-family: Selawik;
  font-weight: 600;
  color: #ffffff;
  margin-top: 0.5rem;
}
// .h5-index-div-btn2:hover {
//   background: linear-gradient(45deg, #25434a 0%, #4a3e48 100%);
// }

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
  padding: 0px 0px;
}
/deep/ .el-dialog__body {
  padding: 0px 0px;
  color: #606266;
  font-size: 14px;
  word-break: break-all;
}
/deep/.el-dialog {
  background-color: #ffffff;

  border-radius: 10px;
}
</style>
