(()=>{"use strict";const t=document.getElementsByClassName("FAQ-content")[0]?.getElementsByTagName("ul")[0];t&&t.addEventListener("click",(t=>function(t){if(t.target.closest("li")){const e=t.target.closest("li");e?.classList.contains("hidden")&&function(t){t.parentNode.childNodes.forEach((t=>{"LI"===t.tagName&&t?.classList.add("hidden")}))}(e),e?.classList.toggle("hidden")}}(t)))})();