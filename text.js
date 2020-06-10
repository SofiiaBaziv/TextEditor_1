// CONST
const topBlock = document.getElementById('top-Block');
const area = document.getElementById('area');
const editBlock = document.getElementById('editBlock');
const editBtn = document.getElementById('editBtn');
const styleBtn = document.getElementById('styleBtn');
const addBtn = document.getElementById('addBtn');
const saveBtn = document.getElementById('saveBtn');
const styleBlock = document.getElementById('styleBlock');
const fontFF = document.getElementById('fontFF');
const colorBtn = document.getElementById('colorBtn');
const backgroundBtn = document.getElementById('backgroundBtn');
const mainBlock = document.getElementById('mainBlock');
const addBlock = document.getElementById('addBlock');
const backbt = document.getElementById('backbt');
const btnCreatTabl = document.getElementById('btn-createTb');
const addTable = document.getElementById('addTable');
const inpLight = document.querySelector('.inp');
const addList = document.getElementById('addList');
const btnCreatLi = document.getElementById('btn-createLi');



// edit-btn box-shadow onfocus
editBtn.onfocus = function() {
    event.target.style.boxShadow = "0px 0px 5px 2px gold";
}

// edit-btn box-shadow onblur
editBtn.onblur = function() {
    event.target.style.boxShadow = "";
}

// style-btn box-shadow onfocus
styleBtn.onfocus = function() {
    event.target.style.boxShadow = "0px 0px 5px 2px #3F7DFF"
}

// style-btn box-shadow onblur
styleBtn.onblur = function() {
    event.target.style.boxShadow = "";
}

// add-btn box-shadow onfocus
addBtn.onfocus = function() {
    event.target.style.boxShadow = " 0px 0px 5px 2px rgb(245, 81, 81)"
}

// add-btn box-shadow onblur
addBtn.onblur = function() {
    event.target.style.boxShadow = "";
}

// save-btn box-shadow onfocus
saveBtn.onfocus = function() {
    event.target.style.boxShadow = " 0px 0px 5px 2px rgb(48, 209, 48)"
}

// save-btn box-shadow onblur
saveBtn.onblur = function() {
    event.target.style.boxShadow = "";
}

// Color of text-btn box-shadow onfocus
colorBtn.onfocus = function() {
    event.target.style.boxShadow = "0px 0px 5px 2px rgba(138, 138, 141, 0.836)"
}

// Color of text-btn box-shadow onblur
colorBtn.onblur = function() {
    event.target.style.boxShadow = "";
}

// Background color-btn box-shadow onfocus
backgroundBtn.onfocus = function() {
    event.target.style.boxShadow = "0px 0px 5px 2px rgba(138, 138, 141, 0.836) "
}

// Background color-btn box-shadow onfocus
backgroundBtn.onblur = function() {
    event.target.style.boxShadow = "";
}

// Back-btn box-shadow onfocus
backbt.onfocus = function() {
    event.target.style.boxShadow = "0px 0px 5px 2px rgba(138, 138, 141, 0.836) "
}

// Back-btn box-shadow onblur
backbt.onblur = function() {
    event.target.style.boxShadow = "";
}

// Create Table-btn box-shadow onfocus
btnCreatTabl.onfocus = function() {
    event.target.style.boxShadow = " 0px 0px 5px 2px rgb(48, 209, 48)"
}

// Create Table-btn box-shadow onblur
btnCreatTabl.onblur = function() {
    event.target.style.boxShadow = "";
}

// Create Li-btn box-shadow onfocus
btnCreatLi.onfocus = function() {
    event.target.style.boxShadow = " 0px 0px 5px 2px rgb(48, 209, 48)"
}

// Create Li-btn box-shadow onblur
btnCreatLi.onblur = function() {
    event.target.style.boxShadow = "";
}

// textarea box-shadow onfocus
area.onfocus = function() {
    this.style.borderColor = "rgb(111, 111, 252)";
    event.target.style.boxShadow = "0px 0px 5px 2px rgb(126, 126, 247)";
}

// textarea box-shadow onblur
area.onblur = function() {
    this.style.borderColor = "";
    this.style.boxShadow = "";
}

// select font-family box-shadow onfocus
fontFF.onfocus = function() {
    this.style.borderColor = "rgb(111, 111, 252)";
    event.target.style.boxShadow = "0px 0px 5px 2px rgb(126, 126, 247)";
}

// select font-family box-shadow onblur
fontFF.onblur = function() {
    this.style.borderColor = "";
    this.style.boxShadow = "";
}

// input box-shadow onfocus
function ggg() {
    event.target.style.borderColor = "rgb(111, 111, 252)";
    event.target.style.boxShadow = "0px 0px 5px 2px rgb(126, 126, 247)";
}

// input box-shadow onblur
function fff() {
    event.target.style.borderColor = "";
    event.target.style.boxShadow = "";
}





// functions edit-btn
function editbt() {
    area.value = topBlock.innerHTML;
    editBlock.classList.remove('hidden');
    styleBlock.classList.add('hidden');
}

// functions style-btn
function stylebt() {
    editBlock.classList.add('hidden');
    styleBlock.classList.remove('hidden');
}

// functions save-btn
function savebt() {
    topBlock.innerHTML = area.value;
    editBlock.classList.add('hidden');
}

// functions add-btn
function addbt() {
    mainBlock.classList.add('hidden');
    addBlock.classList.remove('hidden');

}

// function style-block(size)
function fontSizee() {
    topBlock.style.fontSize = event.target.value;
}

// function style-block(font-family)
function fontFamily() {
    topBlock.style.fontFamily = event.target.value;
}

// function style-block-checkbox (fontWeight)
document.getElementById('boldTxt').onclick = function() {
    if (event.target.checked) {
        topBlock.style.fontWeight = 'bold';
    } else {
        topBlock.style.fontWeight = 'normal';
    }
}

// function style-block-checkbox (fontStyle-cursive)
document.getElementById('cursiveTxt').onclick = function() {
    if (event.target.checked) {
        topBlock.classList.add('fontStyle')
    } else {
        topBlock.classList.remove('fontStyle')
    }
}

// function style-block(color) display
function chooseColor() {
    document.getElementById("main-2").style.display = "flex";
    document.getElementById("main").style.display = "none"
}

// function style-block(background) display
function chooseBgr() {
    document.getElementById("main").style.display = "flex";
    document.getElementById("main-2").style.display = "none"
}

// function style-block choose Color
function changeColor(c) {
    topBlock.style.color = c;
}

// function style-block choose Background
function changeBg(color) {
    topBlock.style.backgroundColor = color;
}

//function add-block Back-btn
function backBt() {
    mainBlock.classList.remove('hidden');
    addBlock.classList.add('hidden');
}

//function add-block inp-radio table display
function tableRadbtn() {
    addTable.classList.remove('hidden');
    addList.classList.add('hidden');
}

//function add-block inp-radio li display
function listRadbtn() {
    addTable.classList.add('hidden');
    addList.classList.remove('hidden');
}

//function btn-create Table
function createTbl() {
    let form = document.forms['formTb'];
    let countTr = form.countTR.value;
    let countTd = form.countTD.value; //count
    let borderValue = form.borderWidth.value;
    let borderType = form.borderType.value;
    let borderColor = form.borderColor.value;
    let borderHeightTD = form.borderHeightTD.value;
    let borderWidthTD = form.borderWidthTD.value;
    let tableStyle = 'border: ' + borderValue + 'px ' + borderType + ' ' + borderColor + '; width: ' + borderWidthTD + 'px; ' + 'height: ' + borderHeightTD + 'px';
    area.value += '<table>';
    for (let i = 1; i <= countTr; i++) {
        area.value += '<tr>';
        for (let j = 1; j <= countTd; j++) {
            area.value += '<td style="' + tableStyle + '">TD</td>';
        }
        area.value += '</tr>';
    }
    area.value += '</table>';
    form.classList.add('hidden');
    backBt();
    document.getElementsByName('formTb')[0].reset();
    document.getElementById('r1').checked = false;
}


//function btn-create Li
function createLi() {
    let form = document.forms['formLi'];
    let countLi = form.countLi.value;
    let typeLi = form.TypeLi.value;
    area.value += '<ul style="list-style-type: ' + typeLi + ';">';
    for (let i = 1; i <= countLi; i++) {
        area.value += '<li>' + `item ` + i;
    }
    area.value += '</li>';
    form.classList.add('hidden');
    backBt();
    document.getElementsByName('formLi')[0].reset();
    document.getElementById('r2').checked = false;
}