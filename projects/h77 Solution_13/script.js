function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    //Finish this function
    let viewStr
    if (views < 1000) {
        let viewStr = views;
    }

    else if (views < 1000000) {
        let viewStr = views / 1000000 + "M";
    }

    else {
        let viewStr = views / 1000 + "K";
    }

    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", thumbnail(img)) 