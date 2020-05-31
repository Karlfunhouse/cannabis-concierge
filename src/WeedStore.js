import { observable, action, computed, decorate } from "mobx";
import { allStrainsData } from "./apiRequest";
import { createContext } from 'react'

export default class WeedStore {
  allData = [];
  allStrains = [];
  currentStrains = [];
  userInfo = '';
  filteredStrains = [];
  homePageCategories = ['Activity', 'Mood', 'Medicinal', 'Quiz'];

  fetchData = async () => {
    let data = await allStrainsData();
    this.allData = await data;
    console.log(this.allData);
    await this.setNewData()
  }

  setNewData = async () => {
    let keys = await Object.keys(this.allData)
    let strainsArray = await keys.map(key => {
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
