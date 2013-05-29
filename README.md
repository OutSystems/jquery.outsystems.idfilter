jQuery IDfilter
===============

This plugin makes life easier on developers dealing with JSF-generated HTML
IDs and jQuery. JSF will by default use colons `:` to generate element IDs,
which will often end up like `<span id="listWidget:wtLine:lineTitle">`.

jQuery will interpret colons as an prefix for a pseudo selector, so the
you have to either escape such IDs before passing them to jQuery
(replacing `:` with `\\:`) or using `document.getElementById()` on the
identifier and passing the returned DOM Element to jQuery (which prevents
harnessing the full power out of jQuery selectors).

By inclduing the IDfilter plugin, ID selectors will be automatically escaped
and all pseudo selectors recognized by jQuery will keep working. This will
hopefully ease the life for any developer who has to deal with the default
JSF generated element IDs.

Example Usage
=============

Consider a checkbox such as

    <input type="checkbox" checked id="some:check" />

With this plugin, jQuery will recognize the element by these selectors:

    #some:check             // just the ID
    #some:check:checked     // ID and pseudo-selector
    input:checked           // other selector with pseudo-selector

LICENSE
=======

This plugin is released under the MIT License.
