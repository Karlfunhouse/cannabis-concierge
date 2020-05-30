import { observable, action, computed, decorate } from "mobx";
import { allStrainsData } from "./apiRequest";
import { createContext } from 'react'

export default class WeedStore {
  allData = [];
  allStrains = [];
  currentStrains = [];
  userInfo = '';
  filteredStrains = []

  fetchData = async () => {
    let data = await allStrainsData();
    this.allData = data;
    console.log(this.allData);
    this.setNewData()
  }

  setNewData = () => {
    let keys = Object.keys(this.allData)
    let strainsArray = keys.map(key => {
      return {name: key, ...this.allData[key]}
    })
    this.allStrains = strainsArray
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
