<template>
  <div class = "anime">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      name: 'Your Name and Weathering with You',
      message: 'These are the first two animes that I have watched!'
    }
  }
};
</script>
 
<style>
.anime{
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightblue;
  }</style>