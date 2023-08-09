import { Story } from '@storybook/vue3';
import Dropdown from '../../widget/views/components/dropdown/index.vue';
import { action } from '@storybook/addon-actions'

export default {
  title: 'common/Dropdown/dropdown',
  component: Dropdown,
};

const Template:Story = (args:any) => ({
  components: { Dropdown },
  methods: { 'click': action('click'),
    'update':(val:any)=>{
        console.log("stories",val)
        args.modelValue = val
    }
},
    setup() {
        return { args };
    },
    template: `<Dropdown  v-model="modelvalue" v-bind="args" @click="click"/>`,
});

export const dropdown = Template.bind({});
dropdown.args = {
    // label:"Credit Card",
    // modelValue:"null",
    // options:{
    //   creditCard: true,
    //   delimiter: "-",
    //     },
    // placeholder:"0000 0000 0000 0000",
    // isMask:true
};


