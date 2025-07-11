import axios from "axios";

export default {
  methods: {
    // 하위 컴포넌트에서 이름이 중복되는지 확인하기
    async $api(url, data) {
      let result = await axios({
        method: "post",
        url: url,
        data: data,
      });
      return result.data;
    },
    $base64(file) {
      return new Promise((resolve) => {
        let fn = new FileReader();
        fn.onload = (e) => {
          resolve(e.target.result);
        };
        fn.readAsDataURL(file);
      });
    },
  },
};
