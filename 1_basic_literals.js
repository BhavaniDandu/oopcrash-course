//const s1='Hello';
//console.log(typeof s1);
//const s2=new String('Hello');
//console.log(typeof s2);
//console.log(window)
//window.alert();
//console.log(navigator.appVersion);
//object literall

const book1={
    title:'Book One',
    author:'John Doe',
    year:'2013',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};



const book2={
    title:'Book two',
    author:'John',
    year:'2016',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};
//console.log(book2.getSummary());
//console.log(object.values(book1));
//console.log(object.key(book1));
