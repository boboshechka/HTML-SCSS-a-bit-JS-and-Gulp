!function(){const e=document.querySelectorAll("[data-modal]"),t=document.body,o=document.querySelectorAll(".modal__close"),l=document.querySelectorAll(".modal");function c(e){e.querySelector(".modal__content").removeAttribute("style"),setTimeout((()=>{e.classList.remove("show"),t.classList.remove("no-scroll")}),250)}e.forEach((e=>{e.addEventListener("click",(e=>{let o=e.currentTarget.getAttribute("data-modal"),l=document.getElementById(o),c=l.querySelector(".modal__content");c.addEventListener("click",(e=>{e.stopPropagation()})),l.classList.add("show"),t.classList.add("no-scroll"),setTimeout((()=>{c.style.transform="none",c.style.opacity="1"}),2)}))})),o.forEach((e=>{e.addEventListener("click",(e=>{c(e.currentTarget.closest(".modal"))}))})),l.forEach((e=>{console.log("ITEMM",e),e.addEventListener("click",(e=>{c(e.currentTarget)}))}))}(),document.querySelectorAll("[data-autoresize]").forEach((e=>{let t=e.offsetHeight;e.addEventListener("input",(e=>{let o=e.target;o.style.height=t+"px",o.style.height=o.scrollHeight+"px"}))}));