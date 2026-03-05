## XPS


**XPS** (XML Paper Specification) is the open graphic format of fixed page layout on the base XML (more precisely XAML-based) used to store printed output as electronic documents. This format was developed by Microsoft as alternative to the PDF format.The XPS document format consists of structured XML markup that defines the layout of a document and the visual appearance of each page, along with rendering rules for distributing, archiving, rendering, processing and printing the documents. The markup language for XPS is a subset of XAML that allows including vector graphic elements, using XAML to mark up the WPF-primitives. The XPS is a ZIP-archive that contains the files which make up the document. The archive includes page mark up (one file per each page of a document), text, embedded fonts, raster images, 2D vector graphics and other information.


![](../../../images/topics/Viewer.Exports.Formats_with_Fixed_Page_Layout.XPS_1.png)

![](../../../images/img_1.png) The checkbox **All** enables processing of all report pages.

![](../../../images/img_2.png) The checkbox **Current Page** enables processing only the current (selected) report page.

![](../../../images/img_3.png) The checkbox **Pages** has the field. This field specifies the number of pages to be processed. You can specify a single page, several pages (using a comma as the separator) and also specify a range by defining the start page and end page range separated with "-". For example, 1,3,5-12.

![](../../../images/img_4.png) The **Image Resolution** is used to change DPI (image property PPI (Pixels Per Inch)). The greater the number of pixels per inch is, the greater is the quality of the image. It should be noted that the value of this parameter affects the size of the finished file. The higher the value is, the greater is the size of the finished file.

![](../../../images/img_5.png) The **Image Quality** allows changing the image quality. Keep in mind that if you change this option the size of the finished file will increase. The higher the quality is, the larger is the size of the finished file.

![](../../../images/img_6.png) The flag **Export Rich Text as Image** as Image enables/disables the conversion of the RTF text into the image. If the option is disabled, the Rich Text is decomposed into simpler primitives supported by the PDF format. The Rich Text with complex formatting (embedded images, tables) cannot always be converted correctly. In this case it is recommended to enable this option.


> **Information**
>
> When you enable this option, the file size may increase significantly.
