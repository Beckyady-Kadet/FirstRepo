// Json which stands for Javascript Object Notation is a method or format for storing and retrieving data from a server. It accepts data types like Strings,
// Numbers, Objects, array, boolean and null.

// Data Collected and sent are represented in Json format. An example of Json format is represented below;

var Student = {
    'Fname': 'Precious Smith',
    'Age': 30,
    'Matric_No': 1123,
    'Sex': "Female"
}

// Json format can also be represented as a String as shown below

var Students = `{
        "Fname": "Precious Smith",
        "Age": 30,
        "Matric_No": 1123,
        "Sex": "Female",
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

const Age = Student.Age;


//To call the Matric No from the above Student data using the square bracket syntax;

const Matric_No = Student['Matric_No']


// To call an item fron an Array;

const title = Student.courses[2].title;

// the output will be "Exponential numbers"

// And we have function like JSON.stringify() whhich is used to convert an object to a JSON string.

// The above student data can be converted into a toString as shown below

const Srt = JSON.stringify(Students);

// And once converted in to a string it can be changed back to Objects by using the function JSON.parse() as shown below

var nStr = JSON.parse(Srt)
