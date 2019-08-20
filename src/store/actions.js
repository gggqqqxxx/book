import * as types from './mutations-types'
import { asyncRouterMap, constantRouterMap,last } from '@/router'
export default {
  toggleBar({commit}) {
    commit(types.TOGGLE_BAR)
  },
  showListPanel({commit}) {
    commit(types.SHOW_LIST_PANEL)
  },
  showFontPanel({commit}) {
    commit(types.SHOW_FONT_PANEL)
  },
  fzSizeAdd({commit}) {
    commit(types.FZ_SIZE_ADD)
  },
  fzSizeSub({commit}) {
    commit(types.FZ_SIZE_SUB)
  },
  switchNight({commit}) {
    commit(types.SWITCH_NIGHT)
  },
  prevChapter({commit}) {
    commit(types.PREV_CHAPTER)
  },
  nextChapter({commit,maxChapter}) {
    commit(types.NEXT_CHAPTER, maxChapter)
  },
  chooseBook({commit}, id) {
    commit(types.CHOOSE_BOOK, id)
  },
  showBookDetail({commit}, obj) {
    commit(types.SHOW_BOOK_DETAIL, obj)
  },
  curChapter({commit}, num) {
    commit(types.CUR_CHAPTER, num)
  },

  GenerateRoutes({ commit }, data) {
    return new Promise(res => {
      let accessedRouters=[];
      if (data.roles.indexOf('admin') >= 0) {
        accessedRouters = asyncRouterMap
      } else {
        accessedRouters = last
      }
      commit('SET_ROUTERS', accessedRouters)
      res()
    })
  },
}

