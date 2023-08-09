import { Story } from '@storybook/vue3';
import RadioButton from '../../widget/forms/radio-button.vue';
import { action } from '@storybook/addon-actions'

export default {
  title: 'common/forms/radioButton',
  component: RadioButton,
};

const Template:Story = (args) => ({
  components: { RadioButton },
  methods: { 'click': action('click'),
    'update':(val:any)=>{
        args.modelValue = val
    }
},
    setup() {
        return { args };
    },
    template: `<RadioButton @update:modelValue="update" v-model="modelvalue" v-bind="args" @click="click"/>`,
});

export const radioButton = Template.bind({});
radioButton.args = {
    modelValue:"",
  options: [
        {
          value: "Orange",
          label: "Orange",
        },
        {
          value: "Apple",
          label: "Apple",
        },
        {
          value: "Banana",
          label: "Banana",
        },
      ],
      direction:"row"
};

export const radioButtonColumn = Template.bind({});
radioButtonColumn.args = {
    modelValue:"",
  options: [
        {
          value: "cam",
          label: "cam",
        },
        {
          value: "Apple",
          label: "Apple",
        },
        {
          value: "Banana",
          label: "Banana",
        },
      ],
      direction:"column"
};


export const radioButtonColumnDisabled = Template.bind({});
radioButtonColumnDisabled.args = {
    modelValue:"",
  options: [
        {
          value: "cam",
          label: "cam",
        },
        {
          value: "Apple",
          label: "Apple",
          disabled:true
        },
        {
          value: "Banana",
          label: "Banana",
        },
      ],
      direction:"column"
};


export const radioButtonColumnThemeColor = Template.bind({});
radioButtonColumnThemeColor.args = {
    modelValue:"",
  options: [
                {
                    value: "primary-500",
                    label: "primary",
                    activeClass: "ring-primary-500 border-primary-500",
                },
                {
                    value: "secondary-500",
                    label: "secondary",
                    activeClass: "ring-secondary-500 border-secondary-500",
                },
                {
                    value: "success-500",
                    label: "success",
                    activeClass: "ring-success-500 border-success-500",
                },
                {
                    value: "danger-500",
                    label: "danger",
                    activeClass: "ring-danger-500 border-danger-500",
                },
                {
                    value: "warning-500",
                    label: "warning",
                    activeClass: "ring-warning-500 border-warning-500",
                },
                {
                    value: "info-500",
                    label: "info",
                    activeClass: "ring-info-500 border-info-500",
                },
            ],
      direction:"column"
};


export const radioButtonColumnThemeColorModelValue = Template.bind({});
radioButtonColumnThemeColorModelValue.args = {
    modelValue:"primary-500",
  options: [
                {
                    value: "primary-500",
                    label: "primary",
                    activeClass: "ring-primary-500 border-primary-500",
                },
                {
                    value: "secondary-500",
                    label: "secondary",
                    activeClass: "ring-secondary-500 border-secondary-500",
                },
                {
                    value: "success-500",
                    label: "success",
                    activeClass: "ring-success-500 border-success-500",
                },
                {
                    value: "danger-500",
                    label: "danger",
                    activeClass: "ring-danger-500 border-danger-500",
                },
                {
                    value: "warning-500",
                    label: "warning",
                    activeClass: "ring-warning-500 border-warning-500",
                },
                {
                    value: "info-500",
                    label: "info",
                    activeClass: "ring-info-500 border-info-500",
                },
            ],
      direction:"column"
};
