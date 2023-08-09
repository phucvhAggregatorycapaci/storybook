<template>
    <div>
        <div
            class="grid grid-cols-1 gap-5"
            :class="`radio-direction-${direction}`"
            :style="{
                width: width,
                height: height,
            }"
            style="display: flex"
        >
            <Radio
                v-for="(item, i) in options"
                :key="i"
                :label="item.label"
                :activeClass="item.activeClass"
                class="mb-5"
                v-model="lazyValue"
                :checked="item.checked"
                :disabled="item.disabled"
                :value="item.value"
            />
        </div>
    </div>
</template>
<script lang="ts">
import Radio from "../components/Radio/index.vue";
import { computed, defineComponent } from "vue";
export type Radio = {
    label: string;
    checked: boolean;
    disabled: boolean;
    name: string;
    activeClass: string;
    value: any;
    modelValue: any;
};

export default defineComponent({
    props: {
        width: {
            default: "auto" as string,
        },
        height: {
            default: "auto" as string,
        },
        direction: {
            default: "column" as string,
        },

        options: {
            default: [] as Radio[],
        },
        modelValue: {
            default: "" as string,
        },
    },
    components: {
        Radio,
    },
    emits: {
        "update:modelValue": (newValue: string) => ({
            modelValue: newValue,
        }),
        "update:model-value": (newValue: string) => ({
            modelValue: newValue,
        }),
    },
    methods: {
        updateModelValue(value: any) {
            this.$emit("update:modelValue", value);
        },
    },
    computed: {
        lazyValue: {
            get: function (): any {
                return this.modelValue;
            },
            set: function (value: any) {
                this.$emit("update:modelValue", value);
            },
        },
    },
    data() {
        return {
            value: "",
        };
    },
});
</script>
<style lang="scss" scoped>
.radio-direction-column {
    flex-direction: column;
}
.radio-direction-row {
    flex-direction: row;
}
</style>
