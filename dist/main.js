(()=>{"use strict";function t(t,e){const n=document.createElement("button");n.setAttribute("id",t);const o=document.createElement("span");return o.textContent=e,n.appendChild(o),n.classList.add("tab"),n}const e=function(){const t=document.getElementById("tab-content");t.classList.add("flex-lay"),t.classList.remove("grid-lay"),t.textContent="";const e=function(){const t=document.createElement("scetion");t.classList.add("section");const e=document.createElement("h2");e.classList.add("section-title"),e.textContent="About",t.appendChild(e);const n=document.createElement("p");return n.classList.add("section-description"),n.textContent="Star Food has The best food from all Galaxies Lorem ipsum dolor sitamet consectetur adipisicing elit. Animi in, neque, dignissimosperspiciatis illo deserunt tetur adipisicing elit. Animi in, neque,dignissimos perspiciatis illo deserunt adipisicing elit. Animi in,neque, dignissimos perspiciatis illo deserunt",t.appendChild(n),t}();!function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("home").classList.add("active")}(),t.appendChild(e)};function n(t,e,n,o){const s=document.createElement("div");s.classList.add("food");const a=document.createElement("img");a.setAttribute("src",t),a.setAttribute("alt",o);const c=document.createElement("div");c.classList.add("description");const i=document.createElement("h3");i.textContent=e;const d=document.createElement("h2");return d.textContent=n,c.appendChild(i),c.appendChild(d),s.appendChild(a),s.appendChild(c),s}const o=function(){const t=document.getElementById("tab-content");t.classList.add("grid-lay"),t.classList.remove("flex-lay"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("menu").classList.add("active")}(),[n("https://starwarsblog.starwars.com/wp-content/uploads/2018/07/ackbar-ice-cream-tall.jpg","acbar ice Cream","10CR","acbar ice cream"),n("https://starwarsblog.starwars.com/wp-content/uploads/2019/06/corellian-coffee-tall.jpg","corellian coffee","4CR","corellian coffee"),n("https://starwarsblog.starwars.com/wp-content/uploads/2019/03/darth-maul-quinoa-tall.jpg","darth maul quinoa","20CR","darth maul quinoa"),n("https://starwarsblog.starwars.com/wp-content/uploads/2018/10/ewok-cookies-tall.jpg","ewok cookies","4CR","ewok cookies"),n("https://starwarsblog.starwars.com/wp-content/uploads/2018/12/lemon-tart-tall.jpg","lemon tart","6CR","lemon tart"),n("https://starwarsblog.starwars.com/wp-content/uploads/2018/03/porg-puffs-tall.jpg","porg puffs","12CR","porg puffs"),n("https://starwarsblog.starwars.com/wp-content/uploads/2019/08/sith-trooper-float-tall-b.jpg","sith trooper root beer","9CR","sith trooper root beer"),n("https://starwarsblog.starwars.com/wp-content/uploads/2019/06/vader-peanut-butter-blossoms-tall.jpg","vader peanut butter blossoms","20CR","vader peanut butter blossoms")].forEach((e=>{t.appendChild(e)}))};function s(t,e){const n=document.createElement("section");n.classList.add("section");const o=document.createElement("h2");return o.classList.add("section-title"),o.textContent=t,n.appendChild(o),e.forEach((t=>{const e=document.createElement("p");e.classList.add("section-description"),e.textContent=t,n.appendChild(e)})),n}const a=function(){const t=document.getElementById("tab-content");t.classList.add("flex-lay"),t.classList.remove("grid-lay"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("contact").classList.add("active")}();const e=s("Phones",["$ Oz92-12j-2jda1","# Oz92-34d-80c13"]),n=s("address",["unknown regions"]);t.appendChild(e),t.appendChild(n)};(function(){const e=document.getElementById("content"),n=function(t,e){const n=document.createElement("header");n.setAttribute("id","header");const o=document.createElement("h1");return o.textContent="Shivam Da Dhabha",n.appendChild(o),n}();e.appendChild(n);const o=function(e){const n=document.createElement("nav");n.setAttribute("id","nav");const o=t("home","home"),s=t("menu","menu"),a=t("contact","contact");return n.appendChild(o),n.appendChild(s),n.appendChild(a),n}();e.appendChild(o);const s=function(t){const e=document.createElement("main");return e.setAttribute("id","tab-content"),e}();e.appendChild(s);const a=function(t,e){const n=document.createElement("footer");n.setAttribute("id","footer");const o=document.createElement("h3");return o.textContent="Made by the force",n.appendChild(o),n}();e.appendChild(a)})(),e(),function(){const t=document.getElementById("home"),n=document.getElementById("menu"),s=document.getElementById("contact");t.addEventListener("click",e),n.addEventListener("click",o),s.addEventListener("click",a)}()})();