///1.引入express
 const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request是对请求报文的封装  response是对响应报文的封装
app.get('/server', (request, response) => {
     // 设置响应头 设置允许跨域node
    response.setHeader('Access-Control-Allow-Origin', '*');
     //设置响应体
    response.send('HELLO AJAX---2')
})
app.post('/server', (request, response) => {
    // 设置响应头 设置允许跨域node
   response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
   response.send('HELLO AJAX---33')
})

//all 可以接受任何类型的请求
app.all('/json-server', (request, response) => {
    // 设置响应头 设置允许跨域node
    response.setHeader('Access-Control-Allow-Origin', '*');
    //对于自定义的请求头 特殊的响应头，自定义的请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //服务端响应json数据
    //响应数据
    const data = {
        name: 'guoxiaopang'
    }
    //将对象转化成字符串
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);//send里面只能是字符串或者 Bafer数据
})

//针对IE缓存问题
app.get('/ie', (request, response) => {
    // 设置响应头 设置允许跨域node
   response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('HELLO IE------');
})

//延时响应
app.get('/delay', (request, response) => {
    // 设置响应头 设置允许跨域node
   response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        //设置响应体
        response.send('延时响应！')
    }, 3000);
})

//jQuery服务
app.all('/jquery-server', (request, response) => {
    // 设置响应头 设置允许跨域node
    response.setHeader('Access-Control-Allow-Origin', '*');
    //对于自定义的请求头 特殊的响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    //response.send('Hello jQuery AJAX!')
     const data = { name: '尚硅谷' };
     response.send(JSON.stringify(data));
})

//axios 服务
app.all('/axios-server', (request, response) => {
    // 设置响应头 设置允许跨域node
    response.setHeader('Access-Control-Allow-Origin', '*');
    //对于自定义的请求头 特殊的响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    //response.send('Hello jQuery AJAX!')
     const data = { name: '郭小胖' };
     response.send(JSON.stringify(data));
})
//axios 服务
app.all('/axios', (request, response) => {
    // 设置响应头 设置允许跨域node
    response.setHeader('Access-Control-Allow-Origin', '*');
    //对于自定义的请求头 特殊的响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    //response.send('Hello jQuery AJAX!')
    const data = ['红楼梦', '水浒传', '三国演义', '西游记'];
     response.send(JSON.stringify(data));
})


//fetch 服务
app.all('/fetch-server', (request, response) => {
    // 设置响应头 设置允许跨域node
    response.setHeader('Access-Control-Allow-Origin', '*');
    //对于自定义的请求头 特殊的响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    //response.send('Hello jQuery AJAX!')
     const data = { name: '郭pangpang' };
     response.send(JSON.stringify(data));
})

//jsonp服务
app.all('/jsonp-server', (request, response) => {
    //response.send('jsonp-server');
    const data = {
        name: 'guoguoguo'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
})

//用户名检测是否存在
app.all('/check-username', (request, response) => {
    const data = {
        exist: 1,
        msg: '用户名字已经存在！'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
})

//jQuery-jsonp
app.all('/jquery-jsonp-server', (request, response) => {
    const data = {
        name: '郭臻宜',
        city:['北京','上海','深圳']
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //接受callback参数
    let cb = request.query.callback;
    //返回结果
    response.end(`handle(${str})`);
})

//cors
app.all('/cors-server', (request, response) => {
    //设置响应头
    response.setHeader("Access-Control-Allow-Origin", "*"); //'*'可是具体的网页地址
    response.setHeader("Access-Control-Allow-Headers", "*");//自定义头
    response.setHeader("Access-Control-Allow-Method", "*");//方法get post...
    response.send('hello cors');
})
//axios 服务 购物车请求列表
app.all('/axios-cart', (request, response) => {
    // 设置响应头 设置允许跨域node
    response.setHeader('Access-Control-Allow-Origin', '*');
    //对于自定义的请求头 特殊的响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    //response.send('Hello jQuery AJAX!')
    const data = {
        status: 200,
        message: '获取列表数据成功！',
        list: [
            {
                id: 1,
                goods_name: '带帽外衣',
                goods_img: 'https://img0.baidu.com/it/u=2668765741,2232204886&fm=253&fmt=auto&app=120&f=JPEG?w=350&h=449',
                goods_price: 136,
                goods_count: 1,
                goods_state:true
            },
            {
                id: 2,
                goods_name: '连衣裙',
                goods_img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fvp2.mbsimg.com%2FProductImg%2F97%2F1502%2Fhuge%2F970090158-CL01-01-H.jpg&refer=http%3A%2F%2Fvp2.mbsimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639313699&t=98a344a95752d40ac9e9b26e17008293',
                goods_price: 116,
                goods_count: 1,
                goods_state:true
            },
            {
                id: 3,
                goods_name: '卫衣两件套',
                goods_img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F007%2F372%2F8872273700_406183446.310x310.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639314053&t=ef54837f1c18245a1f56f8c2f6973a63',
                goods_price: 156,
                goods_count: 1,
                goods_state:true
            },
            {
                id: 4,
                goods_name: '上衣连帽裙子',
                goods_img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi00.c.aliimg.com%2Fimg%2Fibank%2F2015%2F497%2F434%2F2071434794_1038852001.310x310.jpg&refer=http%3A%2F%2Fi00.c.aliimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639314053&t=ef2b34f27ee266fef716d0bcb8b16624',
                goods_price: 100,
                goods_count: 1,
                goods_state:true
            },
            {
                id: 5,
                goods_name: '宽松款外衣',
                goods_img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F609%2F350%2F8918053906_1396084710.310x310.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639314053&t=98cf6b6452a9c300f4357bf8babcd9dd',
                goods_price: 101,
                goods_count: 1,
                goods_state:false
            },
            {
                id: 6,
                goods_name: '假两件上衣',
                goods_img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg000.hc360.cn%2Fy5%2FM03%2FB7%2F91%2FwKhQUVXUxqaEBnI9AAAAAFkDmpo935.jpg&refer=http%3A%2F%2Fimg000.hc360.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639314053&t=68f0c39b42578d671db0b2e7461acfd8',
                goods_price: 186,
                goods_count: 1,
                goods_state:false
            }
        ]
    };
    //response.send(JSON.stringify(data))
    response.send(data);
})


//axios请求黑马头条案例
app.all('/articles', (request, response) => {
    // 设置响应头 设置允许跨域node
    response.setHeader('Access-Control-Allow-Origin', '*');
    //对于自定义的请求头 特殊的响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    //response.send('Hello jQuery AJAX!')
    const data = [
        {
            art_id: 8163,
            title: 'IOS原生混合RN开发最佳',
            aut_id: 1111,
            comm_count: 254,
            pudate: '2019 - 03 - 11',
            aut_name: '郭小胖',
            is_top: 0,
            cover: {
                type: 1,
                images: [
                   'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202104%2F12%2F20210412121259_bfa7f.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639997475&t=dac612d6aa7d13b074847f41ef4c2e53'
                ]
            }
        },
        {
            art_id: 8145,
            title: 'Java消息确认机制之ACK模式',
            aut_id: 1111,
            comm_count: 99,
            pudate:'2019 - 03 - 11',
            aut_name: '郭小胖',
            is_top: 0,
            cover: {
                type: 0,  
            }
        },
        {
            art_id: 8166,
            title: 'Typescript玩转设计模式',
            aut_id: 1111,
            comm_count: 254,
            pudate: '2019 - 03 - 11',
            aut_name: '郭小胖',
            is_top: 0,
            cover: {
                type: 3,
                images: [
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202104%2F12%2F20210412121259_bfa7f.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639997475&t=dac612d6aa7d13b074847f41ef4c2e53',
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202103%2F20%2F20210320234720_24787.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639997475&t=b3fd75201263f54e4fb18a35f5446c8e',
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fci.xiaohongshu.com%2Fff5ff951-e023-1288-805d-672b8464664a%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fci.xiaohongshu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639997475&t=fa4caeda152fdf8c9ac922b3726e1625'
                ]
            }
        },
        {
            art_id: 8089,
            title: '招魂楚些何嗟及',
            aut_id: 1111,
            comm_count: 254,
            pudate: '2019 - 03 - 11',
            aut_name: '郭小胖',
            is_top: 0,
            cover: {
                type: 1,
                images: [
                   'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202104%2F12%2F20210412121259_bfa7f.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639997475&t=dac612d6aa7d13b074847f41ef4c2e53'
                ]
            }
        },
        {
            art_id: 8089,
            title: '离别苦',
            aut_id: 1111,
            comm_count: 254,
            pudate: '2019 - 03 - 11',
            aut_name: '郭小胖',
            is_top: 0,
            cover: {
                type: 1,
                images: [
                   'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202104%2F12%2F20210412121259_bfa7f.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639997475&t=dac612d6aa7d13b074847f41ef4c2e53'
                ]
            }
        },
        {
            art_id: 8089,
            title: '天南地北双飞客',
            aut_id: 1111,
            comm_count: 254,
            pudate: '2019 - 03 - 11',
            aut_name: '郭小胖',
            is_top: 0,
            cover: {
                type: 1,
                images: [
                   'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202104%2F12%2F20210412121259_bfa7f.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639997475&t=dac612d6aa7d13b074847f41ef4c2e53'
                ]
            }
        },
        {
            art_id: 8089,
            title: '暗风吹雨入寒窗',
            aut_id: 1111,
            comm_count: 254,
            pudate: '2019 - 03 - 11',
            aut_name: '郭小胖',
            is_top: 0,
            cover: {
                type: 1,
                images: [
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn3.mm683.com%2Fimg%2Ftouxiang%2F1559620141%2F1559620141-2.jpg&refer=http%3A%2F%2Fcdn3.mm683.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640063053&t=9374597cc3495cd988708dfab6f102f0'
                ]
            }
        },
        {
            art_id: 8089,
            title: '垂死病中惊坐起',
            aut_id: 1111,
            comm_count: 254,
            pudate: '2019 - 03 - 11',
            aut_name: '郭小胖',
            is_top: 0,
            cover: {
                type: 1,
                images: [
                   'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202104%2F12%2F20210412121259_bfa7f.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639997475&t=dac612d6aa7d13b074847f41ef4c2e53'
                ]
            }
        },
        {
            art_id: 8089,
            title: '此夕闻君谪九江',
            aut_id: 1111,
            comm_count: 54,
            pudate: '2019 - 03 - 11',
            aut_name: '郭小胖',
            is_top: 0,
            cover: {
                type: 3,
                images: [
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202104%2F12%2F20210412121259_bfa7f.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639997475&t=dac612d6aa7d13b074847f41ef4c2e53',
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fci.xiaohongshu.com%2F7a09ed4e-b994-570b-dbe4-53d633df4ae5%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fci.xiaohongshu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639997483&t=f6cb4a65045330e3fe3a4800bcbfeed8'
                ]
            }
        },
        {
            art_id: 8090,
            title: 'I残灯无焰影幢幢',
            aut_id: 1111,
            comm_count: 24,
            pudate: '2019 - 03 - 11',
            aut_name: '郭小胖',
            is_top: 0,
            cover: {
                type: 1,
                images: [
                   'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202104%2F12%2F20210412121259_bfa7f.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639997475&t=dac612d6aa7d13b074847f41ef4c2e53'
                ]
            }
        },

    ]
    //response.send(JSON.stringify(data))
    response.send(data);
})
// 4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中.......");
});