## Server in Docker

This chapter covers launching Stimulsoft Server in a Docker container. The product is built on the .NET 8 platform, which ensures cross-platform compatibility and allows it to run on various operating systems. The primary requirement is that Docker must be installed and functioning correctly on the system in use. We also recommend reviewing the following chapters:

* [Using the HTTPS protocol](Https.md);

* [Key options for working with Stimulsoft Server in a Docker container](Options.md).

System Requirements

The minimum system requirements for Stimulsoft Server include:

  * Docker container support;

  * One of the following databases: MySQL, PostgreSQL, or MS SQL;

  * Dual-core processor with a clock speed of at least 2.31 GHz;

  * 2 GB of RAM;

  * At least 500 MB of free disk space.

Deployment Using docker-compose

In this case, create a docker-compose.yml file. Below is an example configuration file:


docker-compose.yml


`services:`

`server:`

`image: stimulsoft/server:latest`

`ports:`

`- 8080:8080`

`environment:`

`ASPNETCORE_HTTP_PORTS: 8080`

`ASPNETCORE_ENVIRONMENT: "Development"`

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

Then, run the docker-compose.yml file:


terminal


`docker compose up`

After that, open a browser and navigate to: http://localhost:8080.
