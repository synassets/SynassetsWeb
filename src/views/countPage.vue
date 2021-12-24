<template>
 <div class="cp_wrap flexcsc">
   <p class="cp_title">{{ $t("cp.txt1")}}</p>
   <p class="cp_txt">
     {{ $t("cp.txt2")}}
     <img :src="logo" alt="">
     {{ $t("cp.txt3")}}
   </p>

   <div class="cp_panel">
     <input type="text" v-model="amount">
   </div>

   <p class="cp_txt">{{ $t("cp.txt4") }}</p>

   <div class="cp_panel">
     <input type="text" v-model="rate">
   </div>

   <p class="cp_txt1">{{ $t("cp.txt5", {amount: amount}) }}</p>
   <div style="padding-bottom: 1rem">
     <p v-for="item in refList" :key="item.index" class="cp_txt2">
       {{ `${item.index}) + ${toRate(item.rate)}% = ${toRate(item.amount)} TRX` }}
     </p>
   </div>

 </div>
</template>

<script>
import {logo} from "@/utils/images";

export default {
  name: "countPage",
  data(){
    return {
      logo,
      amount: 100,
      rate: 0,
      refList: []
    }
  },
  watch: {
    amount(val){
      if(!isNaN(Number(val))){
        this.doCount();
      }
    },
    rate(val){
      if(!isNaN(Number(val))){
        if(Number(val)>10){
          this.rate = 10
        }
        this.doCount();
      }
    }
  },
  mounted() {
    this.doCount()
  },
  methods:{
    doCount(){

      if(this.amount==='' || this.rate === '' ||isNaN(Number(this.amount)) || isNaN(Number(this.rate)) || Number(this.amount)<100 || Number(this.rate)<0 ){
        return ;
      }


      let refAmount = 0;
      let rate = (1+Number(this.rate))*0.01;
      let rList = [];
      let index = 1;
      do {
        refAmount = index * rate * Number(this.amount);

        let reAmount = (refAmount > 2*Number(this.amount))?2*Number(this.amount):refAmount
        rList.push({index, rate:rate*100, amount: reAmount});
        rate += 0.001;
        index += 1;

      }while (refAmount < 2*Number(this.amount));

      console.log(rList);
      this.refList = rList;

    },
    toRate(val){
      let r = parseInt(Number(val)*10000);
      r = Math.round(r/1000);
      return r/10;
    }


  }
}
</script>

<style lang="scss" scoped>
.cp_wrap {
  color: $color-text;
  text-align: center;
  .cp_title {
    font-size: 0.19rem;
    margin: 0.32rem auto;

  }
  .cp_txt {
    font-size: 0.13rem;
    margin: 0.23rem auto 0.15rem;
    img {
      height: 0.2rem;
      vertical-align: middle;
    }
  }
  .cp_txt1 {
    font-size: 0.16rem;
    font-weight: bold;
    margin: 0.23rem auto 0.15rem;
  }
  .cp_txt2 {
    text-align: left;
    font-size: 0.13rem;
    line-height: 2;
  }

  .cp_panel {
    font-size: 0.25rem;
    width: 4.69rem;
    height: 0.52rem;
    border-radius: 0.06rem;
    box-shadow: inset 0 0 0.18rem 0 #000;
    input {
      text-align: center;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 0 0.13rem;
      color: $color-text;
      font-size: 0.25rem;
      background: transparent;
    }
  }
}

@media screen and (max-width: 750px){
  .cp_wrap {
    color: $color-text;
    text-align: center;
    .cp_title {
      font-size: 0.48rem;
      margin: 0.32rem auto;

    }
    .cp_txt {
      font-size: 0.36rem;
      margin: 0.23rem auto 0.15rem;
      img {
        height: 0.36rem;
        vertical-align: middle;
      }
    }
    .cp_txt1 {
      font-size: 0.36rem;
      font-weight: bold;
      margin: 0.23rem auto 0.15rem;
    }
    .cp_txt2 {
      text-align: left;
      font-size: 0.36rem;
      line-height: 2;
    }

    .cp_panel {
      font-size: 0.36rem;
      width: 5.6rem;
      height: 0.93rem;
      border-radius: 0.1rem;
      box-shadow: inset 0 0 0.18rem 0 #000;
      input {
        text-align: center;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 0 0.13rem;
        color: $color-text;
        font-size: 0.36rem;
        background: transparent;
      }
    }
  }
}


</style>
