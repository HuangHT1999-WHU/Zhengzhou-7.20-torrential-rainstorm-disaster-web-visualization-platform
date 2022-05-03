var damageExtentMap = echarts.init(document.getElementById('damageExtentMapID'));

var option_damageExtentMap;

option_damageExtentMap = {
    title: {
        text: '三个特定地点的受灾程度指数时序变化',
        textStyle: {
            fontSize: 20
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['河南省政府办公厅', '郑州市体育场', '郑州大学'],
        textStyle: {
            fontSize: 20
        }
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
            '0719-0h', '0719-1h', '0719-2h', '0719-3h', '0719-4h', '0719-5h', '0719-6h', '0719-7h', '0719-8h', '0719-9h', '0719-10h', '0719-11h', '0719-12h',
            '0719-13h', '0719-14h', '0719-15h', '0719-16h', '0719-17h', '0719-18h', '0719-19h', '0719-20h', '0719-21h', '0719-22h', '0719-23h',
            '0720-0h', '0720-1h', '0720-2h', '0720-3h', '0720-4h', '0720-5h', '0720-6h', '0720-7h', '0720-8h', '0720-9h', '0720-10h', '0720-11h', '0720-12h',
            '0720-13h', '0720-14h', '0720-15h', '0720-16h', '0720-17h', '0720-18h', '0720-19h', '0720-20h', '0720-21h', '0720-22h', '0720-23h',
            '0721-0h', '0721-1h', '0721-2h', '0721-3h', '0721-4h', '0721-5h', '0721-6h', '0721-7h', '0721-8h', '0721-9h', '0721-10h', '0721-11h', '0721-12h',
            '0721-13h', '0721-14h', '0721-15h', '0721-16h', '0721-17h', '0721-18h', '0721-19h', '0721-20h', '0721-21h', '0721-22h', '0721-23h'
        ],
        name: '时间'
    },
    yAxis: {
        type: 'value',
        name: '受灾程度指数'
    },
    series: [
        {
            name: '河南省政府办公厅',
            type: 'line',
            smooth: true,
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0.250708, 0.165921, 0.15288, 0.152766, 0.17503, 0.22495, 0.162133, 0.259709, 0.332637, 0.203536, 0.565383, 1.418242, 0.553304, 0.445186, 0.381265, 0.420883, 0.398019, 0.309376, 0.213349,
                0.212512, 0.133596, 0.215052, 0.253216, 0.215894, 0.149195, 0.272743, 0.229997, 0.242763, 0.1688, 0.126782, 0.102651, 0.073296, 0.048055, 0.024129, 0.015795, 0.012018, 0.010958, 0.018596, 0.064656, 0.033451, 0.026488, 0.042866, 0.042286
            ]
        },
        {
            name: '郑州市体育场',
            type: 'line',
            smooth: true,
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.456753, 0,
                0, 0, 0, 0, 0, 1.622287, 0.682, 0.605135, 0.830187, 0.974418, 1.414053, 0.673607, 1.170397, 2.326147, 1.166857, 4.516276, 12.380031, 4.976058, 3.780687, 3.072597, 3.29659, 3.123616, 2.815834, 2.101034,
                2.079836, 1.328241, 1.857425, 1.890167, 2.205813, 1.694393, 1.390207, 1.187423, 1.475847, 1.014533, 0.79886, 0.74096, 0.672439, 0.610934, 0.733255, 0.64042, 0.545931, 0.455734, 0.379746, 0.596636, 0.263187, 0.163378, 0.325261, 0.288116
            ]
        },
        {
            name: '郑州大学',
            type: 'line',
            smooth: true,
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.267346, 0,
                0, 0, 0, 0, 0, 0.965595, 0.373433, 0.337445, 0.485494, 0.570428, 0.843388, 0.375867, 0.668425, 1.403844, 0.660897, 2.753183, 7.503435, 2.783787, 2.005708, 1.579111, 1.749751, 1.66526, 1.529946, 1.129309,
                1.172678, 0.762176, 1.153549, 1.20873, 0.93845, 0.733258, 0.62067, 0.540337, 0.950476, 0.664142, 0.528733, 0.489074, 0.445679, 0.404718, 0.361299, 0.32154, 0.281269, 0.242496, 0.208697, 0.354335, 0.160334, 0.11554, 0.23404, 0.205666
            ]
        }
    ]
};

option_damageExtentMap && damageExtentMap.setOption(option_damageExtentMap);