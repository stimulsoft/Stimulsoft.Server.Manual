## Common Export Settings


These chapters describe export settings which are not unique and are met in a few exports. Therefore, to prevent describing them again and again, they are joined in this section.


![](../../images/cross12.png)

Image quality is the compression degree of JPEG.  If the compression is low then an image is of good quality and has big file size. If the compression is high then an image is of bad quality and has small file size. In Stimulsoft Reports an image quality can vary from 0.0 (the lowest quality) to 1.0 (highest quality). If an image quality is 1.0 it does not mean that the image is saved without compression. The JPEG algorithm always compresses an image. The 1.0 quality means that an image quality will be the same as the quality of an original document but the file size will be smaller than the original. The 0.0 quality means that the image has slightest similarity to the original document. In practice, the 0.9 quality has not great distinction from the 1.0 quality but the image with lower than the 0.1 quality looks bad. By default, in Stimulsoft Reports the image quality is 0.75.

![](../../images/cross12.png)

Raster images such as scanned photos consist of small cells called pixels. Image resolution depends on the pixel size and is measured in pixels per inch, ppi, and sometimes in dots per inch, dpi. The higher resolution the more pixels the image contains and, accordingly, the more size of the image. In Stimulsoft Reports it is possible to set any image resolution. But when increasing the resolution in 2 times the image size will increase in 4 times. Also it is not good to set the image resolution more than maximal resolution of an output device. For example, devices may have the following resolution:

matrix printer - 72dpi;

monitor screen - 96dpi;

laser printers - 300dpi or 600dpi;

high-end printers - 1200dpi and higher.


By default the resolution is 100dpi.

![](../../images/cross12.png)

Sometimes repetitive image can be met in a report, for example, company logos on the header of each page. If do not process such duplicates then a report after export will have big size. Some formats allows exporting only one image and then refer to it from different parts of a document. In Stimulsoft Reports, there is a special class that calculates check sums and searches and processes duplicates. Image processing may slow down the process of exporting, so it is possible to disable this feature. Each export has its own property to enable or disable image comparison. By default this property is always enabled.

![](../../images/cross12.png)

Arabs do not use Arabic digits. They use Hindi digits and Arabic digits are auxiliary (the same as Roman digits for us). But, in any case, all digits are written from left to right. This property indicates whether it is necessary to convert Roman digits (ASCII 0030h-0039h) to Arabic digits (Unicode 0660h-0669h or 06F0h-06F9h, depending on the ArabicDigitsType property). In each types of export the digits conversion can be set by their own property.

![](../../images/cross12.png)

Arabic digits have two variants of drawing: Standard and Eastern. The property allows selecting the type of Arabic digits that will be used in export: Standard or Eastern; by default the Standard type is used. In each export the type of Arabic digits is enabled or disabled by its own property.

![](../../images/cross12.png)

**Stimulsoft Reports.Server** allows creating segmented pages. These are pages which horizontal and/or vertical size are increased in some times. Some applications, such as MS Excel, allows working with pages of any size, because breaking into small segments can is processed with the spreadsheet itself. Other applications, such as MS Word, cannot break pages into small segments. For such applications segmented pages are broken into separate pages on the stage of selected export; if property, for example, for Word2007, **StiOptions.Export.Word2007.DivideSegmentPages** , is set to false then pages are passed "as is" without breaking into segments. Each type of export has its own property for breaking segmented pages.

![](../../images/cross12.png)

Many exports uses the table mode of export. In this mode data is converted into one table. If, in the initial report, there is an empty space on the bottom of a page then the table is broken. The following property allows removing empty space at the bottom of a page and resulting table is not broken. If it is necessary to save the initial view of a document then it is necessary to set this property to false. In each type of exports their own property is used.

![](../../images/cross12.png)

When exporting to Excel then all report is converted in one table. Headers and footers of a page break this table. This property leaves only the first header and the last header of a page. All other headers and footers are removed. If it is necessary to save the initial view of a document then it is necessary to set this property to false. For each type of exports their own property is used.
