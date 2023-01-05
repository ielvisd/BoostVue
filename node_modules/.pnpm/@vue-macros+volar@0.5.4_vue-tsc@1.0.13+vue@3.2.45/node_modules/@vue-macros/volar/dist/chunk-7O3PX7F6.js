"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/common.ts
function getVueLibraryName(vueVersion) {
  return vueVersion < 2.7 ? "@vue/runtime-dom" : "vue";
}



exports.getVueLibraryName = getVueLibraryName;
