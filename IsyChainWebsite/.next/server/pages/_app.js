(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "aos"
const external_aos_namespaceObject = require("aos");
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_namespaceObject);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "react-bootstrap/Row"
var Row_ = __webpack_require__(907);
var Row_default = /*#__PURE__*/__webpack_require__.n(Row_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/layouts/main.jsx





function Main_Layout({
  children
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      fluid: true,
      className: "p-0",
      children: /*#__PURE__*/jsx_runtime_.jsx((Row_default()), {
        className: "m-0",
        children: children
      })
    })
  });
}
// EXTERNAL MODULE: external "react-bootstrap/Col"
var Col_ = __webpack_require__(511);
var Col_default = /*#__PURE__*/__webpack_require__.n(Col_);
;// CONCATENATED MODULE: external "react-bootstrap/Navbar"
const Navbar_namespaceObject = require("react-bootstrap/Navbar");
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Nav"
const Nav_namespaceObject = require("react-bootstrap/Nav");
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_namespaceObject);
// EXTERNAL MODULE: ./styles/navigation/navigationBar.module.css
var navigationBar_module = __webpack_require__(292);
var navigationBar_module_default = /*#__PURE__*/__webpack_require__.n(navigationBar_module);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(937);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: ./components/navigation/navigationBar.jsx










function NavigationBar() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx((Col_default()), {
      className: "p-0",
      children: /*#__PURE__*/jsx_runtime_.jsx((Navbar_default()), {
        className: (navigationBar_module_default()).navbar,
        expand: "lg",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Container_default()), {
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/assets/Logo-vf.png",
            alt: "IsyChain - We make the blockchain easy !",
            className: (navigationBar_module_default()).logo
          }), /*#__PURE__*/jsx_runtime_.jsx((Navbar_default()).Toggle, {
            "aria-controls": "basic-navbar-nav"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Navbar_default()).Collapse, {
            id: "basic-navbar-nav",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Nav_default()), {
              children: [/*#__PURE__*/jsx_runtime_.jsx((Nav_default()).Link, {
                className: (navigationBar_module_default()).navlink,
                href: "#service",
                children: " Nos services"
              }), /*#__PURE__*/jsx_runtime_.jsx((Nav_default()).Link, {
                className: (navigationBar_module_default()).navlink,
                href: "#team",
                children: " Notre Equipe"
              }), /*#__PURE__*/jsx_runtime_.jsx((Nav_default()).Link, {
                className: (navigationBar_module_default()).navlink,
                href: "#jobs",
                children: " Rejoignez-Nous"
              }), /*#__PURE__*/jsx_runtime_.jsx((Nav_default()).Link, {
                className: (navigationBar_module_default()).navlink,
                href: "#product",
                children: " Nos produits"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx((Nav_default()), {
              children: /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
                href: "#contact",
                className: (navigationBar_module_default()).contact,
                type: "submit",
                children: "Contact"
              })
            })]
          })]
        })
      })
    })
  });
}
// EXTERNAL MODULE: ./styles/layouts/footer.module.css
var footer_module = __webpack_require__(184);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(197);
;// CONCATENATED MODULE: ./components/layouts/footer.jsx









function Footer() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx((Col_default()), {
      xl: 12,
      lg: 12,
      md: 12,
      sm: 12,
      xs: 12,
      className: (footer_module_default()).container,
      children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
        className: (footer_module_default()).contentContainer,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Row_default()), {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Col_default()), {
            xl: 3,
            lg: 3,
            md: 3,
            sm: 12,
            xs: 12,
            className: (footer_module_default()).container,
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: (footer_module_default()).h3,
              children: "Ressources"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: (footer_module_default()).ul,
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                className: (footer_module_default()).li,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#who",
                  className: (footer_module_default()).ul.a,
                  children: "Qui Somme-nous ?"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: (footer_module_default()).li,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  className: (footer_module_default()).ul.a,
                  children: "Blog"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: (footer_module_default()).li,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#jobs",
                  className: (footer_module_default()).ul.a,
                  children: "Recrutement"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: (footer_module_default()).li,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  className: (footer_module_default()).ul.a,
                  children: "Mentions l\xE9gales"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: (footer_module_default()).li,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  className: (footer_module_default()).ul.a,
                  children: "CGU"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: (footer_module_default()).li,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  className: (footer_module_default()).ul.a,
                  children: "FAQ"
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Col_default()), {
            xl: 3,
            lg: 3,
            md: 3,
            sm: 12,
            xs: 12,
            className: (footer_module_default()).container,
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: (footer_module_default()).h3,
              children: "Nos Services"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: (footer_module_default()).ul,
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                className: (footer_module_default()).li,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#service",
                  className: (footer_module_default()).ul.a,
                  children: "IsyChain As a Service"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: (footer_module_default()).li,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#service",
                  className: (footer_module_default()).ul.a,
                  children: "Conseil & Strat\xE9gie"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: (footer_module_default()).li,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#service",
                  className: (footer_module_default()).ul.a,
                  children: "D\xE9veloppement sur-mesure"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: (footer_module_default()).li,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#service",
                  className: (footer_module_default()).ul.a,
                  children: "R&D Blockchain"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: (footer_module_default()).li,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#service",
                  className: (footer_module_default()).ul.a,
                  children: "Formation"
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Col_default()), {
            xl: 3,
            lg: 3,
            md: 3,
            sm: 12,
            xs: 12,
            className: (footer_module_default()).container,
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: (footer_module_default()).h3,
              children: "Nos produits"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: (footer_module_default()).ul,
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                className: (footer_module_default()).li,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#product",
                  className: (footer_module_default()).ul.a,
                  children: "SehaChain"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: (footer_module_default()).li,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#product",
                  className: (footer_module_default()).ul.a,
                  children: "IsyChat"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: (footer_module_default()).li,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#product",
                  className: (footer_module_default()).ul.a,
                  children: "IsyNode"
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Col_default()), {
            xl: 3,
            lg: 3,
            md: 3,
            sm: 12,
            xs: 12,
            className: (footer_module_default()).social,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: "https://www.linkedin.com/company/isychain/",
              className: (footer_module_default()).linkedInkink,
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
              }), " "]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: "#",
              className: (footer_module_default()).linkedInkink,
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "https://img.icons8.com/ios-filled/50/ffffff/twitter.png"
              }), " "]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: "#",
              className: (footer_module_default()).linkedInkink,
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "https://img.icons8.com/ios-filled/50/ffffff/discord-logo.png"
              }), " "]
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              className: (footer_module_default()).linkedInkink,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "https://img.icons8.com/ios-filled/50/ffffff/medium-logo.png"
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx((Col_default()), {
            xl: 12,
            lg: 12,
            md: 12,
            sm: 12,
            xs: 12,
            className: (footer_module_default()).copyright,
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Copyright IsyChain \xA9 2022 All rights reserved"
            })
          })]
        })
      })
    })
  });
}
;// CONCATENATED MODULE: external "@fortawesome/fontawesome-svg-core"
const fontawesome_svg_core_namespaceObject = require("@fortawesome/fontawesome-svg-core");
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/styles.css
var styles = __webpack_require__(800);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















fontawesome_svg_core_namespaceObject.config.autoAddCss = false;

const IsyChain_Simulator = ({
  Component,
  pageProps
}) => {
  (0,external_react_.useEffect)(() => {
    external_aos_default().init({
      duration: 1000
    });
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "IsyChain - We Make Blockchain Easy"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "IsyChain est une entreprise marocaine mais \xE0 vocation africaine regroupant une \xE9quipe pluridisciplinaire d'experts passionn\xE9s par les technologies du web d\xE9centralis\xE9s et sp\xE9cialis\xE9s dans la technologie blockchain."
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Main_Layout, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(NavigationBar, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
    })]
  });
};

/* harmony default export */ const _app = (IsyChain_Simulator);

/***/ }),

/***/ 184:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "footer_container__J9_HP",
	"h3": "footer_h3__QdVjD",
	"ul": "footer_ul__DeQwd",
	"li": "footer_li__Xi0x6",
	"text": "footer_text__tRPiX",
	"social": "footer_social__6xVwS",
	"copyright": "footer_copyright__MDTKW",
	"linkedInkink": "footer_linkedInkink__ZtGEf"
};


/***/ }),

/***/ 292:
/***/ ((module) => {

// Exports
module.exports = {
	"logo": "navigationBar_logo__yQ_TT",
	"navbrand": "navigationBar_navbrand__Fc7o9",
	"navbar": "navigationBar_navbar__3KQV1",
	"navlink": "navigationBar_navlink__1edFX",
	"contact": "navigationBar_contact__2klJO"
};


/***/ }),

/***/ 800:
/***/ (() => {



/***/ }),

/***/ 197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 937:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 511:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ 678:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ 907:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(734));
module.exports = __webpack_exports__;

})();