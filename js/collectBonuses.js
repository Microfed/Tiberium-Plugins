var collectAllBonuses = function () {
    var mainData = ClientLib.Data.MainData.GetInstance(),
        cityId = mainData.m_Cities.m_CurrentCityId,
        city = mainData.m_Cities.m_Cities.d[cityId],
        cityBuildings = city.m_CityBuildings,
        buildingId = 0,
        buildings = cityBuildings.m_Buildings,
        collectedResouses = 0,
        currentCollectedResources = 0;

    if (buildings != null) {
        for (var i = 0; (i < buildings.l.length); i++) {
            buildingId = buildings.l[i].m_DBId;
            currentCollectedResources = city.CollectResources(buildingId);
            if(currentCollectedResources !== -1){
                collectedResouses += currentCollectedResources;
            }
        }
    }

    return collectedResouses;
},
    collectedResouses = injectScript(collectAllBonuses);

console.log("Collected: " + collectedResouses);