jQuery(document).ready((function(t){(bodhisvgsInlineSupport=function(){if("true"===ForceInlineSVGActive&&jQuery("img").each((function(){void 0!==jQuery(this).attr("src")&&!1!==jQuery(this).attr("src")&&jQuery(this).attr("src").match(/\.(svg)/)&&(jQuery(this).hasClass(cssTarget.ForceInlineSVG)||jQuery(this).addClass(cssTarget.ForceInlineSVG))})),String.prototype.endsWith||(String.prototype.endsWith=function(t,e){var r=this.toString();("number"!=typeof e||!isFinite(e)||Math.floor(e)!==e||e>r.length)&&(e=r.length),e-=t.length;var s=r.lastIndexOf(t,e);return-1!==s&&s===e}),String.prototype.endsWith=function(t){var e=this.length-t.length;return e>=0&&this.lastIndexOf(t)===e},"true"===ForceInlineSVGActive)var e="img."!==cssTarget.Bodhi?cssTarget.Bodhi:"img.style-svg";else var e="img."!==cssTarget?cssTarget:"img.style-svg";t(e).each((function(e){var r=jQuery(this),s=r.attr("id"),i=r.attr("class"),n=r.attr("src");n.endsWith("svg")&&t.get(n,(function(n){var a=t(n).find("svg"),c=a.attr("id");void 0===s?void 0===c?(s="svg-replaced-"+e,a=a.attr("id",s)):s=c:a=a.attr("id",s),void 0!==i&&(a=a.attr("class",i+" replaced-svg svg-replaced-"+e)),a=a.removeAttr("xmlns:a"),r.replaceWith(a),t(document).trigger("svg.loaded",[s])}),"xml")}))})()}));