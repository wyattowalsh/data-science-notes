import { usePreviousProps } from '@mui/utils';
export default function useBadge(props) {
  var _props$anchorOrigin = props.anchorOrigin,
      anchorOriginProp = _props$anchorOrigin === void 0 ? {
    vertical: 'top',
    horizontal: 'right'
  } : _props$anchorOrigin,
      badgeContentProp = props.badgeContent,
      _props$invisible = props.invisible,
      invisibleProp = _props$invisible === void 0 ? false : _props$invisible,
      _props$max = props.max,
      maxProp = _props$max === void 0 ? 99 : _props$max,
      _props$showZero = props.showZero,
      showZero = _props$showZero === void 0 ? false : _props$showZero,
      _props$variant = props.variant,
      variantProp = _props$variant === void 0 ? 'standard' : _props$variant;
  var prevProps = usePreviousProps({
    anchorOrigin: anchorOriginProp,
    badgeContent: badgeContentProp,
    max: maxProp,
    variant: variantProp
  });
  var invisible = invisibleProp;

  if (invisibleProp === false && (badgeContentProp === 0 && !showZero || badgeContentProp == null && variantProp !== 'dot')) {
    invisible = true;
  }

  var _ref = invisible ? prevProps : props,
      _ref$anchorOrigin = _ref.anchorOrigin,
      anchorOrigin = _ref$anchorOrigin === void 0 ? anchorOriginProp : _ref$anchorOrigin,
      badgeContent = _ref.badgeContent,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? maxProp : _ref$max,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? variantProp : _ref$variant;

  var displayValue = '';

  if (variant !== 'dot') {
    displayValue = badgeContent && Number(badgeContent) > max ? "".concat(max, "+") : badgeContent;
  }

  return {
    anchorOrigin: anchorOrigin,
    badgeContent: badgeContent,
    invisible: invisible,
    max: max,
    variant: variant,
    displayValue: displayValue
  };
}