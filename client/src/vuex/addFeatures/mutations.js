/**
 * Created by liqiusheng on 05/07/2017.
 */

import * as types from '../mutations'

export default {
  [types.ADD_FEATURES] (state, addedFeatures) {
    state.addedFeatures = addedFeatures
  }
}
