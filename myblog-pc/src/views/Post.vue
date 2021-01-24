<template>
  <div class="content">
    <p>
      标题：<input
        type="text"
        name="title"
        id="title"
        v-model="title"
        @blur="check"
      />
    </p>
    <p>
      内容:
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        v-model="message"
      ></textarea>
    </p>
    <button @click="post">发表</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      message: "",
    };
  },
  methods: {
    post() {
      this.$http
        .post("/blog/post", {
          title: this.title,
          message: this.message,
        })
        .then((res) => {
          alert("发表成功");
          this.$router.push("/");
          console.log(res);
        });
    },
    check() {
      if (this.title == "") {
        alert("标题不能为空");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  width: 26.666667rem;
  background-color: beige;
  margin: 1.866667rem auto;
  text-align: center;
  padding: 2rem 0;
}
</style>