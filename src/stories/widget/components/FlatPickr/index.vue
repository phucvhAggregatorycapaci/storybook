<template>
    <div>
  <flat-pickr
  style="width:100%; height:100%"
  :placeholder="placeholder"
   :config="config" :disabled="disabled" :event="event" :modelValue="modelValue" />
  </div>
</template>

<script lang="ts">
export default {
    name:"fe-flatPickr",
    props:{
        placeholder:"" as string,
        config: {} as any,
        disabled: false as Boolean,
        event: [] as string[],
        modelValue: null,
    }
}
</script>

<style lang="scss">
.flatpickr-input{
    padding-left:13px;
}
</style>