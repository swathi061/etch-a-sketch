const range = document.getElementById("slider");
const output = document.getElementById("num")
const reset = document.getElementById("reset");
const eraser = document.getElementById("eraser");
const black = document.getElementById("black");
const colors = document.getElementById("colors")
const playground = document.getElementById("playground");

output.innerHTML = range.value;
range.oninput = function () {
    output.innerHTML = this.value;
}

function divide() {
    for (i = 1; i <= 16 * 16; i++) {
        document.getElementById("playground").innerHTML += '<div id="box" class="box"></div>';
    }
    const blocks = document.querySelectorAll(".playground div");
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].addEventListener("mouseover", function () {
            blocks[i].style.backgroundColor = 'black';
        });
    }
}

function remove() {
    playground.innerHTML = "";
}

range.addEventListener("input", function () {
    remove();
    playground.setAttribute('style', `grid-template-columns: repeat(${range.value}, 2fr); grid-template-rows: repeat(${range.value}, 2fr);`);
    for (i = 1; i <= range.value * range.value; i++) {
        document.getElementById("playground").innerHTML += '<div id="box" class="box"></div>';
    }
    const blocks = document.querySelectorAll(".playground div");
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].addEventListener("mouseover", function () {
            blocks[i].style.backgroundColor = 'black';
        });
    }
})

reset.addEventListener("click", function () {
    window.location.reload();
});

function randomColor() {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return color;
}

black.addEventListener("click", function () {
    colorPicker('black');
});
eraser.addEventListener("click", function () {
    colorPicker('eraser');
});
function changeColor(color) {
    let boxes = document.getElementById("playground").children;
    let val = document.getElementById("playground").children.length;
    for (let i = 0; i < val; i++) {
        boxes[i].addEventListener("mouseover", function () {
            boxes[i].style.backgroundColor = color;
        });
    }
}

function colorPicker(color) {
    switch (color) {
        case 'black':
            return changeColor('black');
        case 'eraser':
            return changeColor('white');
    }

}

colors.addEventListener("click", function () {
    let boxes = document.getElementById("playground").children;
    let val = document.getElementById("playground").children.length;
    for (let i = 0; i < val; i++) {
        boxes[i].addEventListener("mouseover", function () {
            let color = randomColor();
            boxes[i].style.backgroundColor = "#" + color;
        });
    }
});


divide();