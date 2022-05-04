var submergingOfAmusementMap = echarts.init(document.getElementById('submergingOfAmusementMapID'));

var option_submergingOfAmusement;

$.get(
    '../json/submergingOfAmusement.json',
    function (_rawData_submergingOfAmusement) {
        run_submergingOfAmusement(_rawData_submergingOfAmusement);
    }
);
function run_submergingOfAmusement(_rawData_submergingOfAmusement) {
    const Degrees = [
        'None',
        'Dep0.15m',
        'Dep0.3m',
        'Dep0.5m',
        'Dep1m',
        'Dep1.5m',
        'Dep2m',
        'Dep3m',
        'DepMore3m'
    ];
    const datasetWithFilters = [];
    const seriesList = [];

    echarts.util.each(Degrees, function (degree) {
        var datasetId = 'dataset_' + degree;

        datasetWithFilters.push({
            id: datasetId,
            fromDatasetId: 'dataset_raw',
            // 使用数据转换器 "filter" 筛选出满足条件的所有数据项，加入“dataset_degree”中
            transform: {
                type: 'filter',
                config: {
                    and: [
                        { dimension: 'Time', '>=': 2021071900 },
                        { dimension: 'Degree', '=': degree }
                    ]
                }
            }
        });

        // 将删选后的dataset加入列表
        seriesList.push({
            type: 'line',
            datasetId: datasetId,
            showSymbol: false,
            name: degree,
            smooth: true,
            endLabel: {
                show: true,
                formatter: function (params) {
                    // 这里是最右侧黑色的标注 params.value[0]指的是"Degree"这一列，params.value[1]指的是"Proportion"这一列
                    return params.value[0] + ': ' + params.value[1] + '%';
                }
            },
            labelLayout: {
                moveOverlap: 'shiftY'
            },
            emphasis: {
                focus: 'series'
            },
            encode: {
                x: 'Time',
                y: 'Proportion',
                label: ['Degree', 'Proportion'],
                itemName: 'Time',
                tooltip: ['Proportion']
            }
        });
    });


    option_submergingOfAmusement = {
        animationDuration: 30000,
        dataset: [
            {
                id: 'dataset_raw',
                source: _rawData_submergingOfAmusement
            },
            ...datasetWithFilters
        ],
        title: {
            text: '河南郑州“7·20”特大暴雨事件不同受淹程度的休闲娱乐场所比例'
        },
        tooltip: {
            order: 'valueDesc',
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            nameLocation: 'middle',
        },
        yAxis: {
            name: 'Proportion(%)',
        },
        grid: {
            right: 140
        },
        series: seriesList
    };
    submergingOfAmusementMap.setOption(option_submergingOfAmusement);
}

option_submergingOfAmusement && submergingOfAmusementMap.setOption(option_submergingOfAmusement);
