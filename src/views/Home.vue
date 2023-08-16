<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import ValedatorProps from '../components/ValedatorProps.vue'
import ScopedSlots from '../components/ScopedSlots.vue'
</script>


<template>
     <HelloWorld msg="Vite + Vue" />
  <div>
    <ValedatorProps title="Ahmed Is Here From Validator"/>
    <ValedatorProps title="Hosam Is Here From Validator"/>
    <ValedatorProps title="Ahmed Is Here From Validator 22"/>
  </div>
  <div>
    <ScopedSlots>
      <template v-slot:head="props">
        <h5>
          Head Template
        </h5>
        <p>
          {{ props.headData }}
        </p>
      </template>
      <template #body="{ bodyData }">
        <h5>
          {{ bodyData }}
        </h5>
      </template>
      <template v-slot:end>
        <h5>
          End Template
        </h5>
      </template>
    </ScopedSlots>
  </div>
</template>


<style lang="scss" scoped>

</style>