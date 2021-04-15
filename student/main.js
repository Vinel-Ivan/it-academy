class user {
    constructor(name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.year = year;
    }
    get getFullname() {
        return `${this.name} ${this.surname}`;
          }
}

class student extends user {
    get getCourse() {
        let today = new Date();
        let course = today.getFullYear();
        let studCourse = course - this.year + 1;
        if (studCourse >= 1 && studCourse <= 5) {
        return studCourse;
        } else {return 'Номер курса может быть только в промежутке от 1 до 5'}
    }
}

const stud = new student ('john', 'smith', 2019);

console.log(stud.getFullname);
console.log(stud.getCourse);

