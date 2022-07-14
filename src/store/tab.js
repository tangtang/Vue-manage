export default {
  state: {
    isCollapse: false,
    //初始数据是点击菜单路由的数组，后面拿到数组就可以渲染面包屑
    tabList: [
      {
        path: "/home",
        name: "home",
        label: "首页",
        icon: "home",
      },
    ],
    //高亮显示
    currentMenu: null,
  },
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
    selectMenu(state, val) {
      if (val.name !== "home") {
        state.currentMenu = val;
      const result =  state.tabList.findIndex(item => item.name === val.name)
      if(result === -1){
        state.tabList.push(val)
      }else{
        state.currentMenu =null
      }
      }
    },
  },
};
