## Excel


**Microsoft Excel** is a spreadsheet application written and distributed by Microsoft for Microsoft Windows. It allows using calculation, graphing tools, pivot tables and a macro programming language called VBA. So, it is the most popular table processor available for these platforms since version 5 in 1993. Microsoft Excel up until Excel 2007 version used a proprietary binary file format called Binary Interchange File Format (BIFF) and **.xls** file extension. Specification was closed but since 2008 it was published. Besides, most of Microsoft Excel can read CSV, DBF, SYLK, DIF, and other formats.


![](../../../images/cross12.png)

By default a report is exported as one table to one sheet of Excel. Maximal number of rows on a sheet is unlimited. It depends on the Excel version and is set using the **MaximumSheetHeight** static property (by default 65534, for Excel XP and Excel 2003). If the number of rows is more than default then odd rows will be carried on the next sheet.


Also it is possible to export each page of a report on a single sheet of Excel. To do this it is possible to set the **ExportEachPageToSheet** property to true.


Besides the forced Excel sheets creation they can be created using the **ExcelSheet** page property to what any value can be assigned. If some sheets has the same **ExcelSheet** value then they are joined and exported as one sheet. In this case the name of a sheet is a name of a value.

![](../../../images/cross12.png)

The **XLS** format is based on the BIFF8 specification. Full support of this format is realized starting with the Excel 9.0 (Excel 2000).


Excel 8.0 (Excel 97):

does not support correct color;

does not fully support the Right to Left mode.


Excel 7.0 (Excel 95) and earlier versions:

does not support vertical alignment in  a cell;

does not support integrated cells;

does not support some other parameters.
