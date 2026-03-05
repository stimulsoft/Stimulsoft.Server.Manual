## Choosing Certificate


There are two ways to create the digital signature:

* using the interface of the system library of cryptograph;

* directly by specifying the string - certificate identifier.


In the first case it is necessary to set the **Get Certificate From CryptoUI** property to **true**. When exporting, the menu for selecting certificate from the current storage of certificates will be displayed. It is necessary to select one certificate from the list of available ones.


> **Notice**
>
> Notice: In web applications this way cannot be used, because the menu of selecting a certificate is displayed on a computer on what the export is in process, in other words on the server. So the user cannot see and cannot do anything with it. In other words the export endlessly waits when the certificate will be selected.


In the second way, it is necessary to use the **SubjectNameString** property and write in it the string - certificate identifier. Identifier is the name of the certificate owner (full string) or a part of the name (substring).
