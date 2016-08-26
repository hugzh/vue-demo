<script>
  export default {
    name: 'ImageList',
    vuex:{
      getters:{
        imageList: state => state.imageList
      }
    }
  }
</script>
<template>
  <div class="container-fluid">
    <ul>
      <li v-for="img in imageList">
        <img v-lazy="img">
        <span>图片{{$index}}</span>
      </li>
    </ul>
  </div>
</template>

<style>
  img {
    width: 100%;
    min-height: 10rem;
  }
  img[lazy=loading] {
    /*your style here*/
  }
  img[lazy=error] {
    /*your style here*/
  },
  img[lazy=loaded] {
    /*your style here*/
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }
  li {
    position: relative;
    width: 32.333333%;
    background: #fff;
    padding: .5rem;
    box-shadow: 0 0 1rem #ccc;
    margin: .5%;
    box-sizing: border-box;
    text-align: center;
  }
  /*
  or background-image
  */
 /*  .yourclass[lazy=loading] {
   your style here
 }
 .yourclass[lazy=error] {
   your style here
 },
 .yourclass[lazy=loaded] {
   your style here
 } */
</style>
