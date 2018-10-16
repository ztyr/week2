/*
 * @Author: 耿文静 
 * @Date: 2018-10-15 10:02:01 
 * @Last Modified by: 耿文静
 * @Last Modified time: 2018-10-15 14:03:31
 */

define(['jquery', 'handlebars'], function($, handle) {
    var render = function(tpl, data, target, isPrepend) {
        var tpl = $(tpl).html();
        var template = handle.compile(tpl);
        var html = template(data);
        if (isPrepend) {
            target.prepend(html);
        } else {
            target.html(html);
        }
    }
    return render;
});