import Sidebar from '../../widget/sideBar/index.vue'
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/vue3';


export default {
    title: 'common/sidebar',
    component: Sidebar,
};
const Template:Story = (args:any) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Sidebar },
    methods: { 'click': action('click') },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // Then, the spread values can be accessed directly in the template
    template: `<Sidebar v-bind="args" @click="click"/>`,

});

export const SidebarCommon = Template.bind({});
SidebarCommon.args = {
    items: [
        {
            isHeadr: true,
            title: "menuuuuu",
        },

        {
            title: "Dashboard",
            icon: "heroicons-outline:home",
            isOpen: true,
            child: [
                {
                    childtitle: "Analytics Dashboard",
                    childlink: "home",
                },
                {
                    childtitle: "Ecommerce Dashboard",
                    childlink: "ecommerce",
                },
                {
                    childtitle: "Project  Dashbaord",
                    childlink: "project",
                },
                {
                    childtitle: " CRM Dashbaord",
                    childlink: "crm",
                },
                {
                    childtitle: "Banking Dashboard",
                    childlink: "banking",
                },
            ],
        },
        {
            title: "changelog",
            icon: "heroicons:arrow-trending-up",
            link: "changelog",
            badge: "2.0.1",
        },
        {
            isHeadr: true,
            title: "apps",
        },

        {
            title: "Chat",
            icon: "heroicons-outline:chat",
            link: "chat",
        },

        {
            title: "Email",
            icon: "heroicons-outline:mail",
            link: "email",
        },

        {
            title: "Kanban",
            icon: "heroicons-outline:view-boards",
            link: "kanban",
        },
        {
            title: "Calender",
            icon: "heroicons-outline:calendar",
            link: "calender",
        },

        {
            title: "Todo",
            icon: "heroicons-outline:clipboard-check",
            link: "todo",
        },

        {
            title: "Projects",
            icon: "heroicons-outline:document",
            link: "#",
            child: [
                {
                    childtitle: "Projects",
                    childlink: "projects",
                },
                {
                    childtitle: "Project Details",
                    childlink: "project-details",
                },
            ],
        },
        {
            isHeadr: true,
            title: "Pages",
        },
        {
            title: "Authentication",
            icon: "heroicons-outline:lock-closed",
            link: "#",
            child: [
                {
                    childtitle: "Signin One",
                    childlink: "/",
                },
                {
                    childtitle: "Signin Two",
                    childlink: "/login2",
                },
                {
                    childtitle: "Signin Three",
                    childlink: "/login3",
                },
                {
                    childtitle: "Signup One",
                    childlink: "/register",
                },
                {
                    childtitle: "Signup Two",
                    childlink: "/register2",
                },
                {
                    childtitle: "Signup Three",
                    childlink: "/register3",
                },
                {
                    childtitle: "Forget Password One",
                    childlink: "/forgot-password",
                },
                {
                    childtitle: "Forget Password Two",
                    childlink: "/forgot-password2",
                },
                {
                    childtitle: "Forget Password Three",
                    childlink: "/forgot-password3",
                },
                {
                    childtitle: "Lock Screen One",
                    childlink: "/lock-screen",
                },
                {
                    childtitle: "Lock Screen Two",
                    childlink: "/lock-screen2",
                },
                {
                    childtitle: "Lock Screen Three",
                    childlink: "/lock-screen3",
                },
            ],
        },
        {
            title: "Utility",
            icon: "heroicons-outline:view-boards",
            link: "#",
            child: [
                {
                    childtitle: "Invoice",
                    childlink: "invoice",
                },
                {
                    childtitle: "Pricing",
                    childlink: "pricing",
                },
                {
                    childtitle: "Testimonial",
                    childlink: "testimonial",
                },
                {
                    childtitle: "FAQ",
                    childlink: "faq",
                },
                {
                    childtitle: "Blog",
                    childlink: "blog",
                },

                {
                    childtitle: "Blank Page",
                    childlink: "blank-page",
                },
                {
                    childtitle: "Profile",
                    childlink: "profile",
                },
                {
                    childtitle: "Settings",
                    childlink: "settings",
                },
                {
                    childtitle: "404 page",
                    childlink: "/404",
                },
                {
                    childtitle: "Coming Soon",
                    childlink: "/coming-soon",
                },
                {
                    childtitle: "Under Maintanance page",
                    childlink: "/under-construction",
                },
            ],
        },

        {
            isHeadr: true,
            title: "Elements",
        },
        {
            title: "Widgets",
            icon: "heroicons-outline:view-grid-add",
            link: "#",
            child: [
                {
                    childtitle: "Basic",
                    childlink: "basic",
                },
                {
                    childtitle: "Statistic",
                    childlink: "statistic",
                },
            ],
        },
        {
            title: "Components",
            icon: "heroicons-outline:collection",
            link: "#",
            child: [
                {
                    childtitle: "Typography",
                    childlink: "typography",
                },
                {
                    childtitle: "Colors",
                    childlink: "colors",
                },
                {
                    childtitle: "Alert",
                    childlink: "alert",
                },
                {
                    childtitle: "Button",
                    childlink: "button",
                },
                {
                    childtitle: "Card",
                    childlink: "/app/card",
                },
                {
                    childtitle: "Carousel",
                    childlink: "carousel",
                },
                {
                    childtitle: "Dropdown",
                    childlink: "dropdown",
                },
                {
                    childtitle: "Image",
                    childlink: "image",
                },
                {
                    childtitle: "Modal",
                    childlink: "modal",
                },
                {
                    childtitle: "Progress bar",
                    childlink: "progress-bar",
                },
                {
                    childtitle: "Placeholder",
                    childlink: "placeholder",
                },
                {
                    childtitle: "Tab & Accordion",
                    childlink: "tab-accordion",
                },
                {
                    childtitle: "Badge",
                    childlink: "badges",
                },
                {
                    childtitle: "Pagination",
                    childlink: "Pagination",
                },
                {
                    childtitle: "Video",
                    childlink: "video",
                },
                {
                    childtitle: "Tooltip & Popover",
                    childlink: "tooltip-popover",
                },
            ],
        },
        {
            title: "Forms",
            icon: "heroicons-outline:clipboard-list",
            link: "#",
            child: [
                {
                    childtitle: "Input",
                    childlink: "input",
                },
                {
                    childtitle: "Input group",
                    childlink: "input-group",
                },
                {
                    childtitle: "Input layout",
                    childlink: "input-layout",
                },
                {
                    childtitle: "Form validation",
                    childlink: "form-validation",
                },
                {
                    childtitle: "Wizard",
                    childlink: "form-wizard",
                },
                {
                    childtitle: "Input mask",
                    childlink: "input-mask",
                },
                {
                    childtitle: "File input",
                    childlink: "file-input",
                },
                {
                    childtitle: "Form repeater",
                    childlink: "form-repeater",
                },
                {
                    childtitle: "Textarea",
                    childlink: "textarea",
                },
                {
                    childtitle: "Checkbox",
                    childlink: "checkbox",
                },
                {
                    childtitle: "Radio button",
                    childlink: "radio-button",
                },
                {
                    childtitle: "Switch",
                    childlink: "switch",
                },
                {
                    childtitle: "Select & Vue select",
                    childlink: "select",
                },
                {
                    childtitle: "Date time picker",
                    childlink: "date-time-picker",
                },
            ],
        },
        {
            title: "Tables",
            icon: "heroicons-outline:table",
            link: "#",
            child: [
                {
                    childtitle: "Basic Table",
                    childlink: "table-basic",
                },
                {
                    childtitle: "Advanced table",
                    childlink: "table-advanced",
                },
            ],
        },
        {
            title: "Chart",
            icon: "heroicons-outline:chart-bar",
            link: "#",
            child: [
                {
                    childtitle: "Apex chart",
                    childlink: "appex-chart",
                },
                {
                    childtitle: "Chart js",
                    childlink: "chartjs",
                },
            ],
        },
        {
            title: "Map",
            icon: "heroicons-outline:map",
            link: "map",
        },

        {
            title: "Icons",
            icon: "heroicons-outline:emoji-happy",
            link: "icons",
        },
    ],
}

