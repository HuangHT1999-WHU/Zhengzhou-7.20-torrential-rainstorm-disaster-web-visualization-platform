// 点击更新实时天气数据按钮，获取当前最新的天气数据
$('#btnWeatherUpdateID').click(function () {
    // 实时天气数据获取通过和风天气开发平台API获取
    // 其中location表示城市的Location_ID，不定时更新，如有更新请及时到：https://github.com/qwd/LocationList 中获取最新数据

    // 北京市(Location_ID = 101010100)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101010100&key=08eee92467344db8aadba6fc1d000ee0",
        // 将ajax的默认异步请求设置为同步请求
        async: false,
        success: function (data) {
            // 获取当前实时天气数据的时间
            document.getElementById('updateTimeID').innerHTML = '当前天气数据更新时间：' + data.now.obsTime;
            // 获取实时降水量数据
            precipitation_Beijing = data.now.precip;
            // 获取实时气温数据
            temperature_Beijing = data.now.temp;
            // 获取实时风速数据
            windSpeed_Beijing = data.now.windSpeed;
        }
    })

    // 上海市(Location_ID = 101020100)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101020100&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Shanghai = data.now.precip;
            temperature_Shanghai = data.now.temp;
            windSpeed_Shanghai = data.now.windSpeed;
        }
    })

    // 天津市(Location_ID = 101030100)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101030100&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Tianjin = data.now.precip;
            temperature_Tianjin = data.now.temp;
            windSpeed_Tianjin = data.now.windSpeed;
        }
    })

    // 重庆市(Location_ID = 101040100)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101040100&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Chongqing = data.now.precip;
            temperature_Chongqing = data.now.temp;
            windSpeed_Chongqing = data.now.windSpeed;
        }
    })

    // 河北省石家庄市(Location_ID = 101090101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101090101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Hebei = data.now.precip;
            temperature_Hebei = data.now.temp;
            windSpeed_Hebei = data.now.windSpeed;
        }
    })

    // 河南省郑州市(Location_ID = 101180101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101180101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Henan = data.now.precip;
            temperature_Henan = data.now.temp;
            windSpeed_Henan = data.now.windSpeed;
        }
    })

    // 云南省昆明市(Location_ID = 101290101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101290101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Yunnan = data.now.precip;
            temperature_Yunnan = data.now.temp;
            windSpeed_Yunnan = data.now.windSpeed;
        }
    })

    // 辽宁省沈阳市(Location_ID = 101070101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101070101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Shenyang = data.now.precip;
            temperature_Shenyang = data.now.temp;
            windSpeed_Shenyang = data.now.windSpeed;
        }
    })

    // 黑龙江省哈尔滨市(Location_ID = 101050101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101050101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Heilongjiang = data.now.precip;
            temperature_Heilongjiang = data.now.temp;
            windSpeed_Heilongjiang = data.now.windSpeed;
        }
    })

    // 湖南省长沙市(Location_ID = 101250101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101250101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Hunan = data.now.precip;
            temperature_Hunan = data.now.temp;
            windSpeed_Hunan = data.now.windSpeed;
        }
    })

    // 安徽省合肥市(Location_ID = 101220101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101220101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Anhui = data.now.precip;
            temperature_Anhui = data.now.temp;
            windSpeed_Anhui = data.now.windSpeed;
        }
    })

    // 山东省济南市(Location_ID = 101120101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101120101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Shandong = data.now.precip;
            temperature_Shandong = data.now.temp;
            windSpeed_Shandong = data.now.windSpeed;
        }
    })

    // 新疆维吾尔自治区乌鲁木齐市(Location_ID = 101130101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101130101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Xinjiang = data.now.precip;
            temperature_Xinjiang = data.now.temp;
            windSpeed_Xinjiang = data.now.windSpeed;
        }
    })

    // 江苏省南京市(Location_ID = 101190101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101190101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Jiangsu = data.now.precip;
            temperature_Jiangsu = data.now.temp;
            windSpeed_Jiangsu = data.now.windSpeed;
        }
    })

    // 浙江省杭州市(Location_ID = 101210101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101210101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Zhejiang = data.now.precip;
            temperature_Zhejiang = data.now.temp;
            windSpeed_Zhejiang = data.now.windSpeed;
        }
    })

    // 江西省南昌市(Location_ID = 101240101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101240101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Jiangxi = data.now.precip;
            temperature_Jiangxi = data.now.temp;
            windSpeed_Jiangxi = data.now.windSpeed;
        }
    })

    // 湖北省武汉市(Location_ID = 101200101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101200101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Hubei = data.now.precip;
            temperature_Hubei = data.now.temp;
            windSpeed_Hubei = data.now.windSpeed;
        }
    })

    // 广西壮族自治区南宁市(Location_ID = 101300101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101300101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Guangxi = data.now.precip;
            temperature_Guangxi = data.now.temp;
            windSpeed_Guangxi = data.now.windSpeed;
        }
    })

    // 甘肃省兰州市(Location_ID = 101160101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101160101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Gansu = data.now.precip;
            temperature_Gansu = data.now.temp;
            windSpeed_Gansu = data.now.windSpeed;
        }
    })

    // 山西省太原市(Location_ID = 101100101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101100101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Shanxi = data.now.precip;
            temperature_Shanxi = data.now.temp;
            windSpeed_Shanxi = data.now.windSpeed;
        }
    })

    // 内蒙古自治区呼和浩特市(Location_ID = 101080101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101080101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_InnerMongolia = data.now.precip;
            temperature_InnerMongolia = data.now.temp;
            windSpeed_InnerMongolia = data.now.windSpeed;
        }
    })

    // 陕西省西安市(Location_ID = 101110101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101110101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Shaanxi = data.now.precip;
            temperature_Shaanxi = data.now.temp;
            windSpeed_Shaanxi = data.now.windSpeed;
        }
    })

    // 吉林省长春市(Location_ID = 101060101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101060101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Jilin = data.now.precip;
            temperature_Jilin = data.now.temp;
            windSpeed_Jilin = data.now.windSpeed;
        }
    })

    // 福建省福州市(Location_ID = 101230101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101230101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Fujian = data.now.precip;
            temperature_Fujian = data.now.temp;
            windSpeed_Fujian = data.now.windSpeed;
        }
    })

    // 贵州省贵阳市(Location_ID = 101260101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101260101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Guizhou = data.now.precip;
            temperature_Guizhou = data.now.temp;
            windSpeed_Guizhou = data.now.windSpeed;
        }
    })

    // 广东省广州市(Location_ID = 101280101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101280101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Guangdong = data.now.precip;
            temperature_Guangdong = data.now.temp;
            windSpeed_Guangdong = data.now.windSpeed;
        }
    })

    // 青海省西宁市(Location_ID = 101150101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101150101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Qinghai = data.now.precip;
            temperature_Qinghai = data.now.temp;
            windSpeed_Qinghai = data.now.windSpeed;
        }
    })

    // 西藏自治区拉萨市(Location_ID = 101140101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101140101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Tibet = data.now.precip;
            temperature_Tibet = data.now.temp;
            windSpeed_Tibet = data.now.windSpeed;
        }
    })

    // 四川省成都市(Location_ID = 101270101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101270101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Sichuan = data.now.precip;
            temperature_Sichuan = data.now.temp;
            windSpeed_Sichuan = data.now.windSpeed;
        }
    })

    // 宁夏回族自治区银川市(Location_ID = 101170101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101170101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Ningxia = data.now.precip;
            temperature_Ningxia = data.now.temp;
            windSpeed_Ningxia = data.now.windSpeed;
        }
    })

    // 海南省海口市(Location_ID = 101310101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101310101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Hainan = data.now.precip;
            temperature_Hainan = data.now.temp;
            windSpeed_Hainan = data.now.windSpeed;
        }
    })

    // 台湾省台北市(Location_ID = 101340101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101340101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Taiwan = data.now.precip;
            temperature_Taiwan = data.now.temp;
            windSpeed_Taiwan = data.now.windSpeed;
        }
    })

    // 香港特别行政区(Location_ID = 101320101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101320101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_HongKong = data.now.precip;
            temperature_HongKong = data.now.temp;
            windSpeed_HongKong = data.now.windSpeed;
        }
    })

    // 澳门特别行政区(Location_ID = 101330101)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101330101&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Macao = data.now.precip;
            temperature_Macao = data.now.temp;
            windSpeed_Macao = data.now.windSpeed;
        }
    })

    // 海南省南海诸岛(Location_ID = 101310304)实时天气数据
    $.ajax({
        type: "get",
        url: "https://devapi.qweather.com/v7/weather/now?location=101310304&key=08eee92467344db8aadba6fc1d000ee0",
        async: false,
        success: function (data) {
            precipitation_Nansha = data.now.precip;
            temperature_Nansha = data.now.temp;
            windSpeed_Nansha = data.now.windSpeed;
        }
    })

    var precipitationMap_dataList = [
        { name: '北京', value: precipitation_Beijing },
        { name: '天津', value: precipitation_Tianjin },
        { name: '上海', value: precipitation_Shanghai },
        { name: '重庆', value: precipitation_Chongqing },
        { name: '河北', value: precipitation_Hebei },
        { name: '河南', value: precipitation_Henan },
        { name: '云南', value: precipitation_Yunnan },
        { name: '辽宁', value: precipitation_Shenyang },
        { name: '黑龙江', value: precipitation_Heilongjiang },
        { name: '湖南', value: precipitation_Hunan },
        { name: '安徽', value: precipitation_Anhui },
        { name: '山东', value: precipitation_Shandong },
        { name: '新疆', value: precipitation_Xinjiang },
        { name: '江苏', value: precipitation_Jiangsu },
        { name: '浙江', value: precipitation_Zhejiang },
        { name: '江西', value: precipitation_Jiangxi },
        { name: '湖北', value: precipitation_Hubei },
        { name: '广西', value: precipitation_Guangxi },
        { name: '甘肃', value: precipitation_Gansu },
        { name: '山西', value: precipitation_Shanxi },
        { name: '内蒙古', value: precipitation_InnerMongolia },
        { name: '陕西', value: precipitation_Shaanxi },
        { name: '吉林', value: precipitation_Jilin },
        { name: '福建', value: precipitation_Fujian },
        { name: '贵州', value: precipitation_Guizhou },
        { name: '广东', value: precipitation_Guangdong },
        { name: '青海', value: precipitation_Qinghai },
        { name: '西藏', value: precipitation_Tibet },
        { name: '四川', value: precipitation_Sichuan },
        { name: '宁夏', value: precipitation_Ningxia },
        { name: '海南', value: precipitation_Hainan },
        { name: '台湾', value: precipitation_Taiwan },
        { name: '香港', value: precipitation_HongKong },
        { name: '澳门', value: precipitation_Macao },
        { name: "南海诸岛", value: precipitation_Nansha }
    ]

    var temperatureMap_dataList = [
        { name: '北京', value: temperature_Beijing },
        { name: '天津', value: temperature_Tianjin },
        { name: '上海', value: temperature_Shanghai },
        { name: '重庆', value: temperature_Chongqing },
        { name: '河北', value: temperature_Hebei },
        { name: '河南', value: temperature_Henan },
        { name: '云南', value: temperature_Yunnan },
        { name: '辽宁', value: temperature_Shenyang },
        { name: '黑龙江', value: temperature_Heilongjiang },
        { name: '湖南', value: temperature_Hunan },
        { name: '安徽', value: temperature_Anhui },
        { name: '山东', value: temperature_Shandong },
        { name: '新疆', value: temperature_Xinjiang },
        { name: '江苏', value: temperature_Jiangsu },
        { name: '浙江', value: temperature_Zhejiang },
        { name: '江西', value: temperature_Jiangxi },
        { name: '湖北', value: temperature_Hubei },
        { name: '广西', value: temperature_Guangxi },
        { name: '甘肃', value: temperature_Gansu },
        { name: '山西', value: temperature_Shanxi },
        { name: '内蒙古', value: temperature_InnerMongolia },
        { name: '陕西', value: temperature_Shaanxi },
        { name: '吉林', value: temperature_Jilin },
        { name: '福建', value: temperature_Fujian },
        { name: '贵州', value: temperature_Guizhou },
        { name: '广东', value: temperature_Guangdong },
        { name: '青海', value: temperature_Qinghai },
        { name: '西藏', value: temperature_Tibet },
        { name: '四川', value: temperature_Sichuan },
        { name: '宁夏', value: temperature_Ningxia },
        { name: '海南', value: temperature_Hainan },
        { name: '台湾', value: temperature_Taiwan },
        { name: '香港', value: temperature_HongKong },
        { name: '澳门', value: temperature_Macao },
        { name: "南海诸岛", value: temperature_Nansha }
    ]

    var windSpeedMap_dataList = [
        { name: '北京', value: windSpeed_Beijing },
        { name: '天津', value: windSpeed_Tianjin },
        { name: '上海', value: windSpeed_Shanghai },
        { name: '重庆', value: windSpeed_Chongqing },
        { name: '河北', value: windSpeed_Hebei },
        { name: '河南', value: windSpeed_Henan },
        { name: '云南', value: windSpeed_Yunnan },
        { name: '辽宁', value: windSpeed_Shenyang },
        { name: '黑龙江', value: windSpeed_Heilongjiang },
        { name: '湖南', value: windSpeed_Hunan },
        { name: '安徽', value: windSpeed_Anhui },
        { name: '山东', value: windSpeed_Shandong },
        { name: '新疆', value: windSpeed_Xinjiang },
        { name: '江苏', value: windSpeed_Jiangsu },
        { name: '浙江', value: windSpeed_Zhejiang },
        { name: '江西', value: windSpeed_Jiangxi },
        { name: '湖北', value: windSpeed_Hubei },
        { name: '广西', value: windSpeed_Guangxi },
        { name: '甘肃', value: windSpeed_Gansu },
        { name: '山西', value: windSpeed_Shanxi },
        { name: '内蒙古', value: windSpeed_InnerMongolia },
        { name: '陕西', value: windSpeed_Shaanxi },
        { name: '吉林', value: windSpeed_Jilin },
        { name: '福建', value: windSpeed_Fujian },
        { name: '贵州', value: windSpeed_Guizhou },
        { name: '广东', value: windSpeed_Guangdong },
        { name: '青海', value: windSpeed_Qinghai },
        { name: '西藏', value: windSpeed_Tibet },
        { name: '四川', value: windSpeed_Sichuan },
        { name: '宁夏', value: windSpeed_Ningxia },
        { name: '海南', value: windSpeed_Hainan },
        { name: '台湾', value: windSpeed_Taiwan },
        { name: '香港', value: windSpeed_HongKong },
        { name: '澳门', value: windSpeed_Macao },
        { name: "南海诸岛", value: windSpeed_Nansha }
    ]

    var precipitationMap = echarts.init(document.getElementById('precipitationMapID'));
    var temperatureMap = echarts.init(document.getElementById('temperatureMapID'));
    var windSpeedMap = echarts.init(document.getElementById('windSpeedMapID'));

    precipitationMap_option = {
        // 设置鼠标移动到省份上面显示的提示框的内容格式
        tooltip: {
            formatter: function (params, ticket, callback) {
                return '省份/自治区/直辖市名称: ' + params.name + '<br />' + params.seriesName + ': ' + params.value + ' 毫米'
            }//数据格式化
        },

        // 设置图例信息
        visualMap: {
            min: 0,
            max: 50,
            left: 'right',
            top: 'middle',
            text: ['暴雨', '晴朗'],
            //取值范围的颜色
            inRange: { color: ['#FFFFFF', '#A5F38D', '#3DB93F', '#63B8F9', '#0000FE', '#F305EE', '#810040'] },
            show: true
        },
        geo: {
            map: 'china',
            roam: false,   //不开启缩放和平移
            zoom: 1,       //视角缩放比例

            // 设置地图内标注文字的样式
            label: {
                normal: {
                    show: true,
                    fontSize: '10',
                    color: 'black',
                }
            },

            itemStyle: {
                // 正常情况下的省份效果
                normal: {
                    borderColor: 'rgba(0, 0, 0, 0.3)'
                },
                // 鼠标移动到对应省份上面时的强调效果
                emphasis: {
                    areaColor: '#AA3344',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 1,
                    shadowColor: 'bcack'
                }
            }
        },
        series: [
            {
                name: '当地实时每小时累计降水量',
                type: 'map',
                geoIndex: 0,
                data: precipitationMap_dataList
            }
        ]
    };
    precipitationMap.setOption(precipitationMap_option);

    temperatureMap_option = {
        // 设置鼠标移动到省份上面显示的提示框的内容格式
        tooltip: {
            formatter: function (params, ticket, callback) {
                return '省份/自治区/直辖市名称: ' + params.name + '<br />' + params.seriesName + ': ' + params.value + ' 摄氏度'
            }//数据格式化
        },

        // 设置图例信息
        visualMap: {
            min: -30,
            max: 40,
            left: 'right',
            top: 'middle',
            text: ['高温', '低温'],
            //取值范围的颜色
            inRange: { color: ['#020C64', '#2657B3', '#74A3E2', '#98D6C4', '#D7DE7E', '#F7B42D', '#EF7511', '#E03F16', '#50000F'] },
            show: true
        },
        geo: {
            map: 'china',
            roam: false,   //不开启缩放和平移
            zoom: 1,       //视角缩放比例

            // 设置地图内标注文字的样式
            label: {
                normal: {
                    show: true,
                    fontSize: '10',
                    color: 'black',
                }
            },

            itemStyle: {
                // 正常情况下的省份效果
                normal: {
                    borderColor: 'rgba(0, 0, 0, 0.3)'
                },
                // 鼠标移动到对应省份上面时的强调效果
                emphasis: {
                    areaColor: '#AA3344',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 1,
                    shadowColor: 'bcack'
                }
            }
        },
        series: [
            {
                name: '当地实时气温',
                type: 'map',
                geoIndex: 0,
                data: temperatureMap_dataList
            }
        ]
    };
    temperatureMap.setOption(temperatureMap_option);

    windSpeedMap_option = {
        // 设置鼠标移动到省份上面显示的提示框的内容格式
        tooltip: {
            formatter: function (params, ticket, callback) {
                return '省份/自治区/直辖市名称: ' + params.name + '<br />' + params.seriesName + ': ' + params.value + ' 公里/小时'
            }//数据格式化
        },

        // 设置图例信息
        visualMap: {
            min: 0,
            max: 72,
            left: 'right',
            top: 'middle',
            text: ['大风', '静风'],
            //取值范围的颜色
            inRange: { color: ['#FFFFFF', '#F5FFFA', '#97E8AD', '#9BBCE8', '#3B7EDB', '#1C3BA9', '#071E78', '#86158A', '#C811A9'] },
            show: true
        },
        geo: {
            map: 'china',
            roam: false,   //不开启缩放和平移
            zoom: 1,       //视角缩放比例

            // 设置地图内标注文字的样式
            label: {
                normal: {
                    show: true,
                    fontSize: '10',
                    color: 'black',
                }
            },

            itemStyle: {
                // 正常情况下的省份效果
                normal: {
                    borderColor: 'rgba(0, 0, 0, 0.3)'
                },
                // 鼠标移动到对应省份上面时的强调效果
                emphasis: {
                    areaColor: '#AA3344',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 1,
                    shadowColor: 'bcack'
                }
            }
        },
        series: [
            {
                name: '当地实时风速',
                type: 'map',
                geoIndex: 0,
                data: windSpeedMap_dataList
            }
        ]
    };
    windSpeedMap.setOption(windSpeedMap_option);




    temperatureMap.on('click', function (params) {
        var subSystem = params.name;
        alert("您即将在新的窗口跳转到" + subSystem + "省的详细介绍（信息来源：百度百科）");
        var url = 'https://baike.baidu.com/item/';
        window.open(url.concat(subSystem));
    });
})

