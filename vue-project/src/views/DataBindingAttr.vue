<template>
  <h3>DataBindingAttr.vue</h3>
  <p>attribute 바인딩하기</p>
  <!-- v-bind 생략가능 -->
  <img v-bind:src="imgSrc" :width="imgWidth" />
  <p>
    <input type="number" v-model.number="widVal" />
  </p>
  <p>
    <input type="text" v-model="msg" />
    <!-- v-bind 연산가능 -->
    <button v-bind:disabled="msg == '' ? true : false" v-on:click="alertFnc">
      클릭
    </button>
  </p>
  <p>객체를 활용한 바인딩</p>
  <h3 v-bind:class="{ 'text-red': isRed, active: isActive }">홍길동</h3>
  <p>배열을 활용한 바인딩</p>
  <h3 v-bind:class="classAry">김길동</h3>
  <p><button v-on:click="showFnc">에러스타일</button></p>
</template>

<script>
export default {
  // data영역
  data() {
    return {
      imgSrc: "http://vuejs.org/images/logo.png",
      imgWid: "230px",
      widVal: 100,
      btnShow: true,
      msg: "",

      isRed: true,
      isActive: false,

      activeClass: "active",
      errorClass: "text-red",

      classAry: ["active", "text-red"],
    };
  },
  // 인스턴스 내에서 값이 변경될 때마다 정의된 함수가 실행
  computed: {
    imgWidth() {
      return this.widVal + "px";
    },
  },
  methods: {
    alertFnc() {
      alert(this.widVal);
    },
    showFnc() {
      this.isRed = !this.isRed;
    },
  },
  mounted() {
    console.log(this);
    this.msg = "홍길동";
    this.imgWid = "210px";
  },
};
</script>

<style scoped>
.text-red {
  color: red;
}
.active {
  background-color: antiquewhite;
}
</style>
