I learnt about what Basic version control is and git being an example of BVC.
I learnt the basic commands that is being used in git.
commands like:
git init ---used for initializing git in a repository
git clone --- used for cloning a remote repository to the local machine
git branch and checkout --- for checking out of an existing branch or creating a new branch
git status --- to check the changes made on a branch
git add --- to add a specific file or select all files
git commit --- to add a message commit the changes
git push -- to push to the remote repository
git fetch --- this is used to get all branches created 
 


 Task 2

I created a private git repo on a source repository
I cloned the reposiory 
Added a readme file summarising what i learnt on BVC 
I pushed the code to remote repotory



Summary of the five article read



First Article: JavaScript CLean Code

Writing clean code means when you write, the next person that works on the project wont be confused as to what was written in the code;

Examples of what clean code should entail

1; Using === instead of ==. because ===  is a strict equality comparison operator in JavaScript, which returns false for the values which are not of a similar type.

2; Variable:
Naming of variables in a way that they reveal the intention behind it.vaDont add extra unneeded words to theriable names. Dont enforce the need for memorizing variable context. Dont add unnecessary context

3: Functions 
Use long and descriptive names when naming a function. A function name should say what they do.
eg
function notif(user) {}  //wrong

function notifyUser(emailAddress) {} //right

A function should have two or fewer arguments specified.
Use default arguments instead of conditionals.
e.g
function createShape(type) {
  const shapeType = type || "cube";
} //wrong


function createShape(type = "cube") {

} //right

A function should do one thing. Avoid executing multiple actions within a single function.

Use Object.assign to set default objects.
e.g

const shapeConfig = {
  type: "cube",
  width: 200
  // Exclude the 'height' key
};

function createShape(config) {
  config = Object.assign(
    {
      type: "cube",
      width: 250,
      height: 250
    },
    config
  );

  ...
}

createShape(shapeConfig);

Don't use flags as parameters because they are telling you that the function is doing more than it should.

Don't pollute the globals. If you need to extend an existing object use ES Classes and inheritance instead of creating the function on the prototype chain of the native object.

4: Conditionals
Avoid negative conditionals.
Use conditional shorthands for boolean values and if you are sure that the value will not be undefined or null.
Avoid conditionals whenever possible. Use polymorphism and inheritance instead.

5: ES Classes
Use method chaining.It makes code to be less verbose. In your class, simply return this at the end of every function, and you can chain further class methods onto it.


Second Article: Object-oriented JavaScript for beginners


The basic idea of OOP is useing objects to model real world things that we want to represent inside our programs.
Abstraction is creating a simple model of a more complex thing.
Object Instances can be created from a class and the process creating an object instance from a class is called instantiation.
In OOP, we can create new classes based on other classes, these new child classes can be made to inherit the data and code features of their parent class, so you can reuse functionality common to all the object types rather than having to duplicate it.

Constructors and object instances
JavaScript uses special functions called constructor functions to define and initialize objects and their features. Constructors provide the means to create as many objects as you need in an effective way

function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}

let person1 = new Person('Bob');

The new keyword is used to tell the browser we want to create a new object instance, followed by the function name with its required parameters contained in parentheses.
After the new objects have been created, the person1 variable contain this objects:

{
  name: 'Bob',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

JavaScript has a built-in method called create() that allows you to create a new object based on any existing object.

let person2 = Object.create(person1);
person2.name;
person2.greeting();


Third Article: Object Oriented Programming in JavaScript – Explained with Examples


All objects have access to the Object's prototype. They do not possess these properties, but are granted access to the properties in the prototype.
Object.create() can be used to modify the __proto__ property

Every object in Javascript has access to the Object's prototype by default. If configured to use another prototype, say prototype2, then prototype2 would also have access to the Object's prototype by default

Subclassing is a feature in OOP where a class inherits features from a parent class but possesses extra features which the parent doesn't.



Fourth Article: Clean Code Applied to JavaScript


Code refactoring is the process of restructuring existing computer code without changing its external behavior.

1)Refactoring improves nonfunctional attributes of the software.

2) It improves code readability and reduced complexity.

3) It can improve source-code maintainability.

4) it Creates a more expressive internal architecture to improve extensibility.

When writing codes, always make sure that it is readable by humans.
 A perfect team development is the situation where the everyone on a team has become a perfect team development.

Write in English. Today is the international language and we have to be international because that way we can share code with anyone in the world.

Work in team. Create common rules and rely on tools that allow you to generate code uniformly for everyone. 



Fifth Article: JavaScript Clean Coding Best Practices


How should I name my variables?
Always Use intention-revealing names   
DOnt't add unnecesarry word when naming my variable
Make your variable names easy to pronounce, because for the human mind it takes less effort to process.

How should I write my functions?

Functions should do one thing.
Use long, descriptive names
Avoid long argument list
Organize your functions in a file according to the stepdown rule

How to write nice async code?
Use Promises whenever you can.


