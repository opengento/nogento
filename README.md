Opengento Hackathon 2018
========================

> Building an e-commerce from magento's ecosystem, without Magento is possible
> Some will say it is necessary

Installation
------------
```
Clone this repository
cd fc
docker-compose run --rm npm install
docker-compose up -d
cp src/server/modules/akeneo/config/akeneo.sample.js src/server/modules/akeneo/config/akeneo.js
```

Tail logs
---------
```
docker-compose logs -f npm
```

Restart container
-----------------
```
docker-compose restart npm
```

Akeneo credentials
------------------
```
http://192.168.1.118:8100
Login : admin
Password : admin
API client ID: 1_4nt3aj7728e8w4coo4ogws48wcgos0o4owo4og4sck4c00kskg
API Secret: 1etszljk2tvoo8wgokok0cscswsgwso4w88cw4owwgwk8w0gk
```

