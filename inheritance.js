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
  //magazine constructor
  function Magazine(title,author,year,month){
      BOOK.call(this,title,author,year);
      this.month=month;
  }


  //inherit prototype
  Magazine.prototype=Object.create(BOOK.prototype);
  //instantize MagazINe object
  const mag1 =new Magazine('Mag one','john doe','2018','jan')
  //inherit prototype
console.log(mag1.getSummary());
