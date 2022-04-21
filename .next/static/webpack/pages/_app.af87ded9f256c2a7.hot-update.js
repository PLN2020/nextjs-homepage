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

/***/ "./components/voxel-pc.js":
/*!********************************!*\
  !*** ./components/voxel-pc.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar VoxelPC = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            // 640 -> 240\n            // 8 -> 6\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(13421772, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, \"/PC2.glb\", {\n                receiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                setLoading(false);\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"voxel-pc\",\n        m: \"auto\",\n        at: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n                size: \"xl\",\n                position: \"absolute\",\n                left: \"50%\",\n                top: \"50%\",\n                ml: \"calc(0px - var(--spinner-size) / 2)\",\n                mt: \"calc(0px - var(--spinner-size))\"\n            }, void 0, false, {\n                fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/voxel-pc.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, _this),\n            \"PC\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mtlpatlam/code/PLN2020/nextjs-homepage-test/components/voxel-pc.js\",\n        lineNumber: 77,\n        columnNumber: 9\n    }, _this);\n};\n_s(VoxelPC, \"PoCMKBRFUuHjz0y7odtmo4vjNbw=\");\n_c = VoxelPC;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelPC);\nvar _c;\n$RefreshReg$(_c, \"VoxelPC\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUMsZUFBRztBQUFFLGVBQUc7QUFBRSxlQUFHO1NBQUM7UUFDbEJqQixRQUFRLEVBQUMsVUFBVTs7WUFFdEJwQyxPQUFPLGtCQUNKLDhEQUFDWCxxREFBTztnQkFDSmlFLElBQUksRUFBQyxJQUFJO2dCQUNUbEIsUUFBUSxFQUFDLFVBQVU7Z0JBQ25CbUIsSUFBSSxFQUFDLEtBQUs7Z0JBQ1ZDLEdBQUcsRUFBQyxLQUFLO2dCQUNUQyxFQUFFLEVBQUMscUNBQXFDO2dCQUN4Q0MsRUFBRSxFQUFDLGlDQUFpQzs7Ozs7cUJBQ3RDO1lBQ0osSUFFRjs7Ozs7O2FBQU0sQ0FDVDtDQUNKO0dBekZLNUQsT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBMkZiLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdm94ZWwtcGMuanM/MzNiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMnXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSBcIi4uL2xpYi9tb2RlbFwiO1xuXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeCAtIDEsIDQpKVxufVxuXG5jb25zdCBWb3hlbFBDID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlZkNvbnRhaW5lciA9IHVzZVJlZigpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbcmVuZGVyZXIsIHNldFJlbmRlcmVyXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbX2NhbWVyYSwgc2V0Q2FtZXJhXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbdGFyZ2V0XSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5WZWN0b3IzKC0wLjUsIDEuMiwgMCkpXG4gICAgY29uc3QgW2luaXRpYWxDYW1lcmFQb3NpdGlvbl0gPSB1c2VTdGF0ZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgICAgICAgICAyMCAqIE1hdGguc2luKDAuMiAqIE1hdGguUEkpLFxuICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAyMCAqIE1hdGguY29zKDAuMiAqIE1hdGguUEkpXG4gICAgICAgIClcbiAgICApXG4gICAgY29uc3QgW3NjZW5lXSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5TY2VuZSgpKVxuICAgIGNvbnN0IFtfY29udHJvbHMsIHNldENvbnRyb2xzXSA9IHVzZVN0YXRlKClcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZDb250YWluZXJcbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiAhcmVuZGVyZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxuICAgICAgICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxuXG4gICAgICAgICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgICAgICAgICAgYWxwaGE6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csIHNjSClcbiAgICAgICAgICAgIHJlbmRlcmVyLm91dHB1dEVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudClcbiAgICAgICAgICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyKVxuXG4gICAgICAgICAgICAvLyA2NDAgLT4gMjQwXG4gICAgICAgICAgICAvLyA4IC0+IDZcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gc2NIICogMC4wMDUgKyA0LjhcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxuICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgIC1zY2FsZSxcbiAgICAgICAgICAgICAgICAwLjAxLFxuICAgICAgICAgICAgICAgIDUwMDAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJhUG9zaXRpb24pXG4gICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcbiAgICAgICAgICAgIHNldENhbWVyYShjYW1lcmEpXG5cbiAgICAgICAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhjY2NjY2MsIDEpXG4gICAgICAgICAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KVxuXG4gICAgICAgICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzIChjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpXG4gICAgICAgICAgICBjb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZVxuICAgICAgICAgICAgY29udHJvbHMudGFyZ2V0ID0gdGFyZ2V0XG4gICAgICAgICAgICBzZXRDb250cm9scyhjb250cm9scylcblxuICAgICAgICAgICAgbG9hZEdMVEZNb2RlbChzY2VuZSwgJy9QQzIuZ2xiJywge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVTaGFkb3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNhc3RTaGFkb3c6IGZhbHNlXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBcbiAgICAgICAgICAgIHJlZj17cmVmQ29udGFpbmVyfSBcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndm94ZWwtcGMnIFxuICAgICAgICAgICAgbT1cImF1dG9cIiBcbiAgICAgICAgICAgIGF0PXtbJy0yMHB4JywgJy02MHB4JywgJy0xMjBweCddfSBcbiAgICAgICAgICAgIG1iPXtbJy00MHB4JywgJy0xNDBweCcsICctMjAwcHgnXX1cbiAgICAgICAgICAgIHc9e1syODAsIDQ4MCwgNjQwXX1cbiAgICAgICAgICAgIGg9e1syODAsIDQ4MCwgNjQwXX1cbiAgICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICA+XG4gICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICAgIDxTcGlubmVyIFxuICAgICAgICAgICAgICAgIHNpemU9XCJ4bFwiIFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBcbiAgICAgICAgICAgICAgICBsZWZ0PVwiNTAlXCIgXG4gICAgICAgICAgICAgICAgdG9wPVwiNTAlXCIgXG4gICAgICAgICAgICAgICAgbWw9XCJjYWxjKDBweCAtIHZhcigtLXNwaW5uZXItc2l6ZSkgLyAyKVwiIFxuICAgICAgICAgICAgICAgIG10PVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpKVwiIFxuICAgICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgICAgIFBDXG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVm94ZWxQQyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiQm94IiwiU3Bpbm5lciIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJlYXNlT3V0Q2lyYyIsIngiLCJNYXRoIiwic3FydCIsInBvdyIsIlZveGVsUEMiLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJfY2FtZXJhIiwic2V0Q2FtZXJhIiwiVmVjdG9yMyIsInRhcmdldCIsInNpbiIsIlBJIiwiY29zIiwiaW5pdGlhbENhbWVyYVBvc2l0aW9uIiwiU2NlbmUiLCJzY2VuZSIsIl9jb250cm9scyIsInNldENvbnRyb2xzIiwiY3VycmVudCIsImNvbnRhaW5lciIsInNjVyIsImNsaWVudFdpZHRoIiwic2NIIiwiY2xpZW50SGVpZ2h0IiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwic2V0UGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJzZXRTaXplIiwib3V0cHV0RW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJzY2FsZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInBvc2l0aW9uIiwiY29weSIsImxvb2tBdCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsImNvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsInJlY2VpdmVTaGFkb3ciLCJjYXN0U2hhZG93IiwidGhlbiIsInJlZiIsImNsYXNzTmFtZSIsIm0iLCJhdCIsIm1iIiwidyIsImgiLCJzaXplIiwibGVmdCIsInRvcCIsIm1sIiwibXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/voxel-pc.js\n");

/***/ })

});