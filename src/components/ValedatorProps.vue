<script setup>
    defineProps({
        title: {
            type: String,
            required: true,
            validator: val => {
                const isValid = val.includes('Ahmed')
                console.log(isValid)
                return isValid
            }
        }
    })
</script>


<template>
    <div>
        Start
        {{ title }}
        End
    </div>
</template>


<style lang="scss" scoped>

</style>