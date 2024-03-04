const myLibrary = [
    {
        title:"Gulliver's travels",
        author: "Jonathan Swift",
        pages:200,
        read:true
    },
    {
        title:"The Jungle Book",
        author: "Rudyard Kipling",
        pages:250,
        read:true
    },
    {
        title:"Two States",
        author: "Chetan Bhagat",
        pages:300,
        read:false
    },
    {
        title:"Gulliver's travels",
        author: "Jonathan Swift",
        pages:200,
        read:true
    },
];

let index=0;
const title=document.querySelector('#book-title');
const author=document.querySelector('#book-author');
const pages=document.querySelector('#book-pages');
const read=document.querySelector('#book-read');
const bookDialog=document.querySelector("#dialog-book-info");
const openDialog=document.querySelector('#open-dialog');
const addBook=document.querySelector("#add-book");
const closeDialog=document.querySelector("#close-dialog");
const deck=document.querySelector("#deck");

//constructor for a book object
function Book(title, author,pages, read, index){
this.title=title;
this.author=author;
this.pages=pages;
this.read=read;
this.index=index;
this.info=function (){
    const status=(this.read)?'read':'not read';
    return `${this.title} by ${this.author}, ${this.pages} pages, ${status}`;
}
}

// adds book to library
function addBookLibrary(){
const book=new Book(title.value, author.value, pages.value , read.checked,index++);
myLibrary.push(book);
}


// function to display myLibrary elements as cards
function displayCard()
{
// let's clear the contents of the deck first 
deck.textContent="";

//then display fresh content 
for(let book of myLibrary)
{
const card=document.createElement('div');
const list=document.createElement('ul');
for(value of ['title', 'author', 'pages'])
{
    const item=document.createElement('li');
    item.textContent=value+" : "+book[value];
    list.appendChild(item);
}
// add a checkbox for read value
    const item=document.createElement('li');
    item.textContent='read: ';
    const check=document.createElement('input');
    check.setAttribute('type','checkbox');
    check.setAttribute('name','check');
    check.checked = book.read;

//changes read value of book in myLibrary on click of checkbox
check.addEventListener('click',()=>{
myLibrary[myLibrary.indexOf(book)].read=check.checked;
});

    item.appendChild(check);
    list.appendChild(item);
    card.appendChild(list);
    const remBtn=document.createElement('button');
    remBtn.className='rem-btn';
    remBtn.textContent='Remove';

//removes book from myLibrary then prints the books again
remBtn.onclick=()=>{
    myLibrary.splice(myLibrary.indexOf(book),1);
    displayCard();
}

card.appendChild(remBtn);
card.className='card';
deck.appendChild(card);
}
}

// added event listeners to different elements
openDialog.addEventListener("click", (e)=>{
    bookDialog.showModal();
});

addBook.addEventListener("click",(e)=>{
addBookLibrary();
displayCard();
});

closeDialog.addEventListener("click",(e)=>{
    bookDialog.close();
});


displayCard();