<template>
  <div class="container">
    <div class="login-form">
      <h3>用户注册</h3>
      <p>
        用户名：<input
          type="text"
          v-model="username"
          name="username"
          id="username"
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
      <p>
        昵&nbsp;&nbsp;&nbsp;&nbsp;称：<input
          type="text"
          name="nickname"
          v-model="nickname"
        />
      </p>
      <button @click="regist">注册</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
      info: "",
    };
  },
  methods: {
    regist() {
      this.$http
        .get("/user/regist", {
          username: this.username,
        })
        .then((res) => {
          this.$http
            .post("/user/regist", {
              username: this.username,
              password: this.password,
              nickname: this.nickname,
            })
            .then((res) => {
              alert("注册成功！");
              this.$router.push("/login");
              console.log(res);
            });
          console.log(res);
        })
        .catch((err) => {
          alert("用户名已存在");
          console.log(err);
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
