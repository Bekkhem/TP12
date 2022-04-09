<template>
    <div class="container">
        <div class="title">
            <span>Admin Dashboard</span>
        </div>
        <div class="wrapper-info">
            <div class="list-menu">
                <div class="box-menu">
                   <router-link to="?category" @click="category()"
              >Category</router-link
            >
                </div>
                <div class="box-menu">
                     <router-link
              to="?item"
              @click="items()"
              style="padding: 0.5vh 3.5vw"
              >Items</router-link
            >
                </div>
                <div class="box-menu">
                   <router-link to="?product" @click="products()"
              >Products</router-link
            >
                </div>
            </div>
            <div class="data">
                <div class="title-data">
                    <div class="category-txt">
                        <h3>Category</h3>
                    </div>
                    <div class="btn-add">
                        <button>Add new</button>
                    </div>
                </div>
                <div class="wrapper-data">
                     <div v-html="display"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "Dashboard",
  data() {
    return {
      show: true,
      msg: "",
      input_color: "",
      titleData: [],
      numOfCate: 0,
      display: "",
      display_item: "",
    };
  },
  async mounted() {
    // POST request using fetch with async/await
    const requestOptions = {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(
      "http://localhost:3001/category/all",
      requestOptions
    );
    const data = await response.json();
    this.titleData = data;
    this.numOfCate = this.titleData.data.length;
    this.display =
      `<table id="table"><tr>` +
      `<th>Name</th>` +
      `<th>Description</th>` +
      `<th>imageURL</th>` +
      `<th>action</th>` +
      `</tr>`;
    for (var i = 0; i < this.numOfCate; i++) {
      this.display_item =
        this.display_item +
        `<tr>` +
        `<td>${this.titleData.data[i].name}</td>` +
        `<td>${this.titleData.data[i].desc}</td>` +
        `<td>${this.titleData.data[i].imageURL}</td>` +
        `<td><button @click="editBtn(${i})">Edit</button><button @click="deleteBtn(${i})">Delete</button></td>` +
        `</tr>`;
    }
    this.display = this.display + this.display_item + `</table>`;

    console.log(this.titleData);
    console.log(this.numOfCate);
  },
  methods: {
    deleteBtn(id) {
      alert(id);
    },
  
    async category() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(
        "http://localhost:3001/category/all",
        requestOptions
      );
      const data = await response.json();
      this.titleData = data;
      this.numOfCate = this.titleData.data.length;
      this.display = "";
      this.display_item = "";
      this.display =
        `<table id="table"><tr>` +
        `<th>Name</th>` +
        `<th>Description</th>` +
        `<th>imageURL</th>` +
        `<th>action</th>` +
        `</tr>`;
      for (var i = 0; i < this.numOfCate; i++) {
        this.display_item =
          this.display_item +
          `<tr>` +
          `<td>${this.titleData.data[i].name}</td>` +
          `<td>${this.titleData.data[i].desc}</td>` +
          `<td>${this.titleData.data[i].imageUrl}</td>` +
          `<td><button @click="editBtn(${i})">Edit</button><button @click="deleteBtn(${i})">Delete</button></td>` +
          `</tr>`;
      }
      this.display = this.display + this.display_item + `</table>`;

      console.log(this.titleData);
      console.log(this.numOfCate);
    },
    async items() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(
        "http://localhost:3001/item/all",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      this.titleData = data;
      this.numOfCate = this.titleData.data.length;
      this.display = "";
      this.display_item = "";
      this.display =
        `<table id="table"><tr>` +
        `<th>Name</th>` +
        `<th>Description</th>` +
        `<th>Category</th>` +
        `<th>action</th>` +
        `</tr></thead><tbody>`;
      for (var i = 0; i < this.numOfCate; i++) {
        this.display_item =
          this.display_item +
          `<tr>` +
          `<td>${this.titleData.data[i].name}</td>` +
          `<td>${this.titleData.data[i].desc}</td>` +
          `<td>${this.titleData.data[i].category}</td>` +
          `<td><button @click="editBtn(${i})">Edit</button><button @click="deleteBtn(${i})">Delete</button></td>` +
          `</tr>`;
      }
      this.display = this.display + this.display_item + `</tbody></table>`;

      console.log(this.titleData);
      console.log(this.numOfCate);
    },
    async products() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(
        "http://localhost:3001/product/all",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      this.titleData = data;
      this.numOfCate = this.titleData.data.length;
      this.display = "";
      this.display_item = "";
      this.display =
        `<table id="table"><tr>` +
        `<th>Name</th>` +
        `<th>imageURL</th>` +
        `<th>Item</th>` +
        `<th>action</th>` +
        `</tr></thead><tbody>`;
      for (var i = 0; i < this.numOfCate; i++) {
        this.display_item =
          this.display_item +
          `<tr>` +
          `<td>${this.titleData.data[i].title}</td>` +
          `<td>${this.titleData.data[i].imageUrl}</td>` +
          `<td>${this.titleData.data[i].item}</td>` +
          `<td><button @click="editBtn(${i})">Edit</button><button @click="deleteBtn(${i})">Delete</button></td>` +
          `</tr>`;
      }
      this.display = this.display + this.display_item + `</tbody></table>`;

      console.log(this.titleData);
      console.log(this.numOfCate);
    },
  },
};
</script>


<style >
        header{
            display: none;
        }
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        
        .container {
            margin: 0 auto;
            width: 100%;
            height: 60vh;
            background-color: aqua;
            /* display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center; */
        }
        
        .title {
            width: 100%;
            height: 12vh;
            background-color: blue;
            display: flex;
            align-items: center;
        }
        
        .title span {
            margin: 0 16px;
            font-size: 24px;
            font-weight: 400;
        }
        
        .wrapper-info {
            width: 100%;
            height: 100%;
            display: flex;
        }
        
        .list-menu {
            width: 20%;
            height: 100%;
            background-color: blueviolet;
        }
        
        .box-menu {
            width: 100%;
            height: 20%;
            background-color: red;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid black;
        }
        
        .data {
            width: 80%;
            height: 100%;
            background-color: yellow;
        }
        
        .title-data {
            width: 100%;
            height: 20%;
            background-color: green;
            display: flex;
        }
        
        .category-txt {
            width: 80%;
            height: 100%;
            background-color: white;
            display: flex;
            align-items: center;
        }
        
        .category-txt h3 {
            margin: 0 8px;
        }
        
        .btn-add {
            width: 20%;
            height: 100%;
            background-color: rgb(255, 0, 0);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .btn-add button {
            width: 80%;
            height: 60%;
            border-radius: 50%;
            font-size: 16px;
            background-color: #ffff00;
        }
        
        .btn-add button:hover {
            background-color: rgb(255, 255, 0, 0.8);
        }
        
        #table {
            width: 100%;
            border-collapse: collapse;
        }
        
        #table td,
        #table th {
            border: 1px solid #ddd;
            padding: 8px;
        }
        
        #table tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        
        #table tr:hover {
            background-color: #ddd;
        }
        
        #table th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #04AA6D;
            color: white;
        }
   
</style>