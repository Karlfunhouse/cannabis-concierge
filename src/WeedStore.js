import { observable, action, computed, decorate } from "mobx";
import { allStrainsData } from "./apiRequest";
import { createContext } from 'react'

export default class WeedStore {
  allData = [];
  allStrains = [];
  currentStrains = [];
  userInfo = '';
  filterSelectors = [];
  selectorStatus = {};
  homePageCategories = ['Activity', 'Mood', 'Medicinal', 'Quiz'];
  medicinal = ['Depression', 'Insomnia', 'Pain', 'Stress', 'Lack of Appetite', 'Nausea', 'Fatigue', 'Headaches', 'Eye Pressure', 'Inflammation', 'Spasticity', 'Seizures', 'Muscle Spasms'];
  mood = ['Relaxed', 'Hungry', 'Euphoric', 'Happy', 'Energetic', 'Talkative', 'Uplifted', 'Tingly', 'Sleepy', 'Focused', 'Giggly', 'Aroused'];
  negativeEffects = ['Dizzy', 'Dry Mouth', 'Paranoid', 'Dry Eyes', 'Anxious'];

  fetchData = async () => {
    let data = await allStrainsData();
    this.allData = await data;
    await this.setNewData()
  }

  setNewData = async () => {
    let keys = await Object.keys(this.allData)
    let strainsArray = keys.map(key => {
      return {name: key, ...this.allData[key], favorite: false}
    })
    this.allStrains = strainsArray
    this.currentStrains = strainsArray
  }

  resetCurrentStrains = () => {
    this.currentStrains = this.allStrains;
  }

  getFilteredStrains = (locationPath) => {
    let filtered = this.allStrains.filter((strain) => {
        return this.filterSelectors.every((effect) => {
          if (locationPath === "medicinal") {
            return strain.effects.medical.indexOf(effect) !== -1;
          }
          if (locationPath === "mood") {
            return strain.effects.positive.indexOf(effect) !== -1;
          }
        });
      })
      this.currentStrains = filtered;
    }

  getSelectorStatus = (locationPath) => {
    let test = this.medicinal.reduce((allItems, item) => {
      allItems[item] = false
      return allItems
    }, {});
    this.selectorStatus = test;
  }

  addDeseriredEffect = (effect) => {
    this.filterSelectors.push(effect)
  }

  setStrainStatusTrue = (name) => {
    this.selectorStatus[name] = true
  }
  
  setStrainStatusFalse = (name) => {
    this.selectorStatus[name] = false
  }

  resetDesiredEffects = () => {
    this.filterSelectors = []
  }

}

decorate(WeedStore, {
  allStrains: observable,
  currentStrains: observable,
  userInfo: observable,
  filterSelectors: observable,
  getSelectorStatus: action,
  fetchData: action,
  resetCurrentStrains: action,
  getFilteredStrains: action,
  addDeseriredEffect: action,
  setStrainStatusTrue: action,
  setStrainStatusFalse: action,
  resetDesiredEffects: action
});

export const WeedStoreContext = createContext(new WeedStore())
