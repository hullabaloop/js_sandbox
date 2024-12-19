import http from 'node:http';

const error500 = (res) => {
    res.writeHead(500, {"Content-Type": "text/plain"});
    res.end('something went wrong');
}

const error501 = (res) => {
    res.writeHead(501, {"Content-Type": "text/plain"});
    res.end('Not Implemented');
}

const srvHandler = (req, res) => {

    const {method, url} = req;

    console.log(url);

    if (!url.startsWith('/api/contacts')){
        error501(res);
        return;
    }

    switch (method) {
        case 'GET':
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end('[{"id": 1, "name": "Ivanov Ivan", "phone": "89867885632"},{"id": 2, "name": "Petrov Petr", "phone": "89364783722"}]');
            break;
        case 'POST':
            res.writeHead(201, {"Content-Type": "application/json"});
            res.end('[{"id": 3, "name": "Ivanov Ivan", "phone": "89867885632"}');
            break;
        case 'PATCH':
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end('[{"id": 123, "name": "Ivanov Vladimir", "phone": "89867885444"}');
            break;
        case 'DELETE':
            res.writeHead(204);
            res.end(null);
            break;
        default:
            error500(res);
    }
};

const srv = http.createServer(srvHandler);
srv.listen(8000, () => {console.log('server listening on port 8000');});



