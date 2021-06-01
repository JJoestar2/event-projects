(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Events_EventsList_js"],{

/***/ "./resources/js/components/Events/EvenstListItem.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Events/EvenstListItem.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _event_card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-card.css */ "./resources/js/components/Events/event-card.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function EventsListItem(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "event event-shadow d-flex justify-content-between flex-column",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "event-preview",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: "/img_lights.jpg",
        alt: "image"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "event-info",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
          className: "fa fa-calendar",
          "aria-hidden": "true",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "event-date",
            children: props.event.date_start
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
          className: "fa fa-map-marker",
          "aria-hidden": "true",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "event-location",
            children: props.event.location
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
        className: "event-title",
        children: props.event.title
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
      href: "/event/" + props.event.id,
      className: "btn btn-primary btn-more",
      children: "Read More"
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsListItem);

/***/ }),

/***/ "./resources/js/components/Events/EventsList.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Events/EventsList.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _EvenstListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EvenstListItem */ "./resources/js/components/Events/EvenstListItem.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function EventsList(_ref) {
  var _ref$events = _ref.events,
      events = _ref$events === void 0 ? [] : _ref$events;
  var items = events.map(function (event) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
      className: "event-list-item",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_EvenstListItem__WEBPACK_IMPORTED_MODULE_1__.default, {
        event: event
      })
    }, event.id);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
    className: "d-flex flex-wrap justify-content-between events-row",
    children: items
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsList);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/components/Events/event-card.css":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/components/Events/event-card.css ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n\nul {\n    padding: 0;\n}\n\nul li {\n    list-style: none;\n}\n\n.event-list-item {\n    margin-top: 15px;\n    margin-bottom: 20px;\n    margin-right: 10px;\n}\n\n.events-row {\n    margin-right: -10px;\n}\n\n.events-row:hover > .event-list-item:not(:hover) > .event {\n    filter: brightness(0.85) saturate(1)\n            contrast(1.2) blur(4px);\n}\n\n.event {\n    width: 313px;\n    height: 100%;\n    padding-top: 10px;\n    padding-bottom: 15px;\n    transition: 0.2s all ease;\n    font-family: 'Noto Sans TC', sans-serif;\n    background-color: #fff;\n}\n\n.event:hover {\n    transform: scale(1.05);\n}\n\n.event-shadow {\n    box-shadow: -1px 2px 10px 0px rgba(34, 60, 80, 0.2);\n}\n\n.event-preview {\n    width: 100%;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n.event-preview img {\n    display: block;\n    max-width: 100%;\n    border-radius: 10px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.event-title {\n    font-weight: 700;\n    font-size: 1.35rem;\n}\n\n.event-info {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 15px;\n}\n.event-date {\n    margin-bottom: 5px;\n}\n.event-date, .event-location {\n    display: inline-block;\n    font-weight: 300;\n    font-size: 1.05rem;\n    color: #b9b9bd;\n    padding-left: 5px;\n}\n\n.btn-more {\n    display: block;\n    width: 200px;\n    margin: 0 auto;\n    font-size: 1.1rem;\n}\n\n.btn-more:hover {\n    color: #333;\n    background-color: transparent;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/Events/event-card.css":
/*!*******************************************************!*\
  !*** ./resources/js/components/Events/event-card.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_event_card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./event-card.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/components/Events/event-card.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_event_card_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_event_card_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);