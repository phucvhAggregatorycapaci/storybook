import { createStore } from "vuex";
import {themeSettings} from './themeSettings'
export type RootState ={
  // Define your root state properties here
}

const store = createStore({
  modules:{
    themeSettings:themeSettings
  }
});



export default store