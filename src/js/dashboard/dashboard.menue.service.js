export default class DashBoardMenueService {
    constructor(){

    }

    getMenue(){
      let menue = [
        {
          icon : "fa fa-plus-circle",
          name : "사이트 등록하기",
          url : '.siteAppend'
        },
        {
          icon : "fa fa-eye",
          name : "관제",
          url : '.Watch'
        },
        {
          icon : "fa fa-window-restore",
          name : "등록된 사이트",
          url : '.regist'
        },
        {
          icon : "fa fa-database",
          name : "저장소 관리",
          url : '.storage'
        }
      ]
      return menue;
    }
}
