export default {
    sideBarItem:[
        {
            isHeadr: true,
            title: "GMS",
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
            title: "Garage",
            icon: "heroicons-outline:home",
            isOpen: true,
            child: [
                {
                    childtitle: "Danh sách garage",
                    childlink: "home",
                },
                {
                    childtitle: "Danh sách garage layout",
                    childlink: "layout",
                },
                
            ],
        },
        
    ],
}