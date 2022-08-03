let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];


const dom = (selector) => document.querySelector(selector);
const doms = (selector) => document.querySelectorAll(selector);

// render ảnh kính ra giao diện
const img = dataGlasses.map((dataGlassesi, index) => `<img src="${dataGlassesi.src}" class="vglasses__items col-4 img-fluid" onclick="addglass(${index})">`)
dom('#vglassesList').innerHTML = img.join('')

// áp kính và thông tin vào mẫu
window.addglass = (index) => {
    add(dataGlasses[index])
}

const add = (obj) => {
    dom('#avatar').innerHTML = `<img src="${obj.virtualImg}" data-id="${obj.id}">`;
    dom('#glassesInfo').style.display = 'block';
    dom('#glassesInfo').innerHTML = `<p>${obj.name} - ${obj.brand} (${obj.color})</p>
    <p><span class="btn btn-danger">$${obj.price}</span> <span class="text-success ml-2">Stocking</span></p>
    <p class="small">${obj.description}</p>`
}


// xử lý nút before và after
window.removeGlasses = (x) => {
    removeGlasses(x)
}
const removeGlasses = (x) => {
    let a = dom('#avatar').innerHTML
    if (a === '') {
        add(dataGlasses[0])
    } else if (x) {
        const idName = dom('#avatar img').getAttribute('data-id')
        const index = dataGlasses.findIndex(sp => sp.id === idName)
        if (index === dataGlasses.length - 1) {
            add(dataGlasses[0])
            return
        }
        add(dataGlasses[index + 1])
    } else {
        const idName = dom('#avatar img').getAttribute('data-id')
        const index = dataGlasses.findIndex(sp => sp.id === idName)
        if (index === 0) {
            add(dataGlasses[dataGlasses.length - 1])
            return
        }
        add(dataGlasses[index - 1])
    }
}





