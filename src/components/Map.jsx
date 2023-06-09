import React, { useState, useEffect } from "react";
import "../App.css";
import MapImage from "../imgs/MapImage.png";
// Folwell Hall, Nolte Ctr, Williamson Hall, Jones Hall, Pillsbury Hall, Morrill Hall, Johnston Hall, Walter Digital Technology Center,
//  Smith Hall, Kolthoff Hall, Tate Hall, Murphy Hall, Vincent Hall, Ford Hall, Mechanical Engineering, Akerman Hall, Shepherd Labs, 
// Lind Hall, Keller Hall, Amundson Hall, Transportation and Safety, Graduate Hotel, McNamara Alumni Center, University Avenue Ramp, Rapson Hall, 
// Civil Engineering, Weaver-Densford Hall, Moos Tower, MCB, Phillips-Wangensteen Building, HSEC, Hospital Ramp, Medical Center, Masonic Cancer Research, 
// Mayo Building, Boynton Health Service, Mayo Auditorium, Jackson Hall, Hasselmo Hall, Variety Club Research, Children's Rehab, CMU, Bookstore, Yudoff Hall,
const Map = ({handleMapSelection}) => {
    let browserWindowWidth=window.innerWidth*0.8
    let mapImgWidth=2286
    let mapImgHeight=1284
    const[startLocation,setStartLocation]=useState('')
    const[endLocation,setEndLocation]=useState('')
    const[locationData,setLocationData]=useState([
        ['Folwell Hall',[869,329,948,373,937,391,860,349]],['Jones Hall',[843,375,862,386,847,415,827,404]],['Nolte Ctr',[962,372,1023,413,965,483,909,450]],['Williamson Hall',[872,389,853,425,889,446,914,403]],['Pillsbury Hall',[881,480,941,504,932,522,873,497]],
        ['Morrill Hall',[873,597,934,595,934,617,875,617]],['Johnston Hall',[741,597,803,597,801,618,741,617]],['Walter Digital Technology Center',[737,641,799,639,798,696,738,698]],['Smith Hall',[751,716,800,717,799,773,749,773]],
        ['Kolthoff Hall',[747,785,800,786,800,814,744,814]],['Tate Hall',[873,640,927,638,929,695,875,695]],['Murphy Hall',[912,714,931,713,933,773,912,773]],['Vincent Hall',[872,718,908,716,908,774,874,774]],['Ford Hall',[873,793,932,793,934,815,874,815]],
        ['Mechanical Engineering',[961,634,1035,634,1036,695,960,697]],['Akerman Hall',[1054,634,1075,633,1077,694,1054,694]],['Shepherd Labs',[1038,592,1080,594,1080,621,1037,620]],['Lind Hall',[960,711,1004,715,1004,773,963,776]],
        ['Keller Hall',[1011,707,1085,706,1083,780,1013,780]],['Amundson Hall',[962,788,1049,795,1048,816,963,815]],['Transportation and Safety',[1112,788,1198,788,1197,814,1104,812]],['Graduate Hotel',[1223,750,1316,748,1318,800,1220,801]],
        ['McNamara Alumni Center',[1394,613,1431,629,1428,677,1394,746,1335,712]],['University Avenue Ramp',[1302,562,1372,599,1357,627,1286,589]],['Rapson Hall',[971,550,1027,550,1026,603,972,603]],['Civil Engineering',[1111,548,1156,569,1134,600,1098,594,1090,589]],
        ['Weaver-Densford Hall',[1144,845,1194,845,1189,877,1142,872]],['Moos Tower',[1158,879,1159,929,1099,927,1097,879]],['MCB',[1026,869,1048,854,1074,853,1070,910,1012,910,1012,886]],['Phillips-Wangensteen Building',[1097,946,1157,946,1154,988,1099,989]],
        ['HSEC',[1165,957,1189,957,1196,1041,1178,1049,1165,1049]],['Hospital Ramp',[1243,885,1314,885,1315,929,1242,930]],['Medical Center',[1069,1063,1085,1061,1094,1051,1106,1051,1115,1061,1185,1060,1198,1071,1198,1080,1187,1088,1202,1095,1201,1118,1187,1132,1154,1137,1116,1118,1074,1114,1069,1108]],
        ['Masonic Cancer Research',[1031,1065,1066,1068,1066,1106,1034,1107]],['Mayo Building',[965,943,1027,943,1028,976,1080,976,1078,1026,1070,1056,974,1057,964,1054,960,1028]],['Boynton Health Service',[871,974,904,961,915,961,939,964,939,1018,933,1022,923,1022,915,995,862,992,862,980]],
        ['Mayo Auditorium',[1008,914,1028,913,1045,922,1044,934,1028,939,1008,938]],['Jackson Hall',[962,848,1004,848,1003,867,993,913,985,920,969,920,962,913]],['Hasselmo Hall',[904,855,941,855,942,949,904,949]],['Variety Club Research',[942,1061,975,1069,999,1069,1028,1095,1028,1108,927,1070]],
        ["Children's Rehab",[924,1066,940,1057,941,1024,920,1026]],['CMU',[822,893,855,892,865,894,865,900,878,900,882,904,882,949,796,949,796,905,813,899,814,894]],['Bookstore',[776,854,905,854,903,884,902,899,866,897,866,890,856,888,821,888,,812,891,809,898,776,899]],
        ['Yudoff Hall',[810,969,810,1049,800,1049,780,1036,769,1036,752,1028,742,1028,742,1001,788,998,800,969]]
    ])   

    useEffect(()=>{
        console.log(startLocation)
    },[startLocation])
    const stringifyCoordinateEntry=(data,widthModifier,heightModifier)=>{
        let output=[]
        for(let j=0;j<data.length;j++){
            // console.log(j)
            if(j%2==0){
                output.push(data[j]*widthModifier)
            }
            else{
                output.push(data[j]*heightModifier)
            }
        }
        return output.join(',')
    }
    return (
    //2286,1284 
    <div className="Map">
        <img
        src={MapImage}
        usemap="#GopherWayMap"
        width={`${browserWindowWidth}px`}
        height={`${browserWindowWidth*(mapImgHeight/mapImgWidth)}px`}
        ></img>
        <map name="GopherWayMap">
            {locationData.map((entry)=>{
                return(
                <area
                shape="poly"
                coords={stringifyCoordinateEntry(entry[1],browserWindowWidth/mapImgWidth,browserWindowWidth*(mapImgHeight/mapImgWidth)/mapImgHeight)}
                href=""
                data-location={entry[0]}
                onClick={(e)=>{e.preventDefault();handleMapSelection(e.target.dataset.location)}}
            />)
            })}
        </map>
    </div>
    );
};

export default Map;
