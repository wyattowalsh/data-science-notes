"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.areOptionsEqual = areOptionsEqual;
exports.flattenOptionGroups = flattenOptionGroups;
exports.getOptionsFromChildren = getOptionsFromChildren;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _useSelect = require("./useSelect.types");

function areOptionsEqual(option1, option2) {
  return option1.label === option2.label && option1.value === option2.value && option1.disabled === option2.disabled;
}

function getOptionsFromChildren(children) {
  if (children == null) {
    return [];
  }

  const selectChildren = [];

  _react.default.Children.forEach(children, node => {
    var _props, _props2, _element$props$disabl2;

    const nodeChildren = node == null ? void 0 : (_props = node.props) == null ? void 0 : _props.children;

    if ((node == null ? void 0 : (_props2 = node.props) == null ? void 0 : _props2.value) === undefined) {
      if (nodeChildren != null) {
        var _element$props$disabl;

        const element = node;
        const group = {
          options: getOptionsFromChildren(nodeChildren),
          label: element.props.label,
          disabled: (_element$props$disabl = element.props.disabled) != null ? _element$props$disabl : false
        };
        selectChildren.push(group);
      }

      return;
    }

    const element = node;
    const option = {
      value: element.props.value,
      label: element.props.children,
      disabled: (_element$props$disabl2 = element.props.disabled) != null ? _element$props$disabl2 : false
    };
    selectChildren.push(option);
  });

  return selectChildren != null ? selectChildren : [];
}

function flattenOptionGroups(groupedOptions, isGroupDisabled = false) {
  let flatOptions = [];
  groupedOptions.forEach(optionOrGroup => {
    if ((0, _useSelect.isOptionGroup)(optionOrGroup)) {
      flatOptions = flatOptions.concat(flattenOptionGroups(optionOrGroup.options, optionOrGroup.disabled));
    } else {
      flatOptions.push((0, _extends2.default)({}, optionOrGroup, {
        disabled: isGroupDisabled || optionOrGroup.disabled
      }));
    }
  });
  return flatOptions;
}