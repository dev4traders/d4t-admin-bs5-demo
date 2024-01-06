/*! For license information please see main.js.LICENSE.txt */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(self,(function(){return function(){"use strict";function e(e,n){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){o&&(e=o);var a=0,s=function(){};return{s:s,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,r=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return i=e.done,e},e:function(e){r=!0,l=e},f:function(){try{i||null==o.return||o.return()}finally{if(r)throw l}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}window.Helpers.isRtl(),window.Helpers.isDarkStyle();var n,o=!1;return document.getElementById("layout-menu")&&(o=document.getElementById("layout-menu").classList.contains("menu-horizontal")),function(t,a){setTimeout((function(){window.Helpers.initCustomOptionCheck()}),1e3),document.querySelectorAll("#layout-menu").forEach((function(e){n=new Menu(e,{orientation:o?"horizontal":"vertical",closeChildren:!!o,showDropdownOnHover:localStorage.getItem("templateCustomizer-"+templateName+"--ShowDropdownOnHover")?"true"===localStorage.getItem("templateCustomizer-"+templateName+"--ShowDropdownOnHover"):void 0===window.templateCustomizer||window.templateCustomizer.settings.defaultShowDropdownOnHover}),window.Helpers.scrollToActive(!1),window.Helpers.mainMenu=n})),document.querySelectorAll(".layout-menu-toggle").forEach((function(e){e.addEventListener("click",(function(e){if(e.preventDefault(),window.Helpers.toggleCollapsed(),config.enableMenuLocalStorage&&!window.Helpers.isSmallScreen())try{localStorage.setItem("templateCustomizer-"+templateName+"--LayoutCollapsed",String(window.Helpers.isCollapsed()));var t=document.querySelector(".template-customizer-layouts-options");if(t){var n=window.Helpers.isCollapsed()?"collapsed":"expanded";t.querySelector('input[value="'.concat(n,'"]')).click()}}catch(e){}}))}));var s,l,i;document.getElementById("layout-menu")&&(s=document.getElementById("layout-menu"),l=function(){Helpers.isSmallScreen()||document.querySelector(".layout-menu-toggle").classList.add("d-block")},i=null,s.onmouseenter=function(){i=Helpers.isSmallScreen()?setTimeout(l,0):setTimeout(l,300)},s.onmouseleave=function(){document.querySelector(".layout-menu-toggle").classList.remove("d-block"),clearTimeout(i)}),window.Helpers.swipeIn(".drag-target",(function(e){window.Helpers.setCollapsed(!1)})),window.Helpers.swipeOut("#layout-menu",(function(e){window.Helpers.isSmallScreen()&&window.Helpers.setCollapsed(!0)}));var r=document.getElementsByClassName("menu-inner"),c=document.getElementsByClassName("menu-inner-shadow")[0];r.length>0&&c&&r[0].addEventListener("ps-scroll-y",(function(){this.querySelector(".ps__thumb-y").offsetTop?c.style.display="block":c.style.display="none"}));var d,u=document.querySelector(".dropdown-style-switcher"),m=localStorage.getItem("templateCustomizer-"+templateName+"--Style")||(null!==(t=null===(a=window.templateCustomizer)||void 0===a||null===(a=a.settings)||void 0===a?void 0:a.defaultStyle)&&void 0!==t?t:"light");if(window.templateCustomizer&&u){[].slice.call(u.children[1].querySelectorAll(".dropdown-item")).forEach((function(e){e.addEventListener("click",(function(){var e=this.getAttribute("data-theme");"light"===e?window.templateCustomizer.setStyle("light"):"dark"===e?window.templateCustomizer.setStyle("dark"):window.templateCustomizer.setStyle("system")}))}));var p=u.querySelector("i");"light"===m?(p.classList.add("bx-sun"),new bootstrap.Tooltip(p,{title:"Light Mode",fallbackPlacements:["bottom"]})):"dark"===m?(p.classList.add("bx-moon"),new bootstrap.Tooltip(p,{title:"Dark Mode",fallbackPlacements:["bottom"]})):(p.classList.add("bx-desktop"),new bootstrap.Tooltip(p,{title:"System Mode",fallbackPlacements:["bottom"]}))}"system"===(d=m)&&(d=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),[].slice.call(document.querySelectorAll("[data-app-"+d+"-img]")).map((function(e){var t=e.getAttribute("data-app-"+d+"-img");e.src=t})),"undefined"!=typeof i18next&&"undefined"!=typeof i18NextHttpBackend&&i18next.use(i18NextHttpBackend).init({lng:window.templateCustomizer?window.templateCustomizer.settings.lang:"en",debug:!1,fallbackLng:"en",backend:{loadPath:assetsPath+"json/locales/{{lng}}.json"},returnObjects:!0}).then((function(e){y()}));var w=document.getElementsByClassName("dropdown-language");if(w.length)for(var f=function(e){"rtl"===e?"true"!==localStorage.getItem("templateCustomizer-"+templateName+"--Rtl")&&window.templateCustomizer&&window.templateCustomizer.setRtl(!0):"true"===localStorage.getItem("templateCustomizer-"+templateName+"--Rtl")&&window.templateCustomizer&&window.templateCustomizer.setRtl(!1)},h=w[0].querySelectorAll(".dropdown-item"),g=0;g<h.length;g++)h[g].addEventListener("click",(function(){var t,n=this.getAttribute("data-language"),o=this.getAttribute("data-text-direction"),a=e(this.parentNode.children);try{for(a.s();!(t=a.n()).done;)for(var s=t.value.parentElement.parentNode.firstChild;s;)1===s.nodeType&&s!==s.parentElement&&s.querySelector(".dropdown-item").classList.remove("active"),s=s.nextSibling}catch(e){a.e(e)}finally{a.f()}this.classList.add("active"),i18next.changeLanguage(n,(function(e,t){if(window.templateCustomizer&&window.templateCustomizer.setLang(n),f(o),e)return console.log("something went wrong loading",e);y()}))}));function y(){var e=document.querySelectorAll("[data-i18n]"),t=document.querySelector('.dropdown-item[data-language="'+i18next.language+'"]');t&&t.click(),e.forEach((function(e){e.innerHTML=i18next.t(e.dataset.i18n)}))}var v=document.querySelector(".dropdown-notifications-all"),b=document.querySelectorAll(".dropdown-notifications-read");v&&v.addEventListener("click",(function(e){b.forEach((function(e){e.closest(".dropdown-notifications-item").classList.add("marked-as-read")}))})),b&&b.forEach((function(e){e.addEventListener("click",(function(t){e.closest(".dropdown-notifications-item").classList.toggle("marked-as-read")}))})),document.querySelectorAll(".dropdown-notifications-archive").forEach((function(e){e.addEventListener("click",(function(t){e.closest(".dropdown-notifications-item").remove()}))})),[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(e){return new bootstrap.Tooltip(e)}));var C=function(e){"show.bs.collapse"==e.type||"show.bs.collapse"==e.type?e.target.closest(".accordion-item").classList.add("active"):e.target.closest(".accordion-item").classList.remove("active")};[].slice.call(document.querySelectorAll(".accordion")).map((function(e){e.addEventListener("show.bs.collapse",C),e.addEventListener("hide.bs.collapse",C)}));window.Helpers.setAutoUpdate(!0),window.Helpers.initPasswordToggle(),window.Helpers.initSpeechToText(),window.Helpers.initNavbarDropdownScrollbar();var S=document.querySelector("[data-template^='horizontal-menu']");if(S&&(window.innerWidth<window.Helpers.LAYOUT_BREAKPOINT?window.Helpers.setNavbarFixed("fixed"):window.Helpers.setNavbarFixed("")),window.addEventListener("resize",(function(e){window.innerWidth>=window.Helpers.LAYOUT_BREAKPOINT&&document.querySelector(".search-input-wrapper")&&(document.querySelector(".search-input-wrapper").classList.add("d-none"),document.querySelector(".search-input").value=""),S&&(window.innerWidth<window.Helpers.LAYOUT_BREAKPOINT?window.Helpers.setNavbarFixed("fixed"):window.Helpers.setNavbarFixed(""),setTimeout((function(){window.innerWidth<window.Helpers.LAYOUT_BREAKPOINT?document.getElementById("layout-menu")&&document.getElementById("layout-menu").classList.contains("menu-horizontal")&&n.switchMenu("vertical"):document.getElementById("layout-menu")&&document.getElementById("layout-menu").classList.contains("menu-vertical")&&n.switchMenu("horizontal")}),100))}),!0),!o&&!window.Helpers.isSmallScreen()&&("undefined"!=typeof TemplateCustomizer&&(window.templateCustomizer.settings.defaultMenuCollapsed?window.Helpers.setCollapsed(!0,!1):window.Helpers.setCollapsed(!1,!1)),"undefined"!=typeof config&&config.enableMenuLocalStorage))try{null!==localStorage.getItem("templateCustomizer-"+templateName+"--LayoutCollapsed")&&window.Helpers.setCollapsed("true"===localStorage.getItem("templateCustomizer-"+templateName+"--LayoutCollapsed"),!1)}catch(e){}}(),"undefined"!=typeof $&&$((function(){window.Helpers.initSidebarToggle();var e=$(".search-toggler"),t=$(".search-input-wrapper"),n=$(".search-input"),o=$(".content-backdrop");if(e.length&&e.on("click",(function(){t.length&&(t.toggleClass("d-none"),n.focus())})),$(document).on("keydown",(function(e){var o=e.ctrlKey,a=191===e.which;o&&a&&t.length&&(t.toggleClass("d-none"),n.focus())})),setTimeout((function(){var e=$(".twitter-typeahead");n.on("focus",(function(){t.hasClass("container-xxl")?(t.find(e).addClass("container-xxl"),e.removeClass("container-fluid")):t.hasClass("container-fluid")&&(t.find(e).addClass("container-fluid"),e.removeClass("container-xxl"))}))}),10),n.length){var a=function(e){return function(t,n){var o;o=[],e.filter((function(e){if(e.name.toLowerCase().startsWith(t.toLowerCase()))o.push(e);else{if(e.name.toLowerCase().startsWith(t.toLowerCase())||!e.name.toLowerCase().includes(t.toLowerCase()))return[];o.push(e),o.sort((function(e,t){return t.name<e.name?1:-1}))}})),n(o)}},s="search-vertical.json";if($("#layout-menu").hasClass("menu-horizontal"))s="search-horizontal.json";var l,i=$.ajax({url:assetsPath+"json/"+s,dataType:"json",async:!1}).responseJSON;n.each((function(){var e=$(this);n.typeahead({hint:!1,classNames:{menu:"tt-menu navbar-search-suggestion",cursor:"active",suggestion:"suggestion d-flex justify-content-between px-3 py-2 w-100"}},{name:"pages",display:"name",limit:5,source:a(i.pages),templates:{header:'<h6 class="suggestions-header text-primary mb-0 mx-3 mt-3 pb-2">Pages</h6>',suggestion:function(e){return'<a href="'+e.url+'"><div><i class="bx '+e.icon+' me-2"></i><span class="align-middle">'+e.name+"</span></div></a>"},notFound:'<div class="not-found px-3 py-2"><h6 class="suggestions-header text-primary mb-2">Pages</h6><p class="py-2 mb-0"><i class="bx bx-error-circle bx-xs me-2"></i> No Results Found</p></div>'}},{name:"files",display:"name",limit:4,source:a(i.files),templates:{header:'<h6 class="suggestions-header text-primary mb-0 mx-3 mt-3 pb-2">Files</h6>',suggestion:function(e){var t=e.src,n=e.name,o=e.subtitle,a=e.meta;return'<a href="javascript:;"><div class="d-flex w-50"><img class="me-3" src="'+assetsPath+t+'" alt="'+n+'" height="32"><div class="w-75"><h6 class="mb-0">'+n+'</h6><small class="text-muted">'+o+'</small></div></div><small class="text-muted">'+a+"</small></a>"},notFound:'<div class="not-found px-3 py-2"><h6 class="suggestions-header text-primary mb-2">Files</h6><p class="py-2 mb-0"><i class="bx bx-error-circle bx-xs me-2"></i> No Results Found</p></div>'}},{name:"members",display:"name",limit:4,source:a(i.members),templates:{header:'<h6 class="suggestions-header text-primary mb-0 mx-3 mt-3 pb-2">Members</h6>',suggestion:function(e){var t=e.name,n=e.src,o=e.subtitle;return'<a href="app-user-view-account.html"><div class="d-flex align-items-center"><img class="rounded-circle me-3" src="'+assetsPath+n+'" alt="'+t+'" height="32"><div class="user-info"><h6 class="mb-0">'+t+'</h6><small class="text-muted">'+o+"</small></div></div></a>"},notFound:'<div class="not-found px-3 py-2"><h6 class="suggestions-header text-primary mb-2">Members</h6><p class="py-2 mb-0"><i class="bx bx-error-circle bx-xs me-2"></i> No Results Found</p></div>'}}).bind("typeahead:render",(function(){o.addClass("show").removeClass("fade")})).bind("typeahead:select",(function(e,t){t.url&&(window.location=t.url)})).bind("typeahead:close",(function(){n.val(""),e.typeahead("val",""),t.addClass("d-none"),o.addClass("fade").removeClass("show")})),n.on("keyup",(function(){""==n.val()&&o.addClass("fade").removeClass("show")}))})),$(".navbar-search-suggestion").each((function(){l=new PerfectScrollbar($(this)[0],{wheelPropagation:!1,suppressScrollX:!0})})),n.on("keyup",(function(){l.update()}))}})),{}}()}));