class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut; 
  }
  set isCheckedOut(isCheckedOut) {
    this._isCheckedOut = isCheckedOut;
  }
  getAverageRating() {
    let averageRating = 0;
    for(let a = 0; a < this._ratings.length; a++){
      averageRating += this._ratings[a];
    }
  return averageRating /= this._ratings.length;
  }
  addRating(rating) {
    this._ratings.push(rating)
  }
}
class Book extends Media{ 
constructor(title,author,pages){
super(title);
this._author = author;
this._pages = pages;
}
get authors(){
  return this._author;
}
get pages(){
  return this._pages;
}
}
class Movie extends Media{ 
  constructor(title,director,runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
    }
    get directors(){
      return this._director;
    }
    get runTime(){
      return this._runTime;
    }
}

class CD extends Media{ 
  constructor(title,artist,song){
    super(title);
    this._artist = artist;
    this._song = song;
    }
    get artist(){
      return this._artist;
    }
    get song(){
      return this._song;
    }
}
// const dre = new CD('The J files', 'Dr. Dre', 'Forget about Dre')
// dre.addRating(1);
// dre.addRating(5);
// dre.addRating(4);
// console.log(dre.getAverageRating());
// console.log(dre.isCheckedOut);
// dre.toggleCheckOutStatus();
// console.log(dre.isCheckedOut);
// const dre = new Book('The J files', 'Dr. Dre', 50)
// dre.addRating(1);
// dre.addRating(5);
// dre.addRating(4);
// console.log(dre.getAverageRating());
// console.log(dre.isCheckedOut);
// dre.toggleCheckOutStatus();
// console.log(dre.isCheckedOut);
// console.log(dre);
const dre = new Movie('The J files', 'Dr. Dre', 3.50)
dre.addRating(1);
dre.addRating(5);
dre.addRating(4);
console.log(dre.getAverageRating());
console.log(dre.isCheckedOut);
dre.toggleCheckOutStatus();
console.log(dre.isCheckedOut);
console.log(dre);



