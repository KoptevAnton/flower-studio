(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();document.addEventListener("DOMContentLoaded",function(){["data-book-a-table","data-book-a-room","data-prices-per-room"].forEach(t=>{const i=t+"-open",s=t+"-close",e=document.querySelectorAll("["+i+"]"),o=document.querySelectorAll("["+s+"]"),n=document.querySelector("["+t+"]");if(n||c("Can`t find Modal with attribute "+n),e.length===0&&c("Can`t find Open modal button with attribute "+i),o.length===0&&c("Can`t find Close modal button with attribute "+s),!n||e.length===0||o.length===0)return;e.forEach(r=>r.addEventListener("click",d)),o.forEach(r=>r.addEventListener("click",d));function d(){document.body.classList.toggle("modal-open"),n.classList.toggle("is-hidden")}})},!1);function c(l){const t="color: #BADA55";console.log("%c"+l,t)}$(".responsive-slider").slick({dots:!1,arrows:!1,infinite:!0,speed:300,autoplay:!0,autoplaySpeed:2e3,variableWidth:!0,slidesToShow:2,slidesToScroll:1,responsive:[{breakpoint:1280,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:320,settings:{slidesToShow:2,slidesToScroll:1}}]});$(".prev-btn").click(function(){$(".responsive-slider").slick("slickPrev")});$(".next-btn").click(function(){$(".responsive-slider").slick("slickNext")});$(".prev-btn").addClass("slick-disabled");$(".responsive-slider").on("afterChange",function(){$(".slick-prev").hasClass("slick-disabled")?$(".prev-btn").addClass("slick-disabled"):$(".prev-btn").removeClass("slick-disabled"),$(".slick-next").hasClass("slick-disabled")?$(".next-btn").addClass("slick-disabled"):$(".next-btn").removeClass("slick-disabled")});(()=>{const l=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),s=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),l.classList.toggle("is-open");const o=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[o](document.body)};t.addEventListener("click",s),i.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(l.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
