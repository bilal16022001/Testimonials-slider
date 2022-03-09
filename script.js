
const data = [
    {
        img: "person-1_rfzshl.jpg",
        title: "Susan smith",
        job: "WEB DEVELOPER",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus impedit fuga consequuntur perspiciatis? Cumque,quae, numquam dolore consequatur enim esse neque ullam asperiores, aspernatur facere ad laborum delenit"
    },
    {
        img: "person-2_ipcjws.jpg",
        title: "Anna Jhonson",
        job: "WEB DESIGNER",
        des: "Second Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus impedit fuga consequuntur perspiciatis? Cumque quae, dolore consequatur enim esse neque ullam asperiores, aspernatur facere ad laborum deleniti debitis quas?"
    },
    {
        img: "person-3_ipa0mj.jpg",
        title: "Peter Jones",
        job: "FRONT-END DEVLOPER",
        des: "three Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus impedit fuga consequuntur perspiciatis? Cumque quae, dolore consequatur enim esse neque ullam asperiores, aspernatur facere ad laborum deleniti debitis quas?"
    },
    {
        img: "person-4_t9nxjt.jpg",
        title: "Bill Andreson",
        job: "BACK-END DEVLOPER",
        des: "FOUR Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus impedit fuga consequuntur perspiciatis? Cumque quae, dolore consequatur enim esse neque ullam asperiores, aspernatur facere ad laborum deleniti debitis quas?"
    }
]

let testimo = document.querySelector(".testimo");
let all = document.querySelector(".all")
let left = document.querySelector(".left");
let right = document.querySelector(".right");

right.addEventListener("click", clickRight)
let i = 0;
function clickRight() {
    i++;
    if (i > data.length - 1) {
        i = 0;
    }
    document.querySelector(".parco").innerHTML = ` <div class="testimo">
           
    <img src="${data[i].img}">
    <p>${data[i].des}</p>
    <span>${data[i].title}</span>
    <span>${data[i].job}</span>
</div>`
    console.log("right", i)

}

left.addEventListener("click", clickLeft)

function clickLeft() {
    i--;
    if (i < 0) {
        i = data.length - 1;
    }
    document.querySelector(".parco").innerHTML = ` <div class="testimo">
            <img src="${data[i].img}">
            <p>${data[i].des}</p>
            <span>${data[i].title}</span>
            <span>${data[i].job}</span>
        </div>`
    console.log("left", i)
}
