## Using HTTPS

An HTTPS certificate (SSL/TLS) provides a secure connection between the client and the server by verifying the website’s authenticity and encrypting transmitted data. In .NET development, you can use either a locally generated self-signed certificate or one purchased from a certification authority. A certificate is essential for ensuring security (data protection), building user trust (browser padlock icon), and complying with standards. During development, local certificates are often used.


To generate a local .pfx certificate in .NET, run the following command:


**terminal**


`dotnet dev-certs https -ep d:/aspnetapp.pfx -p 123456`

This command specifies the certificate’s output path and password. Note that such a certificate is suitable for development and testing purposes only. For production environments, a certificate from a trusted certification authority should be used.

Connecting the Certificate

Navigate to the folder with your Docker container and create a subfolder called stimulsoft-server. Then, copy the generated certificate into that folder.


Next, edit the docker-compose.yml file by adding parameters to enable HTTPS. You will need to define the HTTPS port, internal URLs (for production, it is recommended to use real domain names or IP addresses instead of `*`), and the path to the certificate along with its password:


**docker-compose.yml**

`...`

`ASPNETCORE_HTTPS_PORTS: 8081`

`Urls: "https://*:8081;http://*:8080"`

`ASPNETCORE_Kestrel__Certificates__Default__Path: "/var/lib/stimulsoft-server/aspnetapp.pfx"`

`ASPNETCORE_Kestrel__Certificates__Default__Password: 123456`

`...`

If the directory with the server files hasn't yet been mounted, this can be done using the volumes section in docker-compose.yml:


**docker-compose.yml**

`...`

`volumes:`

`- ./stimulsoft-server:/var/lib/stimulsoft-server`

`...`

Launch the container using the following command:


**terminal**


`docker-compose up`

Now, Stimulsoft Server will be available via HTTPS at port 8081 using the address: http://localhost:8081. The server will still be accessible via HTTP at: http://localhost:8080.


Docker-compose.yml File

Below is an example of the contents of a docker-compose.yml file:


**docker-compose.yml**


`services:`

`server:`

`image: stimulsoft/server:dev`

`ports:`

`- 8080:8080`

`- 8081:8081`

`volumes:`

`- ./stimulsoft-server:/var/lib/stimulsoft-server`

`environment:`

`ASPNETCORE_HTTP_PORTS: 8080`

`ASPNETCORE_HTTPS_PORTS: 8081`

`Urls: "https://*:8081;http://*:8080"`

`ASPNETCORE_Kestrel__Certificates__Default__Path: "/var/lib/stimulsoft-server/aspnetapp.pfx"`

`ASPNETCORE_Kestrel__Certificates__Default__Password: 123456`

`Storage__DatabaseType: "MySql"`

`Storage__MySqlConnectionString: "Server=mysql; port=3306; Database=server; UserId=root; Pwd=root;"`


`mysql:`

`image: mysql:8.0`

`ports:`

`- 3306:3306`

`volumes:`

`- './mysql:/var/lib/mysql'`

`environment:`

`MYSQL_ROOT_PASSWORD: "root"`

`MYSQL_DATABASE: "server"`
