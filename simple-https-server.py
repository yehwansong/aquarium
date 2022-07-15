import http.server
import ssl

httpd = http.server.HTTPServer(('192.168.0.220', 4443), http.server.SimpleHTTPRequestHandler)

httpd.socket = ssl.wrap_socket (httpd.socket, certfile='./server.pem', server_side=True)

httpd.serve_forever()