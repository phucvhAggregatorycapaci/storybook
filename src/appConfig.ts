export default {
    sideBarItem:[
  {
    isHeadr: true,
    title: "menu",
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
        childtitle: "Tạo mới garage",
        childlink: "create",
      },
      
    ],
  },
  
],
}