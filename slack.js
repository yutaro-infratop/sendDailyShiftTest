function sendSlack(todayData) {
  const testWebhook = BaseIFT.readConfig().token.slack.test;
  console.log(todayData);
  const message = '本日の出勤状況です。'
  +`\n- 清水 ${todayData.startTime.getHours()}~${todayData.endTime.getHours()}`
  +'\n本日も頑張りましょう。'
  BaseIFT.slackChannel(testWebhook, message);
  console.log(message);
}