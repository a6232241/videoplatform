"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _storageApi = _interopRequireDefault(require("@/common/js/storageApi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import fileApi from '@/common/js/fileApi'
var userRequest = _axios["default"].create({
  withCredentials: true,
  baseURL: 'https://streamingplatserver.herokuapp.com',
  headers: {
    'content-type': 'multipart/form-data'
  }
});

var resError = function resError(err) {
  console.log(err.data);
};

var _default = {
  // 使用者API
  userSignup: function userSignup(data) {
    return regeneratorRuntime.async(function userSignup$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(userRequest.post('/signup', data).then(function (res) {
              var resData = res.data;
              alert(resData.message);

              if (resData.status) {
                window.location.pathname = '/';
              }
            })["catch"](resError));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  userLogin: function userLogin(data) {
    return regeneratorRuntime.async(function userLogin$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(userRequest.post('/login', data).then(function (res) {
              var resData = res.data;
              alert(resData.message);

              if (resData.status) {
                _storageApi["default"].setStorage('guid', resData.guid);

                window.location.pathname = '/';
              }
            })["catch"](resError));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  userLogout: function userLogout() {
    return regeneratorRuntime.async(function userLogout$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(userRequest.get('/logout').then(function (res) {
              _storageApi["default"].removeStorage('guid');

              alert(res.data);
              window.location.pathname = '/';
            })["catch"](resError));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  userIncsession: function userIncsession() {
    var formData, resData;
    return regeneratorRuntime.async(function userIncsession$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            formData = new FormData();
            formData.append('guid', _storageApi["default"].getStorage('guid'));
            _context4.next = 4;
            return regeneratorRuntime.awrap(userRequest.post('/incsession', formData).then(function (res) {
              return res.data;
            })["catch"](resError));

          case 4:
            resData = _context4.sent;
            return _context4.abrupt("return", resData);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    });
  },
  // 頻道API
  uploadVideo: function uploadVideo(files) {
    return regeneratorRuntime.async(function uploadVideo$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return regeneratorRuntime.awrap(userRequest.post('/uploadVideo', files).then(function _callee(res) {
              return regeneratorRuntime.async(function _callee$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log(res.data);

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              });
            })["catch"](resError));

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    });
  },
  // 主頁API
  getThumbnails: function getThumbnails() {
    var resData;
    return regeneratorRuntime.async(function getThumbnails$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return regeneratorRuntime.awrap(userRequest.get('/videoList').then(function (res) {
              console.log("\u53D6\u5F97\u7E2E\u5716 ".concat(res.data.message));
              return res.data.data;
            })["catch"](resError));

          case 2:
            resData = _context7.sent;
            return _context7.abrupt("return", resData);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    });
  },
  // 影片API
  getVideo: function getVideo(data) {
    var resData;
    return regeneratorRuntime.async(function getVideo$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return regeneratorRuntime.awrap(userRequest.post('/video', data).then(function (res) {
              console.log("\u53D6\u5F97\u5F71\u7247 ".concat(res.data.message));
              return res.data.data[0];
            })["catch"](resError));

          case 2:
            resData = _context8.sent;
            return _context8.abrupt("return", resData);

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    });
  }
};
exports["default"] = _default;