var submergingOfEducationMap = echarts.init(document.getElementById('submergingOfEducationMapID'));

var option_submergingOfEducation;

$.get(
    '../json/submergingOfEducation.json',
    function (_rawData_submergingOfEducation) {
        run_submergingOfEducation(_rawData_submergingOfEducation);
    }
);
function run_submergingOfEducation(_rawData_submergingOfEducation) {
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


    option_submergingOfEducation = {
        animationDuration: 30000,
        dataset: [
            {
                id: 'dataset_raw',
                source: _rawData_submergingOfEducation
            },
            ...datasetWithFilters
        ],
        title: {
            text: '河南郑州“7·20”特大暴雨事件不同受淹程度的科研教育场所比例'
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
    submergingOfEducationMap.setOption(option_submergingOfEducation);
}

option_submergingOfEducation && submergingOfEducationMap.setOption(option_submergingOfEducation);
