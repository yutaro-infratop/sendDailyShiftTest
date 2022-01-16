// function main() {
//   const ss = SpreadsheetApp.getActiveSpreadsheet();
//   const shimizu = ss.getSheetByName('清水');
//   const matsuo = ss.getSheetByName('松尾');
//   const shift = [];
  
//   const shimizuData = shimizu.getRange(2, 1, shimizu.getLastRow()).getValues();
//   const matsuoData = matsuo.getRange(2, 1, matsuo.getLastRow()).getValues();
//   console.log(shimizuData[300][0].getTime());
//   const shimizuActiveCell = shimizu.getActiveCell();
//   const matsuoActiveCell = matsuo.getActiveCell();

//   for(var i=305;i<shimizuData.length;i++){
//     if(shimizuData[i][0].getTime() == dayjs.dayjs().$d.setHours(0,0,0,0)){
//       shift.push(["shimizu",shimizuActiveCell.getRow()]);
//     }
//   }
//   for(var i=1;i<matsuoData.length;i++){
//     if(matsuoData[i][0].getTime() == dayjs.dayjs().$d.setHours(0,0,0,0)){
//       shift.push(["matsuo",matsuoActiveCell.getRow()]);
//     }
//   }
//   return console.log(shift);
// }
// 第三者がコード読んだときにパッとわかる様にする．EX)13の305とか．
// まず，A,B，C列を一括取得して，オブジェクト化する．
// ↓大輔さんと書いたコード

function getShift() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const shimizu = ss.getSheetByName('清水');
  let shimizuData = shimizu.getRange(1, 1, shimizu.getLastRow(),3).getValues();
  shimizuData.shift();
  // console.log(shimizuData);
  const shiftList = shimizuData.map(data => {
    return new Shift(data);
  } )
  // console.log(shiftList);
  const todayData = shiftList.find(shift => {
    return shift.date.isSame(dayjs.dayjs(),"day");
  });
  return todayData;
// todayDataをスラックに投げる
  

  // const sum = (a,b) => {
  //   return a+b;
  // }
  // console.log(sum(6,8));

  // const sum = (a,b) => a+b;
  // console.log(sum(6,8));
}