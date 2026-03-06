## Compatibility of Different Versions


The information below shows the compatibility of Adobe Acrobat versions.


**Adobe Acrobat 5**

* The PageScaling option from the file is ignored. By default the option in parameters of Adobe Acrobat is set to "None" but "Fit to printable area" value is used.


**Adobe Acrobat 5 & 6**

* When editing Adobe Acrobat does not recognize the Unicode - only Latin characters are output (Latin-1 encoding), other characters are output as dots;

* If the "UseUnicode" option in export parameters is enabled, then it is necessary to embed fonts (the "Embedded Fonts" option), otherwise the will be output incorrectly.


**Adobe Acrobat 7**

* It is necessary to embed fonts to the PDF file. Otherwise, when editing, any font will be replaced on the default font (usually on Tahoma).


**Adobe Acrobat 7 Reader**

* There are some problems with 7.0.5 - 7.0.9 versions. In these versions the field is not included into the editing mode, if there are non Latin characters present in the text field (different from Latin-1).
