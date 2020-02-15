const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

const getSubjects = (student) => {
    let k = student.subjects;
    let  rezult = [];
    Object.keys(k).forEach(value => rezult.push((value[0].toUpperCase() + value.slice(1,value.length)).replace('_',' ')));
    return rezult;
};
console.log('Subjects:');
console.log(getSubjects(students[0]));
let getAverageMark = (student) =>{
    let temp = student.subjects;
    let arr = Object.values(temp);
    let total = 0, k = 0;
    for (let i = 0;i<arr.length;i++){
        for (let j = 0; j<arr[i].length;j++){
            total += arr[i][j];
            k+=1;
        }
    }
return (total / k).toFixed(2);
};
console.log('AverageMark:');
console.log(getAverageMark(students[0]));
const getStudentsInfo = (student) =>{
    let temp = {};
     temp.course = student.course;
     temp.name =  student.name;
     temp.averageMark = getAverageMark(student);
    return temp;
};
console.log('Student info:');
console.log(getStudentsInfo(students[0]));

const getStudentsNames = (students) => students.map( value=> value.name).sort();
console.log('Students names:');
console.log(getStudentsNames(students));

const getBestStudent = (students) =>{
    let temp = {},max = 0;
    temp.name = '';
    temp.averageMark = max;
    let averageMark;
    for(let i = 0;i<students.length;i++) {
        averageMark = getAverageMark(students[i]);
        if (parseFloat(averageMark) > parseFloat(max)) {
            max = averageMark;
            temp.name = students[i].name;
        }
    }
    return temp.name;
};


console.log('Best student:');
console.log(getBestStudent(students));
const calculateWordLetters = (str) => {
    let obj = {};
    let word = str.toLowerCase();
    for (let i = 0;i<word.length;i++){
        if(!Object.keys(obj).includes(word[i])){
          obj[word[i]] = 1;
        }
        else obj[word[i]]+=1;
    }
    return obj;
};
console.log('CalculateWordLetters:');
console.log(JSON.stringify(calculateWordLetters('test')));