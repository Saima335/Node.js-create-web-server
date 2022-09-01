var http=require('http');
var fs= require('fs');

    
http.createServer(function(req,res){
    if (req.method==='GET' && req.url==='/showfile'){
        var readableStream=fs.createReadStream('myfile.txt');
        readableStream.pipe(res); //write head, end both occur
        // fs.readFile('myfile.txt', 'utf-8',function(err,data){
        //     if(err){
        //         res.writeHead(404,{'Content-Tpe':'text/html'});
        //         res.end(err.message);
        //     }
        //     else{
        //         res.writeHead(200,{'Content-Tpe':'text/html'});
        //         res.end(data);
        //     }   
        // });
    }
    else if (req.method==='GET' && req.url==='/appendfile'){

        fs.appendFile('myfile.txt', '<h3> Thank you </h3>',function(err){
            if(err){
                res.writeHead(404,{'Content-Tpe':'text/html'});
                res.end('Could not write to file');
            }
            else{
                res.writeHead(200,{'Content-Tpe':'text/html'});
                res.end('Succesfully written');
            }   
        });
    }
    else if (req.method==='GET' && req.url==='/createfile'){
        fs.writeFile('new.txt', '<h3> Thank you </h3>',function(err){
            if(err){
                res.writeHead(404,{'Content-Tpe':'text/html'});
                res.end('Could not write to file');
            }
            else{
                res.writeHead(200,{'Content-Tpe':'text/html'});
                res.end('Written to file');
            }   
        });
    }
    else{
        res.writeHead(404,{'Content-Tpe':'text/html'});
        res.end();
    }
    
}).listen(8080);
