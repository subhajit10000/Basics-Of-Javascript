//iife - immediately invoked function expression used to avoid polluting the global namespace and to create a private scope for variables and functions. It is a function that is defined and immediately executed.


(function Dbconn(){
    console.log("Connected to the DB");
})();  //semicolon is important here to avoid errors if the previous code does not end with a semicolon




((connNum) => {
    console.log(`${connNum} connection to the DB `);
})("2nd");

//iife - immediately invoked function expression used to avoid polluting the global namespace and to create a private scope for variables and functions. It is a function that is defined and immediately executed.


(function Dbconn(){
    console.log("Connected to the DB");
})();  //semicolon is important here to avoid errors if the previous code does not end with a semicolon




((connNum) => {
    console.log(`${connNum} connection to the DB `);
})("2nd");