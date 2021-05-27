module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Chat.js":
/*!****************************!*\
  !*** ./components/Chat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pusher-js */ "pusher-js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ChatMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChatMessage */ "./components/ChatMessage.js");

var _jsxFileName = "/mnt/c/Users/Chris Anderson/codingprojs/sentimentChatApp/components/Chat.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const SAD_EMOJI = [55357, 56864];
const HAPPY_EMOJI = [55357, 56832];
const NEUTRAL_EMOJI = [55357, 56848];

class Chat extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      chats: []
    });

    _defineProperty(this, "handleKeyUp", evt => {
      const value = evt.target.value;

      if (evt.keyCode === 13 && !evt.shiftKey) {
        const {
          activeUser: user
        } = this.props;
        const chat = {
          user,
          message: value,
          timestamp: +new Date()
        };
        evt.target.value = '';
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/message', chat);
      }
    });
  }

  componentDidMount() {
    this.pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_3___default.a("1da6a283068a8517d2ef", {
      cluster: "us2",
      encrypted: true
    });
    this.channel = this.pusher.subscribe('chat-room');
    this.channel.bind('new-message', ({
      chat = null
    }) => {
      const {
        chats
      } = this.state;
      chat && chats.push(chat);
      this.setState({
        chats
      });
    });
    this.pusher.connection.bind('connected', () => {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/messages').then(response => {
        const chats = response.data.messages;
        this.setState({
          chats
        });
      });
    });
  }

  componentWillUnmount() {
    this.pusher.disconnect();
  }

  render() {
    return this.props.activeUser && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "border-bottom border-gray w-100 d-flex align-items-center bg-white",
        style: {
          height: 90
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "text-dark mb-0 mx-4 px-2",
          children: this.props.activeUser
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "px-4 pb-4 w-100 d-flex flex-row flex-wrap align-items-start align-content-start position-relative",
        style: {
          height: 'calc(100% - 180px)',
          overflowY: 'scroll'
        },
        children: this.state.chats.map((chat, index) => {
          const previous = Math.max(0, index - 1);
          const previousChat = this.state.chats[previous];
          const position = chat.user === this.props.activeUser ? "right" : "left";
          const isFirst = previous === index;
          const inSequence = chat.user === previousChat.user;
          const hasDelay = Math.ceil((chat.timestamp - previousChat.timestamp) / (1000 * 60)) > 1;
          const mood = chat.sentiment > 0 ? HAPPY_EMOJI : chat.sentiment === 0 ? NEUTRAL_EMOJI : SAD_EMOJI;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
            children: [(isFirst || !inSequence || hasDelay) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: `d-block w-100 font-weight-bold text-dark mt-4 pb-1 px-1 text-${position}`,
              style: {
                fontSize: '0.9rem'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "d-block",
                style: {
                  fontSize: '1.6rem'
                },
                children: String.fromCodePoint(...mood)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: chat.user || 'Anonymous'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ChatMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
              message: chat.message,
              position: position
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 11
            }, this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 9
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "border-top border-gray w-100 px-4 d-flex align-items-center bg-light",
        style: {
          minHeight: 90
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          className: "form-control px-3 py-2",
          onKeyUp: this.handleKeyUp,
          placeholder: "Enter a chat message",
          style: {
            resize: 'none'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 38
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ "./components/ChatMessage.js":
/*!***********************************!*\
  !*** ./components/ChatMessage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/mnt/c/Users/Chris Anderson/codingprojs/sentimentChatApp/components/ChatMessage.js";


class ChatMessage extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    const {
      position = 'left',
      message
    } = this.props;
    const isRight = position.toLowerCase() === 'right';
    const align = isRight ? 'text-right' : 'text-left';
    const justify = isRight ? 'justify-content-end' : 'justify-content-start';
    const messageBoxStyles = {
      maxWidth: '70%',
      flexGrow: 0
    };
    const messageStyles = {
      fontWeight: 500,
      lineHeight: 1.4,
      whiteSpace: 'pre-wrap'
    };
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `w-100 my-1 d-flex ${justify}`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "bg-light rounded border border-gray p-2",
        style: messageBoxStyles,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: `d-block text-secondary ${align}`,
          style: messageStyles,
          children: message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ChatMessage);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/mnt/c/Users/Chris Anderson/codingprojs/sentimentChatApp/components/Layout.js";



const Layout = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      charSet: "utf-8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
      integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
      crossOrigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: props.pageTitle || 'Realtime Chat'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined), props.children]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Chat */ "./components/Chat.js");

var _jsxFileName = "/mnt/c/Users/Chris Anderson/codingprojs/sentimentChatApp/pages/index.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class IndexPage extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      user: null
    });

    _defineProperty(this, "handleKeyUp", evt => {
      if (evt.keyCode === 13) {
        const user = evt.target.value;
        this.setState({
          user
        });
      }
    });
  }

  render() {
    const {
      user
    } = this.state;
    const nameInputStyles = {
      background: 'transparent',
      color: '#999',
      border: 0,
      borderBottom: '1px solid #666',
      borderRadius: 0,
      fontSize: '3rem',
      fontWeight: 500,
      boxShadow: 'none !important'
    };
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      pageTitle: "Realtime Chat",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: "container-fluid position-absolute h-100 bg-dark",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row position-absolute w-100 h-100",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            className: "col-md-8 d-flex flex-row flex-wrap align-items-center align-content-center px-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "px-5 mx-5",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "d-block w-100 h1 text-light",
                style: {
                  marginTop: -50
                },
                children: user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    style: {
                      color: '#999'
                    },
                    children: "Hello!"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 27
                  }, this), " ", user]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 26
                }, this) : `What is your name?`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 17
              }, this), !user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                className: "form-control mt-3 px-3 py-2",
                onKeyUp: this.handleKeyUp,
                autoComplete: "off",
                style: nameInputStyles
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 28
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            className: "col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0",
            children: user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Chat__WEBPACK_IMPORTED_MODULE_3__["default"], {
              activeUser: user
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 27
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IndexPage, {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 70,
  columnNumber: 3
}, undefined));

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "pusher-js":
/*!****************************!*\
  !*** external "pusher-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pusher-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhdE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwdXNoZXItanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlNBRF9FTU9KSSIsIkhBUFBZX0VNT0pJIiwiTkVVVFJBTF9FTU9KSSIsIkNoYXQiLCJDb21wb25lbnQiLCJjaGF0cyIsImV2dCIsInZhbHVlIiwidGFyZ2V0Iiwia2V5Q29kZSIsInNoaWZ0S2V5IiwiYWN0aXZlVXNlciIsInVzZXIiLCJwcm9wcyIsImNoYXQiLCJtZXNzYWdlIiwidGltZXN0YW1wIiwiRGF0ZSIsImF4aW9zIiwicG9zdCIsImNvbXBvbmVudERpZE1vdW50IiwicHVzaGVyIiwiUHVzaGVyIiwicHJvY2VzcyIsImNsdXN0ZXIiLCJlbmNyeXB0ZWQiLCJjaGFubmVsIiwic3Vic2NyaWJlIiwiYmluZCIsInN0YXRlIiwicHVzaCIsInNldFN0YXRlIiwiY29ubmVjdGlvbiIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJtZXNzYWdlcyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZGlzY29ubmVjdCIsInJlbmRlciIsImhlaWdodCIsIm92ZXJmbG93WSIsIm1hcCIsImluZGV4IiwicHJldmlvdXMiLCJNYXRoIiwibWF4IiwicHJldmlvdXNDaGF0IiwicG9zaXRpb24iLCJpc0ZpcnN0IiwiaW5TZXF1ZW5jZSIsImhhc0RlbGF5IiwiY2VpbCIsIm1vb2QiLCJzZW50aW1lbnQiLCJmb250U2l6ZSIsIlN0cmluZyIsImZyb21Db2RlUG9pbnQiLCJtaW5IZWlnaHQiLCJoYW5kbGVLZXlVcCIsInJlc2l6ZSIsIkNoYXRNZXNzYWdlIiwiaXNSaWdodCIsInRvTG93ZXJDYXNlIiwiYWxpZ24iLCJqdXN0aWZ5IiwibWVzc2FnZUJveFN0eWxlcyIsIm1heFdpZHRoIiwiZmxleEdyb3ciLCJtZXNzYWdlU3R5bGVzIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJ3aGl0ZVNwYWNlIiwiTGF5b3V0IiwicGFnZVRpdGxlIiwiY2hpbGRyZW4iLCJJbmRleFBhZ2UiLCJuYW1lSW5wdXRTdHlsZXMiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXIiLCJib3JkZXJCb3R0b20iLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBRUE7QUFFQSxNQUFNQSxTQUFTLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUFsQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxDQUFDLEtBQUQsRUFBUSxLQUFSLENBQXBCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FBdEI7O0FBR0EsTUFBTUMsSUFBTixTQUFtQkMsK0NBQW5CLENBQTZCO0FBQUE7QUFBQTs7QUFBQSxtQ0FFbkI7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FGbUI7O0FBQUEseUNBaUNiQyxHQUFHLElBQUk7QUFDbkIsWUFBTUMsS0FBSyxHQUFHRCxHQUFHLENBQUNFLE1BQUosQ0FBV0QsS0FBekI7O0FBRUEsVUFBSUQsR0FBRyxDQUFDRyxPQUFKLEtBQWdCLEVBQWhCLElBQXNCLENBQUNILEdBQUcsQ0FBQ0ksUUFBL0IsRUFBeUM7QUFDdkMsY0FBTTtBQUFFQyxvQkFBVSxFQUFFQztBQUFkLFlBQXVCLEtBQUtDLEtBQWxDO0FBQ0EsY0FBTUMsSUFBSSxHQUFHO0FBQUVGLGNBQUY7QUFBUUcsaUJBQU8sRUFBRVIsS0FBakI7QUFBd0JTLG1CQUFTLEVBQUUsQ0FBQyxJQUFJQyxJQUFKO0FBQXBDLFNBQWI7QUFFQVgsV0FBRyxDQUFDRSxNQUFKLENBQVdELEtBQVgsR0FBbUIsRUFBbkI7QUFDQVcsb0RBQUssQ0FBQ0MsSUFBTixDQUFXLFVBQVgsRUFBdUJMLElBQXZCO0FBQ0Q7QUFDRixLQTNDMEI7QUFBQTs7QUFJM0JNLG1CQUFpQixHQUFHO0FBRWxCLFNBQUtDLE1BQUwsR0FBYyxJQUFJQyxnREFBSixDQUFXQyxzQkFBWCxFQUF1QztBQUNuREMsYUFBTyxFQUFFRCxLQUQwQztBQUVuREUsZUFBUyxFQUFFO0FBRndDLEtBQXZDLENBQWQ7QUFLQSxTQUFLQyxPQUFMLEdBQWUsS0FBS0wsTUFBTCxDQUFZTSxTQUFaLENBQXNCLFdBQXRCLENBQWY7QUFFQSxTQUFLRCxPQUFMLENBQWFFLElBQWIsQ0FBa0IsYUFBbEIsRUFBaUMsQ0FBQztBQUFFZCxVQUFJLEdBQUc7QUFBVCxLQUFELEtBQXFCO0FBQ3BELFlBQU07QUFBRVQ7QUFBRixVQUFZLEtBQUt3QixLQUF2QjtBQUNBZixVQUFJLElBQUlULEtBQUssQ0FBQ3lCLElBQU4sQ0FBV2hCLElBQVgsQ0FBUjtBQUNBLFdBQUtpQixRQUFMLENBQWM7QUFBRTFCO0FBQUYsT0FBZDtBQUNELEtBSkQ7QUFNQSxTQUFLZ0IsTUFBTCxDQUFZVyxVQUFaLENBQXVCSixJQUF2QixDQUE0QixXQUE1QixFQUF5QyxNQUFNO0FBQzdDVixrREFBSyxDQUFDQyxJQUFOLENBQVcsV0FBWCxFQUNHYyxJQURILENBQ1FDLFFBQVEsSUFBSTtBQUNoQixjQUFNN0IsS0FBSyxHQUFHNkIsUUFBUSxDQUFDQyxJQUFULENBQWNDLFFBQTVCO0FBQ0EsYUFBS0wsUUFBTCxDQUFjO0FBQUUxQjtBQUFGLFNBQWQ7QUFDRCxPQUpIO0FBS0QsS0FORDtBQVFEOztBQUVEZ0Msc0JBQW9CLEdBQUc7QUFDckIsU0FBS2hCLE1BQUwsQ0FBWWlCLFVBQVo7QUFDRDs7QUFjREMsUUFBTSxHQUFHO0FBQ1AsV0FBUSxLQUFLMUIsS0FBTCxDQUFXRixVQUFYLGlCQUF5QixxRUFBQyw4Q0FBRDtBQUFBLDhCQUUvQjtBQUFLLGlCQUFTLEVBQUMsb0VBQWY7QUFBb0YsYUFBSyxFQUFFO0FBQUU2QixnQkFBTSxFQUFFO0FBQVYsU0FBM0Y7QUFBQSwrQkFDRTtBQUFJLG1CQUFTLEVBQUMsMEJBQWQ7QUFBQSxvQkFBMEMsS0FBSzNCLEtBQUwsQ0FBV0Y7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGK0IsZUFNL0I7QUFBSyxpQkFBUyxFQUFDLG1HQUFmO0FBQW1ILGFBQUssRUFBRTtBQUFFNkIsZ0JBQU0sRUFBRSxvQkFBVjtBQUFnQ0MsbUJBQVMsRUFBRTtBQUEzQyxTQUExSDtBQUFBLGtCQUVELEtBQUtaLEtBQUwsQ0FBV3hCLEtBQVgsQ0FBaUJxQyxHQUFqQixDQUFxQixDQUFDNUIsSUFBRCxFQUFPNkIsS0FBUCxLQUFpQjtBQUVyQyxnQkFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVlILEtBQUssR0FBRyxDQUFwQixDQUFqQjtBQUNBLGdCQUFNSSxZQUFZLEdBQUcsS0FBS2xCLEtBQUwsQ0FBV3hCLEtBQVgsQ0FBaUJ1QyxRQUFqQixDQUFyQjtBQUNBLGdCQUFNSSxRQUFRLEdBQUdsQyxJQUFJLENBQUNGLElBQUwsS0FBYyxLQUFLQyxLQUFMLENBQVdGLFVBQXpCLEdBQXNDLE9BQXRDLEdBQWdELE1BQWpFO0FBRUEsZ0JBQU1zQyxPQUFPLEdBQUdMLFFBQVEsS0FBS0QsS0FBN0I7QUFDQSxnQkFBTU8sVUFBVSxHQUFHcEMsSUFBSSxDQUFDRixJQUFMLEtBQWNtQyxZQUFZLENBQUNuQyxJQUE5QztBQUNBLGdCQUFNdUMsUUFBUSxHQUFHTixJQUFJLENBQUNPLElBQUwsQ0FBVSxDQUFDdEMsSUFBSSxDQUFDRSxTQUFMLEdBQWlCK0IsWUFBWSxDQUFDL0IsU0FBL0IsS0FBNkMsT0FBTyxFQUFwRCxDQUFWLElBQXFFLENBQXRGO0FBRUEsZ0JBQU1xQyxJQUFJLEdBQUd2QyxJQUFJLENBQUN3QyxTQUFMLEdBQWlCLENBQWpCLEdBQXFCckQsV0FBckIsR0FBb0NhLElBQUksQ0FBQ3dDLFNBQUwsS0FBbUIsQ0FBbkIsR0FBdUJwRCxhQUF2QixHQUF1Q0YsU0FBeEY7QUFFQSw4QkFDRSxxRUFBQyw4Q0FBRDtBQUFBLHVCQUVJLENBQUNpRCxPQUFPLElBQUksQ0FBQ0MsVUFBWixJQUEwQkMsUUFBM0Isa0JBQ0E7QUFBSyx1QkFBUyxFQUFHLGdFQUErREgsUUFBUyxFQUF6RjtBQUE0RixtQkFBSyxFQUFFO0FBQUVPLHdCQUFRLEVBQUU7QUFBWixlQUFuRztBQUFBLHNDQUNFO0FBQU0seUJBQVMsRUFBQyxTQUFoQjtBQUEwQixxQkFBSyxFQUFFO0FBQUVBLDBCQUFRLEVBQUU7QUFBWixpQkFBakM7QUFBQSwwQkFDR0MsTUFBTSxDQUFDQyxhQUFQLENBQXFCLEdBQUdKLElBQXhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUlFO0FBQUEsMEJBQU92QyxJQUFJLENBQUNGLElBQUwsSUFBYTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISixlQVdFLHFFQUFDLG9EQUFEO0FBQWEscUJBQU8sRUFBRUUsSUFBSSxDQUFDQyxPQUEzQjtBQUFvQyxzQkFBUSxFQUFFaUM7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFYRjtBQUFBLGFBQWVMLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQWlCRCxTQTdCQTtBQUZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOK0IsZUF5Qy9CO0FBQUssaUJBQVMsRUFBQyxzRUFBZjtBQUFzRixhQUFLLEVBQUU7QUFBRWUsbUJBQVMsRUFBRTtBQUFiLFNBQTdGO0FBQUEsK0JBQ0U7QUFBVSxtQkFBUyxFQUFDLHdCQUFwQjtBQUE2QyxpQkFBTyxFQUFFLEtBQUtDLFdBQTNEO0FBQXdFLHFCQUFXLEVBQUMsc0JBQXBGO0FBQTJHLGVBQUssRUFBRTtBQUFFQyxrQkFBTSxFQUFFO0FBQVY7QUFBbEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6QytCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFqQztBQThDRDs7QUE1RjBCOztBQWdHZHpELG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzR0E7O0FBRUEsTUFBTTBELFdBQU4sU0FBMEJ6RCwrQ0FBMUIsQ0FBb0M7QUFFbENtQyxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVTLGNBQVEsR0FBRyxNQUFiO0FBQXFCakM7QUFBckIsUUFBaUMsS0FBS0YsS0FBNUM7QUFDQSxVQUFNaUQsT0FBTyxHQUFHZCxRQUFRLENBQUNlLFdBQVQsT0FBMkIsT0FBM0M7QUFFQSxVQUFNQyxLQUFLLEdBQUdGLE9BQU8sR0FBRyxZQUFILEdBQWtCLFdBQXZDO0FBQ0EsVUFBTUcsT0FBTyxHQUFHSCxPQUFPLEdBQUcscUJBQUgsR0FBMkIsdUJBQWxEO0FBRUEsVUFBTUksZ0JBQWdCLEdBQUc7QUFDdkJDLGNBQVEsRUFBRSxLQURhO0FBRXZCQyxjQUFRLEVBQUU7QUFGYSxLQUF6QjtBQUtBLFVBQU1DLGFBQWEsR0FBRztBQUNwQkMsZ0JBQVUsRUFBRSxHQURRO0FBRXBCQyxnQkFBVSxFQUFFLEdBRlE7QUFHcEJDLGdCQUFVLEVBQUU7QUFIUSxLQUF0QjtBQU1BLHdCQUFPO0FBQUssZUFBUyxFQUFHLHFCQUFvQlAsT0FBUSxFQUE3QztBQUFBLDZCQUNMO0FBQUssaUJBQVMsRUFBQyx5Q0FBZjtBQUF5RCxhQUFLLEVBQUVDLGdCQUFoRTtBQUFBLCtCQUNFO0FBQU0sbUJBQVMsRUFBRywwQkFBeUJGLEtBQU0sRUFBakQ7QUFBb0QsZUFBSyxFQUFFSyxhQUEzRDtBQUFBLG9CQUNHdEQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURLO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQU9EOztBQTNCaUM7O0FBK0JyQjhDLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBOztBQUVBLE1BQU1ZLE1BQU0sR0FBRzVELEtBQUssaUJBQ2xCLHFFQUFDLDhDQUFEO0FBQUEsMEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw0QkFDRTtBQUFNLGFBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFNLFVBQUksRUFBQyxVQUFYO0FBQXNCLGFBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBTSxTQUFHLEVBQUMsWUFBVjtBQUF1QixVQUFJLEVBQUMsdUVBQTVCO0FBQW9HLGVBQVMsRUFBQyx5RUFBOUc7QUFBd0wsaUJBQVcsRUFBQztBQUFwTTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBSUU7QUFBQSxnQkFBUUEsS0FBSyxDQUFDNkQsU0FBTixJQUFtQjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBT0c3RCxLQUFLLENBQUM4RCxRQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQVllRixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUcsU0FBTixTQUF3QnhFLCtDQUF4QixDQUFrQztBQUFBO0FBQUE7O0FBQUEsbUNBRXhCO0FBQUVRLFVBQUksRUFBRTtBQUFSLEtBRndCOztBQUFBLHlDQUlsQk4sR0FBRyxJQUFJO0FBQ25CLFVBQUlBLEdBQUcsQ0FBQ0csT0FBSixLQUFnQixFQUFwQixFQUF3QjtBQUN0QixjQUFNRyxJQUFJLEdBQUlOLEdBQUcsQ0FBQ0UsTUFBSixDQUFXRCxLQUF6QjtBQUNBLGFBQUt3QixRQUFMLENBQWM7QUFBRW5CO0FBQUYsU0FBZDtBQUNEO0FBQ0YsS0FUK0I7QUFBQTs7QUFXaEMyQixRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUUzQjtBQUFGLFFBQVcsS0FBS2lCLEtBQXRCO0FBRUEsVUFBTWdELGVBQWUsR0FBRztBQUN0QkMsZ0JBQVUsRUFBRSxhQURVO0FBRXRCQyxXQUFLLEVBQUUsTUFGZTtBQUd0QkMsWUFBTSxFQUFFLENBSGM7QUFJdEJDLGtCQUFZLEVBQUUsZ0JBSlE7QUFLdEJDLGtCQUFZLEVBQUUsQ0FMUTtBQU10QjNCLGNBQVEsRUFBRSxNQU5ZO0FBT3RCZSxnQkFBVSxFQUFFLEdBUFU7QUFRdEJhLGVBQVMsRUFBRTtBQVJXLEtBQXhCO0FBV0Esd0JBQ0UscUVBQUMsMERBQUQ7QUFBUSxlQUFTLEVBQUMsZUFBbEI7QUFBQSw2QkFFRTtBQUFNLGlCQUFTLEVBQUMsaURBQWhCO0FBQUEsK0JBRUU7QUFBSyxtQkFBUyxFQUFDLG1DQUFmO0FBQUEsa0NBRUU7QUFBUyxxQkFBUyxFQUFDLGlGQUFuQjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxXQUFmO0FBQUEsc0NBRUU7QUFBTSx5QkFBUyxFQUFDLDZCQUFoQjtBQUE4QyxxQkFBSyxFQUFFO0FBQUNDLDJCQUFTLEVBQUUsQ0FBQztBQUFiLGlCQUFyRDtBQUFBLDBCQUVJeEUsSUFBSSxnQkFDQztBQUFBLDBDQUNDO0FBQU0seUJBQUssRUFBRTtBQUFDbUUsMkJBQUssRUFBRTtBQUFSLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURELE9BQzhDbkUsSUFEOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURELEdBSUM7QUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLEVBWUksQ0FBQ0EsSUFBRCxpQkFBUztBQUFPLG9CQUFJLEVBQUMsTUFBWjtBQUFtQix5QkFBUyxFQUFDLDZCQUE3QjtBQUEyRCx1QkFBTyxFQUFFLEtBQUsrQyxXQUF6RTtBQUFzRiw0QkFBWSxFQUFDLEtBQW5HO0FBQXlHLHFCQUFLLEVBQUVrQjtBQUFoSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFvQkU7QUFBUyxxQkFBUyxFQUFDLHlHQUFuQjtBQUFBLHNCQUNNakUsSUFBSSxpQkFBSSxxRUFBQyx3REFBRDtBQUFNLHdCQUFVLEVBQUVBO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBbUNEOztBQTVEK0I7O0FBZ0VuQixrRkFDYixxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFOzs7Ozs7Ozs7OztBQ3BFQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUHVzaGVyIGZyb20gJ3B1c2hlci1qcyc7XG5cbmltcG9ydCBDaGF0TWVzc2FnZSBmcm9tICcuL0NoYXRNZXNzYWdlJztcbiAgICBcbmNvbnN0IFNBRF9FTU9KSSA9IFs1NTM1NywgNTY4NjRdO1xuY29uc3QgSEFQUFlfRU1PSkkgPSBbNTUzNTcsIDU2ODMyXTtcbmNvbnN0IE5FVVRSQUxfRU1PSkkgPSBbNTUzNTcsIDU2ODQ4XTtcbiAgICBcblxuY2xhc3MgQ2hhdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7IGNoYXRzOiBbXSB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgXG4gICAgdGhpcy5wdXNoZXIgPSBuZXcgUHVzaGVyKHByb2Nlc3MuZW52LlBVU0hFUl9BUFBfS0VZLCB7XG4gICAgICBjbHVzdGVyOiBwcm9jZXNzLmVudi5QVVNIRVJfQVBQX0NMVVNURVIsXG4gICAgICBlbmNyeXB0ZWQ6IHRydWVcbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLnB1c2hlci5zdWJzY3JpYmUoJ2NoYXQtcm9vbScpO1xuICAgIFxuICAgIHRoaXMuY2hhbm5lbC5iaW5kKCduZXctbWVzc2FnZScsICh7IGNoYXQgPSBudWxsIH0pID0+IHtcbiAgICAgIGNvbnN0IHsgY2hhdHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjaGF0ICYmIGNoYXRzLnB1c2goY2hhdCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2hhdHMgfSk7XG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5wdXNoZXIuY29ubmVjdGlvbi5iaW5kKCdjb25uZWN0ZWQnLCAoKSA9PiB7XG4gICAgICBheGlvcy5wb3N0KCcvbWVzc2FnZXMnKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hhdHMgPSByZXNwb25zZS5kYXRhLm1lc3NhZ2VzO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGF0cyB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgXG4gIH1cbiAgXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHVzaGVyLmRpc2Nvbm5lY3QoKTtcbiAgfVxuXG4gIGhhbmRsZUtleVVwID0gZXZ0ID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWU7XG4gICAgXG4gICAgaWYgKGV2dC5rZXlDb2RlID09PSAxMyAmJiAhZXZ0LnNoaWZ0S2V5KSB7XG4gICAgICBjb25zdCB7IGFjdGl2ZVVzZXI6IHVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBjaGF0ID0geyB1c2VyLCBtZXNzYWdlOiB2YWx1ZSwgdGltZXN0YW1wOiArbmV3IERhdGUgfTtcbiAgICAgIFxuICAgICAgZXZ0LnRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgYXhpb3MucG9zdCgnL21lc3NhZ2UnLCBjaGF0KTtcbiAgICB9XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKHRoaXMucHJvcHMuYWN0aXZlVXNlciAmJiA8RnJhZ21lbnQ+XG4gICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1ib3R0b20gYm9yZGVyLWdyYXkgdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBiZy13aGl0ZVwiIHN0eWxlPXt7IGhlaWdodDogOTAgfX0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgbWItMCBteC00IHB4LTJcIj57dGhpcy5wcm9wcy5hY3RpdmVVc2VyfTwvaDI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHBiLTQgdy0xMDAgZC1mbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBhbGlnbi1pdGVtcy1zdGFydCBhbGlnbi1jb250ZW50LXN0YXJ0IHBvc2l0aW9uLXJlbGF0aXZlXCIgc3R5bGU9e3sgaGVpZ2h0OiAnY2FsYygxMDAlIC0gMTgwcHgpJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cbiAgICBcbiAgICB7dGhpcy5zdGF0ZS5jaGF0cy5tYXAoKGNoYXQsIGluZGV4KSA9PiB7XG4gICAgXG4gICAgICBjb25zdCBwcmV2aW91cyA9IE1hdGgubWF4KDAsIGluZGV4IC0gMSk7XG4gICAgICBjb25zdCBwcmV2aW91c0NoYXQgPSB0aGlzLnN0YXRlLmNoYXRzW3ByZXZpb3VzXTtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gY2hhdC51c2VyID09PSB0aGlzLnByb3BzLmFjdGl2ZVVzZXIgPyBcInJpZ2h0XCIgOiBcImxlZnRcIjtcbiAgICAgIFxuICAgICAgY29uc3QgaXNGaXJzdCA9IHByZXZpb3VzID09PSBpbmRleDtcbiAgICAgIGNvbnN0IGluU2VxdWVuY2UgPSBjaGF0LnVzZXIgPT09IHByZXZpb3VzQ2hhdC51c2VyO1xuICAgICAgY29uc3QgaGFzRGVsYXkgPSBNYXRoLmNlaWwoKGNoYXQudGltZXN0YW1wIC0gcHJldmlvdXNDaGF0LnRpbWVzdGFtcCkgLyAoMTAwMCAqIDYwKSkgPiAxO1xuICAgICAgXG4gICAgICBjb25zdCBtb29kID0gY2hhdC5zZW50aW1lbnQgPiAwID8gSEFQUFlfRU1PSkkgOiAoY2hhdC5zZW50aW1lbnQgPT09IDAgPyBORVVUUkFMX0VNT0pJIDogU0FEX0VNT0pJKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50IGtleT17aW5kZXh9PlxuICAgICAgICBcbiAgICAgICAgICB7IChpc0ZpcnN0IHx8ICFpblNlcXVlbmNlIHx8IGhhc0RlbGF5KSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGQtYmxvY2sgdy0xMDAgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWRhcmsgbXQtNCBwYi0xIHB4LTEgdGV4dC0ke3Bvc2l0aW9ufWB9IHN0eWxlPXt7IGZvbnRTaXplOiAnMC45cmVtJyB9fT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ibG9ja1wiIHN0eWxlPXt7IGZvbnRTaXplOiAnMS42cmVtJyB9fT5cbiAgICAgICAgICAgICAgICB7U3RyaW5nLmZyb21Db2RlUG9pbnQoLi4ubW9vZCl9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+e2NoYXQudXNlciB8fCAnQW5vbnltb3VzJ308L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIH1cbiAgICAgICAgICBcbiAgICAgICAgICA8Q2hhdE1lc3NhZ2UgbWVzc2FnZT17Y2hhdC5tZXNzYWdlfSBwb3NpdGlvbj17cG9zaXRpb259IC8+XG4gICAgICAgICAgXG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApO1xuICAgICAgXG4gICAgfSl9XG4gICAgXG4gIDwvZGl2PlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10b3AgYm9yZGVyLWdyYXkgdy0xMDAgcHgtNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJnLWxpZ2h0XCIgc3R5bGU9e3sgbWluSGVpZ2h0OiA5MCB9fT5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBweC0zIHB5LTJcIiBvbktleVVwPXt0aGlzLmhhbmRsZUtleVVwfSBwbGFjZWhvbGRlcj1cIkVudGVyIGEgY2hhdCBtZXNzYWdlXCIgc3R5bGU9e3sgcmVzaXplOiAnbm9uZScgfX0+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgPC9GcmFnbWVudD4gKVxuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG4gICAgXG5jbGFzcyBDaGF0TWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcG9zaXRpb24gPSAnbGVmdCcsIG1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXNSaWdodCA9IHBvc2l0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdyaWdodCc7XG4gICAgXG4gICAgY29uc3QgYWxpZ24gPSBpc1JpZ2h0ID8gJ3RleHQtcmlnaHQnIDogJ3RleHQtbGVmdCc7XG4gICAgY29uc3QganVzdGlmeSA9IGlzUmlnaHQgPyAnanVzdGlmeS1jb250ZW50LWVuZCcgOiAnanVzdGlmeS1jb250ZW50LXN0YXJ0JztcbiAgICBcbiAgICBjb25zdCBtZXNzYWdlQm94U3R5bGVzID0ge1xuICAgICAgbWF4V2lkdGg6ICc3MCUnLFxuICAgICAgZmxleEdyb3c6IDBcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IG1lc3NhZ2VTdHlsZXMgPSB7XG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXG4gICAgICB3aGl0ZVNwYWNlOiAncHJlLXdyYXAnXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2B3LTEwMCBteS0xIGQtZmxleCAke2p1c3RpZnl9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWxpZ2h0IHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5IHAtMlwiIHN0eWxlPXttZXNzYWdlQm94U3R5bGVzfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgZC1ibG9jayB0ZXh0LXNlY29uZGFyeSAke2FsaWdufWB9IHN0eWxlPXttZXNzYWdlU3R5bGVzfT5cbiAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIH1cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRNZXNzYWdlOyIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNvbnN0IExheW91dCA9IHByb3BzID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxIZWFkPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1HbjUzODR4cVExYW9XWEErMDU4UlhQeFBnNmZ5NElXdlROaDBFMjYzWG1GY0psU0F3aUdnRkFXL2RBaVM2SlhtXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxuICAgICAgPHRpdGxlPntwcm9wcy5wYWdlVGl0bGUgfHwgJ1JlYWx0aW1lIENoYXQnfTwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9GcmFnbWVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQ2hhdCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXQnXG5cbmNsYXNzIEluZGV4UGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7IHVzZXI6IG51bGwgfVxuICBcbiAgaGFuZGxlS2V5VXAgPSBldnQgPT4ge1xuICAgIGlmIChldnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGNvbnN0IHVzZXIgPSAgZXZ0LnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXNlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBcbiAgICBjb25zdCBuYW1lSW5wdXRTdHlsZXMgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgY29sb3I6ICcjOTk5JyxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjNjY2JyxcbiAgICAgIGJvcmRlclJhZGl1czogMCxcbiAgICAgIGZvbnRTaXplOiAnM3JlbScsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBib3hTaGFkb3c6ICdub25lICFpbXBvcnRhbnQnXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCBwYWdlVGl0bGU9XCJSZWFsdGltZSBDaGF0XCI+XG4gICAgICBcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHBvc2l0aW9uLWFic29sdXRlIGgtMTAwIGJnLWRhcmtcIj5cbiAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcG9zaXRpb24tYWJzb2x1dGUgdy0xMDAgaC0xMDBcIj5cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbC1tZC04IGQtZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAgYWxpZ24taXRlbXMtY2VudGVyIGFsaWduLWNvbnRlbnQtY2VudGVyIHB4LTVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IG14LTVcIj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBoMSB0ZXh0LWxpZ2h0XCIgc3R5bGU9e3ttYXJnaW5Ub3A6IC01MH19PlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB1c2VyXG4gICAgICAgICAgICAgICAgICAgICAgPyAoPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6ICcjOTk5J319PkhlbGxvITwvc3Bhbj4ge3VzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+KVxuICAgICAgICAgICAgICAgICAgICAgIDogYFdoYXQgaXMgeW91ciBuYW1lP2BcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgeyAhdXNlciAmJiA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbXQtMyBweC0zIHB5LTJcIiBvbktleVVwPXt0aGlzLmhhbmRsZUtleVVwfSBhdXRvQ29tcGxldGU9XCJvZmZcIiBzdHlsZT17bmFtZUlucHV0U3R5bGVzfSAvPiB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb2wtbWQtNCBwb3NpdGlvbi1yZWxhdGl2ZSBkLWZsZXggZmxleC13cmFwIGgtMTAwIGFsaWduLWl0ZW1zLXN0YXJ0IGFsaWduLWNvbnRlbnQtYmV0d2VlbiBiZy13aGl0ZSBweC0wXCI+XG4gICAgICAgICAgICAgICAgeyB1c2VyICYmIDxDaGF0IGFjdGl2ZVVzZXI9e3VzZXJ9IC8+IH1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICA8L21haW4+XG4gICAgICAgIFxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8SW5kZXhQYWdlIC8+XG4pOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwdXNoZXItanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=