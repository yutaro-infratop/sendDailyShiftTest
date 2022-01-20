function main() {
  const todayData = getShift();
  sendSlack(todayData);
  Logger.log("ToTestPushTest");
}