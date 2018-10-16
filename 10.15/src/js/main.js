/*
 * @Author: 耿文静 
 * @Date: 2018-10-15 09:04:03 
 * @Last Modified by: 耿文静
 * @Last Modified time: 2018-10-15 09:47:19
 */

require.config({
    baseUrl: '/js/',
    paths: {
        //库文件
        'jquery': './libs/jquery-3.3.1',
        'handlebars': './libs/handlebars-v4.0.11',
        'flexible': './libs/flexible',
        //页面的js
        'rendertpl': './common/rendertpl',
        'index': './page/index',
        'add': './page/add'

    }
})
require(['flexible'])