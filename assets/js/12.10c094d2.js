(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{293:function(t,e,a){"use strict";a.r(e);var s=a(4),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"asset-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asset-handling","aria-hidden":"true"}},[t._v("#")]),t._v(" Asset Handling")]),t._v(" "),a("h2",{attrs:{id:"relative-urls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relative-urls","aria-hidden":"true"}},[t._v("#")]),t._v(" Relative URLs")]),t._v(" "),a("p",[t._v("All markdown files are compiled into Vue components and processed by webpack, therefore you can and "),a("strong",[t._v("should prefer")]),t._v(" referencing any asset using relative URLs:")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token url"}},[t._v("!["),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("An image")]),t._v("](./image.png)")]),t._v("\n")])])]),a("p",[t._v("This would work the same way as in "),a("code",[t._v("*.vue")]),t._v(" file templates. The image will be processed with "),a("code",[t._v("url-loader")]),t._v(" and "),a("code",[t._v("file-loader")]),t._v(", and copied to appropriate locations in the generated static build.")]),t._v(" "),a("p",[t._v("In addition, you can use the "),a("code",[t._v("~")]),t._v(" prefix to explicitly indicate this is a webpack module request, allowing you to reference files with webpack aliases or from npm dependencies:")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token url"}},[t._v("!["),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("Image from alias")]),t._v("](~@alias/image.png)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("!["),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("Image from dependency")]),t._v("](~some-dependency/image.png)")]),t._v("\n")])])]),a("p",[t._v("webpack aliases can be configured via "),a("router-link",{attrs:{to:"/config/#configurewebpack"}},[t._v("configureWebpack")]),t._v(" in "),a("code",[t._v(".vuepress/config.js")]),t._v(". Example:")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  configureWebpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      alias"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@alias'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/some/dir'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"public-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#public-files","aria-hidden":"true"}},[t._v("#")]),t._v(" Public Files")]),t._v(" "),a("p",[t._v("Sometimes you may need to provide static assets that are not directly referenced in any of your markdown or theme components - for example, favicons and PWA icons. In such cases, you can put them inside "),a("code",[t._v(".vuepress/public")]),t._v(" and they will be copied to the root of the generated directory.")]),t._v(" "),a("h2",{attrs:{id:"base-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base-url","aria-hidden":"true"}},[t._v("#")]),t._v(" Base URL")]),t._v(" "),a("p",[t._v("If your site is deployed to a non-root URL, you will need to set the "),a("code",[t._v("base")]),t._v(" option in "),a("code",[t._v(".vuepress/config.js")]),t._v(". For example, if you plan to deploy your site to "),a("code",[t._v("https://foo.github.io/bar/")]),t._v(", then "),a("code",[t._v("base")]),t._v(" should be set to "),a("code",[t._v('"/bar/"')]),t._v(" (it should always start and end with a slash).")]),t._v(" "),a("p",[t._v("With a base URL, if you want to reference an image in "),a("code",[t._v(".vuepress/public")]),t._v(", you'd have to use URLs like "),a("code",[t._v("/bar/image.png")]),t._v(". However, this is brittle if you ever decide to change the "),a("code",[t._v("base")]),t._v(" later. To help with that, VuePress provides a built-in helper "),a("code",[t._v("$withBase")]),t._v(" (injected onto Vue's prototype) that generates the correct path:")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$withBase('/foo.png')"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[t._v("Note you can use the above syntax not only in theme components, but in your markdown files as well.")]),t._v(" "),a("p",[t._v("In addition, if a "),a("code",[t._v("base")]),t._v(" is set, it is automatically prepended to all asset URLs in "),a("code",[t._v(".vuepress/config.js")]),t._v(" options.")])])},[],!1,null,null,null);e.default=n.exports}}]);