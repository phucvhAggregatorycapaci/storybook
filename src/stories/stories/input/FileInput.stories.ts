import { Story } from '@storybook/vue3';
import FileInput from '../../widget/components/Fileinput/index.vue';
import { action } from '@storybook/addon-actions'

export default {
  title: 'common/input/fileInput',
  component: FileInput,
};

const Template:Story = (args:any) => ({
  components: { FileInput },
  methods: { 'click': action('click'),
    'update':(val:any)=>{
        console.log("stories",val)
        args.modelValue = val
    },
    'input':(val:any)=>{
        console.log("stories",val)
    }
},
    setup() {
        return { args };
    },
    template: `<FileInput  v-model="modelvalue" v-bind="args" @click="click"/>`,
});

export const fileInput = Template.bind({});
fileInput.args = {
    
};

