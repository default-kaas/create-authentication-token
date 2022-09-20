# Create authentication token application
This project could be useful for testing api endpoints.

## Generate rpc token end-point
### .env
```
ROOT_SECRET_ID=
ROOT_SECRET=
```

## Postman json
In the **postman json** folder, is a JSON called **API.postman_collection.json** you can import into your postman application. This JSON already includes a way to automatically add the RPC token header to all your requests within the API folder.

This JSON also inlcudes a couple of example request, such a the **_get user/me_**, **_put /sapi/creative/{id}_**, the solr **_get /api/mediaclip?action=getSolr&id=7106_** and more.

To make your postman request work you will, also need to import the formatengine environment variables. These variables are included in the **postman json** folder in the file called **formatengine.postman_environment.json**.

### Format engine
When testing the local instance of the format engine, you should use 
http://localhost:80 as the url.
