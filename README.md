# Create authentication token application
This project could be usefull for testing api endpoints.

## Generate rpc token end-point
### .env
```
ROOT_SECRET_ID=
ROOT_SECRET=
```

## Postman json
In the **postman json** folder, is a JSON you can import into your postman application. This JSON already includes a way to automatically add the RPC token header to all your requests within the API folder.

This JSON also inlcudes a couple of example request, such a the * *get user/me* *, * *put /sapi/creative/{id}* *, the solr * *get /api/mediaclip?action=getSolr&id=7106* * and more.

### Format engine
When testing the local instance of the format engine, you should use 
http://localhost:80 as the url.