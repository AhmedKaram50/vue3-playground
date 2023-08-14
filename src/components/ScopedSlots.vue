<script setup>
import { ref } from 'vue';

const headData = ref("Head Data Blaaa !")
const bodyData = ref("Body Data Blaaa !")
</script>

<template>
  <div class="scoped-slots">
    <h1>Scoped Slots Are Here</h1>
    <div class="head-class">
        <slot name="head" :headData="headData"></slot>
    </div>
    <div class="body-class">
        <slot name="body" :bodyData="bodyData"></slot>
    </div>
    <div class="end-class">
        <slot name="end"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scoped-slots{
    background-color: aqua;
    padding: 15px;
    .head-class{
        background-color: #111;
    }
    .body-class{
        background-color: #fff;
    }
    .end-class{
        background-color: #0f0;
    }
}
</style>
