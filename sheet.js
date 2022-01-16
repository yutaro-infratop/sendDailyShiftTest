

function getShift() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const shimizu = ss.getSheetByName('清水');
  let shimizuData = shimizu.getRange(1, 1, shimizu.getLastRow(),3).getValues();
  shimizuData.shift();

  const shiftList = shimizuData.map(data => {
    return new Shift(data);
  } )

  const todayData = shiftList.find(shift => {
    return shift.date.isSame(dayjs.dayjs(),"day");
  });
  return todayData;

}