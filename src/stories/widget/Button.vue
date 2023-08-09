<template>
    <button class="button-red-color" type="button" :class="classes" @click="onClick" :style="style">
        {{ label }}
    </button>
</template>

<script>
import './button.css';
import { reactive, computed } from 'vue';

export default {
    name: 'my-button',

    props: {
        label: {
            type: String,
            required: true
        },
        primary: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            validator: function (value) {
                return ['small', 'medium', 'large'].indexOf(value) !== -1;
            }
        },
        backgroundColor: {
            type: String
        }
    },

    emits: ['click'],

    setup(props, { emit }) {
        props = reactive(props);
        return {
            classes: computed(() => ({
                'storybook-button': true,
                'storybook-button--primary': props.primary,
                'storybook-button--secondary': !props.primary,
                [`storybook-button--${props.size || 'medium'}`]: true
            })),
            style: computed(() => ({
                backgroundColor: props.backgroundColor
            })),
            onClick() {
                emit('click');
            }
        };
    }
};
</script>
<style lang="scss" scoped>
.button-red-color {
    @apply relative;
    .menulabel {
        @apply text-slate-800 dark:text-slate-300 text-xs font-semibold uppercase mb-4 mt-4;
    }
    > .menu-link {
        @apply flex text-slate-600 font-medium dark:text-slate-300 text-sm capitalize px-[10px] py-3 rounded-[4px] cursor-pointer;
    }
    .menu-icon {
        @apply icon-box inline-flex items-center text-slate-600 dark:text-slate-300 text-lg ltr:mr-3 rtl:ml-3;
    }
}
.icon-box {
    color: red !important;
    @apply text-white dark:text-slate-300;
}
</style>
