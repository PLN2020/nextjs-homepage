"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* harmony import */ var _theme_toggle_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-toggle-button */ \"./components/theme-toggle-button.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar LinkItem = function(param) {\n    var href = param.href, path = param.path, children = param.children;\n    _s();\n    var active = path === href;\n    var inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)(\"gray200\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Link, {\n            p: 2,\n            bg: active ? \"lightPurple\" : undefined,\n            color: active ? \"#202023\" : inactiveColor,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, _this);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nvar Navbar = function(props) {\n    _s1();\n    var path = props.path;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, _objectSpread({\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)(\"#ffffff40\", \"#20202380\"),\n        style: {\n            backdropFilter: \"blur(10px)\"\n        },\n        zIndex: 1\n    }, props, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                        as: \"h1\",\n                        size: \"lg\",\n                        letterSpacing: \"tighter\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                            lineNumber: 61,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                    direction: {\n                        base: \"column\",\n                        md: \"row\"\n                    },\n                    display: {\n                        base: \"none\",\n                        md: \"flex\"\n                    },\n                    width: {\n                        base: \"full\",\n                        md: \"auto\"\n                    },\n                    alignItems: \"center\",\n                    flexGrow: 1,\n                    mt: {\n                        base: 4,\n                        md: 0\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/projects\",\n                            path: path,\n                            children: \"Projects\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/photography\",\n                            path: path,\n                            children: \"Photography\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    flex: 1,\n                    align: \"right\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_theme_toggle_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                            lineNumber: 83,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                            ml: 2,\n                            display: {\n                                base: \"inline-block\",\n                                md: \"none\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.MenuButton, {\n                                        as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.IconButton,\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.HamburgerIcon, {}, void 0, false, void 0, void 0),\n                                        variant: \"outline\",\n                                        \"aria-label\": \"Options\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.MenuList, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/\",\n                                                passHref: true,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {\n                                                    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Link,\n                                                    children: \"About\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 37\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                                                lineNumber: 95,\n                                                columnNumber: 33\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/projects\",\n                                                passHref: true,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {\n                                                    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Link,\n                                                    children: \"Projects\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 37\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                                                lineNumber: 99,\n                                                columnNumber: 33\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/photography\",\n                                                passHref: true,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {\n                                                    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Link,\n                                                    children: \"Photography\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 37\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                                                lineNumber: 103,\n                                                columnNumber: 33\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                                lineNumber: 86,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                            lineNumber: 85,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n                    lineNumber: 82,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n            lineNumber: 51,\n            columnNumber: 13\n        }, _this)\n    }), void 0, false, {\n        fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/navbar.js\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, _this);\n};\n_s1(Navbar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue\n    ];\n});\n_c1 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanM/NWI1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtcbiAgICBDb250YWluZXIsXG4gICAgQm94LFxuICAgIExpbmssXG4gICAgU3RhY2ssXG4gICAgSGVhZGluZyxcbiAgICBGbGV4LFxuICAgIE1lbnUsXG4gICAgTWVudUl0ZW0sXG4gICAgTWVudUxpc3QsXG4gICAgTWVudUJ1dHRvbixcbiAgICBJY29uQnV0dG9uLFxuICAgIHVzZUNvbG9yTW9kZVZhbHVlXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBIYW1idXJnZXJJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcbmltcG9ydCBUaGVtZVRvZ2dsZUJ1dHRvbiBmcm9tICcuL3RoZW1lLXRvZ2dsZS1idXR0b24nXG5cbmNvbnN0IExpbmtJdGVtID0gKHsgaHJlZiwgcGF0aCwgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHBhdGggPT09IGhyZWZcbiAgICBjb25zdCBpbmFjdGl2ZUNvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkyMDAnICwgJ3doaXRlQWxwaGEuOTAwJylcbiAgICByZXR1cm4gKFxuICAgICAgICA8TmV4dExpbmsgaHJlZj17aHJlZn0+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgICAgICAgYmc9e2FjdGl2ZSA/ICdsaWdodFB1cnBsZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgY29sb3I9e2FjdGl2ZSA/ICcjMjAyMDIzJyA6IGluYWN0aXZlQ29sb3J9XG4gICAgICAgICAgICAgICAgLy8gdGFyZ2V0PXt0YXJnZXR9XG4gICAgICAgICAgICAgICAgLy8gey4uLnByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OZXh0TGluaz5cbiAgICApXG59XG5cbmNvbnN0IE5hdmJhciA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7IHBhdGggfSA9IHByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgICAgICAgIGFzPVwibmF2XCJcbiAgICAgICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgnI2ZmZmZmZjQwJywgJyMyMDIwMjM4MCcpfVxuICAgICAgICAgICAgc3R5bGU9e3tiYWNrZHJvcEZpbHRlcjonYmx1cigxMHB4KSd9fVxuICAgICAgICAgICAgekluZGV4PXsxfVxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8Q29udGFpbmVyIFxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCIgXG4gICAgICAgICAgICAgICAgcD17Mn1cbiAgICAgICAgICAgICAgICBtYXhXPVwiY29udGFpbmVyLm1kXCJcbiAgICAgICAgICAgICAgICB3cmFwPVwid3JhcFwiXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIG1yPXs1fT5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJsZ1wiIGxldHRlclNwYWNpbmc9eyd0aWdodGVyJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17eyBiYXNlOiAnY29sdW1uJywgbWQ6ICdyb3cnIH19XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e3sgYmFzZTogJ25vbmUnLCBtZDogJ2ZsZXgnIH19XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXt7IGJhc2U6ICdmdWxsJywgbWQ6ICdhdXRvJyB9fVxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgZmxleEdyb3c9ezF9XG4gICAgICAgICAgICAgICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TGlua0l0ZW0gaHJlZj1cIi9wcm9qZWN0c1wiIHBhdGg9e3BhdGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICA8TGlua0l0ZW0gaHJlZj1cIi9waG90b2dyYXBoeVwiIHBhdGg9e3BhdGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgUGhvdG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rSXRlbT5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgICAgPEJveCBmbGV4PXsxfSBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvZ2dsZUJ1dHRvbiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbWw9ezJ9IGRpc3BsYXk9e3sgYmFzZTogJ2lubGluZS1ibG9jaycsIG1kOiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0ljb25CdXR0b259IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8SGFtYnVyZ2VySWNvbiAvPn0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJPcHRpb25zXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGFzPXtMaW5rfT5BYm91dDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvcHJvamVjdHNcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBhcz17TGlua30+UHJvamVjdHM8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL3Bob3RvZ3JhcGh5XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gYXM9e0xpbmt9PlBob3RvZ3JhcGh5PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVMaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhciJdLCJuYW1lcyI6WyJMb2dvIiwiTmV4dExpbmsiLCJDb250YWluZXIiLCJCb3giLCJMaW5rIiwiU3RhY2siLCJIZWFkaW5nIiwiRmxleCIsIk1lbnUiLCJNZW51SXRlbSIsIk1lbnVMaXN0IiwiTWVudUJ1dHRvbiIsIkljb25CdXR0b24iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkhhbWJ1cmdlckljb24iLCJUaGVtZVRvZ2dsZUJ1dHRvbiIsIkxpbmtJdGVtIiwiaHJlZiIsInBhdGgiLCJjaGlsZHJlbiIsImFjdGl2ZSIsImluYWN0aXZlQ29sb3IiLCJwIiwiYmciLCJ1bmRlZmluZWQiLCJjb2xvciIsIk5hdmJhciIsInByb3BzIiwicG9zaXRpb24iLCJhcyIsInciLCJzdHlsZSIsImJhY2tkcm9wRmlsdGVyIiwiekluZGV4IiwiZGlzcGxheSIsIm1heFciLCJ3cmFwIiwiYWxpZ24iLCJqdXN0aWZ5IiwibXIiLCJzaXplIiwibGV0dGVyU3BhY2luZyIsImRpcmVjdGlvbiIsImJhc2UiLCJtZCIsIndpZHRoIiwiYWxpZ25JdGVtcyIsImZsZXhHcm93IiwibXQiLCJmbGV4IiwibWwiLCJpY29uIiwidmFyaWFudCIsImFyaWEtbGFiZWwiLCJwYXNzSHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

});