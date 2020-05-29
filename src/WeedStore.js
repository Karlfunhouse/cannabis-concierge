import { observable, action, computed, decorate } from "mobx";
import { allStrainsData } from "./apiRequest";
import { createContext } from 'react'


export default class WeedStore {
  allStrains = [];
  currentStrains = [];
  userInfo = '';

  fetchData = async () => {
    let data = await allStrainsData();
    this.allStrains = data;
    console.log(this.allStrains);
  }
}


decorate (
   WeedStore, {
    allStrains: observable,
    currentStrains: observable,
    userInfo: observable,
    fetchData: action
   }
)

export const WeedStoreContext = createContext(new WeedStore())

