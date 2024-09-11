"use strict";
const url = "https://eskuvo-anett.nemestamas.hu/api/youtube/";
fetch(url).then(response => response.json()).then(data => console.log(data));
