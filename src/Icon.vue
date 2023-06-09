<template>
    <i :class="icon" class="untlt-ic"></i>
</template>
<script>
import "./icons.css";
export default {
  name: 'UntitleUIIcon'
}

const props = defineProps({
    icon:String
})
</script>
<style scoped>
@import './icons.css';
</style>