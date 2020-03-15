// Json which stands for Javascript Object Notation is a method or format for storing and retrieving data from a server. It accepts data types like Strings,
// Numbers, Objects, array, boolean and null.

// Data Collected and sent are represented in Json format. An example of Json format is represented below;

const student = {
    'full_name': 'Precious Smith',
    'age': 30,
    'matric_no': 1123,
    'sex': "Female"
}

// Json format can also be represented as a String as shown below

const student = `{
        "full_name": "Precious Smith",
        "age": 30,
        "matric_no": 1123,
        "sex": "Female",
        "courses": [
                    {
                        "code": "EEE223"
                         "title": "Electrical Electronics"
                    },
                    {
                        "code": "EEE225"
                         "title": "internet of things"
                    },
                    {
                        "code": "EEE243"
                        "title": "Exponential numbers"
                    },

                ]
}`;



// To access the data in JSON format, we could use dot annotation or the square bracket syntax 

// To call the Age from the above Student data using dot annotation;

const age = student.age;


//To call the Matric No from the above Student data using the square bracket syntax;

const matricNo = student['matric_no']


// To call an item fron an Array;

const title = student.courses[2].title;

// the output will be "Exponential numbers"

// And we have function like JSON.stringify() whhich is used to convert an object to a JSON string.

// The above student data can be converted into a to String as shown below

const studentString = JSON.stringify(student);

// And once converted in to a string it can be changed back to Objects by using the function JSON.parse() as shown below

const studentData = JSON.parse(studentString)
