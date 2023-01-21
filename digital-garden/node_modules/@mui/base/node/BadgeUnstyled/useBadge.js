"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useBadge;

var _utils = require("@mui/utils");

function useBadge(props) {
  const {
    anchorOrigin: anchorOriginProp = {
      vertical: 'top',
      horizontal: 'right'
    },
    badgeContent: badgeContentProp,
    invisible: invisibleProp = false,
    max: maxProp = 99,
    showZero = false,
    variant: variantProp = 'standard'
  } = props;
  const prevProps = (0, _utils.usePreviousProps)({
    anchorOrigin: anchorOriginProp,
    badgeContent: badgeContentProp,
    max: maxProp,
    variant: variantProp
  });
  let invisible = invisibleProp;

  if (invisibleProp === false && (badgeContentProp === 0 && !showZero || badgeContentProp == null && variantProp !== 'dot')) {
    invisible = true;
  }

  const {
    anchorOrigin = anchorOriginProp,
    badgeContent,
    max = maxProp,
    variant = variantProp
  } = invisible ? prevProps : props;
  let displayValue = '';

  if (variant !== 'dot') {
    displayValue = badgeContent && Number(badgeContent) > max ? `${max}+` : badgeContent;
  }

  return {
    anchorOrigin,
    badgeContent,
    invisible,
    max,
    variant,
    displayValue
  };
}