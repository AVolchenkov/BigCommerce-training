(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{287:function(t,e,i){"use strict";i.r(e),function(t){i.d(e,"default",(function(){return l}));var n=i(106),r=i(191),o=i(34),a=i(193),c=i(683),d=i(67),u=i(26);function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(e){var i,n;function l(i){var n;return(n=e.call(this,i)||this).url=window.location.href,n.$reviewLink=t('[data-reveal-id="modal-review-form"]'),n.$bulkPricingLink=t('[data-reveal-id="modal-bulk-pricing"]'),n.reviewModal=Object(u.c)("#modal-review-form")[0],n}n=e,(i=l).prototype=Object.create(n.prototype),i.prototype.constructor=i,s(i,n);var v=l.prototype;return v.onReady=function(){var e,i=this;t(document).on("close.fndtn.reveal",(function(){-1!==i.url.indexOf("#write_review")&&"function"==typeof window.history.replaceState&&window.history.replaceState(null,document.title,window.location.pathname)})),Object(o.b)(),this.productDetails=new a.a(t(".productView"),this.context,window.BCData.product_attributes),this.productDetails.setProductVariant(),Object(c.a)(),this.bulkPricingHandler();var n=Object(d.c)(".writeReview-form");if(0!==n.length){var u=new r.a({$reviewForm:n});t("body").on("click",'[data-reveal-id="modal-review-form"]',(function(){e=u.registerValidation(i.context),i.ariaDescribeReviewInputs(n)})),n.on("submit",(function(){return!!e&&(e.performCheck(),e.areAll("valid"))})),this.productReviewHandler()}},v.ariaDescribeReviewInputs=function(e){e.find("[data-input]").each((function(e,i){var n=t(i),r=n.attr("name")+"-msg";n.siblings("span").attr("id",r),n.attr("aria-describedby",r)}))},v.productReviewHandler=function(){-1!==this.url.indexOf("#write_review")&&this.$reviewLink.trigger("click")},v.bulkPricingHandler=function(){-1!==this.url.indexOf("#bulk_pricing")&&this.$bulkPricingLink.trigger("click")},l}(n.a)}.call(this,i(4))},683:function(t,e,i){"use strict";(function(t){i.d(e,"a",(function(){return r}));var n=function(){function e(t){this.$player=t.find("[data-video-player]"),this.$videos=t.find("[data-video-item]"),this.currentVideo={},this.bindEvents()}var i=e.prototype;return i.selectNewVideo=function(e){e.preventDefault();var i=t(e.currentTarget);this.currentVideo={id:i.data("videoId"),$selectedThumb:i},this.setMainVideo(),this.setActiveThumb()},i.setMainVideo=function(){this.$player.attr("src","//www.youtube.com/embed/"+this.currentVideo.id)},i.setActiveThumb=function(){this.$videos.removeClass("is-active"),this.currentVideo.$selectedThumb.addClass("is-active")},i.bindEvents=function(){this.$videos.on("click",this.selectNewVideo.bind(this))},e}();function r(){t("[data-video-gallery]").each((function(e,i){var r=t(i);r.data("video-gallery")instanceof n||r.data("video-gallery",new n(r))}))}}).call(this,i(4))}}]);
//# sourceMappingURL=theme-bundle.chunk.1.js.map