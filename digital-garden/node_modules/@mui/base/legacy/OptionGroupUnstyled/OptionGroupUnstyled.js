import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import composeClasses from '../composeClasses';
import { getOptionGroupUnstyledUtilityClass } from './optionGroupUnstyledClasses';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function useUtilityClasses(disabled) {
  var slots = {
    root: ['root', disabled && 'disabled'],
    label: ['label'],
    list: ['list']
  };
  return composeClasses(slots, getOptionGroupUnstyledUtilityClass, {});
}
/**
 * An unstyled option group to be used within a SelectUnstyled.
 *
 * Demos:
 *
 * - [Selects](https://mui.com/components/selects/)
 *
 * API:
 *
 * - [OptionGroupUnstyled API](https://mui.com/api/option-group-unstyled/)
 */


var OptionGroupUnstyled = /*#__PURE__*/React.forwardRef(function OptionGroupUnstyled(props, ref) {
  var _componentsProps$root, _componentsProps$labe, _componentsProps$list;

  var className = props.className,
      component = props.component,
      _props$components = props.components,
      components = _props$components === void 0 ? {} : _props$components,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$componentsProp = props.componentsProps,
      componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
      other = _objectWithoutProperties(props, ["className", "component", "components", "disabled", "componentsProps"]);

  var Root = component || (components == null ? void 0 : components.Root) || 'li';
  var Label = (components == null ? void 0 : components.Label) || 'span';
  var List = (components == null ? void 0 : components.List) || 'ul';
  var classes = useUtilityClasses(disabled);

  var rootProps = _extends({}, other, {
    ref: ref
  }, componentsProps.root, {
    className: clsx(classes.root, className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className)
  });

  var labelProps = _extends({}, componentsProps.label, {
    className: clsx(classes.label, (_componentsProps$labe = componentsProps.label) == null ? void 0 : _componentsProps$labe.className)
  });

  var listProps = _extends({}, componentsProps.list, {
    className: clsx(classes.list, (_componentsProps$list = componentsProps.list) == null ? void 0 : _componentsProps$list.className)
  });

  return /*#__PURE__*/_jsxs(Root, _extends({}, rootProps, {
    children: [/*#__PURE__*/_jsx(Label, _extends({}, labelProps, {
      children: props.label
    })), /*#__PURE__*/_jsx(List, _extends({}, listProps, {
      children: props.children
    }))]
  }));
});
process.env.NODE_ENV !== "production" ? OptionGroupUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  children: PropTypes.node,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The component used for the Root slot.
   * Either a string to use a HTML element or a component.
   * This is equivalent to components.Root.
   * If both are provided, the component is used.
   */
  component: PropTypes.elementType,

  /**
   * The components used for each slot inside the OptionGroupUnstyled.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Label: PropTypes.elementType,
    List: PropTypes.elementType,
    Root: PropTypes.elementType
  }),

  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  componentsProps: PropTypes.shape({
    label: PropTypes.object,
    list: PropTypes.object,
    root: PropTypes.object
  }),

  /**
   * If `true` all the options in the group will be disabled.
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * The human-readable description of the group.
   */
  label: PropTypes.node
} : void 0;
export default OptionGroupUnstyled;