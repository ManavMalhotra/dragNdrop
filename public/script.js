function allowDrop(ev) {
    ev.preventDefault();
}

function dragStart(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

}

function dragDrop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    let a = cloneNode(document.getElementById(data))
    ev.target.appendChild(a);
    removeBtn(ev)

}

function cloneNode(node) {
    var clone = node.cloneNode(true);
    var children = node.childNodes;

    return clone;
}

function removeBtn() {
    let a = document.getElementById('solutionId').childNodes
    for (var i = 0; i < a.length; i++) {
        let b = document.getElementById("solutionId").childNodes[i]
        if (b.childElementCount == 1 || b.childElementCount >= 1) {

        } else {
            let newSpan = document.createElement("span")
            newSpan.className = 'remove'
            newSpan.innerHTML = 'x'
            newSpan.setAttribute("onclick", "removeBtnF(this)")

            a[i].appendChild(newSpan)

        }

    }

}

function removeBtnF(ele) {
    let b = ele.parentNode
    b.remove()
}

function onOperator(ele) {
    let a = ele
    let b = cloneNode(ele)
    b.removeAttribute('onclick')
    removeBtn()
    let parentNode = document.getElementById('solutionId');
    parentNode.appendChild(b)
    removeBtn()

}

let rhs;

function getInteger() {
    rhs = prompt("Enter any Integer");
    if (rhs != null) {
        let ele = document.getElementById('solutionId');
        let newDiv = document.createElement("div");
        newDiv.id = "getInt"
        newDiv.className = "assign"
        newDiv.innerHTML = rhs
        ele.appendChild(newDiv)
        removeBtn()
    }
}

async function onSubmit() {
    let number = []
    let operator = []
    let data = []

    let ele = document.getElementById('solutionId').childNodes;
    for (var i = 0; i < ele.length; i++) {
        console.log(ele[i])
    };
    for (var i = 0; i < ele.length - 1; i++) {
        if (ele[i].innerHTML === '&lt;' || ele[i].innerHTML === '&gt;') {
            operator.push(ele[i].attributes['data-value'])
        } else {
            number.push(ele[i].attributes['data-value'])
        }

        data.push(ele[i].attributes['data-value'].textContent)
    }
    let obj = {
        number: number,
        operator: operator,
        rhs: rhs
    }

    let compare = data.pop()
    let lhs = "";
    for (var i = 0; i < data.length; i++) {
        lhs += data[i]
    }

    console.log('lhs---> ' + eval(lhs))
    if (compare == '<') {
        alert(`Answer is ${lhs<rhs}`)
    } else if (compare == '>') {
        alert(`Answer is ${lhs>rhs}`)
    }

}