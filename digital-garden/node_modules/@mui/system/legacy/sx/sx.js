import styleFunctionSx from '../styleFunctionSx';

function sx(styles) {
  return function (_ref) {
    var theme = _ref.theme;
    return styleFunctionSx({
      sx: styles,
      theme: theme
    });
  };
}

export default sx;