import{a as m,i as n,S as p}from"./assets/vendor-lDhL-8I6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function g(s){return m.get("https://pixabay.com/api/",{params:{key:"49809160-ecb9db209c3e158eb7196d46c",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(i=>i.data).catch(i=>{n.error({message:"❌ Error fetching images from PIXABAY",position:"topRight"})})}const h=new p(".gallery a",{captionsData:"alt",captionDelay:250}),l=document.querySelector(".gallery");function y(s){const t=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:a,comments:d,downloads:f})=>`<li class="gallery-item">
                    <a href="${i}">
                        <img class="gallery-image" src="${o}" alt="${e}" />
                        <div class='info'>
                            <p><b>likes</b> ${r}</p>
                            <p><b>views</b> ${a}</p>
                            <p><b>comments</b> ${d}</p>
                            <p><b>downloads</b> ${f}</p>
                        </div>
                    </a>
                </li>`).join("");l.innerHTML=t,h.refresh()}function b(){l.innerHTML=""}const u=document.querySelector(".div-loader");function A(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",s=>{s.preventDefault();const t=c.elements["search-text"].value;if(b(),t===""){n.error({message:"Please enter a search query!",position:"topRight"});return}A(),g(t).then(o=>{if(o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(o.hits)}).catch(()=>{n.error({message:"❌ Error fetching images from PIXABAY`",position:"topRight"})}).finally(()=>{L()}),c.reset()});
//# sourceMappingURL=index.js.map
