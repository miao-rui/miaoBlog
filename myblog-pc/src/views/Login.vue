<template>
  <div class="container">
    <div class="login-form">
      <h3>用户登录</h3>
      <p>
        用户名：<input
          type="text"
          name="username"
          v-model="username"
          @blur="check()"
        /><span id="info">{{ info }}</span>
      </p>
      <p>
        密&nbsp;&nbsp;&nbsp;&nbsp;码：<input
          type="password"
          name="password"
          v-model="password"
        />
      </p>
      <button @click="login">登录</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      info: "",
    };
  },
  methods: {
    login() {
      this.$http
        .post("/user/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          let { status, token } = res.data;
          console.log("前端" + token);
          if (status == "success") {
            this.$store.dispatch("settoken", token);
            this.$router.push("/");
          }
        });
    },
    check() {
      if (this.username == "") {
        this.info = "不能为空";
      } else {
        this.info = "ok";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  margin: 0;
  padding: 0;
}

.login-form {
  width: 26.666667rem;
  background-color: beige;
  margin: 1.866667rem auto;
  text-align: center;
  padding: 2rem 0;
}
</style>