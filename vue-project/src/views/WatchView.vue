<template>
  <h3>Watch</h3>
  <textarea v-bind:disabled="charFull" v-model="messageContent"></textarea>
  <p>현재: {{ charCount }} 자 / 최대 50자</p>
  <p>{{ feedMessage }}</p>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      messageContent: "",
      charCount: 0,
      charFull: false,
      feedMessage: "메세지를 입력하세요",
    };
  },
  watch: {
    messageContent(nv, ov) {
      console.log(nv + ", " + ov);
      this.charCount = nv.length;
      // 50자가 되면 입력불가, 메세지 출력
      if (nv.length >= 50) {
        this.charFull = true;
        this.feedMessage = "제한 50자입니다.";
      }
    },
  },
};
</script>

<style scoped>
textarea {
  width: 100%;
  max-width: 500px;
  height: 120px;
  padding: 12px;
  font-size: 16px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  transition: border-color 0.3s ease;
}

textarea:focus {
  border-color: #4a90e2;
  outline: none;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
}

textarea:disabled {
  background-color: #f5f5f5;
  color: #999;
  cursor: not-allowed;
}

p {
  font-size: 14px;
  color: #555;
  margin-top: 8px;
}

p:nth-of-type(1) {
  font-weight: bold;
  color: #333;
}

p:nth-of-type(2) {
  color: #e74c3c; /* 빨간색 경고 메시지처럼 사용 가능 */
  font-style: italic;
}
</style>
