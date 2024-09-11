type kartya = {
    approved: string,
    date: string,
    id: number,
    imageurl: string,
    link: string,
    proponent: string,
    title: string 
}

const url = "https://eskuvo-anett.nemestamas.hu/api/youtube/";

fetch(url).then(response => response.json()).then(data => {
    data.forEach((element: kartya) => {
         //document.getElementById("container").innerHTML
        `
        <div class="card">
            <img class="kep" src="${element.imageurl}">
            <div class="neve">${element.title}</div>
            <div class="adatok">
                <div class="date">${ new Date(element.date).toDateString}</div>
                <div class="time">${ new Date(element.date).toTimeString}</div>
                <div class="kuldo">${element.proponent}</div>
            </div>
            </div>
        </div>
        `
    });
});
