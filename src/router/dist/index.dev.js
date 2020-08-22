"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _BilibiliIndex = _interopRequireDefault(require("@/pages/BilibiliIndex"));

var _BilibiliLogin = _interopRequireDefault(require("@/pages/BilibiliLogin"));

var _BilibiliSignup = _interopRequireDefault(require("@/pages/BilibiliSignup"));

var _VideoUpload = _interopRequireDefault(require("@/pages/user/VideoUpload"));

var _VideoPage = _interopRequireDefault(require("@/pages/VideoPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'BilibiliIndex',
  component: _BilibiliIndex["default"]
}, {
  path: '/login',
  name: 'BilibiliLogin',
  component: _BilibiliLogin["default"],
  meta: {
    title: '登錄'
  }
}, {
  path: '/signup',
  name: 'BilibiliSignup',
  component: _BilibiliSignup["default"],
  meta: {
    title: '註冊'
  }
}, {
  path: '/videoUpload',
  name: 'VideoUpload',
  component: _VideoUpload["default"],
  meta: {
    title: '影片上傳'
  }
}, {
  path: '/video/:aid?',
  name: 'VideoPage',
  component: _VideoPage["default"]
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  routes: routes
});
var _default = router;
exports["default"] = _default;