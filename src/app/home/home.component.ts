import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tabs = [
    {
      name:'全部案件',
      index:0
    },{
      name:'待审核案件',
      index:1
    }
  ]

  caseList = [
    {
      imgSrc:'../../assets/images/img_01.jpg',
      caseName:'2018-2-1公交车抢劫案11',
      caseNum:'A1323478925928349203',
      caseCate:'抢劫案1',
      buildDate:'2013-2-2 18:23:53',
      caseDate:'2018-2-1 20:10:23',
      buildPerson:'管理员1',
      caseAdd:'火车站公交站牌1',
      caseDesc:'发受苦啊你法尔别骗我积分澎湃积分帕尔1'
    },
    {
      imgSrc:'../../assets/images/img_01.jpg',
      caseName:'2018-2-1公交车抢劫案22',
      caseNum:'A1323478925928349203',
      caseCate:'抢劫案2',
      buildDate:'2013-2-2 18:23:53',
      caseDate:'2018-2-1 20:10:23',
      buildPerson:'管理员2',
      caseAdd:'火车站公交站牌2',
      caseDesc:'发受苦啊你法尔别骗我积分澎湃积分帕尔2'
    },
    {
      imgSrc:'../../assets/images/img_01.jpg',
      caseName:'2018-2-1公交车抢劫案33',
      caseNum:'A1323478925928349203',
      caseCate:'抢劫案3',
      buildDate:'2013-2-2 18:23:53',
      caseDate:'2018-2-1 20:10:23',
      buildPerson:'管理员3',
      caseAdd:'火车站公交站牌3',
      caseDesc:'发受苦啊你法尔别骗我积分澎湃积分帕尔'
    },{
      imgSrc:'../../assets/images/img_01.jpg',
      caseName:'2018-2-1公交车抢劫案44',
      caseNum:'A1323478925928349203',
      caseCate:'抢劫案4',
      buildDate:'2013-2-2 18:23:53',
      caseDate:'2018-2-1 20:10:23',
      buildPerson:'管理员4',
      caseAdd:'火车站公交站牌4',
      caseDesc:'发受苦啊你法尔别骗我积分澎湃积分帕尔4'
    },
  ]


  allChecked = false;
  indeterminate = true;
  checkOptionsOne = [
    {
      label:'Apple',value:'Apple',checked:false
    },
    {
      label:'Pear',value:'Pear',checked:false
    },
    {
      label:'Orange',value:'Orange',checked:false
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  updateAllChecked() {
    this.indeterminate = false;
    if (this.allChecked) {
      this.checkOptionsOne.forEach(item => item.checked = true);
    } else {
      this.checkOptionsOne.forEach(item => item.checked = false);
    }
  }
  updateSingleChecked() {
    if (this.checkOptionsOne.every(item => item.checked === false)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.checkOptionsOne.every(item => item.checked === true)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
  }

}
