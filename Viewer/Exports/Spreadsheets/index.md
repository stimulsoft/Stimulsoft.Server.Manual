## Spreadsheets


This group of exports create spreadsheets. They are exports to both different formats of Microsoft Excel ([Excel](Excel.md), [Excel XML](Excel_XML.md), [Excel 2007/2010](Excel_2007_2010.md)) and to [OpenOffice Calc. Export](ODS.md) options in Excel


![](../../../images/topics/Viewer.Exports.Spreadsheets_1.png)


![](../../../images/img_1.png) The checkbox **All** enables processing of all report pages.

![](../../../images/img_2.png) The checkbox **Current Page** enables processing only the current (selected) report page.

![](../../../images/img_3.png) The checkbox **Pages** has the field. This field specifies the number of pages to be processed. You can specify a single page, several pages (using a comma as the separator) and also specify a range by defining the start page and end page range separated with "-". For example, 1,3,5-12.

![](../../../images/img_4.png) The option **Type** provides the ability to determine a type of the file the report will be converted into.

![](../../../images/img_5.png) The **Image Resolution** is used to change DPI (image property PPI (Pixels Per Inch)). The greater the number of pixels per inch is, the greater is the quality of the image. It should be noted that the value of this parameter affects the size of the finished file. The higher the value is, the greater is the size of the finished file.

![](../../../images/img_6.png) The **Image Quality** allows changing the image quality. Keep in mind that if you change this option the size of the finished file will increase. The higher the quality is, the larger is the size of the finished file.

![](../../../images/img_7.png) The checkbox **Export Data Only** enables/disables the export of data only. If this option is enabled, information from the Data bands (component table, Hierarchical band) will be exported. Only these bands are processed. The rest bands and components are ignored. If this option is disabled, the entire report will be exported.

![](../../../images/img_8.png) The checkbox **Export Object Formatting** is available only when you export the data. It provides the opportunity to apply formatting to them. If this option is enabled, the data will be exported with formatting applied in the report. If this option is disabled, the data formatting will be lost.

![](../../../images/img_9.png) The checkbox **Use One Page Header and Footer** is used to get rid of repeats of headers and footers on the report pages. By default the page header and footer in the report are located on each page. The report in export to Excel is printed on a sizeless page. The page is able to grow in height as long as there are data. In this case, when you view the document in Excel, page headers and footers are output on the top and bottom of each report page. For example, if the report consists of 15 pages (in the Excel document it will all be placed on a single sheet), the page header and footer page will be output 15 times (each time on the top and bottom of the report page). To avoid this, you should enable this option, and then the page header will be displayed only on the top of the Excel sheet, and the page footer - in the end.


> **Information**
>
> Enabling this option may have residual effects. For example, if the page header or footer has borders, then, when this option is enabled, these borders may be shown. It is recommended, before rendering the report, to enable the parameter of the report page, Unlimited Height. In this case, the report will be rendered on a sizeless single page. The page header and footer will be printed only once on the Excel sheet.


![](../../../images/img_10.png) The checkbox **Export Each Page to Sheet** is used to export each report page on a separate Excel sheet. If this option is enabled, then each report page will be located on a separate sheet in Excel. If this option is disabled, the entire report will be printed on a single sheet of Excel.

![](../../../images/img_11.png) The checkbox **Export Page Breaks** is used to display the borders of the report pages on the Excel sheet. In other words, if the report contains 10 pages, all of them are placed on one sheet after export. Enable this option to define the borders of pages. If this option is disabled, all report pages will be printed, and, if no other delimiters present, will be output in one sizeless page.
