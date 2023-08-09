import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import type { ThemeSettings } from './store/themeSettings'

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    themeSettings:ThemeSettings
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}