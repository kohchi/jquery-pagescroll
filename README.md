jquery-pagescroll
=============
scroll to id or name attribute smoothly within the page.

This is the jquery plugin that the page scrolls smoothly to
specified id or name attribute.

for example
-----------
```javascript
$('a[href*="#"]').pagescroll();
// or
$('a[href*="#"]').pagescroll({duration: 1200});
// or
$('a[href*="#"]').pagescroll({
  duration: 1200,
  easing: 'easeOutQuart'
});
```

+  `duration` :
   millisecond of move interval time. The default is 1200(ms).
+  `easing` :
   function name of how to move. The default is null (same as _easeOutQuart_).

If you want to set the easing option name to the option, you require
including jQuery Easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/).

License
-------
You may use this under the terms of either MIT License or
GNU General Public License (GPL) Version 2. (same as jQuery).

### Copyright
Copyright (c) MIYAGINO.net. All Rights Reserved.
