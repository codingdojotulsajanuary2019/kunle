var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);

    if(request.url === '/'  || request.url === '/cars') {
        console.log("request made".repeat(5));
        fs.readFile('./Views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/Toyota-Avalon.jfif') {
        fs.readFile('./Images/2019-Toyota-Avalon-f-1-18.jfif', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jfif'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/mercedes-benz.jpg') {
        fs.readFile('./Images/2019-mercedes-benz-a-220-fd.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/dontknow2019.jpeg') {
        fs.readFile('./Images/dontknow2019.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/cats') {
        fs.readFile('./Views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/Catnip-Photo.jpg') {
        fs.readFile('./Images/Cats/Cats-Catnip-Photo.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/funny-face-cat.jpg') {
        fs.readFile('./Images/Cats/funny-face-cat.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/two-tone-cat.jpg') {
        fs.readFile('./Images/Cats/two-tone-cat.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/cars/new') {
        fs.readFile('./Views/newcar.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else {
        response.writeHead(404);
        response.end('The requested URL is not available!!!');
    }
});

server.listen(7077);
console.log("Running in localhost at port 7077");
