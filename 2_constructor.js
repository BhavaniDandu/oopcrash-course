//constructor
function BOOK(title,author,year){
this.title=title;
this.author=author;
this.year=year;
this.getSummary=function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

}
//instatiate an object
const book1=new BOOK('Book One','john','2013');
const book2=new BOOK('Book Two','jane doe','2016');

console.log(book2);
