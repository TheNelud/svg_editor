
function Menu(){
    let componentMenu = []

    let divMenuSvg = document.createElement('div');
    divMenuSvg.id ='svg-crud-menu';
    // ______________Select Menu__________________________
    let arrSelectMenu = []
    let div_dropdowmenu = document.createElement('div');
    div_dropdowmenu.classList = 'dropdown-svg'

    let btnDropBtn = document.createElement('button');
    btnDropBtn.classList = 'dropbtn'
    btnDropBtn.textContent = 'Svg-Редактор'
   
    let divDropdownelement = document.createElement('div')
    divDropdownelement.id = 'selectDropDownMenu'
    divDropdownelement.classList = 'dropdown-content'

    const buttonCreate = document.createElement("input");
    buttonCreate.type = "button";
    buttonCreate.value = "Создать";
    buttonCreate.id = "inpSvgCreateArea";
    buttonCreate.classList = "btnCreateSvgArea";
    buttonCreate.classList.add("styleSelectMenuSVG");

    const buttonSave = document.createElement("input");
    buttonSave.type = "button";
    buttonSave.value = "Сохранить";
    buttonSave.id = "inpSaveSvg";
    buttonSave.classList="btnSaveSvg"
    buttonSave.classList.add("styleSelectMenuSVG");

    const buttonOpen = document.createElement("input");
    buttonOpen.type = "button";
    buttonOpen.value = "Открыть файл";
    buttonOpen.id = "inpOpenSvg";
    buttonOpen.classList="btnOpenSvg"
    buttonOpen.classList.add("styleSelectMenuSVG");

    const buttonImport = document.createElement("input");
    buttonImport.type = "button";
    buttonImport.value = "Импортировать файл";
    buttonImport.id = "inpIpmortSvg";
    buttonImport.classList="btnImportSvg"
    buttonImport.classList.add("styleSelectMenuSVG");

    const buttonExport = document.createElement("input");
    buttonExport.type = "button";
    buttonExport.value = "Экспортировать файл";
    buttonExport.id = "inpExportSvg";
    buttonExport.classList="btnExportSvg"
    buttonExport.classList.add("styleSelectMenuSVG");

    arrSelectMenu.push(buttonCreate,buttonOpen,buttonSave, buttonImport, buttonExport)

    arrSelectMenu.forEach(element =>{
        divDropdownelement.appendChild(element)
    })
  

    div_dropdowmenu.appendChild(btnDropBtn)
    div_dropdowmenu.appendChild(divDropdownelement)



// ______________Elements Create Menu SVG__________________
    let componentMenuElements = []
    let divCreateElementsSvg = document.createElement('div');
    divCreateElementsSvg.id ='svg-crud-menu-elements';

    const buttonCursor = document.createElement("input");
    buttonCursor.type = "button";
    buttonCursor.id = "inpCursor";
    buttonCursor.classList ="style-button-menu-svg"

    const buttonLine = document.createElement("input");
    buttonLine.type = "button";
    buttonLine.id = "inpCreateLine";
    buttonLine.classList ="style-button-menu-svg"
    const buttonCircle = document.createElement("input");
    buttonCircle.type = "button";
    buttonCircle.id = "inpCreateCircle";
    buttonCircle.classList ="style-button-menu-svg"
    const buttonsQuare = document.createElement("input");
    buttonsQuare.type = "button";
    buttonsQuare.id = "inpCreateSquare";
    buttonsQuare.classList ="style-button-menu-svg"
    const buttonErase = document.createElement("input");
    buttonErase.type = "button";
    buttonErase.id = "inpEraseLine";
    buttonErase.classList ="style-button-menu-svg"
    componentMenuElements.push(buttonCursor,buttonLine, buttonCircle, 
        buttonsQuare, buttonErase)
    componentMenuElements.forEach(element =>{
        divCreateElementsSvg.appendChild(element)
    })
    
    // ______________Elements Edit Menu SVG__________________
    let div_editmenu = document.createElement('div');
    div_editmenu.classList = 'editmenu-svg'

    let arrEditMenu = []

    const lblRange = document.createElement('label')
    lblRange.textContent = 'Размер:'

    const inputRange = document.createElement("input");
    inputRange.type = "range";
    inputRange.value = 1
    inputRange.id = "inpEditSlider";

    const lblColor = document.createElement('label')
    lblColor.textContent = 'Цвет:'

    const inputColor = document.createElement("input");
    inputColor.type = "color";
    inputColor.id = "inpEditColor";


    const lblBackground = document.createElement('label')
    lblBackground.textContent = 'Заливка:'

    const inputBackground = document.createElement("input");
    inputBackground.type = "color";
    inputBackground.id = "inpEditBackground";

    arrEditMenu.push(lblRange, inputRange,
                    lblColor, inputColor,
                    lblBackground, inputBackground)
    arrEditMenu.forEach(element =>{
        div_editmenu.appendChild(element)
    })

    // ___________________________________________________________
    componentMenu.push(div_dropdowmenu, divCreateElementsSvg, div_editmenu)

    componentMenu.forEach(element => {
        divMenuSvg.appendChild(element)
    });

    return divMenuSvg
}

function dropdownFunction(){
    document.getElementById("selectDropDownMenu").classList.toggle("show");
}

export {Menu}