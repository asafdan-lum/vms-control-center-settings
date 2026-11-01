/* @ds-bundle: {"format":4,"namespace":"LumanaDesignSystem_1b2e75","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CardLine","sourcePath":"components/core/CardLine.jsx"},{"name":"FilterChip","sourcePath":"components/core/FilterChip.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Preloader","sourcePath":"components/core/Preloader.jsx"},{"name":"TagChip","sourcePath":"components/core/TagChip.jsx"},{"name":"Toggle","sourcePath":"components/core/Toggle.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Drawer","sourcePath":"components/data/Drawer.jsx"},{"name":"DrawerField","sourcePath":"components/data/Drawer.jsx"},{"name":"JsonViewer","sourcePath":"components/data/JsonViewer.jsx"},{"name":"Modal","sourcePath":"components/data/Modal.jsx"},{"name":"TableCard","sourcePath":"components/data/TableCard.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"ConfirmDialog","sourcePath":"components/feedback/ConfirmDialog.jsx"},{"name":"NoData","sourcePath":"components/feedback/NoData.jsx"},{"name":"SelectionSnackbar","sourcePath":"components/feedback/SelectionSnackbar.jsx"},{"name":"Toaster","sourcePath":"components/feedback/Toaster.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Counter","sourcePath":"components/forms/Counter.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"OptionToggle","sourcePath":"components/forms/OptionToggle.jsx"},{"name":"Search","sourcePath":"components/forms/Search.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Dropdown","sourcePath":"components/navigation/Dropdown.jsx"},{"name":"HeaderBar","sourcePath":"components/navigation/HeaderBar.jsx"},{"name":"SegmentTabs","sourcePath":"components/navigation/SegmentTabs.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"Submenu","sourcePath":"components/navigation/Submenu.jsx"},{"name":"CameraCard","sourcePath":"components/video/CameraCard.jsx"},{"name":"CameraControls","sourcePath":"components/video/CameraControls.jsx"},{"name":"DeviceStatus","sourcePath":"components/video/DeviceStatus.jsx"},{"name":"Occupancy","sourcePath":"components/video/Occupancy.jsx"},{"name":"PersonTile","sourcePath":"components/video/PersonTile.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"3e266a6a62c7","components/core/Badge.jsx":"7aefe9e1db90","components/core/Button.jsx":"0a5cdad079e3","components/core/CardLine.jsx":"f00fd58edb5a","components/core/FilterChip.jsx":"cef3a8d1ebb6","components/core/IconButton.jsx":"dab8b32fed0c","components/core/Preloader.jsx":"1fa6f01faf42","components/core/TagChip.jsx":"bcb27de30f77","components/core/Toggle.jsx":"4cdfc624a8bb","components/data/DataTable.jsx":"2a8bbe8b8208","components/data/Drawer.jsx":"7d93ac40e80c","components/data/JsonViewer.jsx":"630ed112cfd1","components/data/Modal.jsx":"44d568cd6b6e","components/data/TableCard.jsx":"329ad6a6059b","components/feedback/Alert.jsx":"e1bf8d148735","components/feedback/ConfirmDialog.jsx":"d15754e7b602","components/feedback/NoData.jsx":"732e0bc20fb8","components/feedback/SelectionSnackbar.jsx":"981d265b1862","components/feedback/Toaster.jsx":"15119ea77147","components/forms/Checkbox.jsx":"f76b7b691f02","components/forms/Counter.jsx":"3ec807ada281","components/forms/Input.jsx":"7f9f3f67784f","components/forms/OptionToggle.jsx":"30aadb32a695","components/forms/Search.jsx":"7f9b4346103f","components/forms/Select.jsx":"07b071b2bc36","components/navigation/Dropdown.jsx":"0d3e136479f1","components/navigation/HeaderBar.jsx":"a621fa7a407b","components/navigation/SegmentTabs.jsx":"8d1dcc00abd3","components/navigation/Sidebar.jsx":"04ad151173ef","components/navigation/Submenu.jsx":"f706c056c422","components/video/CameraCard.jsx":"a1634f80214c","components/video/CameraControls.jsx":"472a2cf4f665","components/video/DeviceStatus.jsx":"355ba8340dad","components/video/Occupancy.jsx":"d94d159d0b30","components/video/PersonTile.jsx":"82fc2e0eac60","ui_kits/lumana-cloud/AlertsScreen.jsx":"f5aaa2fec8b1","ui_kits/lumana-cloud/DevicesScreen.jsx":"bbe10bbb04b4","ui_kits/lumana-cloud/SearchScreen.jsx":"6815c5413385","ui_kits/lumana-cloud/WallScreen.jsx":"93f416d7046a","ui_kits/lumana-cloud/shell.jsx":"96f0a17ec946"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LumanaDesignSystem_1b2e75 = window.LumanaDesignSystem_1b2e75 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
const AVATAR_COLORS = ['#4367f6', '#748ced', '#22c55e', '#f59e0b', '#ec4899', '#14b8a6', '#8b5cf6', '#ef4444'];
function initials(name) {
  if (!name) return '';
  const parts = String(name).trim().split(/[\s@._-]+/).filter(Boolean);
  return ((parts[0]?.[0] || '') + (parts[1]?.[0] || '')).toUpperCase();
}

/** Circular user/organization avatar. Mirrors <ui-avatar>. */
function Avatar({
  name,
  image,
  size = 30,
  fontSize,
  color,
  external = false,
  style
}) {
  const bg = color || (external ? 'var(--color-background-external-user-icon)' : AVATAR_COLORS[(name || '').length % AVATAR_COLORS.length]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      flexShrink: 0,
      ...style
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name || 'avatar',
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '1px solid white',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: bg,
      color: '#fff',
      fontSize: fontSize || Math.round(size * 0.4),
      fontWeight: 500,
      textTransform: 'uppercase'
    }
  }, initials(name)));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const BADGE_TONES = {
  neutral: {
    bg: 'var(--color-elevation-surface-subtlest)',
    color: 'var(--color-text-subtle)'
  },
  success: {
    bg: 'var(--color-background-success-default)',
    color: 'var(--color-text-success-default)'
  },
  warning: {
    bg: 'var(--color-background-warning-default)',
    color: 'var(--color-icon-warning)'
  },
  alert: {
    bg: 'var(--color-background-error-default)',
    color: 'var(--color-text-alert-default)'
  },
  info: {
    bg: 'var(--color-background-information-default)',
    color: 'var(--color-text-primary-default)'
  }
};

/** Small status pill. Mirrors <ui-badge>. */
function Badge({
  tone = 'neutral',
  children,
  style
}) {
  const t = BADGE_TONES[tone] || BADGE_TONES.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '2px 8px',
      borderRadius: 'var(--radius-10)',
      fontSize: 11,
      fontWeight: 600,
      lineHeight: 1.5,
      whiteSpace: 'nowrap',
      background: t.bg,
      color: t.color,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BTN_SIZES = {
  s: {
    h: 32,
    pad: '2px 16px',
    iconPad: '4px 7px',
    icon: 16,
    font: 'm'
  },
  m: {
    h: 38,
    pad: '8px 16px',
    iconPad: '8px 9px',
    icon: 20,
    font: 'm'
  },
  l: {
    h: 46,
    pad: '12px 16px',
    iconPad: '12px 11px',
    icon: 24,
    font: 'l'
  }
};
const BTN_TYPES = {
  primary: {
    bg: 'var(--color-background-button-primary-default)',
    border: 'var(--color-border-button-primary-default)',
    color: 'var(--color-text-inverse)',
    hoverBg: 'var(--color-background-button-primary-hover)',
    hoverBorder: 'var(--color-border-button-primary-hover)'
  },
  default: {
    bg: 'var(--color-background-button-default-default)',
    border: 'var(--color-border-button-default-default)',
    color: 'var(--color-text-default)',
    hoverBg: 'var(--color-background-button-default-hover)',
    hoverBorder: 'var(--color-border-button-default-hover)'
  },
  secondary: {
    bg: 'var(--color-background-button-secondary-default)',
    border: 'var(--color-border-button-primary-deafult)',
    color: 'var(--color-text-primary-default)',
    hoverBg: 'var(--color-background-button-secondary-hover)',
    hoverBorder: 'var(--color-border-button-primary-hover)'
  },
  danger: {
    bg: 'var(--color-elevation-surface-default)',
    border: 'var(--color-border-button-tertiary-caution-default)',
    color: 'var(--color-text-alert-default)',
    hoverBg: 'var(--color-background-button-tetriary-caution-hover)',
    hoverBorder: 'var(--color-border-button-tertiary-caution-hover)'
  },
  noBorderPrimary: {
    bg: 'transparent',
    border: 'transparent',
    color: 'var(--color-text-primary)',
    hoverBg: 'var(--color-background-button-tertiary-color-hover)',
    hoverBorder: 'transparent'
  },
  noBorderDefault: {
    bg: 'transparent',
    border: 'transparent',
    color: 'var(--color-text-default)',
    hoverBg: 'var(--color-background-button-tertiary-gray-hover)',
    hoverBorder: 'transparent'
  }
};

/** Lumana's single button. Mirrors <ui-button> from the Angular ui-kit. */
function Button({
  text,
  children,
  type = 'primary',
  size = 's',
  iconClass,
  disabled = false,
  loading = false,
  rounded = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const t = BTN_TYPES[type] || BTN_TYPES.primary;
  const s = BTN_SIZES[size] || BTN_SIZES.s;
  const label = text ?? children;
  const iconOnly = !!iconClass && !label;
  const off = disabled || loading;
  const on = hover && !off;
  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: label ? 8 : 0,
    boxSizing: 'border-box',
    height: s.h,
    minHeight: s.h,
    padding: iconOnly ? s.iconPad : s.pad,
    width: iconOnly ? s.h : undefined,
    fontFamily: 'var(--font-sans)',
    fontSize: `var(--ui-font-${s.font}-size)`,
    fontWeight: `var(--ui-font-${s.font}-weight)`,
    lineHeight: `var(--ui-font-${s.font}-height)`,
    whiteSpace: 'nowrap',
    userSelect: 'none',
    cursor: off ? 'default' : 'pointer',
    borderRadius: rounded && iconOnly ? '50%' : 'var(--radius-4)',
    border: '1px solid ' + (on ? t.hoverBorder : t.border),
    background: on ? t.hoverBg : t.bg,
    color: t.color,
    opacity: off ? 0.32 : 1,
    pointerEvents: off ? 'none' : 'auto',
    transition: 'background var(--motion-base), border-color var(--motion-base)',
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: buttonStyle,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: off ? undefined : onClick,
    disabled: off
  }, rest), loading ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: s.icon,
      height: s.icon,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      animation: 'lumana-spin 0.8s linear infinite'
    }
  }) : iconClass ? /*#__PURE__*/React.createElement("span", {
    className: iconClass,
    style: {
      fontSize: s.icon,
      width: s.icon,
      height: s.icon,
      color: 'inherit'
    }
  }) : null, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'inherit'
    }
  }, label) : null, /*#__PURE__*/React.createElement("style", null, '@keyframes lumana-spin{to{transform:rotate(360deg)}}'));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CardLine.jsx
try { (() => {
/** A 13px icon + truncated text metadata line inside a card. Mirrors <ui-card-line>. */
function CardLine({
  icon,
  children,
  copyable = false,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      minWidth: 0,
      fontSize: 13,
      color: 'var(--color-text-subtle)',
      cursor: copyable ? 'pointer' : 'inherit',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: icon,
    style: {
      fontSize: 14,
      color: 'var(--color-icon-subtle)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, children));
}
Object.assign(__ds_scope, { CardLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CardLine.jsx", error: String((e && e.message) || e) }); }

// components/core/FilterChip.jsx
try { (() => {
/** Square-ish blue filter chip shown under a filter bar. Mirrors <ui-filter-chip>. */
function FilterChip({
  title,
  allowDelete = true,
  onRemove,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '2px 8px',
      borderRadius: 'var(--radius-4)',
      border: '1px solid var(--color-background-accent-primary-subtle)',
      background: 'var(--color-background-accent-primary-subtle)',
      cursor: allowDelete ? 'pointer' : 'default',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ui-font-s-size)',
      fontWeight: 'var(--ui-font-s-weight)',
      lineHeight: 'var(--ui-font-s-height)',
      color: 'var(--color-text-accent-primary)',
      whiteSpace: 'nowrap'
    }
  }, title), allowDelete && /*#__PURE__*/React.createElement("span", {
    className: "ui-icon-close",
    style: {
      fontSize: 12,
      width: 12,
      height: 12,
      color: 'var(--color-icon-primary-default)'
    },
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    }
  }));
}
Object.assign(__ds_scope, { FilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FilterChip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A bordered or borderless square icon control. Mirrors the `.ui-icon-button` class. */
function IconButton({
  iconClass,
  tone = 'default',
  size = 16,
  noBorder = false,
  active = false,
  disabled = false,
  onClick,
  title,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: {
      color: 'var(--color-icon-default)',
      border: 'var(--color-border-button-default-default)',
      bg: 'transparent'
    },
    primary: {
      color: 'var(--color-icon-primary-default)',
      border: 'var(--color-border-button-primary-deafult)',
      bg: 'transparent'
    },
    primaryFull: {
      color: 'var(--color-primary-white)',
      border: 'var(--color-border-button-primary-deafult)',
      bg: 'var(--color-background-button-primary-default)'
    },
    alert: {
      color: 'var(--color-text-alert-default)',
      border: 'var(--color-border-button-tertiary-caution-default)',
      bg: 'transparent'
    }
  };
  const t = tones[tone] || tones.default;
  const iconButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: noBorder ? 9 : 8,
    borderRadius: 'var(--radius-4)',
    border: noBorder ? 'none' : '1px solid ' + t.border,
    background: active ? 'var(--color-background-selected-active)' : hover && !disabled ? tone === 'primaryFull' ? 'var(--color-border-button-primary-pressed)' : 'var(--color-background-button-tertiary-gray-hover)' : t.bg,
    color: t.color,
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.32 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    transition: 'background var(--motion-base)',
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "button",
    title: title,
    style: iconButtonStyle,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: disabled ? undefined : onClick
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: iconClass,
    style: {
      fontSize: size,
      width: size,
      height: size,
      color: 'inherit'
    }
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Preloader.jsx
try { (() => {
const PRELOADER_SRC = {
  blue: 'assets/preloader/blue.svg',
  gray: 'assets/preloader/gray.svg',
  white: 'assets/preloader/white.svg',
  red: 'assets/preloader/red.svg'
};

/** The brand spinner. Mirrors <ui-preloader>; uses the real SVG assets. */
function Preloader({
  color = 'blue',
  diameter = 36,
  assetBase = '',
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: assetBase + (PRELOADER_SRC[color] || PRELOADER_SRC.blue),
    alt: "",
    width: diameter,
    height: diameter,
    style: {
      display: 'block',
      animation: 'lumana-spin 1s linear infinite',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Preloader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Preloader.jsx", error: String((e && e.message) || e) }); }

// components/core/TagChip.jsx
try { (() => {
/** Fully-rounded grey tag chip for user-defined tags. Mirrors <ui-tag-chip>. */
function TagChip({
  title,
  color,
  allowDelete = false,
  onRemove,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '2px 8px',
      borderRadius: 'var(--radius-24)',
      background: color || 'var(--color-secondary-gray-600)',
      cursor: allowDelete ? 'pointer' : 'default',
      maxWidth: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ui-font-s-size)',
      fontWeight: 'var(--ui-font-s-weight)',
      lineHeight: 'var(--ui-font-s-height)',
      color: 'var(--color-primary-white)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, title), allowDelete && /*#__PURE__*/React.createElement("span", {
    className: "ui-icon-close",
    style: {
      fontSize: 12,
      width: 12,
      height: 12,
      color: 'var(--color-primary-white)'
    },
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    }
  }));
}
Object.assign(__ds_scope, { TagChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TagChip.jsx", error: String((e && e.message) || e) }); }

// components/core/Toggle.jsx
try { (() => {
/** 34x24 switch. Mirrors <ui-toggle> — note the ON state is GREEN, not brand blue. */
function Toggle({
  value = false,
  disabled = false,
  onChange,
  style
}) {
  const [internal, setInternal] = React.useState(value);
  const on = onChange ? value : internal;
  const toggle = () => {
    if (disabled) return;
    if (onChange) onChange(!value);else setInternal(!internal);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      position: 'relative',
      display: 'inline-block',
      width: 34,
      height: 24,
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? 'default' : 'pointer',
      ...style
    },
    onClick: toggle
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 20,
      background: on ? '#22c55e' : 'var(--color-background-input-default)',
      border: '1px solid ' + (on ? 'rgb(76,160,84)' : 'var(--color-border-input-default)'),
      transition: '0.2s var(--easing)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 2,
      bottom: 3,
      height: 14,
      width: 14,
      borderRadius: '50%',
      background: on ? 'var(--color-icon-inverse)' : 'var(--color-background-neutral-default-200700)',
      border: '1px solid ' + (on ? 'var(--color-icon-inverse)' : 'var(--color-background-neutral-default-200700)'),
      transform: on ? 'translateX(12px)' : 'none',
      transition: '0.2s var(--easing)'
    }
  }));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
/** The product's table. Mirrors `.ui-table` (and `.ui-table.spaced` for card-like rows). */
function DataTable({
  columns = [],
  rows = [],
  spaced = false,
  rowHeight = 72,
  hideHeader,
  onRowClick,
  style
}) {
  const [hoverIdx, setHoverIdx] = React.useState(null);
  const noLabels = columns.every(c => c.label == null || c.label === '');
  const showHeader = hideHeader != null ? !hideHeader : !noLabels;
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: spaced ? 'separate' : 'collapse',
      borderSpacing: spaced ? '0 10px' : 0,
      border: spaced ? 'none' : '1px solid var(--color-border-default)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, showHeader && /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      width: c.width,
      padding: '12px 16px',
      textAlign: c.align || 'left',
      color: 'var(--color-text-subtle)',
      background: 'var(--color-elevation-surface-subtle)',
      borderTop: '1px solid var(--color-border-default)',
      borderBottom: '1px solid var(--color-border-default)',
      fontSize: 'var(--ui-font-s-size)',
      fontWeight: 'var(--ui-font-s-weight)',
      lineHeight: 'var(--ui-font-s-height)'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id ?? i,
    onMouseEnter: () => setHoverIdx(i),
    onMouseLeave: () => setHoverIdx(null),
    onClick: () => onRowClick && onRowClick(r),
    style: {
      background: hoverIdx === i && !spaced ? 'var(--color-elevation-surface-subtlest)' : 'transparent',
      boxShadow: spaced && hoverIdx === i ? 'var(--shadow-md)' : 'none',
      cursor: onRowClick ? 'pointer' : 'default'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      height: rowHeight,
      padding: '0 16px',
      textAlign: c.align || 'left',
      color: 'var(--color-text-default)',
      fontSize: 'var(--ui-font-xm-size)',
      lineHeight: 'var(--ui-font-xm-height)',
      borderBottom: '1px solid var(--color-border-default)',
      borderTop: spaced ? '1px solid var(--color-border-default)' : undefined
    }
  }, c.render ? c.render(r) : r[c.key]))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/Drawer.jsx
try { (() => {
const DRAWER_MIN = 400;
const DRAWER_GUTTER = 120;
const handleBar = {
  width: 2,
  height: 16,
  borderRadius: 1,
  background: 'var(--color-primary-white)'
};

/** Right-side resizable drawer. Mirrors the access_control reference drawer (Drawer.dc.html). */
function Drawer({
  title,
  tabs,
  activeTab,
  onTabChange,
  children,
  footer,
  width = 560,
  onClose,
  onSave,
  saveText = 'Save',
  cancelText = 'Cancel',
  style
}) {
  const ref = React.useRef(null);
  const endRef = React.useRef(null);
  const [w, setW] = React.useState(null);
  const [tabLocal, setTabLocal] = React.useState(0);
  const tab = activeTab ?? tabLocal;
  const [hClose, setHClose] = React.useState(false);
  const [hHandle, setHHandle] = React.useState(false);
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      endRef.current && endRef.current();
    };
  }, [onClose]);
  const startResize = e => {
    e.preventDefault();
    const el = ref.current;
    if (!el) return;
    const right = el.getBoundingClientRect().right;
    const max = (el.parentElement?.getBoundingClientRect().width || 1200) - DRAWER_GUTTER;
    const move = ev => setW(Math.max(DRAWER_MIN, Math.min(max, right - ev.clientX)));
    const end = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', end);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      endRef.current = null;
    };
    endRef.current = end;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', end);
  };
  const selectTab = i => {
    setTabLocal(i);
    onTabChange && onTabChange(i);
  };
  const tabList = tabs || [];
  const footerNode = footer === undefined ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    text: cancelText,
    type: "default",
    size: "m",
    onClick: onClose
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    text: saveText,
    type: "primary",
    size: "m",
    onClick: onSave
  })) : footer;
  return /*#__PURE__*/React.createElement("aside", {
    ref: ref,
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: 10,
      width: w ?? width,
      minWidth: DRAWER_MIN,
      maxWidth: `calc(100% - ${DRAWER_GUTTER}px)`,
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      background: 'var(--color-elevation-surface-default)',
      borderLeft: '1px solid var(--color-border-default)',
      boxShadow: 'var(--shadow-md)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--color-text-default)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    title: "Close",
    onClick: onClose,
    onMouseEnter: () => setHClose(true),
    onMouseLeave: () => setHClose(false),
    style: {
      position: 'absolute',
      top: 8,
      left: -44,
      width: 32,
      height: 32,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      background: 'var(--color-secondary-gray-600)',
      color: 'var(--color-primary-white)',
      transition: 'opacity .3s',
      opacity: hClose ? 0.85 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ui-icon-close",
    style: {
      fontSize: 16
    }
  })), /*#__PURE__*/React.createElement("div", {
    title: "Drag to resize",
    onMouseDown: startResize,
    onMouseEnter: () => setHHandle(true),
    onMouseLeave: () => setHHandle(false),
    style: {
      position: 'absolute',
      top: '50%',
      left: -35,
      width: 14,
      height: 40,
      marginTop: -20,
      boxSizing: 'border-box',
      borderRadius: 7,
      background: 'var(--color-secondary-gray-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      cursor: 'col-resize',
      zIndex: 1,
      transition: 'opacity .3s',
      opacity: hHandle ? 0.85 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: handleBar
  }), /*#__PURE__*/React.createElement("div", {
    style: handleBar
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexShrink: 0,
      height: 49,
      boxSizing: 'border-box',
      padding: '0 24px',
      borderBottom: '1px solid var(--color-border-default)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 500
    }
  }, title)), tabList.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexShrink: 0,
      padding: '0 24px',
      borderBottom: '1px solid var(--color-border-default)'
    }
  }, tabList.map((label, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => selectTab(i),
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 44,
      cursor: 'pointer',
      fontSize: 14,
      lineHeight: '24px',
      fontWeight: 500,
      color: tab === i ? 'var(--color-icon-primary-default)' : 'var(--color-text-default)',
      boxShadow: tab === i ? 'inset 0 -3px 0 var(--color-border-selected-default)' : 'none',
      transition: 'color .3s'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, typeof children === 'function' ? children(tab) : children), footerNode && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      flexShrink: 0,
      padding: '16px 24px',
      borderTop: '1px solid var(--color-border-default)'
    }
  }, footerNode));
}

/** Labelled field group for a Drawer body: 12/20/500 subtle label, 8px above the control. */
function DrawerField({
  label,
  required = false,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      lineHeight: '20px',
      fontWeight: 500,
      color: 'var(--color-text-subtle)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-accent-red)'
    }
  }, " *")), children);
}
Object.assign(__ds_scope, { Drawer, DrawerField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/data/JsonViewer.jsx
try { (() => {
/** Read-only mono block for payloads and webhook bodies. Mirrors <ui-json-viewer>. */
function JsonViewer({
  value,
  maxHeight = 320,
  style
}) {
  const text = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
  return /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      maxHeight,
      overflow: 'auto',
      padding: 12,
      borderRadius: 'var(--radius-4)',
      border: '1px solid var(--color-border-default)',
      background: 'var(--color-elevation-surface-subtle)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      lineHeight: '20px',
      color: 'var(--color-text-default)',
      whiteSpace: 'pre',
      ...style
    }
  }, text);
}
Object.assign(__ds_scope, { JsonViewer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/JsonViewer.jsx", error: String((e && e.message) || e) }); }

// components/data/Modal.jsx
try { (() => {
/** header / body / footer modal shell. Mirrors `.ui-modal`. */
function Modal({
  title,
  children,
  footer,
  width = 640,
  compact = false,
  onClose,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      width,
      maxWidth: '100%',
      maxHeight: compact ? '90vh' : '100%',
      background: 'var(--color-elevation-surface-overlay-default)',
      border: '1px solid var(--color-border-default)',
      borderRadius: 'var(--radius-4)',
      boxShadow: 'var(--shadow-md)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '16px 24px',
      borderBottom: '1px solid var(--color-border-default)',
      background: 'var(--color-elevation-surface-overlay-default)',
      fontSize: 'var(--ui-font-m-size)',
      fontWeight: 'var(--ui-font-m-weight)',
      lineHeight: 'var(--ui-font-m-height)',
      color: 'var(--color-text-default)'
    }
  }, /*#__PURE__*/React.createElement("span", null, title), onClose && /*#__PURE__*/React.createElement("span", {
    className: "ui-icon-close",
    onClick: onClose,
    style: {
      fontSize: 16,
      cursor: 'pointer',
      color: 'var(--color-icon-default)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 auto',
      overflowY: 'auto',
      padding: 24,
      background: 'var(--color-elevation-surface-overlay-darker)',
      borderBottom: footer ? '1px solid var(--color-border-default)' : 'none'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      padding: '20px 24px',
      background: 'var(--color-elevation-surface-overlay-default)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Modal.jsx", error: String((e && e.message) || e) }); }

// components/data/TableCard.jsx
try { (() => {
/** Mobile row-as-card: title line + trailing controls, then metadata lines. Mirrors <ui-table-card>. */
function TableCard({
  title,
  trailing,
  children,
  onDetails,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      padding: 12,
      borderRadius: 'var(--radius-4)',
      border: '1px solid var(--color-border-default)',
      background: 'var(--color-elevation-surface-default)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      color: 'var(--color-text-bold)',
      fontSize: 14,
      fontWeight: 600
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexShrink: 0
    }
  }, trailing, onDetails && /*#__PURE__*/React.createElement("span", {
    className: "ui-icon-keyboard-arrow-right",
    onClick: onDetails,
    style: {
      fontSize: 18,
      color: 'var(--color-icon-subtle)',
      cursor: 'pointer'
    }
  }))), children);
}
Object.assign(__ds_scope, { TableCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TableCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const ALERT_TYPES = {
  info: {
    bg: 'var(--color-primary-50)',
    border: 'var(--color-primary-500)',
    title: 'black',
    desc: 'black',
    icon: 'var(--color-primary-500)',
    glyph: 'ui-icon-info'
  },
  success: {
    bg: '#ecfdf5',
    border: '#22c55e',
    title: '#065f46',
    desc: '#047857',
    icon: '#34d399',
    glyph: 'ui-icon-checkmark'
  },
  warning: {
    bg: '#fffbeb',
    border: '#d5a11b',
    title: '#92400e',
    desc: '#b45309',
    icon: '#fbbf24',
    glyph: 'ui-icon-warning'
  },
  error: {
    bg: '#fef2f2',
    border: '#ef4444',
    title: '#991b1b',
    desc: '#b91c1c',
    icon: '#f87171',
    glyph: 'ui-icon-cross'
  }
};

/** Inline message block with a 3px left accent. Mirrors <ui-alert>. */
function Alert({
  type = 'info',
  title,
  children,
  closable = false,
  onClose,
  style
}) {
  const t = ALERT_TYPES[type] || ALERT_TYPES.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box',
      width: '100%',
      padding: '15px 20px',
      borderRadius: 'var(--radius-4)',
      border: '1px solid ' + t.border,
      borderLeft: '3px solid ' + t.border,
      background: t.bg,
      fontWeight: 500,
      fontSize: 14,
      lineHeight: '20px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: t.glyph,
    style: {
      fontSize: 20,
      fontWeight: 'bold',
      color: t.icon
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 16,
      wordBreak: 'break-word'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      color: t.title
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: t.desc,
      marginTop: title ? 8 : 0
    }
  }, children))), closable && /*#__PURE__*/React.createElement("span", {
    className: "ui-icon-close",
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 4,
      right: 4,
      padding: 8,
      fontSize: 16,
      cursor: 'pointer',
      color: t.icon
    }
  }));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ConfirmDialog.jsx
try { (() => {
/** Small centred confirm modal. Mirrors <ui-confirm-dialog>. */
function ConfirmDialog({
  title,
  children,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  tone = 'primary',
  onConfirm,
  onCancel,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 440,
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--color-elevation-surface-overlay-default)',
      border: '1px solid var(--color-border-default)',
      borderRadius: 'var(--radius-4)',
      boxShadow: 'var(--shadow-md)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 24px',
      fontSize: 'var(--ui-font-m-size)',
      fontWeight: 'var(--ui-font-m-weight)',
      lineHeight: 'var(--ui-font-m-height)',
      color: 'var(--color-text-default)',
      borderBottom: '1px solid var(--color-border-default)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: 'var(--color-elevation-surface-overlay-darker)',
      color: 'var(--color-text-subtle)',
      fontSize: 'var(--ui-font-xm-size)',
      lineHeight: 'var(--ui-font-xm-height)'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      padding: '20px 24px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "default",
    text: cancelText,
    onClick: onCancel
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: tone === 'danger' ? 'danger' : 'primary',
    text: confirmText,
    onClick: onConfirm
  })));
}
Object.assign(__ds_scope, { ConfirmDialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ConfirmDialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/NoData.jsx
try { (() => {
/** The empty state used by every list view. Mirrors <ui-no-data>. */
function NoData({
  imgSrc,
  title,
  description,
  createButtonText,
  secondaryButtonText,
  onCreate,
  onSecondary,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, imgSrc && /*#__PURE__*/React.createElement("img", {
    src: imgSrc,
    alt: "",
    style: {
      width: 140,
      height: 120,
      marginBottom: 24,
      objectFit: 'contain'
    }
  }), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 500,
      color: 'var(--color-text-subtle)',
      margin: '0 0 4px',
      textAlign: 'center'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: '24px',
      maxWidth: 490,
      textAlign: 'center',
      color: 'var(--color-text-subtle)'
    }
  }, description), (createButtonText || secondaryButtonText) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 20
    }
  }, secondaryButtonText && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "default",
    size: "m",
    text: secondaryButtonText,
    onClick: onSecondary
  }), createButtonText && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "primary",
    size: "m",
    text: createButtonText,
    onClick: onCreate
  })), children));
}
Object.assign(__ds_scope, { NoData });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/NoData.jsx", error: String((e && e.message) || e) }); }

// components/feedback/SelectionSnackbar.jsx
try { (() => {
/** Dark floating bar shown when table rows are selected. Mirrors <ui-selected-items-snackbar>. */
function SelectionSnackbar({
  count,
  itemLabel = 'items',
  actions = [],
  onClear,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 16,
      padding: '10px 12px 10px 16px',
      borderRadius: 'var(--radius-4)',
      background: 'var(--color-background-neutral-bolder)',
      boxShadow: 'var(--shadow-md)',
      color: '#fff',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ui-font-m-size)',
      fontWeight: 'var(--ui-font-m-weight)',
      whiteSpace: 'nowrap'
    }
  }, count, " ", itemLabel, " selected"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, actions.map(a => /*#__PURE__*/React.createElement("span", {
    key: a.label,
    onClick: a.onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      borderRadius: 'var(--radius-4)',
      fontSize: 'var(--ui-font-s-size)',
      fontWeight: 'var(--ui-font-s-weight)',
      color: a.tone === 'danger' ? '#fca5a5' : '#fff',
      cursor: 'pointer'
    }
  }, a.icon && /*#__PURE__*/React.createElement("span", {
    className: a.icon,
    style: {
      fontSize: 14,
      color: 'inherit'
    }
  }), a.label)), /*#__PURE__*/React.createElement("span", {
    className: "ui-icon-close",
    onClick: onClear,
    style: {
      fontSize: 14,
      marginLeft: 4,
      cursor: 'pointer',
      color: '#98a2b3'
    }
  })));
}
Object.assign(__ds_scope, { SelectionSnackbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/SelectionSnackbar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toaster.jsx
try { (() => {
const TOASTER_TYPES = {
  info: {
    border: 'var(--color-border-info)',
    bg: 'var(--color-background-information-default)',
    inset: 'var(--inset-accent-info)',
    color: 'var(--color-icon-info)',
    glyph: 'ui-icon-info'
  },
  success: {
    border: 'var(--color-border-success-default)',
    bg: 'var(--color-background-success-default)',
    inset: 'var(--inset-accent-success)',
    color: 'var(--color-icon-success)',
    glyph: 'ui-icon-checkmark'
  },
  warning: {
    border: 'var(--color-border-warning)',
    bg: 'var(--color-background-warning-default)',
    inset: 'var(--inset-accent-warning)',
    color: 'var(--color-icon-warning)',
    glyph: 'ui-icon-warning'
  },
  error: {
    border: 'var(--color-border-error-default)',
    bg: 'var(--color-background-error-default)',
    inset: 'var(--inset-accent-error)',
    color: 'var(--color-text-error-default)',
    glyph: 'ui-icon-cross'
  }
};

/** Page-level notice using the semantic surfaces + inset left accent. Mirrors <ui-static-toaster>. */
function Toaster({
  type = 'info',
  children,
  style
}) {
  const t = TOASTER_TYPES[type] || TOASTER_TYPES.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      padding: '12px 16px',
      borderRadius: 'var(--radius-4)',
      border: '1px solid ' + t.border,
      background: t.bg,
      boxShadow: t.inset,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: t.glyph,
    style: {
      width: 24,
      height: 24,
      marginRight: 12,
      flexShrink: 0,
      fontSize: 16,
      color: t.color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-font-m-size)',
      fontWeight: 'var(--ui-font-m-weight)',
      lineHeight: 'var(--ui-font-m-height)',
      color: 'var(--color-text-bold)'
    }
  }, children));
}
Object.assign(__ds_scope, { Toaster });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toaster.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** 20px square checkbox with a 4px radius. Matches the Material override in ui-input.scss. */
function Checkbox({
  checked = false,
  indeterminate = false,
  disabled = false,
  label,
  bold = false,
  onChange,
  style
}) {
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? 'default' : 'pointer',
      ...style
    },
    onClick: () => !disabled && onChange && onChange(!checked)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-4)',
      border: '1px solid ' + (on ? 'var(--color-border-selected-default)' : 'var(--color-border-input-default)'),
      background: on ? 'var(--color-background-selected-selector-active)' : 'var(--color-background-input-default)'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    className: "ui-icon-minus",
    style: {
      fontSize: 10,
      color: '#fff'
    }
  }) : checked ? /*#__PURE__*/React.createElement("span", {
    className: "ui-icon-checkmark",
    style: {
      fontSize: 10,
      color: '#fff'
    }
  }) : null), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: bold ? 'var(--ui-font-mx-size)' : 'var(--ui-font-checkbox-label-size)',
      fontWeight: bold ? 'var(--ui-font-mx-weight)' : 'var(--ui-font-checkbox-label-weight)',
      lineHeight: bold ? 'var(--ui-font-mx-height)' : 'var(--ui-font-checkbox-label-height)',
      color: 'var(--color-text-default)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Counter.jsx
try { (() => {
/** Numeric stepper: minus / value / plus, all on the 4px radius. Mirrors <ui-counter>. */
function Counter({
  value = 0,
  min = 0,
  max = 99,
  step = 1,
  disabled = false,
  suffix,
  onChange,
  style
}) {
  const set = v => onChange && onChange(Math.min(max, Math.max(min, v)));
  const btn = dir => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    flexShrink: 0,
    border: '1px solid var(--color-border-button-default-default)',
    borderRadius: 'var(--radius-4)',
    background: 'var(--color-background-button-default-default)',
    color: 'var(--color-icon-default)',
    cursor: 'pointer',
    opacity: disabled || (dir < 0 ? value <= min : value >= max) ? 0.32 : 1
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: btn(-1),
    onClick: () => !disabled && set(value - step)
  }, /*#__PURE__*/React.createElement("span", {
    className: "ui-icon-minus",
    style: {
      fontSize: 12,
      color: 'inherit'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 56,
      height: 32,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      padding: '0 8px',
      border: '1px solid var(--color-border-input-value)',
      borderRadius: 'var(--radius-4)',
      background: 'var(--color-background-input-default)',
      fontSize: 'var(--ui-font-xm-size)',
      color: 'var(--color-text-default)'
    }
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-subtlest)'
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    style: btn(1),
    onClick: () => !disabled && set(value + step)
  }, /*#__PURE__*/React.createElement("span", {
    className: "ui-icon-plus",
    style: {
      fontSize: 12,
      color: 'inherit'
    }
  })));
}
Object.assign(__ds_scope, { Counter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Counter.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input matching `.ui-input` / `.ui-input-40`. */
function Input({
  label,
  value,
  placeholder,
  height = 40,
  invalid = false,
  disabled = false,
  readOnly = false,
  prefixIcon,
  suffix,
  multiline = false,
  rows = 3,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const border = invalid ? 'red' : focus ? 'var(--color-border-input-pressed)' : 'var(--color-border-input-default)';
  const fieldStyle = {
    boxSizing: 'border-box',
    width: '100%',
    padding: height === 40 ? '7px 16px' : '4px 16px',
    paddingLeft: prefixIcon ? 36 : undefined,
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--ui-font-xm-size)',
    fontWeight: 'var(--ui-font-xm-weight)',
    lineHeight: 'var(--ui-font-xm-height)',
    color: 'var(--color-text-default)',
    background: disabled || readOnly ? 'var(--color-background-input-disabled)' : 'var(--color-background-input-default)',
    border: '1px solid ' + border,
    borderRadius: 'var(--radius-4)',
    outline: 'none',
    resize: multiline ? 'vertical' : undefined
  };
  const Field = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      marginBottom: 8,
      fontSize: 'var(--ui-font-mx-size)',
      fontWeight: 'var(--ui-font-mx-weight)',
      lineHeight: 'var(--ui-font-mx-height)',
      color: invalid ? 'red' : 'var(--color-text-default)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, prefixIcon && /*#__PURE__*/React.createElement("span", {
    className: prefixIcon,
    style: {
      position: 'absolute',
      top: height === 40 ? 13 : 9,
      left: 12,
      fontSize: 16,
      color: 'var(--color-icon-default)'
    }
  }), /*#__PURE__*/React.createElement(Field, _extends({
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readOnly,
    rows: multiline ? rows : undefined,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: fieldStyle
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 11,
      right: 15,
      opacity: 0.7,
      fontSize: 'var(--ui-font-xs-size)',
      color: 'var(--color-text-subtle)'
    }
  }, suffix)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/OptionToggle.jsx
try { (() => {
/** Two-option pill switch with a sliding blue thumb. Mirrors <ui-option-toggle>. */
function OptionToggle({
  options = ['Off', 'On'],
  value = false,
  minWidth = 114,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => onChange && onChange(!value),
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      minWidth,
      height: 26,
      padding: 3,
      borderRadius: 'var(--radius-25)',
      border: '1px solid var(--color-border-default)',
      background: 'var(--background-table)',
      cursor: 'pointer',
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: value ? 'calc(50% - 3px)' : 0,
      width: 'calc(50% - 3px)',
      height: 'calc(100% - 6px)',
      margin: 2,
      borderRadius: 'var(--radius-25)',
      background: '#4367f6',
      border: '1px solid #3456e0',
      transition: 'var(--motion-base)'
    }
  }), options.map((label, i) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      position: 'relative',
      zIndex: 1,
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      color: i === 1 === value ? '#fff' : 'var(--color-text-subtle)',
      transition: 'var(--motion-base)'
    }
  }, label)));
}
Object.assign(__ds_scope, { OptionToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/OptionToggle.jsx", error: String((e && e.message) || e) }); }

// components/forms/Search.jsx
try { (() => {
/** Search field with leading magnifier and a clear affordance. Mirrors <ui-search>. */
function Search({
  value = '',
  placeholder = 'Search',
  height = 40,
  freeText = false,
  onChange,
  onClear,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const radius = freeText ? focus ? 50 : 20 : 4;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ui-icon-search",
    style: {
      position: 'absolute',
      top: height === 40 ? 13 : 9,
      left: 10,
      fontSize: 16,
      color: 'var(--color-icon-default)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      boxSizing: 'border-box',
      width: '100%',
      height,
      padding: '7px 36px 7px 31.5px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--ui-font-xm-size)',
      lineHeight: 'var(--ui-font-xm-height)',
      color: 'var(--color-text-default)',
      background: freeText && focus ? 'var(--color-elevation-surface-subtle)' : 'var(--color-elevation-surface-default)',
      border: '1px solid var(--color-border-input-default)',
      borderRadius: radius,
      boxShadow: freeText && focus ? 'var(--shadow-focus-search)' : 'none',
      outline: 'none',
      transition: 'var(--motion-base) var(--easing)'
    }
  }), value && /*#__PURE__*/React.createElement("span", {
    className: "ui-icon-close",
    title: "Clear",
    onClick: onClear,
    style: {
      position: 'absolute',
      top: height === 40 ? 13 : 10,
      right: 16,
      fontSize: 16,
      cursor: 'pointer',
      color: 'var(--color-icon-default)'
    }
  }));
}
Object.assign(__ds_scope, { Search });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Search.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/** Select trigger matching `.ui-selector-40`. Opens a simple option panel. */
function Select({
  value,
  options = [],
  placeholder = 'Select',
  multiple = false,
  disabled = false,
  onChange,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const selected = Array.isArray(value) ? value : value != null ? [value] : [];
  const labels = options.filter(o => selected.includes(o.value)).map(o => o.label);
  const pick = v => {
    if (!onChange) return;
    if (multiple) onChange(selected.includes(v) ? selected.filter(x => x !== v) : [...selected, v]);else {
      onChange(v);
      setOpen(false);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => !disabled && setOpen(!open),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      minHeight: 40,
      padding: '8px 12px 8px 16px',
      borderRadius: 'var(--radius-4)',
      border: '1px solid ' + (open ? 'var(--color-border-input-pressed)' : 'var(--color-border-input-value)'),
      background: disabled ? 'var(--color-background-input-disabled)' : 'var(--color-background-input-default)',
      fontSize: 'var(--ui-font-m-size)',
      fontWeight: 'var(--ui-font-m-weight)',
      lineHeight: 'var(--ui-font-m-height)',
      color: labels.length ? 'var(--color-text-default)' : 'var(--color-secondary-gray-500)',
      cursor: disabled ? 'default' : 'pointer',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, labels.length ? labels.join(', ') : placeholder), /*#__PURE__*/React.createElement("span", {
    className: "ui-icon-expand-arrow",
    style: {
      fontSize: 12,
      color: 'var(--color-icon-default)',
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'var(--motion-base)'
    }
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      zIndex: 20,
      top: 'calc(100% + 4px)',
      left: 0,
      minWidth: '100%',
      maxHeight: 240,
      overflowY: 'auto',
      padding: 4,
      background: 'var(--color-elevation-surface-overlay-default)',
      border: '1px solid var(--color-border-default)',
      borderRadius: 'var(--radius-4)',
      boxShadow: 'var(--shadow-md)'
    }
  }, options.map(o => {
    const on = selected.includes(o.value);
    return /*#__PURE__*/React.createElement("div", {
      key: o.value,
      onClick: () => pick(o.value),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 12px',
        borderRadius: 'var(--radius-4)',
        fontSize: 'var(--ui-font-xm-size)',
        color: 'var(--color-text-default)',
        background: on ? 'var(--color-background-selected-active)' : 'transparent',
        cursor: 'pointer'
      }
    }, multiple && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        flexShrink: 0,
        borderRadius: 'var(--radius-4)',
        border: '1px solid ' + (on ? 'var(--color-border-selected-default)' : 'var(--color-border-input-default)'),
        background: on ? 'var(--color-background-selected-selector-active)' : 'transparent',
        color: '#fff',
        fontSize: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      className: "ui-icon-checkmark",
      style: {
        fontSize: 10,
        color: '#fff'
      }
    })), o.label);
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Dropdown.jsx
try { (() => {
/** Anchored menu panel. Mirrors the `.user-menu` panel inside <app-ui-dropdown>. */
function Dropdown({
  trigger,
  items = [],
  width = 224,
  open: controlled,
  onOpenChange,
  align = 'start',
  style
}) {
  const [internal, setInternal] = React.useState(false);
  const open = controlled ?? internal;
  const setOpen = v => onOpenChange ? onOpenChange(v) : setInternal(v);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(!open),
    style: {
      display: 'inline-flex',
      cursor: 'pointer'
    }
  }, trigger), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      zIndex: 1001,
      top: 'calc(100% + 4px)',
      left: align === 'start' ? 0 : 'auto',
      right: align === 'end' ? 0 : 'auto',
      width,
      padding: '16px 19px',
      borderRadius: 'var(--radius-4)',
      border: '1px solid var(--color-border-default)',
      background: 'var(--elevation-surface-subtlest)',
      boxShadow: 'var(--shadow-md)'
    }
  }, items.map((it, i) => it.separator ? /*#__PURE__*/React.createElement("div", {
    key: 'sep' + i,
    style: {
      height: 1,
      margin: '8px 0',
      background: 'var(--color-border-default)'
    }
  }) : it.title ? /*#__PURE__*/React.createElement("div", {
    key: it.title + i,
    style: {
      padding: '8px 16px 8px 20px',
      color: 'var(--color-secondary-gray-500)',
      fontSize: 'var(--ui-font-m-size)',
      fontWeight: 'var(--ui-font-m-weight)'
    }
  }, it.title) : /*#__PURE__*/React.createElement(MenuItem, {
    key: it.label + i,
    item: it,
    onClose: () => setOpen(false)
  }))));
}
function MenuItem({
  item,
  onClose
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: () => {
      item.onClick && item.onClick();
      onClose();
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 16px',
      borderRadius: 'var(--radius-4)',
      cursor: 'pointer',
      transition: 'var(--motion-base)',
      background: hover ? 'var(--link-hover)' : 'transparent',
      color: item.tone === 'danger' ? 'var(--color-text-alert-default)' : 'var(--color-text-subtle)',
      fontSize: 'var(--ui-font-m-size)',
      fontWeight: 'var(--ui-font-m-weight)',
      lineHeight: 'var(--ui-font-m-height)'
    }
  }, item.icon && /*#__PURE__*/React.createElement("span", {
    className: item.icon,
    style: {
      fontSize: 24,
      color: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, item.label));
}
Object.assign(__ds_scope, { Dropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Dropdown.jsx", error: String((e && e.message) || e) }); }

// components/navigation/HeaderBar.jsx
try { (() => {
/** The 49px page header: breadcrumb trail on the left, actions on the right. Mirrors <ui-header-with-breadcrumbs>. */
function HeaderBar({
  breadcrumbs = [],
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexShrink: 0,
      height: 49,
      padding: '0 24px',
      background: 'var(--elevation-surface)',
      borderBottom: '1px solid var(--color-border-default)',
      color: 'var(--color-text-default)',
      fontSize: 'var(--ui-font-xxm-size)',
      fontWeight: 'var(--ui-font-xxm-weight)',
      lineHeight: 'var(--ui-font-xxm-height)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minWidth: 0
    }
  }, breadcrumbs.map((b, i) => {
    const last = i === breadcrumbs.length - 1;
    const name = typeof b === 'string' ? b : b.name;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: name + i
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '2px 5px',
        borderRadius: 'var(--radius-4)',
        color: 'var(--color-text-default)',
        cursor: last ? 'default' : 'pointer',
        maxWidth: 240,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, name), !last && /*#__PURE__*/React.createElement("span", {
      className: "ui-icon-expand-arrow",
      style: {
        width: 14,
        height: 14,
        margin: '0 16px',
        fontSize: 12,
        transform: 'rotate(-90deg)',
        color: 'var(--color-icon-default)'
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      justifyContent: 'flex-end'
    }
  }, children));
}
Object.assign(__ds_scope, { HeaderBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/HeaderBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentTabs.jsx
try { (() => {
/** Grey-track segmented control with a white selected pill. Mirrors the `.view-menu` pattern. */
function SegmentTabs({
  tabs = [],
  value,
  onChange,
  style
}) {
  const [hover, setHover] = React.useState(null);
  const items = tabs.map(t => typeof t === 'string' ? {
    value: t,
    label: t
  } : t);
  const active = value ?? items[0]?.value;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      height: 32,
      padding: 2,
      borderRadius: 'var(--radius-4)',
      background: 'var(--color-elevation-surface-subtle)',
      ...style
    }
  }, items.map(t => {
    const on = t.value === active;
    return /*#__PURE__*/React.createElement("div", {
      key: t.value,
      onClick: () => onChange && onChange(t.value),
      onMouseEnter: () => setHover(t.value),
      onMouseLeave: () => setHover(null),
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        padding: '2px 8px',
        borderRadius: 'var(--radius-4)',
        userSelect: 'none',
        cursor: 'pointer',
        transition: 'var(--motion-base)',
        fontSize: 'var(--ui-font-xxm-size)',
        color: on ? 'var(--color-text-selected)' : 'var(--color-text-subtle)',
        background: on ? 'var(--color-background-button-secondary-default)' : hover === t.value ? 'var(--color-background-button-tertiary-gray-hover)' : 'transparent',
        boxShadow: on ? 'var(--shadow-sm)' : 'none'
      }
    }, t.icon && /*#__PURE__*/React.createElement("span", {
      className: t.icon,
      style: {
        fontSize: 16,
        color: 'inherit'
      }
    }), t.label);
  }));
}
Object.assign(__ds_scope, { SegmentTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentTabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
/**
 * The 65px icon rail that is the primary navigation in Lumana Cloud.
 * Logo top, main items, then user / help / organization pinned to the bottom.
 */
function Sidebar({
  items = [],
  value,
  logoSrc,
  onSelect,
  bottom,
  style
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 65,
      minWidth: 65,
      height: '100%',
      background: 'var(--color-elevation-surface-subtle)',
      borderRight: '1px solid var(--color-border-default)',
      ...style
    }
  }, logoSrc && /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Lumana",
    style: {
      width: 32,
      height: 32,
      margin: 16,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }
  }, items.map(it => {
    const on = it.value === value;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: it.value
    }, it.separator && /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        margin: '8px 12px',
        background: 'var(--color-border-default)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      title: it.label,
      onClick: () => onSelect && onSelect(it.value),
      onMouseEnter: () => setHover(it.value),
      onMouseLeave: () => setHover(null),
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '9px 18px',
        cursor: 'pointer',
        transition: 'var(--motion-base)',
        background: on ? 'var(--color-background-selected-active)' : hover === it.value ? 'var(--link-hover)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: it.icon,
      style: {
        fontSize: 24,
        color: on ? 'var(--icon-selected)' : 'var(--icon-default-no-bg)'
      }
    }), it.badge ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 2,
        right: 8,
        minWidth: 16,
        height: 16,
        padding: '0 5px',
        borderRadius: 'var(--radius-4)',
        background: 'var(--color-text-error-default)',
        color: 'var(--color-icon-inverse)',
        fontSize: 10,
        fontWeight: 600,
        lineHeight: '16px',
        textAlign: 'center'
      }
    }, it.badge) : null));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: 8
    }
  }, bottom));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Submenu.jsx
try { (() => {
/** Collapsible secondary panel: 29px collapsed, 256px expanded. Mirrors <ui-submenu>. */
function Submenu({
  expanded = true,
  onToggle,
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("aside", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      boxSizing: 'border-box',
      width: expanded ? 256 : 29,
      minWidth: expanded ? 256 : 29,
      padding: expanded ? '8px 8px 0' : '8px 0',
      overflowY: 'auto',
      background: 'var(--color-elevation-surface-subtlest)',
      borderRight: '1px solid var(--color-border-default)',
      transition: 'var(--motion-slow)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onToggle,
    style: {
      position: 'absolute',
      zIndex: 9,
      top: 8,
      right: 0,
      width: 20,
      height: 32,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '4px 0 0 4px',
      border: '1px solid var(--color-border-default)',
      background: 'var(--color-background-input-default)',
      cursor: 'pointer',
      opacity: hover || !expanded ? 1 : 0,
      transition: 'var(--motion-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ui-icon-expand-arrow",
    style: {
      fontSize: 12,
      color: 'var(--color-icon-default)',
      transform: expanded ? 'rotate(90deg)' : 'rotate(-90deg)'
    }
  })), expanded && children);
}
Object.assign(__ds_scope, { Submenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Submenu.jsx", error: String((e && e.message) || e) }); }

// components/video/CameraCard.jsx
try { (() => {
/** Live/snapshot camera tile with a blurred name capsule. Mirrors <ui-camera-card>. */
function CameraCard({
  name,
  snapshotUrl,
  square = false,
  status,
  showActions = true,
  width,
  height = 220,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onClick,
    style: {
      position: 'relative',
      width: width ?? (square ? 293 : 391),
      height,
      background: '#000',
      borderRadius: 'var(--radius-4)',
      cursor: 'pointer',
      overflow: 'hidden',
      ...style
    }
  }, snapshotUrl ? /*#__PURE__*/React.createElement("img", {
    src: snapshotUrl,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 'var(--radius-4)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#1a1a1a'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ui-icon-camera",
    style: {
      fontSize: 30,
      color: 'rgba(255,255,255,.5)'
    }
  })), showActions && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 8,
      right: 8,
      display: 'flex',
      gap: 4,
      zIndex: 6,
      opacity: hover ? 1 : 0,
      transition: 'opacity var(--motion-fast) ease'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      padding: 0,
      border: 'none',
      borderRadius: 'var(--radius-6)',
      background: 'rgba(16,24,40,.7)',
      backdropFilter: 'var(--blur-chrome)',
      color: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ui-icon-fullscreen-2",
    style: {
      fontSize: 16,
      color: '#fff'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 8,
      left: 8,
      zIndex: 5,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      maxWidth: 'calc(100% - 16px)',
      padding: '2px 8px',
      borderRadius: 'var(--radius-16)',
      background: 'rgba(16,24,40,.7)',
      backdropFilter: 'var(--blur-chrome)',
      color: '#fff'
    }
  }, status && /*#__PURE__*/React.createElement("span", {
    className: status === 'online' ? 'ui-icon-status-online' : status === 'offline' ? 'ui-icon-status-offline' : 'ui-icon-status-unhealthy',
    style: {
      fontSize: 12
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, name)));
}
Object.assign(__ds_scope, { CameraCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/video/CameraCard.jsx", error: String((e && e.message) || e) }); }

// components/video/CameraControls.jsx
try { (() => {
/** Floating video control cluster (PTZ, zoom, quality). Mirrors <ui-camera-controls>. */
function CameraControls({
  controls = ['ui-icon-camera-control-zoomin', 'ui-icon-camera-control-zoomout', 'ui-icon-camera-control-resetzoom'],
  vertical = false,
  onAction,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: vertical ? 'column' : 'row',
      gap: 4,
      padding: 4,
      borderRadius: 'var(--radius-6)',
      background: 'rgba(16,24,40,.7)',
      backdropFilter: 'var(--blur-chrome)',
      ...style
    }
  }, controls.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => onAction && onAction(c),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      padding: 0,
      border: 'none',
      borderRadius: 'var(--radius-4)',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: c,
    style: {
      fontSize: 16,
      color: '#fff'
    }
  }))));
}
Object.assign(__ds_scope, { CameraControls });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/video/CameraControls.jsx", error: String((e && e.message) || e) }); }

// components/video/DeviceStatus.jsx
try { (() => {
const DEVICE_STATUS = {
  online: {
    icon: 'ui-icon-status-online',
    color: 'var(--color-icon-success)',
    label: 'Online'
  },
  offline: {
    icon: 'ui-icon-status-offline',
    color: 'var(--color-red-600)',
    label: 'Offline'
  },
  unhealthy: {
    icon: 'ui-icon-status-unhealthy',
    color: 'var(--color-icon-warning)',
    label: 'Unhealthy'
  },
  installing: {
    icon: 'ui-icon-status-unhealthy',
    color: 'var(--color-icon-warning)',
    label: 'Installing'
  },
  notRecording: {
    icon: 'ui-icon-camera-off',
    color: 'var(--color-icon-warning)',
    label: 'Not recording'
  }
};

/** Status glyph, optionally with its label. Mirrors <ui-device-status>. */
function DeviceStatus({
  status = 'online',
  showLabel = false,
  label,
  iconSize = 20,
  onDark = false,
  style
}) {
  const s = DEVICE_STATUS[status] || DEVICE_STATUS.online;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    },
    title: label || s.label
  }, /*#__PURE__*/React.createElement("span", {
    className: s.icon,
    style: {
      fontSize: iconSize,
      color: s.color
    }
  }), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      fontSize: 14,
      userSelect: 'none',
      color: onDark ? '#fff' : 'var(--color-text-default)'
    }
  }, label || s.label));
}
Object.assign(__ds_scope, { DeviceStatus });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/video/DeviceStatus.jsx", error: String((e && e.message) || e) }); }

// components/video/Occupancy.jsx
try { (() => {
/** Count + capacity readout with a thin progress track. Mirrors <ui-occupancy>. */
function Occupancy({
  label = 'Occupancy',
  count = 0,
  capacity,
  style
}) {
  const pct = capacity ? Math.min(100, Math.round(count / capacity * 100)) : null;
  const over = pct != null && pct >= 90;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 160,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ui-font-s-size)',
      fontWeight: 'var(--ui-font-s-weight)',
      color: 'var(--color-text-subtle)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ui-font-h2-size)',
      fontWeight: 'var(--ui-font-h2-weight)',
      lineHeight: 1,
      color: 'var(--color-text-bold)'
    }
  }, count, capacity ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ui-font-s-size)',
      color: 'var(--color-text-subtlest)'
    }
  }, " / ", capacity) : null)), pct != null && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: 'var(--radius-full)',
      background: 'var(--color-background-neutral-subtle)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: over ? 'var(--color-background-chart-alert-default)' : 'var(--color-primary-500)'
    }
  })));
}
Object.assign(__ds_scope, { Occupancy });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/video/Occupancy.jsx", error: String((e && e.message) || e) }); }

// components/video/PersonTile.jsx
try { (() => {
/** A detected-object result tile (person, vehicle, face). Mirrors <ui-person-tile>. */
function PersonTile({
  imageUrl,
  label,
  sublabel,
  selected = false,
  confidence,
  width = 132,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      width,
      borderRadius: 'var(--radius-4)',
      border: '1px solid ' + (selected ? 'var(--color-border-selected-default)' : 'var(--color-border-default)'),
      background: selected ? 'var(--color-background-selected-active)' : 'var(--color-elevation-surface-default)',
      overflow: 'hidden',
      cursor: 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '3 / 4',
      background: '#1a1a1a'
    }
  }, imageUrl ? /*#__PURE__*/React.createElement("img", {
    src: imageUrl,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ui-icon-object-icon-person",
    style: {
      fontSize: 24,
      color: 'rgba(255,255,255,.5)'
    }
  })), confidence != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 6,
      left: 6,
      padding: '1px 6px',
      borderRadius: 'var(--radius-16)',
      background: 'rgba(16,24,40,.7)',
      backdropFilter: 'var(--blur-chrome)',
      color: '#fff',
      fontSize: 10,
      fontWeight: 500
    }
  }, confidence, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-font-s-size)',
      fontWeight: 'var(--ui-font-s-weight)',
      color: 'var(--color-text-default)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ui-font-xs-size)',
      color: 'var(--color-text-subtle)'
    }
  }, sublabel)));
}
Object.assign(__ds_scope, { PersonTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/video/PersonTile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lumana-cloud/AlertsScreen.jsx
try { (() => {
const ALERTS = [{
  id: 1,
  name: 'Warehouse 3 · Dock 4',
  sentence: 'Person crosses the loading dock line between 20:00 and 06:00',
  enabled: true,
  tag: 'After hours',
  icon: 'ui-icon-object-line-crossing'
}, {
  id: 2,
  name: 'Warehouse 3 · Aisle 12',
  sentence: 'Forklift and person within 2 metres of each other',
  enabled: true,
  tag: 'Safety',
  icon: 'ui-icon-object-proximity'
}, {
  id: 3,
  name: 'Yard — North · Gate',
  sentence: 'Unrecognised vehicle waits at the gate for more than 3 minutes',
  enabled: false,
  tag: 'Perimeter',
  icon: 'ui-icon-object-loitering'
}, {
  id: 4,
  name: 'Warehouse 5 · Cold store',
  sentence: 'Door held open for more than 90 seconds',
  enabled: true,
  tag: 'Cold store',
  icon: 'ui-icon-doors'
}, {
  id: 5,
  name: 'Head office · Lobby',
  sentence: 'Weapon detected during business hours',
  enabled: true,
  tag: 'Critical',
  icon: 'ui-icon-object-weapon'
}];
function AlertsScreen() {
  const [q, setQ] = React.useState('');
  const [state, setState] = React.useState(ALERTS);
  const rows = state.filter(a => (a.name + a.sentence).toLowerCase().includes(q.toLowerCase()));
  const setEnabled = (id, v) => setState(s => s.map(a => a.id === id ? {
    ...a,
    enabled: v
  } : a));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeaderBar, {
    breadcrumbs: ['Alerts', 'Configurations']
  }, /*#__PURE__*/React.createElement(IconButton, {
    iconClass: "ui-icon-folder",
    title: "Open saved alert view"
  }), /*#__PURE__*/React.createElement(IconButton, {
    iconClass: "ui-icon-save",
    title: "Save alert view"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "default",
    text: "Alert groups"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "default",
    text: "Configurations"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    text: "Add alert"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: '32px 0 0',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Search, {
    value: q,
    placeholder: "Search alerts",
    onChange: e => setQ(e.target.value),
    onClear: () => setQ(''),
    style: {
      minWidth: 320
    }
  }), /*#__PURE__*/React.createElement(Button, {
    type: "default",
    iconClass: "ui-icon-camera",
    text: "Cameras"
  }), /*#__PURE__*/React.createElement(Select, {
    placeholder: "Alert type",
    style: {
      minWidth: 140
    },
    options: [{
      value: 'l',
      label: 'Line crossing'
    }, {
      value: 'p',
      label: 'Proximity'
    }, {
      value: 'w',
      label: 'Weapon detected'
    }]
  }), /*#__PURE__*/React.createElement(Select, {
    placeholder: "Tags",
    style: {
      minWidth: 140
    },
    options: [{
      value: 's',
      label: 'Safety'
    }, {
      value: 'p',
      label: 'Perimeter'
    }]
  })), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    text: "Add alert"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px'
    }
  }, rows.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: 320
    }
  }, /*#__PURE__*/React.createElement(NoData, {
    imgSrc: "../../assets/illustrations/empty-state.svg",
    title: "No search results",
    description: "Try searching for different filters"
  })) : /*#__PURE__*/React.createElement(DataTable, {
    spaced: true,
    rowHeight: 72,
    rows: rows,
    onRowClick: () => {},
    columns: [{
      key: 'toggle',
      label: '',
      width: 60,
      render: r => /*#__PURE__*/React.createElement("div", {
        onClick: e => e.stopPropagation()
      }, /*#__PURE__*/React.createElement(Toggle, {
        value: r.enabled,
        onChange: v => setEnabled(r.id, v)
      }))
    }, {
      key: 'main',
      label: '',
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 88,
          height: 50,
          borderRadius: 4,
          background: '#1a1a1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: r.icon,
        style: {
          fontSize: 20,
          color: 'rgba(255,255,255,.6)'
        }
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          fontWeight: 500,
          lineHeight: '24px',
          color: 'var(--color-text-subtle)'
        }
      }, r.name), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: '20px',
          color: 'var(--color-text-bold)'
        }
      }, r.sentence)))
    }, {
      key: 'sync',
      label: '',
      width: 44,
      render: () => /*#__PURE__*/React.createElement(DeviceStatus, {
        status: "online",
        iconSize: 20
      })
    }, {
      key: 'tag',
      label: '',
      width: 140,
      render: r => /*#__PURE__*/React.createElement(TagChip, {
        title: r.tag
      })
    }, {
      key: 'actions',
      label: '',
      width: 96,
      align: 'right',
      render: () => /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 4,
          justifyContent: 'flex-end'
        },
        onClick: e => e.stopPropagation()
      }, /*#__PURE__*/React.createElement(IconButton, {
        iconClass: "ui-icon-delete",
        noBorder: true,
        title: "Delete alert"
      }), /*#__PURE__*/React.createElement(IconButton, {
        iconClass: "ui-icon-more-menu",
        noBorder: true,
        title: "More"
      }))
    }]
  }))));
}
Object.assign(window, {
  AlertsScreen,
  ALERTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lumana-cloud/AlertsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lumana-cloud/DevicesScreen.jsx
try { (() => {
const CAMERAS = [{
  id: 1,
  name: 'Dock 4 — East',
  status: 'online',
  core: 'WH3-Core-01',
  ip: '192.168.4.22',
  mac: 'B8:27:EB:4A:12:9C',
  tag: 'Dock',
  issues: 0
}, {
  id: 2,
  name: 'Dock 4 — West',
  status: 'online',
  core: 'WH3-Core-01',
  ip: '192.168.4.23',
  mac: 'B8:27:EB:4A:12:9D',
  tag: 'Dock',
  issues: 0
}, {
  id: 3,
  name: 'Aisle 12',
  status: 'unhealthy',
  core: 'WH3-Core-01',
  ip: '192.168.4.31',
  mac: 'B8:27:EB:4A:13:02',
  tag: 'Aisle',
  issues: 2
}, {
  id: 4,
  name: 'Gate — North',
  status: 'offline',
  core: 'WH3-Core-02',
  ip: '192.168.4.44',
  mac: 'B8:27:EB:4A:13:71',
  tag: 'Perimeter',
  issues: 1
}, {
  id: 5,
  name: 'Cold store entry',
  status: 'online',
  core: 'WH3-Core-02',
  ip: '192.168.4.51',
  mac: 'B8:27:EB:4A:14:08',
  tag: 'Cold store',
  issues: 0
}, {
  id: 6,
  name: 'Pallet wrap station',
  status: 'online',
  core: 'WH3-Core-02',
  ip: '192.168.4.58',
  mac: 'B8:27:EB:4A:14:22',
  tag: 'Line',
  issues: 0
}];
function DevicesScreen() {
  const [view, setView] = React.useState('Cameras');
  const [q, setQ] = React.useState('');
  const [selected, setSelected] = React.useState([]);
  const [addOpen, setAddOpen] = React.useState(false);
  const rows = CAMERAS.filter(c => c.name.toLowerCase().includes(q.toLowerCase()));
  const toggle = id => setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeaderBar, {
    breadcrumbs: ['Devices', 'Warehouse 3']
  }, /*#__PURE__*/React.createElement(SegmentTabs, {
    tabs: ['Cameras', 'Map', 'Floor plans', 'Overview'],
    value: view,
    onChange: setView
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8
    }
  }), /*#__PURE__*/React.createElement(Button, {
    type: "default",
    text: "Bulk update",
    disabled: !selected.length
  }), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    text: "Add device",
    onClick: () => setAddOpen(true)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 32px',
      gap: 16,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Search, {
    value: q,
    placeholder: "Search devices",
    onChange: e => setQ(e.target.value),
    onClear: () => setQ(''),
    style: {
      minWidth: 320
    }
  }), /*#__PURE__*/React.createElement(Select, {
    placeholder: "Status",
    options: [{
      value: 'online',
      label: 'Online'
    }, {
      value: 'offline',
      label: 'Offline'
    }, {
      value: 'unhealthy',
      label: 'Unhealthy'
    }],
    style: {
      minWidth: 140
    }
  }), /*#__PURE__*/React.createElement(Select, {
    placeholder: "Tags",
    options: [{
      value: 'dock',
      label: 'Dock'
    }, {
      value: 'aisle',
      label: 'Aisle'
    }, {
      value: 'perimeter',
      label: 'Perimeter'
    }],
    style: {
      minWidth: 140
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    iconClass: "ui-icon-list-view",
    active: true,
    tone: "primary",
    title: "List view"
  }), /*#__PURE__*/React.createElement(IconButton, {
    iconClass: "ui-icon-layout",
    title: "Grid view"
  }))), q && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(FilterChip, {
    title: q,
    onRemove: () => setQ('')
  })), rows.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 260
    }
  }, /*#__PURE__*/React.createElement(NoData, {
    imgSrc: "../../assets/illustrations/empty-state.svg",
    title: "No results found",
    description: "Try adjusting your search or filter"
  })) : /*#__PURE__*/React.createElement(DataTable, {
    rowHeight: 52,
    rows: rows,
    onRowClick: () => {},
    columns: [{
      key: 'sel',
      label: '',
      width: 44,
      render: r => /*#__PURE__*/React.createElement("div", {
        onClick: e => e.stopPropagation()
      }, /*#__PURE__*/React.createElement(Checkbox, {
        checked: selected.includes(r.id),
        onChange: () => toggle(r.id)
      }))
    }, {
      key: 'type',
      label: 'Type',
      width: 92,
      render: () => /*#__PURE__*/React.createElement("div", {
        style: {
          width: 64,
          height: 40,
          borderRadius: 4,
          background: '#1a1a1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "ui-icon-camera",
        style: {
          fontSize: 18,
          color: 'rgba(255,255,255,.5)'
        }
      }))
    }, {
      key: 'name',
      label: 'Name',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, r.name)
    }, {
      key: 'status',
      label: 'Status',
      width: 90,
      render: r => /*#__PURE__*/React.createElement(DeviceStatus, {
        status: r.status
      })
    }, {
      key: 'core',
      label: 'Core',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          color: 'var(--link-default)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "ui-icon-edge-status-alert",
        style: {
          fontSize: 14,
          color: 'var(--link-default)'
        }
      }), r.core)
    }, {
      key: 'ip',
      label: 'IP'
    }, {
      key: 'mac',
      label: 'MAC'
    }, {
      key: 'tag',
      label: 'Tags',
      render: r => /*#__PURE__*/React.createElement(TagChip, {
        title: r.tag
      })
    }, {
      key: 'issues',
      label: 'Issues',
      width: 76,
      render: r => r.issues ? /*#__PURE__*/React.createElement("span", {
        className: "ui-icon-issues",
        style: {
          fontSize: 16,
          color: 'var(--color-icon-warning)'
        }
      }) : '—'
    }, {
      key: 'actions',
      label: '',
      width: 92,
      align: 'right',
      render: () => /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 4,
          justifyContent: 'flex-end'
        },
        onClick: e => e.stopPropagation()
      }, /*#__PURE__*/React.createElement(IconButton, {
        iconClass: "ui-icon-new-tab",
        noBorder: true,
        title: "Open in new tab"
      }), /*#__PURE__*/React.createElement(IconButton, {
        iconClass: "ui-icon-edit",
        noBorder: true,
        title: "Edit"
      }))
    }]
  })), addOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--color-backdrop-dialog)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(Modal, {
    title: "Add device",
    width: 520,
    compact: true,
    onClose: () => setAddOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      type: "default",
      text: "Cancel",
      onClick: () => setAddOpen(false)
    }), /*#__PURE__*/React.createElement(Button, {
      type: "primary",
      text: "Add device",
      onClick: () => setAddOpen(false)
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Toaster, {
    type: "info"
  }, "Automatically detects cameras on the recording server's local network."), /*#__PURE__*/React.createElement(Input, {
    label: "Device name",
    placeholder: "Enter device name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "IP address",
    placeholder: "192.168.4.0"
  }), /*#__PURE__*/React.createElement(Select, {
    placeholder: "Core",
    options: [{
      value: 'c1',
      label: 'WH3-Core-01'
    }, {
      value: 'c2',
      label: 'WH3-Core-02'
    }]
  })))));
}
Object.assign(window, {
  DevicesScreen,
  CAMERAS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lumana-cloud/DevicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lumana-cloud/SearchScreen.jsx
try { (() => {
const RESULTS = [{
  label: 'Person',
  sublabel: 'Dock 4 — East · 14:22',
  confidence: 96
}, {
  label: 'Person',
  sublabel: 'Aisle 12 · 14:24',
  confidence: 92
}, {
  label: 'Forklift',
  sublabel: 'Aisle 12 · 14:24',
  confidence: 88
}, {
  label: 'Person',
  sublabel: 'Cold store entry · 14:31',
  confidence: 84
}, {
  label: 'ABC 1234',
  sublabel: 'Gate — North · 14:38',
  confidence: 81
}, {
  label: 'Person',
  sublabel: 'Pallet wrap station · 14:41',
  confidence: 78
}, {
  label: 'Person',
  sublabel: 'Dock 4 — West · 14:47',
  confidence: 74
}, {
  label: 'Van',
  sublabel: 'Yard ramp · 14:52',
  confidence: 71
}, {
  label: 'Person',
  sublabel: 'Staff entrance · 15:02',
  confidence: 69
}, {
  label: 'Person',
  sublabel: 'Dock 4 — East · 15:11',
  confidence: 66
}];
function SearchScreen() {
  const [q, setQ] = React.useState('person in a hi-vis vest near the loading dock');
  const [sel, setSel] = React.useState(0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeaderBar, {
    breadcrumbs: ['Search']
  }, /*#__PURE__*/React.createElement(IconButton, {
    iconClass: "ui-icon-save",
    title: "Save search"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "default",
    text: "Add to case"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: '24px 32px',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Search, {
    freeText: true,
    value: q,
    placeholder: "Describe what you're looking for",
    onChange: e => setQ(e.target.value),
    onClear: () => setQ('')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Last 24 hours",
    style: {
      minWidth: 160
    },
    options: [{
      value: '24',
      label: 'Last 24 hours'
    }, {
      value: '7',
      label: 'Last 7 days'
    }]
  }), /*#__PURE__*/React.createElement(Select, {
    placeholder: "Cameras",
    multiple: true,
    style: {
      minWidth: 160
    },
    options: [{
      value: 'd4',
      label: 'Dock 4 — East'
    }, {
      value: 'a12',
      label: 'Aisle 12'
    }]
  }), /*#__PURE__*/React.createElement(Select, {
    placeholder: "Object type",
    style: {
      minWidth: 160
    },
    options: [{
      value: 'p',
      label: 'Person'
    }, {
      value: 'v',
      label: 'Vehicle'
    }]
  }), /*#__PURE__*/React.createElement(FilterChip, {
    title: "Warehouse 3"
  }), /*#__PURE__*/React.createElement(FilterChip, {
    title: "High confidence"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ui-font-h2-size)',
      fontWeight: 500
    }
  }, RESULTS.length, " results"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-subtlest)'
    }
  }, "across 6 cameras \xB7 14:22 \u2013 15:11")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(132px, 1fr))',
      gap: 8
    }
  }, RESULTS.map((r, i) => /*#__PURE__*/React.createElement(PersonTile, {
    key: i,
    label: r.label,
    sublabel: r.sublabel,
    confidence: r.confidence,
    selected: i === sel,
    width: "100%",
    onClick: () => setSel(i),
    style: {
      width: '100%'
    }
  })))));
}
Object.assign(window, {
  SearchScreen,
  RESULTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lumana-cloud/SearchScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lumana-cloud/WallScreen.jsx
try { (() => {
const WALL = [{
  name: 'Dock 4 — East',
  status: 'online'
}, {
  name: 'Dock 4 — West',
  status: 'online'
}, {
  name: 'Aisle 12',
  status: 'unhealthy'
}, {
  name: 'Cold store entry',
  status: 'online'
}, {
  name: 'Pallet wrap station',
  status: 'online'
}, {
  name: 'Gate — North',
  status: 'offline'
}, {
  name: 'Yard ramp',
  status: 'online'
}, {
  name: 'Staff entrance',
  status: 'online'
}];
function WallScreen() {
  const [mode, setMode] = React.useState('Live');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeaderBar, {
    breadcrumbs: ['Walls', 'Warehouse 3 — Operations']
  }, /*#__PURE__*/React.createElement(SegmentTabs, {
    tabs: ['Live', 'Playback'],
    value: mode,
    onChange: setMode
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    iconClass: "ui-icon-layout",
    title: "Change layout"
  }), /*#__PURE__*/React.createElement(IconButton, {
    iconClass: "ui-icon-fullscreen-2",
    title: "Fullscreen"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "default",
    text: "Edit wall"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    text: "Add wall"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--color-elevation-surface-subtlest)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridAutoRows: '1fr',
      gap: 8,
      padding: 16
    }
  }, WALL.map(c => /*#__PURE__*/React.createElement(CameraCard, {
    key: c.name,
    name: c.name,
    status: c.status,
    width: "100%",
    height: "100%",
    style: {
      width: '100%',
      height: '100%'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '10px 16px',
      borderTop: '1px solid var(--color-border-default)',
      background: 'var(--color-elevation-surface-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ui-icon-live",
    style: {
      fontSize: 16,
      color: 'var(--color-icon-alert)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, mode === 'Live' ? 'Live' : 'Playback · 14:22:07'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-subtlest)'
    }
  }, "8 cameras \xB7 1 offline")), /*#__PURE__*/React.createElement(Occupancy, {
    label: "People on floor",
    count: 38,
    capacity: 60
  }))));
}
Object.assign(window, {
  WallScreen,
  WALL
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lumana-cloud/WallScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lumana-cloud/shell.jsx
try { (() => {
const {
  Sidebar,
  HeaderBar,
  SegmentTabs,
  Button,
  IconButton,
  Avatar,
  Search,
  Select,
  FilterChip,
  TagChip,
  Toggle,
  DataTable,
  DeviceStatus,
  CameraCard,
  PersonTile,
  NoData,
  Badge,
  Checkbox,
  Occupancy,
  Dropdown,
  Modal,
  Input,
  Toaster
} = window.LumanaDesignSystem_1b2e75;
const NAV = [{
  value: 'devices',
  label: 'Devices',
  icon: 'ui-icon-camera-sidebar'
}, {
  value: 'search',
  label: 'Search',
  icon: 'ui-icon-search-sidebar'
}, {
  value: 'alerts',
  label: 'Alerts',
  icon: 'ui-icon-notifications-sidebar'
}, {
  value: 'dashboards',
  label: 'Dashboards',
  icon: 'ui-icon-dashboard-sidebar'
}, {
  value: 'walls',
  label: 'Walls',
  icon: 'ui-icon-wall-sidebar'
}, {
  value: 'archives',
  label: 'Archives',
  icon: 'ui-icon-archive-sidebar'
}, {
  value: 'reports',
  label: 'Reports',
  icon: 'ui-icon-tabular-chart'
}, {
  value: 'cases',
  label: 'Cases',
  icon: 'ui-icon-menu-folder-sidebar'
}, {
  value: 'events',
  label: 'Events manager',
  icon: 'ui-icon-controls-event-sidebar',
  separator: true
}, {
  value: 'workflows',
  label: 'Workflows',
  icon: 'ui-icon-workflow-sidebar'
}, {
  value: 'chat',
  label: 'Chat',
  icon: 'ui-icon-comment-sidebar',
  badge: 3
}];
const LOCATIONS = [{
  id: 'wh3',
  name: 'Warehouse 3',
  cameras: 24
}, {
  id: 'wh5',
  name: 'Warehouse 5',
  cameras: 18
}, {
  id: 'yard',
  name: 'Yard — North',
  cameras: 9
}, {
  id: 'hq',
  name: 'Head office',
  cameras: 6
}];
function LocationTree({
  value,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 8px 8px',
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--color-text-subtlest)',
      letterSpacing: '.04em'
    }
  }, "LOCATIONS"), LOCATIONS.map(l => {
    const on = l.id === value;
    return /*#__PURE__*/React.createElement("div", {
      key: l.id,
      onClick: () => onSelect(l.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 10px',
        marginBottom: 2,
        borderRadius: 'var(--radius-4)',
        cursor: 'pointer',
        fontSize: 14,
        color: on ? 'var(--color-text-selected)' : 'var(--color-text-default)',
        background: on ? 'var(--color-background-selected-active)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ui-icon-location",
      style: {
        fontSize: 16,
        color: on ? 'var(--icon-selected)' : 'var(--color-icon-default)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, l.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--color-text-subtlest)'
      }
    }, l.cameras));
  }));
}

/** The full Lumana Cloud chrome: rail + location tree + page area. */
function AppShell({
  page,
  onPage,
  tree = true,
  children
}) {
  const [loc, setLoc] = React.useState('wh3');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      minHeight: 0,
      background: 'var(--color-elevation-surface-default)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    items: NAV,
    value: page,
    onSelect: onPage,
    logoSrc: "../../assets/logo-mark-alt.svg",
    bottom: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "ui-icon-help-sidebar",
      style: {
        fontSize: 23,
        padding: '10px 0',
        color: 'var(--icon-default-no-bg)',
        cursor: 'pointer'
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "ui-icon-user-sidebar",
      style: {
        fontSize: 23,
        padding: '10px 0',
        color: 'var(--icon-default-no-bg)',
        cursor: 'pointer'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 0'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Acme Logistics",
      size: 30
    })))
  }), tree && /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 256,
      minWidth: 256,
      borderRight: '1px solid var(--color-border-default)',
      background: 'var(--color-elevation-surface-subtlest)',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(LocationTree, {
    value: loc,
    onSelect: setLoc
  })), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      minHeight: 0
    }
  }, children));
}
Object.assign(window, {
  AppShell,
  LocationTree,
  NAV,
  LOCATIONS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lumana-cloud/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CardLine = __ds_scope.CardLine;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Preloader = __ds_scope.Preloader;

__ds_ns.TagChip = __ds_scope.TagChip;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.DrawerField = __ds_scope.DrawerField;

__ds_ns.JsonViewer = __ds_scope.JsonViewer;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.TableCard = __ds_scope.TableCard;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.ConfirmDialog = __ds_scope.ConfirmDialog;

__ds_ns.NoData = __ds_scope.NoData;

__ds_ns.SelectionSnackbar = __ds_scope.SelectionSnackbar;

__ds_ns.Toaster = __ds_scope.Toaster;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Counter = __ds_scope.Counter;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.OptionToggle = __ds_scope.OptionToggle;

__ds_ns.Search = __ds_scope.Search;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.HeaderBar = __ds_scope.HeaderBar;

__ds_ns.SegmentTabs = __ds_scope.SegmentTabs;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.Submenu = __ds_scope.Submenu;

__ds_ns.CameraCard = __ds_scope.CameraCard;

__ds_ns.CameraControls = __ds_scope.CameraControls;

__ds_ns.DeviceStatus = __ds_scope.DeviceStatus;

__ds_ns.Occupancy = __ds_scope.Occupancy;

__ds_ns.PersonTile = __ds_scope.PersonTile;

})();
