function BOOK(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
    
    }
    
//get summary
  BOOK.prototype.getSummary= function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
  //get age
  BOOK.prototype.getAge=function(){
      const years=new Date().getFullYear-this.year;
      return `${this.title} is ${years} years old`;
      
  };
  //Revise/change Year
  BOOK.prototype.revise=function(newYear){
      this.year=newYear;
      this.revised=true;
  }




    
    //instatiate an object
    const book1=new BOOK('Book One','john','2013');
    const book2=new BOOK('Book Two','jane doe','2016');
    
    console.log(book2);
    book2.revise('2018');
    console.log(book2)