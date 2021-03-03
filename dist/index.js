"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (_ref) {
    var _options$rootSelector, _options$screenWidthV, _options$screenWidthD, _options$currentScree, _options$currentScree2, _options$paddingVar;

    var theme = _ref.theme,
        addBase = _ref.addBase,
        addUtilities = _ref.addUtilities;
    var screens = theme('container.screens', theme('screens')),
        padding = theme('container.padding', {}),
        rootSelector = (_options$rootSelector = options.rootSelector) !== null && _options$rootSelector !== void 0 ? _options$rootSelector : ':root',
        screenWidthVar = (_options$screenWidthV = options.screenWidthVar) !== null && _options$screenWidthV !== void 0 ? _options$screenWidthV : '--screen-width',
        screenWidthDefault = (_options$screenWidthD = options.screenWidthDefault) !== null && _options$screenWidthD !== void 0 ? _options$screenWidthD : theme('width.screen'),
        currentScreenVar = (_options$currentScree = options.currentScreenVar) !== null && _options$currentScree !== void 0 ? _options$currentScree : '--current-screen',
        currentScreenDefault = (_options$currentScree2 = options.currentScreenDefault) !== null && _options$currentScree2 !== void 0 ? _options$currentScree2 : screenWidthDefault,
        paddingVar = (_options$paddingVar = options.paddingVar) !== null && _options$paddingVar !== void 0 ? _options$paddingVar : '--container-padding',
        paddingDefault = typeof theme('container.padding') === 'string' ? theme('container.padding') : theme('container.padding.DEFAULT', theme('container.padding.default'));
    /* Base */

    var base = _defineProperty({}, rootSelector, Object.assign.apply(Object, [_defineProperty({}, screenWidthVar, screenWidthDefault), _defineProperty({}, currentScreenVar, currentScreenDefault), paddingDefault ? _defineProperty({}, paddingVar, paddingDefault) : {}].concat(_toConsumableArray(Object.entries(screens).map(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
          screenKey = _ref6[0],
          screenValue = _ref6[1];

      return _defineProperty({}, "@screen ".concat(screenKey), Object.assign(_defineProperty({}, currentScreenVar, screenValue), Object.keys(padding).includes(screenKey) ? _defineProperty({}, paddingVar, padding[screenKey]) : {}));
    })))));

    addBase(base);
    /* Margin */

    var mContainerPadding = "calc(var(".concat(paddingVar, ") / -1)"),
        mContainerMargin = "calc((var(".concat(screenWidthVar, ") - var(").concat(currentScreenVar, ")) / -2)"),
        mContainer = "calc((var(".concat(screenWidthVar, ") - var(").concat(currentScreenVar, ")) / -2 - var(").concat(paddingVar, "))");
    var m = {
      '.-m-container-padding': {
        margin: mContainerPadding
      },
      '.-ml-container-padding': {
        marginLeft: mContainerPadding
      },
      '.-mr-container-padding': {
        marginRight: mContainerPadding
      },
      '.-mt-container-padding': {
        marginTop: mContainerPadding
      },
      '.-mb-container-padding': {
        marginBottom: mContainerPadding
      },
      '.-mx-container-padding': {
        marginLeft: mContainerPadding,
        marginRight: mContainerPadding
      },
      '.-my-container-padding': {
        marginTop: mContainerPadding,
        marginBottom: mContainerPadding
      },
      '.-ml-container-margin': {
        marginLeft: mContainerMargin
      },
      '.-mr-container-margin': {
        marginRight: mContainerMargin
      },
      '.-mx-container-margin': {
        marginLeft: mContainerMargin,
        marginRight: mContainerMargin
      },
      '.-ml-container': {
        marginLeft: mContainer
      },
      '.-mr-container': {
        marginRight: mContainer
      },
      '.-mx-container': {
        marginLeft: mContainer,
        marginRight: mContainer
      }
    };
    addUtilities(m);
    /* Padding */

    var pContainerPadding = "var(".concat(paddingVar, ")"),
        pContainerMargin = "calc((var(".concat(screenWidthVar, ") - var(").concat(currentScreenVar, ")) / 2)"),
        pContainer = "calc((var(".concat(screenWidthVar, ") - var(").concat(currentScreenVar, ")) / 2 + var(").concat(paddingVar, "))");
    var p = {
      '.p-container-padding': {
        padding: pContainerPadding
      },
      '.pl-container-padding': {
        paddingLeft: pContainerPadding
      },
      '.pr-container-padding': {
        paddingRight: pContainerPadding
      },
      '.pt-container-padding': {
        paddingTop: pContainerPadding
      },
      '.pb-container-padding': {
        paddingBottom: pContainerPadding
      },
      '.px-container-padding': {
        paddingLeft: pContainerPadding,
        paddingRight: pContainerPadding
      },
      '.py-container-padding': {
        paddingTop: pContainerPadding,
        paddingBottom: pContainerPadding
      },
      '.pl-container-margin': {
        paddingLeft: pContainerMargin
      },
      '.pr-container-margin': {
        paddingRight: pContainerMargin
      },
      '.px-container-margin': {
        paddingLeft: pContainerMargin,
        paddingRight: pContainerMargin
      },
      '.pl-container': {
        paddingLeft: pContainer
      },
      '.pr-container': {
        paddingRight: pContainer
      },
      '.px-container': {
        paddingLeft: pContainer,
        paddingRight: pContainer
      }
    };
    addUtilities(p);
    /* Bleed */

    var b = {
      '.b-container-padding': {
        margin: mContainerPadding,
        padding: pContainerPadding
      },
      '.bl-container-padding': {
        marginLeft: mContainerPadding,
        paddingLeft: pContainerPadding
      },
      '.br-container-padding': {
        marginRight: mContainerPadding,
        paddingRight: pContainerPadding
      },
      '.bt-container-padding': {
        marginTop: mContainerPadding,
        paddingTop: pContainerPadding
      },
      '.bb-container-padding': {
        marginBottom: mContainerPadding,
        paddingBottom: pContainerPadding
      },
      '.bx-container-padding': {
        marginLeft: mContainerPadding,
        paddingLeft: pContainerPadding,
        marginRight: mContainerPadding,
        paddingRight: pContainerPadding
      },
      '.by-container-padding': {
        marginTop: mContainerPadding,
        paddingTop: pContainerPadding,
        marginBottom: mContainerPadding,
        paddingBottom: pContainerPadding
      },
      '.bl-container-margin': {
        marginLeft: mContainerMargin,
        paddingLeft: pContainerMargin
      },
      '.br-container-margin': {
        marginRight: mContainerMargin,
        paddingRight: pContainerMargin
      },
      '.bx-container-margin': {
        marginLeft: mContainerMargin,
        paddingLeft: pContainerMargin,
        marginRight: mContainerMargin,
        paddingRight: pContainerMargin
      },
      '.bl-container': {
        marginLeft: mContainer,
        paddingLeft: pContainer
      },
      '.br-container': {
        marginRight: mContainer,
        paddingRight: pContainer
      },
      '.bx-container': {
        marginLeft: mContainer,
        paddingLeft: pContainer,
        marginRight: mContainer,
        paddingRight: pContainer
      }
    };
    addUtilities(b);
  };
});