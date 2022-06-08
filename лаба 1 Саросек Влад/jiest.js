// Создаём крестик, для закрытия каждого элемента списка
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");//Крестик
    span.className = "close";//Тут мы передаём значения из span с "тэгом" close
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

//Тут мы скрываем элемент с нажатым крестиком
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//Добавляем перечёркивание при нажатии
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {//Если элемент принадлежит списку дел, то при нажатии делать его чекнутым
        ev.target.classList.toggle('checked');

    }
}, false);

//Создаём новый элемент списка, при нажатии добавить
function newElement() {
    var li = document.createElement("li");

    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Надо писать");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    const close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            const div = this.parentElement;
            div.style.display = "none";
        }
    }

}

