<template>
  <div class="container">
    <h1>Kontak</h1>

    <p>Zadzwoń do nas: tel: +48 000 000 000</p>

    <p>lub napisz e-mail</p>
    <form @submit.prevent="sendEmail">
      <label>Email</label>
      <input
        type="email"
        v-model="email"
        name="email"
        placeholder="Twój Email"
      />
      <label>Wiadomość</label>
      <textarea
        name="message"
        v-model="message"
        cols="30"
        rows="5"
        placeholder="W czym możemy pomóc?"
      >
      </textarea>
      <input type="submit" value="Wyślij" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Section5",
  data() {
    return {
      email: "",
      message: "",
    };
  },
};
</script>

<style scoped>
.container {
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  text-align: center;
}
h1 {
  color: rgb(255, 255, 255);
  position: relative;
  top: -20%;
}
label {
  float: left;
}
input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
input[type="submit"] {
  background-color: red;
  color: rgb(255, 255, 255);
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
input[type="submit"]:hover {
  background-color: red;
}
</style>
