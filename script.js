console.log('Hello!');


//Handle Buttons 

const newButton = document.querySelector('.new')
const cancelButton = document.querySelector('.cancel')
const modal = document.querySelector('.no-modal')

newButton.addEventListener('click', modalAppear)

cancelButton.addEventListener('click', modalClose)

function modalAppear() {
  modal.classList.replace('no-modal', 'modal')
}

function modalClose() {
  modal.classList.replace('modal', 'no-modal')
}

//Handle Inputs
const expenseName = document.querySelector('.expense')
const expenseDate = document.querySelector('.date')
const expenseCategory = document.querySelector('.category')

//Handle Submit
const submitButton = document.querySelector('.submit')

document.querySelector('.expense').value = ' '
document.querySelector('.date').value = ' '
document.querySelector('.category').value = ' '


const infoArray = []
let numOfItems = 0;

class Information {
  constructor(Id, Name, eDate, Category) {
    this._Id = Id
    this._Name = Name,
    this._Date = eDate,
    this._Category = Category
  }

  get Id() {
    return this.Id;
  }

  get Name() {
    return this.name;
  }

  get Date() {
    return this.Date;
  }

  get Category() {
    return this.Category;
  }

}

submitButton.addEventListener('click', handleSubmit)

function handleSubmit(e) {
  e.preventDefault();
  const tempArray = []

  const newestItem = new Information(numOfItems, expenseName.value, expenseDate.value, expenseCategory.value)
  numOfItems++

  infoArray.push(newestItem)
  tempArray.push(newestItem)

  console.log(tempArray[0]._Name)
  

 

  function addRow() {
    const table = document.querySelector('.table-area')
    //New Row
    const newTableRow = document.createElement('div')
    newTableRow.classList.add('table-row')
    table.append(newTableRow)

    //Col 1
    const column1 = document.createElement('div')
    column1.classList.add('table-col');
    column1.innerHTML = tempArray[0]._Name;
    newTableRow.append(column1);

    const column2 = document.createElement('div')
    column2.classList.add('table-col');
    column2.innerHTML = tempArray[0]._Date
    newTableRow.append(column2)

    const column3 = document.createElement('div')
    column3.classList.add('table-col');
    column3.innerHTML = tempArray[0]._Category
    newTableRow.append(column3)



    

    /* const col2 = document.createElement('div')
    col2.classList.add('table-col')
    newTableRow.append(col2)
    newTableRow.innerHTML = tempArray[0]._Date

    const col3 = document.createElement('div')
    col3.classList.add('table-col')
    newTableRow.append(col3)
    newTableRow.innerHTML = tempArray[0]._Category */




  }

  addRow()
  modalClose()

  
}












