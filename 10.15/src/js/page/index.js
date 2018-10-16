/*
 * @Author: 耿文静 
 * @Date: 2018-10-15 09:45:08 
 * @Last Modified by: 耿文静
 * @Last Modified time: 2018-10-15 14:27:25
 */

require(['jquery', 'rendertpl'], function($, rendertpl) {
    $.ajax({
        url: '/api/list',
        dataType: 'json',
        success: function(res) {
            if (res.code === 1) {
                rendertpl($('#tpl'), res.data, $('.box'), false);
            }
        }
    })
    $('#add').on('click', function() {
        location.href = '../../page/add.html';
    });
})