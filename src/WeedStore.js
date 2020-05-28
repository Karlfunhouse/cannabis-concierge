import { observable, action, computed, decorate } from "mobx";

class WeedStore {
  allStrains = [];
  currentStrains = [];
  @observable userInfo = '';
}

// decorate (
//    WeedStore, {
//      allStrains: observable,
//      currentStrains: observable,
//      // fetchStrains: action,
//      // setStrainsData: computed,
//    }
// )

const store = new WeedStore();
export default store;
