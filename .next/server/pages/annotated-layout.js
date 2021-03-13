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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/annotated-layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/annotated-layout.js":
/*!***********************************!*\
  !*** ./pages/annotated-layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/arisahirata/dev/sample-embedded-app/pages/annotated-layout.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass AnnotatedLayout extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      discount: '10%',\n      enabled: false\n    });\n\n    _defineProperty(this, \"handleSubmit\", () => {\n      this.setState({\n        discount: this.state.discount\n      });\n      console.log('submission', this.state);\n    });\n\n    _defineProperty(this, \"handleChange\", field => {\n      return value => this.setState({\n        [field]: value\n      });\n    });\n\n    _defineProperty(this, \"handleToggle\", () => {\n      this.setState(({\n        enabled\n      }) => {\n        return {\n          enabled: !enabled\n        };\n      });\n    });\n  }\n\n  render() {\n    const {\n      discount,\n      enabled\n    } = this.state;\n    const contentStatus = enabled ? 'Disable' : 'Enable';\n    const textStatus = enabled ? 'enabled' : 'disabled';\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Page\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].AnnotatedSection, {\n          title: \"Default discount\",\n          description: \"Add a product to Sample App, it will automatically be discounted.\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n            sectioned: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n              onSubmit: this.handleSubmit,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"FormLayout\"], {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n                  value: discount,\n                  onChange: this.handleChange('discount'),\n                  label: \"Discount percentage\",\n                  type: \"discount\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 36,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n                  distribution: \"trailing\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n                    primary: true,\n                    submit: true,\n                    children: \"Save\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 43,\n                    columnNumber: 21\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 42,\n                  columnNumber: 19\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].AnnotatedSection, {\n          title: \"Price updates\",\n          description: \"Temporarily disable all Sample App price updates\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"SettingToggle\"], {\n            action: {\n              content: contentStatus,\n              onAction: this.handleToggle\n            },\n            enabled: enabled,\n            children: [\"This setting is\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"TextStyle\"], {\n              variation: \"strong\",\n              children: textStatus\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, this), \".\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnnotatedLayout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hbm5vdGF0ZWQtbGF5b3V0LmpzPzAxNzciXSwibmFtZXMiOlsiQW5ub3RhdGVkTGF5b3V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJkaXNjb3VudCIsImVuYWJsZWQiLCJzZXRTdGF0ZSIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImZpZWxkIiwidmFsdWUiLCJyZW5kZXIiLCJjb250ZW50U3RhdHVzIiwidGV4dFN0YXR1cyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImNvbnRlbnQiLCJvbkFjdGlvbiIsImhhbmRsZVRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFhQSxNQUFNQSxlQUFOLFNBQThCQyw0Q0FBSyxDQUFDQyxTQUFwQyxDQUE4QztBQUFBO0FBQUE7O0FBQUEsbUNBQ3BDO0FBQ05DLGNBQVEsRUFBRSxLQURKO0FBRU5DLGFBQU8sRUFBRTtBQUZILEtBRG9DOztBQUFBLDBDQXdEN0IsTUFBTTtBQUNuQixXQUFLQyxRQUFMLENBQWM7QUFDWkYsZ0JBQVEsRUFBRSxLQUFLRyxLQUFMLENBQVdIO0FBRFQsT0FBZDtBQUdBSSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLEtBQUtGLEtBQS9CO0FBQ0QsS0E3RDJDOztBQUFBLDBDQStENUJHLEtBQUQsSUFBVztBQUN4QixhQUFRQyxLQUFELElBQVcsS0FBS0wsUUFBTCxDQUFjO0FBQUUsU0FBQ0ksS0FBRCxHQUFTQztBQUFYLE9BQWQsQ0FBbEI7QUFDRCxLQWpFMkM7O0FBQUEsMENBa0U3QixNQUFNO0FBQ25CLFdBQUtMLFFBQUwsQ0FBYyxDQUFDO0FBQUVEO0FBQUYsT0FBRCxLQUFpQjtBQUM3QixlQUFPO0FBQUVBLGlCQUFPLEVBQUUsQ0FBQ0E7QUFBWixTQUFQO0FBQ0QsT0FGRDtBQUdELEtBdEUyQztBQUFBOztBQU01Q08sUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFUixjQUFGO0FBQVlDO0FBQVosUUFBd0IsS0FBS0UsS0FBbkM7QUFDQSxVQUFNTSxhQUFhLEdBQUdSLE9BQU8sR0FBRyxTQUFILEdBQWUsUUFBNUM7QUFDQSxVQUFNUyxVQUFVLEdBQUdULE9BQU8sR0FBRyxTQUFILEdBQWUsVUFBekM7QUFFQSx3QkFDRSxxRUFBQyxxREFBRDtBQUFBLDZCQUNFLHFFQUFDLHVEQUFEO0FBQUEsZ0NBQ0UscUVBQUMsdURBQUQsQ0FBUSxnQkFBUjtBQUNFLGVBQUssRUFBQyxrQkFEUjtBQUVFLHFCQUFXLEVBQUMsbUVBRmQ7QUFBQSxpQ0FJRSxxRUFBQyxxREFBRDtBQUFNLHFCQUFTLE1BQWY7QUFBQSxtQ0FDRSxxRUFBQyxxREFBRDtBQUFNLHNCQUFRLEVBQUUsS0FBS1UsWUFBckI7QUFBQSxxQ0FDRSxxRUFBQywyREFBRDtBQUFBLHdDQUNFLHFFQUFDLDBEQUFEO0FBQ0UsdUJBQUssRUFBRVgsUUFEVDtBQUVFLDBCQUFRLEVBQUUsS0FBS1ksWUFBTCxDQUFrQixVQUFsQixDQUZaO0FBR0UsdUJBQUssRUFBQyxxQkFIUjtBQUlFLHNCQUFJLEVBQUM7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBT0UscUVBQUMsc0RBQUQ7QUFBTyw4QkFBWSxFQUFDLFVBQXBCO0FBQUEseUNBQ0UscUVBQUMsdURBQUQ7QUFBUSwyQkFBTyxNQUFmO0FBQWdCLDBCQUFNLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUF1QkUscUVBQUMsdURBQUQsQ0FBUSxnQkFBUjtBQUNFLGVBQUssRUFBQyxlQURSO0FBRUUscUJBQVcsRUFBQyxrREFGZDtBQUFBLGlDQUlFLHFFQUFDLDhEQUFEO0FBQ0Usa0JBQU0sRUFBRTtBQUNOQyxxQkFBTyxFQUFFSixhQURIO0FBRU5LLHNCQUFRLEVBQUUsS0FBS0M7QUFGVCxhQURWO0FBS0UsbUJBQU8sRUFBRWQsT0FMWDtBQUFBLDBDQU9rQixHQVBsQixlQVFFLHFFQUFDLDBEQUFEO0FBQVcsdUJBQVMsRUFBQyxRQUFyQjtBQUFBLHdCQUErQlM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUEyQ0Q7O0FBdEQyQzs7QUF5RS9CYiw4RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Fubm90YXRlZC1sYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBGb3JtLFxuICBGb3JtTGF5b3V0LFxuICBMYXlvdXQsXG4gIFBhZ2UsXG4gIFNldHRpbmdUb2dnbGUsXG4gIFN0YWNrLFxuICBUZXh0RmllbGQsXG4gICBUZXh0U3R5bGUsXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuXG5jbGFzcyBBbm5vdGF0ZWRMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBkaXNjb3VudDogJzEwJScsXG4gICAgZW5hYmxlZDogZmFsc2UsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGlzY291bnQsIGVuYWJsZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgY29udGVudFN0YXR1cyA9IGVuYWJsZWQgPyAnRGlzYWJsZScgOiAnRW5hYmxlJztcbiAgICBjb25zdCB0ZXh0U3RhdHVzID0gZW5hYmxlZCA/ICdlbmFibGVkJyA6ICdkaXNhYmxlZCc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2U+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXG4gICAgICAgICAgICB0aXRsZT1cIkRlZmF1bHQgZGlzY291bnRcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBZGQgYSBwcm9kdWN0IHRvIFNhbXBsZSBBcHAsIGl0IHdpbGwgYXV0b21hdGljYWxseSBiZSBkaXNjb3VudGVkLlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxuICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlzY291bnR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnZGlzY291bnQnKX1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNjb3VudCBwZXJjZW50YWdlXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRpc2NvdW50XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPVwidHJhaWxpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IHN1Ym1pdD5cbiAgICAgICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XG4gICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxuICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxuICAgICAgICAgICAgdGl0bGU9XCJQcmljZSB1cGRhdGVzXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGVtcG9yYXJpbHkgZGlzYWJsZSBhbGwgU2FtcGxlIEFwcCBwcmljZSB1cGRhdGVzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2V0dGluZ1RvZ2dsZVxuICAgICAgICAgICAgICBhY3Rpb249e3tcbiAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50U3RhdHVzLFxuICAgICAgICAgICAgICAgIG9uQWN0aW9uOiB0aGlzLmhhbmRsZVRvZ2dsZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZW5hYmxlZD17ZW5hYmxlZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVGhpcyBzZXR0aW5nIGlzeycgJ31cbiAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj57dGV4dFN0YXR1c308L1RleHRTdHlsZT4uXG4gICAgICAgICAgICA8L1NldHRpbmdUb2dnbGU+XG4gICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc2NvdW50OiB0aGlzLnN0YXRlLmRpc2NvdW50LFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdzdWJtaXNzaW9uJywgdGhpcy5zdGF0ZSk7XG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGZpZWxkKSA9PiB7XG4gICAgcmV0dXJuICh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xuICB9O1xuICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgoeyBlbmFibGVkIH0pID0+IHtcbiAgICAgIHJldHVybiB7IGVuYWJsZWQ6ICFlbmFibGVkIH07XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFubm90YXRlZExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/annotated-layout.js\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });