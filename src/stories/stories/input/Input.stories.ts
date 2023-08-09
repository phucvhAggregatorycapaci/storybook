import { Story } from '@storybook/vue3';
import Input from '../../widget/components/InputGroup/index.vue';
import { action } from '@storybook/addon-actions'

export default {
  title: 'common/input/input',
  component: Input,
};

const Template:Story = (args:any) => ({
  components: { Input },
  methods: { 'click': action('click'),
    'update':(val:any)=>{
        console.log("stories",val)
        args.modelValue = val
    }
},
    setup() {
        return { args };
    },
    template: `<Input  v-model="modelvalue" v-bind="args" @click="click"/>`,
});

export const input = Template.bind({});
input.args = {
    label:"Credit Card",
    modelValue:"null",
    options:{
      creditCard: true,
      delimiter: "-",
        },
    placeholder:"0000 0000 0000 0000",
    isMask:true
};


export const inputPhoneNumber = Template.bind({});
inputPhoneNumber.args = {
    label:"Phone Number",
          prepend:"MY (+6)",
          placeholder:"Phone Number",
          name:"phoneNumber",
          modelValue:null,
          options:{
            phone:true,
            phoneRegionCode: "US"
          },
          isMask:true
};


export const inputDate = Template.bind({});
inputDate.args = {
    label:"Date",
          name:"date",
          modelValue:null,
          options:{
            date: true,
          delimiter: "-",
          datePattern: ["Y", "m", "d"],
          },
          placeholder:"YYYY-MM-DD",
          isMask:true,
};


export const inputTime = Template.bind({});
inputTime.args = {
    label:"Time",
          name:"time",
          modelValue:"",
          options:{time: true,
          timePattern: ["h", "m", "s"],},
          placeholder:"HH:MM:SS",
          isMask:true
};

export const inputNumeralFormatting = Template.bind({});
inputNumeralFormatting.args = {
    label:"Numeral Formatting",
          name:"nu",
          modelValue:"",
          options:{
            numeral: true,
            numeralThousandsGroupStyle: "thousand",
          },
          placeholder:"10,000",
          isMask:true
};


export const inputBlock = Template.bind({});
inputBlock.args = {
    label:"Blocks",
          name:"block",
          modelValue:"",
          options:{
            blocks: [4, 3, 3],
          uppercase: true,
          },
          placeholder:"Block[1,4,7]",
          isMask:true
};

export const inputDelimiters = Template.bind({});
inputDelimiters.args = {
    label:"Delimiters",
          name:"delimiters",
          modelValue:"",
          options:{
            delimiter: "·",
          blocks: [3, 3, 3],
          uppercase: true,
          },
          placeholder:"Delimiter: '.'",
          isMask:true
};


export const inputCustomDelimiters = Template.bind({});
inputDelimiters.args = {
    label:"Custom Delimiters",
          name:"customDelimiter",
          modelValue:"",
          options:{
            delimiters: [".", ".", "-"],
          blocks: [3, 3, 3, 2],
          uppercase: true,
          },
          placeholder:"Delimiter: ['.', '.', '-']",
          isMask:true
};

export const inputPrefix = Template.bind({});
inputPrefix.args = {
    label:"prefix",
          name:"prefix",
          modelValue:"",
          options:{
            prefix: "+88",
          blocks: [3, 3, 3, 4],
          uppercase: true,
          },
          placeholder:"+88",
          isMask:true
};