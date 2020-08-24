"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.url = void 0;
var host = 'https://streamingplatserver.herokuapp.com/';
var url = {
  getImg: host + 'image/dynamic/',
  getPreImg: host + 'image/preView/',
  banner: host + 'banner',
  header: host + 'header',
  defaultWord: host + 'defaultWord',
  promote: host + 'promote',
  promoteAd: host + 'promote/ad',
  live: host + 'live',
  recommend: host + 'recommend',
  allData: host + 'allData',
  menuData: host + 'menuData',
  zoneRank: host + 'baseRank?get=rank',
  rankDay: host + 'topRank?time=1',
  rankThree: host + 'topRank?time=3',
  rankWeek: host + 'topRank?time=7',
  newList: host + 'newList?content=',
  comment: host + 'comment',
  getPreView: host + 'getPreView'
};
exports.url = url;