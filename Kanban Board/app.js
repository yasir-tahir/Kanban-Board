
var todo = document.querySelectorAll(".todo");
var all_status = document.querySelectorAll(".status");
let draggableTodo = null;


todo.forEach((todo) => {
    todo.addEventListener("dragstart", dragStart);
    todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
    draggableTodo = this;
    console.log("dragStart");

}

function dragEnd() {
    draggableTodo = null;
    console.log("dragEnd");
}

all_status.forEach((status) => {
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);
});


function dragOver(e) {
    e.preventDefault();
    // console.log("dragOver");
    
}

function dragEnter() {
    console.log("dragEnter");
}

function dragLeave() {
    console.log("dragLeave");

}

function dragDrop() {
    this.appendChild(draggableTodo);        
    console.log("dragDrop");
}

var btns = document.querySelectorAll("[data-target-modal]");
var close_modals = document.querySelectorAll(".close-modal");
var overlay =  document.getElementById("overlay");

btns.forEach ((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.targetModal).classList.add("active");
        overlay.classList.add("active");
    });
});

close_modals.forEach((btn) => {
    btn.addEventListener("click", () => {
        var modal = btn.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.remove("active");

    });
});

window.onclick = (event) => {
    if (event.target ==  overlay) {
        var modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
};


const todo_submit =  document.getElementById("todo_submit");

todo_submit.addEventListener("click", createTodo);

// function createTodo(){
//     var todo_div = document.createElement("div");
//     var input_val = document.getElementById("todo_input").value;
//     var txt = document.createTextNode(input_val);


//     todo_div.appendChild(txt);
//     todo_div.classList.add("todo");
//     todo_div.setAttribute("draggable", "true");


//     var span = document.createElement("span");
//     var span_txt = document.createTextNode("\u00D7");
//     span.classList.add("close");
//     span.appendChild(span_txt);


//     todo_div.appendChild(span);

//     // console.log(todo_div);

//     no_status.appendChild(todo_div);

//     span.addEventListener("click", () => {
//         span.parentElement.style.display = "none";
//     });

//     todo_div.addEventListener("dragstart", dragStart);
//     todo_div.addEventListener("dragend", dragEnd);

//     document.getElementById("todo_input").value = "";
//     todo_form.classList.remove("active");
//     overlay.classList.remove("active");
// }

//     var close_btns = document.querySelectorAll(".close");

//     close_btns.forEach((btn) => {
//         btn.addEventListener("click", () => {
//             btn.parentElement.style.display = "none";
//         });
//     });


function createTodo() {
    var todo_div = document.createElement("div");
    var input_val = document.getElementById("todo_input").value;
    var txt = document.createTextNode(input_val);

    todo_div.appendChild(txt);
     todo_div.classList.add("todo");
    todo_div.setAttribute("draggable", "true");

    var span = document.createElement("span");
    var span_txt = document.createTextNode("\u00D7");
    span.classList.add("close");
    span.appendChild(span_txt);

    todo_div.appendChild(span);

    no_status.appendChild(todo_div);

    span.addEventListener("click", () => {
        confirmDelete(span);    
    });

    todo_div.addEventListener("dragstart", dragStart);
    todo_div.addEventListener("dragend", dragEnd);

    document.getElementById("todo_input").value = "";
    todo_form.classList.remove("active");
    overlay.classList.remove("active");
}

function confirmDelete(span) {
    var modall = document.getElementById("confirmModall");
    var yesBtn = document.getElementById("confirmYes");
    var noBtn = document.getElementById("confirmNo");
    var successMessage = document.getElementById("successMessage");

    modall.style.display = "flex";

    yesBtn.onclick = function() {
        span.parentElement.style.display = "none";
        modall.style.display = "none";
        successMessage.style.display = "block";
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);
    };

    noBtn.onclick = function() {
        modall.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modall) {
            modall.style.display = "none";
        }
    };
}

var close_btns = document.querySelectorAll(".close");

close_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        confirmDelete(btn);
    });
});
