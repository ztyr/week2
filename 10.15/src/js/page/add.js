/*
 * @Author: 耿文静 
 * @Date: 2018-10-15 09:47:03 
 * @Last Modified by: 耿文静
 * @Last Modified time: 2018-10-15 14:24:53
 */

require(['jquery', 'rendertpl'], function($, rendertpl) {

    $('#btn').on('click', function() {
        var title = $('#title').val();
        var content = $('#content').val();

        if (!title || !content) {
            alert('内容不能为空！');
        } else {
            $.ajax({
                url: '/api/add',
                type: 'post',
                data: {
                    title: title,
                    content: content
                },
                dataType: 'json',
                success: function(res) {
                    console.log(res)
                    if (res.code === 1) {

                        location.href = '../../index.html';
                        rendertpl($('#sec-tpl'), res.data, $('.box'), true);
                    } else {
                        location.href = '../../index.html';
                    }
                },
                error: function(err) {
                    console.warn(err);
                }
            })

        }


    });
})