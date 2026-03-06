## Main Options

All necessary configurations can be specified in the docker-compose.yml file using environment variables. For convenience, all settings are grouped, and each group name is separated from the setting name by a double underscore. Example of passing server settings:


**docker-compose.yml**

```yaml
...
Environment:
    ASPNETCORE_HTTP_PORTS: 8080
    Urls: "http://*:8080"
    Storage__DatabaseType: "MySql"
    Storage__MySqlConnectionString: "Server=mysql; port=3306; Database=server; UserId=root; Pwd=root;"
...
```

**Core Settings**


| **Name** | **Description** |
| --- | --- |
| ASPNETCORE_HTTP_PORTS | Defines the port or multiple ports used for the HTTP protocol. |
| ASPNETCORE_HTTPS_PORTS | Defines the port or multiple ports used for the HTTPS protocol. |
| Urls | Specifies the URL addresses that the web server will listen to, separated by semicolons. |

**Certificate Settings**


| **Name** | **Description** |
| --- | --- |
| ASPNETCORE_Kestrel__Certificates__Default__Path | Specifies the path to the certificate file. |
| ASPNETCORE_Kestrel__Certificates__Default__Password | Specifies the password for the certificate. |

**Database Settings**


| **Name** | **Description** |
| --- | --- |
| Storage__DatabaseType | Specifies the type of database being used. Supported values: - "MySql" - "MsSql" - "PostgreSql" |
| Storage__MySqlConnectionString | Connection string for a MySQL database. |
| Storage__MsSqlConnectionString | Connection string for a MS SQL database. |
| Storage__PostgreSqlConnectionString | Connection string for a PostgreSQL database. |
| Data__ConnectionTimeOut | Sets the database connection timeout in seconds. The default is 30 seconds. |

**Email Settings**


| **Name** | **Description** |
| --- | --- |
| Smtp__EnableSsl | Enables encryption of the connection to the SMTP server using the Secure Sockets Layer protocol. Default is false. |
| Smtp__Host | SMTP server address. |
| Smtp__Port | SMTP server port. |
| Smtp__UserName | Username associated with the SMTP server credentials. |
| Smtp__Password | Password for the specified SMTP username. |
| Smtp__SenderEmail | Email address used as the sender. |

**Navigation Panel Settings**


| **Name** | **Description** |
| --- | --- |
| NavigationUi__ShowAllElements | Enables the **All Elements** button in the navigation panel. Default is true. |
| NavigationUi__ShowData | Enables the **Data Sources** button. Default is true. |
| NavigationUi__ShowNew | Enables the **Create** button. Default is true. |
| NavigationUi__ShowReports | Enables the **Reports** button. Default is true. |
| NavigationUi__ShowDashboards | Enables the **Dashboards** button. Default is true. |
| NavigationUi__ShowSchedulers | Enables the **Scheduler** button. Default is true. |
| NavigationUi__ShowSystem | Enables the **System** button. Default is true. |
| NavigationUi__ShowUsers | Enables the **Users** button. Default is true. |
| NavigationUi__ShowAbout | Enables the **About** button. Default is true. |

**Main Interface Settings**


| **Name** | **Description** |
| --- | --- |
| MainUi__ShowMore | Enables the **More** button. Default is true. |
| MainUi__ShowVersions | Enables the **Versions** button. Default is true. |
| MainUi__ShowUsing | Enables the **Using** button. Default is true. |
| MainUi__ShowAccessKey | Enables the **Access Key** button. Default is true. |
| MainUi__ShowUpload | Enables the **Upload** button. Default is true. |
| MainUi__ShowDownload | Enables the **Download** button. Default is true. |
| MainUi__ShowMoreForUsers | Enables the **More** button for regular users. Default is true. |
| MainUi__ShowVersionsForUsers | Enables the **Versions** button for regular users. Default is true. |
| MainUi__ShowUsingForUsers | Enables the **Using** button for regular users. Default is true. |
| MainUi__ShowAccessKeyForUsers | Enables the **Access Key** button for regular users. Default is true. |
| MainUi__ShowUploadForUsers | Enables the **Upload** button for regular users. Default is true. |
| MainUi__ShowDownloadForUsers | Enables the **Download** button for regular users. Default is true. |

**Login Window Settings**


| **Name** | **Description** |
| --- | --- |
| LoginUi__ShowSignUp | Enables the Sign Up button in the login window. Default is true. |

**Report Configuration Parameters**


| **Name** | **Description** |
| --- | --- |
| Reports__AllowReportCompilation | Allows report compilation. Default is true. |
| Reports__AllowReportEngine | Allows switching the report engine version. Default is true. |
| Reports__ResourcesMaximumSize: 20000000 | Sets the maximum file size for adding to the report resources. The value is specified in bytes. |
| Reports__QRCodeECIMode | Sets the encoding value for byte mode. Default encoding is "Windows_1251". |
| Reports__ViewMode | Sets the viewer display mode. Default mode is "SinglePage". |

Additionally, it is recommended to mount a folder with server working files and logs in the virtual machine settings. This can be done in the docker-compose.yml file using the following command:


**docker-compose.yml**

```yaml
...
volumes:
    - ./stimulsoft-server:/var/lib/stimulsoft-server
...
```
