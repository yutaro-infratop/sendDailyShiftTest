class Shift {
  constructor(data) {
    this.date = dayjs.dayjs(data[0]);
    this.startTime = data[1];
    this.endTime = data[2];
 }

  // isRetired(){
  //   return this.workStatus === '退職済';
  // }

  // isActive(){
  //   return this.workStatus === 'アクティブ';
  // }

  // isSkillRank(skillRank){
  //   return this.skillRank === skillRank;
  // }
}