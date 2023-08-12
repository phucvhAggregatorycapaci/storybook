import { Story } from '@storybook/vue3';
import Pagination from '../../widget/components/Pagination/index.vue';
import { action } from '@storybook/addon-actions'

export default {
  title: 'common/Pagination',
  component: Pagination,
};

const Template:Story = (args:any) => ({
  components: { Pagination },
  methods: { 'click': action('click'),
    'update':(val:any)=>{
        console.log("stories",val)
        args.modelValue = val
    }
},
    setup() {
        return { args };
    },
    template: `<Pagination  v-model="modelvalue" v-bind="args" @click="click"/>`,
});

export const pagination = Template.bind({});
pagination.args = {
    current:1,
        total:500,
        perPage:10,
        enableChangePageSize:true,
        pageSizeOptions:[
            {
                    value: 50,
                    selected:true,
                    label: "50",
                },
                {
                    value: 100,
                    label: "100",
                },
                {
                    value:200,
                    label: "200",
                },
                {
                    value: 1000,
                    label: "1000",
                },
        ],
        options:[
                {
                    value: 50,
                    label: "50",
                },
                {
                    value: 100,
                    label: "100",
                },
                {
                    value:200,
                    label: "200",
                },
                {
                    value: 1000,
                    label: "1000",
                },
            ],

};

