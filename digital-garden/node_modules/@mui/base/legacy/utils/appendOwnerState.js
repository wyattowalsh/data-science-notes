import _extends from "@babel/runtime/helpers/esm/extends";
import isHostComponent from './isHostComponent';
/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node, `ownerState` are not applied.
 * @param existingProps Props of the element.
 * @param ownerState
 */

export default function appendOwnerState(elementType) {
  var existingProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ownerState = arguments.length > 2 ? arguments[2] : undefined;

  if (isHostComponent(elementType)) {
    return existingProps;
  }

  return _extends({}, existingProps, {
    ownerState: _extends({}, existingProps.ownerState, ownerState)
  });
}