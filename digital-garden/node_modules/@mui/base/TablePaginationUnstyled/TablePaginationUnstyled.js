import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["component", "components", "componentsProps", "className", "colSpan", "count", "getItemAriaLabel", "labelDisplayedRows", "labelRowsPerPage", "onPageChange", "onRowsPerPageChange", "page", "rowsPerPage", "rowsPerPageOptions"];
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { unstable_useId as useId, chainPropTypes, integerPropType } from '@mui/utils';
import { appendOwnerState } from '../utils';
import composeClasses from '../composeClasses';
import isHostComponent from '../utils/isHostComponent';
import TablePaginationActionsUnstyled from './TablePaginationActionsUnstyled';
import { getTablePaginationUnstyledUtilityClass } from './tablePaginationUnstyledClasses';
import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { jsxs as _jsxs } from "react/jsx-runtime";

function defaultLabelDisplayedRows({
  from,
  to,
  count
}) {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}

function defaultGetAriaLabel(type) {
  return `Go to ${type} page`;
}

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
    toolbar: ['toolbar'],
    spacer: ['spacer'],
    selectLabel: ['selectLabel'],
    select: ['select'],
    input: ['input'],
    selectIcon: ['selectIcon'],
    menuItem: ['menuItem'],
    displayedRows: ['displayedRows'],
    actions: ['actions']
  };
  return composeClasses(slots, getTablePaginationUnstyledUtilityClass, {});
};
/**
 * A pagination for tables.
 *
 * Demos:
 *
 * - [Tables](https://mui.com/components/tables/)
 *
 * API:
 *
 * - [TablePaginationUnstyled API](https://mui.com/api/table-pagination-unstyled/)
 */


const TablePaginationUnstyled = /*#__PURE__*/React.forwardRef(function TablePaginationUnstyled(props, ref) {
  var _ref, _components$Select, _components$Actions, _components$MenuItem, _components$SelectLab, _components$Displayed, _components$Toolbar, _components$Spacer;

  const {
    component,
    components = {},
    componentsProps = {},
    className,
    colSpan: colSpanProp,
    count,
    getItemAriaLabel = defaultGetAriaLabel,
    labelDisplayedRows = defaultLabelDisplayedRows,
    labelRowsPerPage = 'Rows per page:',
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    rowsPerPageOptions = [10, 25, 50, 100]
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const ownerState = props;
  const classes = useUtilityClasses();
  let colSpan;

  if (!component || component === 'td' || !isHostComponent(component)) {
    colSpan = colSpanProp || 1000; // col-span over everything
  }

  const getLabelDisplayedRowsTo = () => {
    if (count === -1) {
      return (page + 1) * rowsPerPage;
    }

    return rowsPerPage === -1 ? count : Math.min(count, (page + 1) * rowsPerPage);
  };

  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : 'td';
  const rootProps = appendOwnerState(Root, _extends({}, other, componentsProps.root), ownerState);
  const Select = (_components$Select = components.Select) != null ? _components$Select : 'select';
  const selectProps = appendOwnerState(Select, _extends({}, componentsProps.select, {
    onChange: e => onRowsPerPageChange && onRowsPerPageChange(e)
  }), ownerState);
  const Actions = (_components$Actions = components.Actions) != null ? _components$Actions : TablePaginationActionsUnstyled;
  const actionsProps = appendOwnerState(Actions, _extends({
    page,
    rowsPerPage,
    count,
    onPageChange,
    getItemAriaLabel
  }, componentsProps.actions), ownerState);
  const MenuItem = (_components$MenuItem = components.MenuItem) != null ? _components$MenuItem : 'option';
  const menuItemProps = appendOwnerState(MenuItem, componentsProps.menuItem, ownerState);
  const SelectLabel = (_components$SelectLab = components.SelectLabel) != null ? _components$SelectLab : 'p';
  const selectLabelProps = appendOwnerState(SelectLabel, componentsProps.selectLabel, ownerState);
  const DisplayedRows = (_components$Displayed = components.DisplayedRows) != null ? _components$Displayed : 'p';
  const displayedRowsProps = appendOwnerState(DisplayedRows, componentsProps.displayedRows, ownerState);
  const Toolbar = (_components$Toolbar = components.Toolbar) != null ? _components$Toolbar : 'div';
  const toolbarProps = appendOwnerState(Toolbar, componentsProps.toolbar, ownerState);
  const Spacer = (_components$Spacer = components.Spacer) != null ? _components$Spacer : 'div';
  const spacerProps = appendOwnerState(Spacer, componentsProps.spacer, ownerState);
  const selectId = useId(selectProps.id);
  const labelId = useId(selectProps['aria-labelledby']);
  return /*#__PURE__*/_jsx(Root, _extends({
    colSpan: colSpan,
    ref: ref
  }, rootProps, {
    className: clsx(classes.root, rootProps.className, className),
    children: /*#__PURE__*/_jsxs(Toolbar, _extends({}, toolbarProps, {
      className: clsx(classes.toolbar, toolbarProps == null ? void 0 : toolbarProps.className),
      children: [/*#__PURE__*/_jsx(Spacer, _extends({}, spacerProps, {
        className: clsx(classes.spacer, spacerProps == null ? void 0 : spacerProps.className)
      })), rowsPerPageOptions.length > 1 && /*#__PURE__*/_jsx(SelectLabel, _extends({}, selectLabelProps, {
        className: clsx(classes.selectLabel, selectLabelProps == null ? void 0 : selectLabelProps.className),
        id: labelId,
        children: labelRowsPerPage
      })), rowsPerPageOptions.length > 1 && /*#__PURE__*/_jsx(Select, _extends({
        value: rowsPerPage,
        id: selectId
      }, selectProps, {
        "aria-label": rowsPerPage,
        "aria-labelledby": [labelId, selectId].filter(Boolean).join(' ') || undefined,
        className: clsx(classes.select, selectProps == null ? void 0 : selectProps.className),
        children: rowsPerPageOptions.map(rowsPerPageOption => /*#__PURE__*/_createElement(MenuItem, _extends({}, menuItemProps, {
          className: clsx(classes.menuItem, menuItemProps == null ? void 0 : menuItemProps.className),
          key: typeof rowsPerPageOption !== 'number' && rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption,
          value: typeof rowsPerPageOption !== 'number' && rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption
        }), typeof rowsPerPageOption !== 'number' && rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption))
      })), /*#__PURE__*/_jsx(DisplayedRows, _extends({}, displayedRowsProps, {
        className: clsx(classes.displayedRows, displayedRowsProps == null ? void 0 : displayedRowsProps.className),
        children: labelDisplayedRows({
          from: count === 0 ? 0 : page * rowsPerPage + 1,
          to: getLabelDisplayedRowsTo(),
          count: count === -1 ? -1 : count,
          page
        })
      })), /*#__PURE__*/_jsx(Actions, _extends({}, actionsProps, {
        className: clsx(classes.actions, actionsProps == null ? void 0 : actionsProps.className)
      }))]
    }))
  }));
});
process.env.NODE_ENV !== "production" ? TablePaginationUnstyled.propTypes
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
   * @ignore
   */
  colSpan: PropTypes.number,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * The components used for each slot inside the TablePagination.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Actions: PropTypes.elementType,
    DisplayedRows: PropTypes.elementType,
    MenuItem: PropTypes.elementType,
    Root: PropTypes.elementType,
    Select: PropTypes.elementType,
    SelectLabel: PropTypes.elementType,
    Spacer: PropTypes.elementType,
    Toolbar: PropTypes.elementType
  }),

  /**
   * The props used for each slot inside the TablePagination.
   * @default {}
   */
  componentsProps: PropTypes.shape({
    actions: PropTypes.object,
    displayedRows: PropTypes.object,
    menuItem: PropTypes.object,
    root: PropTypes.object,
    select: PropTypes.object,
    selectLabel: PropTypes.object,
    spacer: PropTypes.object,
    toolbar: PropTypes.object
  }),

  /**
   * The total number of rows.
   *
   * To enable server side pagination for an unknown number of items, provide -1.
   */
  count: PropTypes.number.isRequired,

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   * @param {string} type The link or button type to format ('first' | 'last' | 'next' | 'previous').
   * @returns {string}
   * @default function defaultGetAriaLabel(type: ItemAriaLabelType) {
   *   return `Go to ${type} page`;
   * }
   */
  getItemAriaLabel: PropTypes.func,

  /**
   * Customize the displayed rows label. Invoked with a `{ from, to, count, page }`
   * object.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   * @default function defaultLabelDisplayedRows({ from, to, count }: LabelDisplayedRowsArgs) {
   *   return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
   * }
   */
  labelDisplayedRows: PropTypes.func,

  /**
   * Customize the rows per page label.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   * @default 'Rows per page:'
   */
  labelRowsPerPage: PropTypes.node,

  /**
   * Callback fired when the page is changed.
   *
   * @param {React.MouseEvent<HTMLButtonElement> | null} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onPageChange: PropTypes.func.isRequired,

  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   */
  onRowsPerPageChange: PropTypes.func,

  /**
   * The zero-based index of the current page.
   */
  page: chainPropTypes(integerPropType.isRequired, props => {
    const {
      count,
      page,
      rowsPerPage
    } = props;

    if (count === -1) {
      return null;
    }

    const newLastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);

    if (page < 0 || page > newLastPage) {
      return new Error('MUI: The page prop of a TablePaginationUnstyled is out of range ' + `(0 to ${newLastPage}, but page is ${page}).`);
    }

    return null;
  }),

  /**
   * The number of rows per page.
   *
   * Set -1 to display all the rows.
   */
  rowsPerPage: integerPropType.isRequired,

  /**
   * Customizes the options of the rows per page select field. If less than two options are
   * available, no select field will be displayed.
   * Use -1 for the value with a custom label to show all the rows.
   * @default [10, 25, 50, 100]
   */
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  })]).isRequired)
} : void 0;
export default TablePaginationUnstyled;