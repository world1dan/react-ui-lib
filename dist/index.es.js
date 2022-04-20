import React from 'react';
import { useTransform, motion, AnimatePresence } from 'framer-motion';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$3 = ".Alert-module_alert__7cYyI {\r\n    background: var(--bg3);\r\n    width: 270px;\r\n    border-radius: 14px;\r\n    border: 1px solid var(--lvl4-borders);\r\n    touch-action: none;\r\n    display: grid;\r\n    gap: 6px;\r\n    overflow: hidden;\r\n}\r\n\r\n.Alert-module_title__abGgF {\r\n    text-align: center;\r\n    margin-top: 16px;\r\n    font-size: 17px;\r\n    font-weight: 600;\r\n}\r\n\r\n.Alert-module_caption__xuAHm {\r\n    font-size: 12px;\r\n    text-align: center;\r\n}\r\n\r\n.Alert-module_buttons__8b73U {\r\n    margin-top: 10px;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n}\r\n";
var css$3 = {"alert":"Alert-module_alert__7cYyI","title":"Alert-module_title__abGgF","caption":"Alert-module_caption__xuAHm","buttons":"Alert-module_buttons__8b73U"};
styleInject(css_248z$3);

var css_248z$2 = ".Backdrop-module_backdrop__6l4ty {\r\n    height: 100vh;\r\n    display: grid;\r\n    backdrop-filter: brightness(0.6);\r\n    place-items: center;\r\n    border-top: 1.5px solid var(--borders);\r\n    flex-grow: 1;\r\n    font-size: 15px;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n";
var css$2 = {"backdrop":"Backdrop-module_backdrop__6l4ty"};
styleInject(css_248z$2);

const Backdrop = ({ children, onClick, y }) => {
    const input = [0, 0, 200];
    const output = [1, 1, 0];
    const opacity = y ? useTransform(y, input, output) : 1;
    return (React.createElement(React.Fragment, null,
        React.createElement(motion.div, { className: css$2.backdrop, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: onClick, transition: {
                type: 'tween',
                duration: 0.3,
            }, style: { opacity } }),
        children));
};

var css_248z$1 = ".style-module_modal_wrapper__Bh57G {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    display: grid;\r\n    place-items: center;\r\n    pointer-events: none;\r\n}\r\n\r\n.style-module_modal__lenBx {\r\n    pointer-events: all;\r\n    z-index: 999;\r\n}\r\n";
var css$1 = {"modal_wrapper":"style-module_modal_wrapper__Bh57G","modal":"style-module_modal__lenBx"};
styleInject(css_248z$1);

const ModalWrapper = (props) => {
    return (React.createElement("div", { className: css$1.modal_wrapper },
        React.createElement("div", { className: css$1.modal }, props.children)));
};

const Alert = (props) => {
    return (React.createElement(AnimatePresence, null, props.show && (React.createElement(Backdrop, { onClick: props.handleClose },
        React.createElement(ModalWrapper, null,
            React.createElement(motion.div, { className: css$3.alert, transition: {
                    duration: 0.12,
                }, initial: {
                    opacity: 0.5,
                    scale: 1.05,
                }, animate: {
                    opacity: 1,
                    scale: 1,
                }, exit: {
                    opacity: 0,
                    scale: 0.96,
                } },
                React.createElement("div", { className: css$3.title }, props.title),
                React.createElement("div", { className: css$3.caption }, props.caption),
                React.createElement("div", { className: css$3.buttons }, props.children)))))));
};

var css_248z = ".style-module_alert_button__ixnDI {\r\n    height: 46px;\r\n    display: grid;\r\n    background: var(--bg3);\r\n    place-items: center;\r\n    border-top: 1px solid var(--borders);\r\n\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    color: var(--blue);\r\n    width: 100%;\r\n    border-right: 1px solid var(--borders);\r\n}\r\n\r\n.style-module_alert_button__ixnDI:last-of-type {\r\n    border-right: none;\r\n}\r\n\r\n.style-module_alert_button__ixnDI.style-module_cancel__IV-hx {\r\n    font-weight: 600;\r\n}\r\n.style-module_alert_button__ixnDI.style-module_destructive__ReCt7 {\r\n    color: var(--red);\r\n}\r\n\r\n.style-module_alert_button__ixnDI.style-module_large__wAoyC {\r\n    flex-grow: 1;\r\n    border-right: none !important;\r\n}\r\n";
var css = {"alert_button":"style-module_alert_button__ixnDI","cancel":"style-module_cancel__IV-hx","destructive":"style-module_destructive__ReCt7","large":"style-module_large__wAoyC"};
styleInject(css_248z);

var IButtonTypes;
(function (IButtonTypes) {
    IButtonTypes["Default"] = "default";
    IButtonTypes["Cancel"] = "cancel";
    IButtonTypes["Destructive"] = "destructive";
})(IButtonTypes || (IButtonTypes = {}));
var IButtonSizes;
(function (IButtonSizes) {
    IButtonSizes["Medium"] = "medium";
    IButtonSizes["Large"] = "large";
})(IButtonSizes || (IButtonSizes = {}));
const AlertButton = (props) => {
    return (React.createElement(motion.button, { className: `${css.alert_button} ${css[props.type]} ${css[props.size || 'medium']}`, onClick: props.onClick, transition: {
            duration: 0.12,
        }, whileTap: {
            filter: 'brightness(1.7)',
        }, whileHover: {
            filter: 'brightness(1.4)',
        } }, props.children));
};

export { Alert, AlertButton };
//# sourceMappingURL=index.es.js.map
