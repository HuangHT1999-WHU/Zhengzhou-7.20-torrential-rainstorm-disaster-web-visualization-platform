$('a').click(function (e) {
  e.preventDefault()
})

//跳转至实时天气地图
$("#btnGoToRealtimeWeatherMap").click(function () {
  $("#realtimeWeatherMapID").show()
  $("#waterDepthDynamicPresentationID").hide()
  $("#waterDepthTimelineID").hide()
  $("#POISubmergedRatioID").hide()
  $("#disasterDamageAnalysisID").hide()
  $("#DEMDataDourceID").hide()
  $("#landcoverDataDourceID").hide()
  $("#GitHubLinkID").hide()
})

//跳转至积水深度动态展示
$("#btnGoToWaterDepthDynamicPresentation").click(function () {
  $("#realtimeWeatherMapID").hide()
  $("#waterDepthDynamicPresentationID").show()
  $("#waterDepthTimelineID").hide()
  $("#POISubmergedRatioID").hide()
  $("#disasterDamageAnalysisID").hide()
  $("#DEMDataDourceID").hide()
  $("#landcoverDataDourceID").hide()
  $("#GitHubLinkID").hide()
})

//跳转至积水深度时序轮播
$("#btnGoToWaterDepthTimeline").click(function () {
  $("#realtimeWeatherMapID").hide()
  $("#waterDepthDynamicPresentationID").hide()
  $("#waterDepthTimelineID").show()
  $("#POISubmergedRatioID").hide()
  $("#disasterDamageAnalysisID").hide()
  $("#DEMDataDourceID").hide()
  $("#landcoverDataDourceID").hide()
  $("#GitHubLinkID").hide()
})

//跳转至POI受淹比例
$("#btnGoToPOISubmergedRatio").click(function () {
  $("#realtimeWeatherMapID").hide()
  $("#waterDepthDynamicPresentationID").hide()
  $("#waterDepthTimelineID").hide()
  $("#POISubmergedRatioID").show()
  $("#disasterDamageAnalysisID").hide()
  $("#DEMDataDourceID").hide()
  $("#landcoverDataDourceID").hide()
  $("#GitHubLinkID").hide()
})

//跳转至受灾程度分析
$("#btnGoToDisasterDamageAnalysis").click(function () {
  $("#realtimeWeatherMapID").hide()
  $("#waterDepthDynamicPresentationID").hide()
  $("#waterDepthTimelineID").hide()
  $("#POISubmergedRatioID").hide()
  $("#disasterDamageAnalysisID").show()
  $("#DEMDataDourceID").hide()
  $("#landcoverDataDourceID").hide()
  $("#GitHubLinkID").hide()
})

//跳转至DEM数据源
$("#btnGoToDEMDataDource").click(function () {
  $("#realtimeWeatherMapID").hide()
  $("#waterDepthDynamicPresentationID").hide()
  $("#waterDepthTimelineID").hide()
  $("#POISubmergedRatioID").hide()
  $("#disasterDamageAnalysisID").hide()
  $("#DEMDataDourceID").show()
  $("#landcoverDataDourceID").hide()
  $("#GitHubLinkID").hide()

  alert("即将显示本研究采用的12.5mDEM公开数据源(NASA)\n原网页网址链接：https://search.asf.alaska.edu/#/");
})

//跳转至土地利用数据源
$("#btnGoToLandcoverDataDource").click(function () {
  $("#realtimeWeatherMapID").hide()
  $("#waterDepthDynamicPresentationID").hide()
  $("#waterDepthTimelineID").hide()
  $("#POISubmergedRatioID").hide()
  $("#disasterDamageAnalysisID").hide()
  $("#DEMDataDourceID").hide()
  $("#landcoverDataDourceID").show()
  $("#GitHubLinkID").hide()

  alert("即将显示本研究采用的10m土地利用数据公开数据源(ESA)\n原网页网址链接：https://viewer.esa-worldcover.org/worldcover/?language=en&bbox=-270,-78.06198918665974,270,78.06198918665976&overlay=false&bgLayer=MapBox_Satellite&date=2022-05-02&layer=WORLDCOVER_2020_MAP");
})

//跳转至GitHub开源链接
$("#btnGoToGitHubLink").click(function () {
  $("#realtimeWeatherMapID").hide()
  $("#waterDepthDynamicPresentationID").hide()
  $("#waterDepthTimelineID").hide()
  $("#POISubmergedRatioID").hide()
  $("#disasterDamageAnalysisID").hide()
  $("#DEMDataDourceID").hide()
  $("#landcoverDataDourceID").hide()
  $("#GitHubLinkID").show()

  window.open('https://github.com/HuangHT1999-WHU/Zhengzhou-7.20-torrential-rainstorm-disaster-web-visualization-platform')

})
