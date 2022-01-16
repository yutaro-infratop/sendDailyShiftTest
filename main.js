function main() {
  const todayData = getShift();
  sendSlack(todayData);
}