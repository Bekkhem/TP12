<template>
  <div>
    <page-auth
      v-if="show"
      msg1="You cannot attamp to home yet. Please sing in!"
      msg2="Go to sign in"
      msg3="/"
    />
    <div class="container2" v-else>4
      <div class="home" v-if="userData != null">
        <h3>Welcome to Home Page</h3>
        <div>
          Hello, {{ userData.message.firstname }}
          {{ userData.message.lastname }}
        </div>
        <div>Your email: {{ userData.message.email }}</div>
        <div>Your id: {{ userData.message._id }}</div>
        <button type="submit" id="btn_logout" @click="created()">
          Log out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PageAuth from "./PageAuth.vue";
export default {
  components: { PageAuth },
  props: {
    data: Object,
  },
  data() {
    return {
      show: false,
      id: Number,
      userData: null,
    };
  },
  async mounted() {
    // POST request using fetch with async/await
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    };
    const response = await fetch(
      "http://localhost:3001/user/624ef482c71270ca6bed04f9",
      requestOptions
    );
    const data = await response.json();
    this.userData = data;
    console.log('userdata' + data);
    if (data.message == "Attemp to get user info failed") {
      this.show = true;
    }
  },
  methods: {
    async created() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(),
      };

      //post data to api
      const response = await fetch(
        "http://localhost:3001/logout",
        requestOptions
      );

      const data = await response.json();
      console.log("data: ", data);

      //check password and email matched or correct
      if (data.status == "false") {
        console.log("Message: ", data.message);
      } else {
        location.href = "/";
      }
    },
  },
};
</script>

<style>
header {
  display: none;
}
h3 {
  font-weight: 500;
  text-align: center;
  margin-bottom: 10px;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#btn_logout {
  background-color: rgb(54, 239, 100);
  color: white;
  height: 5vh;
  width: 10vh;
  font: sans-serif;
  text-shadow: none;
  margin-top: 0.645rem;
  border-radius: 0.165rem;
  margin: 0.5rem 0 0.67rem 0;
}
</style>
