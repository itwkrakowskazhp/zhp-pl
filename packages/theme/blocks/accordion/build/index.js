!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.i18n},function(e,t,n){"use strict";n.r(t);var o=n(3),r=n(0),i=n(1),l=n(2);n(4),Object(o.registerBlockType)("zhp/accordion",{apiVersion:2,title:"Accordion",description:"",category:"widgets",icon:"sort",supports:{html:!1},attributes:{multiple:{type:"boolean",default:!1},firstOpen:{type:"string"}},edit:function(e){var t=e.attributes,n=e.setAttributes;return[Object(r.createElement)(i.InspectorControls,null,Object(r.createElement)(l.PanelBody,{title:"Właściwości"},Object(r.createElement)(l.ToggleControl,{label:"Wiele zakładek",help:t.multiple?"Dozwolone jest otwieranie wielu zakładek.":"Przełącz, aby umożliwić otiweranie wielu zakładek.",checked:t.multiple,onChange:function(e){n({multiple:e})}}),Object(r.createElement)(l.TextControl,{label:"Otwarta zakładka",help:"Wpisz tytuł zakładki, która powinna być otwarta po załadowaniu.",value:t.firstOpen,onChange:function(e){n({firstOpen:e})}}))),Object(r.createElement)("div",null,Object(r.createElement)(i.InnerBlocks,{allowedBlocks:["zhp/accordion-item"]}))]},save:function(e){var t=e.attributes;return Object(r.createElement)("z-accordion",{multiple:t.multiple,"first-open":t.firstOpen},Object(r.createElement)(i.InnerBlocks.Content,null))}})}]);