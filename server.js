const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/styling.css':
      sendFile( response, 'styling.css')
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
    if(err){
     response.writeHead(404, {'Content-Type': 'text/plain'})
     response.end('404 Error:: File Not Found')
     return
    }
    const contentType = filename.endsWith('.css') ? 'text/css' : 'text/html'
    response.writeHead(200, {'Content-Type': contentType})
    response.end(content)
    
  })
}
