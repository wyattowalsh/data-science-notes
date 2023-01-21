import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["locale"];
import * as React from 'react';
import { parseISO } from 'date-fns';
import { createRenderer, fireEvent, screen } from 'test/utils';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider'; // TODO make possible to pass here any utils using cli

/**
 * Wrapper around `@date-io/date-fns` that resolves https://github.com/dmtrKovalenko/date-io/issues/479.
 * We're not using `adapter.date` in the implementation which means the implementation is safe.
 * But we do use it in tests where usage of ISO dates without timezone is problematic
 */

import { jsx as _jsx } from "react/jsx-runtime";
export class AdapterClassToUse extends AdapterDateFns {
  constructor(...args) {
    super(...args);

    this.date = value => {
      if (typeof value === 'string') {
        return parseISO(value);
      }

      if (typeof value === 'undefined') {
        return new Date();
      }

      if (value === null) {
        // @ts-expect-error AdapterDateFns#date says it returns NotNullable but that's not true
        return null;
      }

      return new Date(value);
    };
  }

}
export const adapterToUse = new AdapterClassToUse();
export const FakeTransitionComponent = /*#__PURE__*/React.forwardRef(function FakeTransitionComponent({
  children
}, ref) {
  // set tabIndex in case it is used as a child of <TrapFocus />
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    tabIndex: -1,
    children: children
  });
});
export function wrapPickerMount(mount) {
  return node => mount( /*#__PURE__*/_jsx(LocalizationProvider, {
    dateAdapter: AdapterClassToUse,
    children: node
  }));
}
export function createPickerRenderer(_ref = {}) {
  let {
    locale
  } = _ref,
      createRendererOptions = _objectWithoutPropertiesLoose(_ref, _excluded);

  const {
    clock,
    render: clientRender
  } = createRenderer(createRendererOptions);

  function Wrapper({
    children
  }) {
    return /*#__PURE__*/_jsx(LocalizationProvider, {
      locale: locale,
      dateAdapter: AdapterClassToUse,
      children: children
    });
  }

  return {
    clock,

    render(node, options) {
      return clientRender(node, _extends({}, options, {
        wrapper: Wrapper
      }));
    }

  };
}
export function openMobilePicker() {
  fireEvent.click(screen.getByRole('textbox'));
}