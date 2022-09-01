var fs= require('fs');
fs.readFile('myfile.txt', function(error,data){
    if(error){
        return console.log(error.message);
    }
    console.log(data.toString());
});