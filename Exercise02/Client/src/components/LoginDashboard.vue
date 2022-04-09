<template>

 <div class="container">
        <h3>Admin</h3>
        <input type="text"
               name="email"
               id="email"
               placeholder="Input username"
               v-model="email">
        <input type="password"
               name="password"
               id="password"
               placeholder="Input password"
               v-model="password"
               @keyup.enter="created()">
          <div
            v-text="msg"
            v-bind:style="{ backgroundColor: input_color }"
          ></div>
        <input type="submit" @click="created()">
    </div>

</template>
<script>
// import PageAuth from "./PageAuth.vue";
export default {
  // components: { PageAuth },
  // data() {
  //   return {
  //     show: false,
  //   };
  // },
 
  methods: {
    async created() {
      // POST request using fetch with async/awai
      console.log(this.email);
      console.log(this.password);
      console.log("go to admindashboarsh");
      if (!this.email || !this.password) {
        this.msg = "Username or password cannot empty.";
        this.input_color = "rgba(240,0,0,.6)";
      } else {
        if (this.email == "admin" && this.password == "12345") {
         location.href = "./dashboard";
        } else {
          this.msg = "Username or password is incorrect.";
          this.input_color = "rgba(240,0,0,.6)";
        }
      }
     
  }
  }
};

</script>
<style scoped>
     * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        
        .container {
            margin: 10% auto;
            width: 30%;
            height: 40vh;
            border: 1px solid black;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }
        
        h3 {
            margin-bottom: 8px;
        }
        
        input {
            margin: 10px 0;
            padding: 8px;
            border-radius: 16px;
        }

</style>