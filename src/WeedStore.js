import { observable, action, computed, decorate } from "mobx";
import { allStrainsData } from "./apiRequest";
import { createContext } from 'react'

export default class WeedStore {
  allData = [];
  allStrains = [];
  currentStrains = [];
  userInfo = '';
  filterSelectors = [];
  favoritedStrains = [];
  selectorStatus = {};
  noFlavorsSelected = null;
  selectedStrain = {}
  homePageCategories = ['Activity', 'Mood', 'Medicinal', 'Quiz'];
  medicinal = ['Depression', 'Insomnia', 'Pain', 'Stress', 'Lack of Appetite', 'Nausea', 'Fatigue', 'Headaches', 'Eye Pressure', 'Inflammation', 'Spasticity', 'Seizures', 'Muscle Spasms'];
  mood = ['Relaxed', 'Hungry', 'Euphoric', 'Happy', 'Energetic', 'Talkative', 'Uplifted', 'Tingly', 'Sleepy', 'Focused', 'Giggly', 'Aroused'];
  negativeEffects = ['Dizzy', 'Dry Mouth', 'Paranoid', 'Dry Eyes', 'Anxious'];
  flavors = ["Earthy", "Chemical", "Pine", "Spicy/Herbal", "Pungent", "Pepper", "Flowery", "Citrus", "Orange", "Sweet",
    "Skunk", "Grape", "Minty", "Woody", "Cheese", "Diesel", "Tropical", "Grapefruit", "Nutty", "Lemon", "Berry", "Blueberry", "Ammonia",
    "Apple", "Rose", "Butter", "Honey", "Tea", "Lime", "Lavender", "Strawberry", "Mint", "Chestnut", "Tree Fruit", "Pear", "Apricot", "Peach", "Blue Cheese", "Menthol",
    "Coffee", "Tar", "Mango", "Pineapple", "Sage", "Vanilla", "Plum", "Tobacco", "Violet"]
  filteredByEffect = null;

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

  filterByFlavor = (e) => {
    this.resetCurrentStrains();
    this.noFlavorsSelected = false;
    this.currentStrains = this.currentStrains.filter(strain => strain.flavors.includes(e))
  }

  updateFilterByEffect = (e) => {
    if (e === 'effect') {
      this.filteredByEffect = true;
      this.resetCurrentStrains();
      this.noFlavorsSelected = null;
    }
    if (e === 'flavor') {
      this.noFlavorsSelected = true;
      this.filteredByEffect = false;
      this.resetCurrentStrains();
    }
    if (e === 'Medicinal') {
      this.noFlavorsSelected = null;
    }
  }

  setSelectedStrain = (selectedStrain) => {
    this.selectedStrain = {}
    let selectedObject = this.allStrains.find(strain => strain.name === selectedStrain)
    const weedImgs = ['/assets/Cannabis1.jpeg', '/assets/Cannabis2.jpeg', '/assets/Cannabis3.jpeg', '/assets/Cannabis4.jpeg', '/assets/Cannabis5.jpeg', '/assets/Cannabis6.jpeg']
    let imgNum =  Math.floor(Math.random() * weedImgs.length)
    this.selectedStrain = {...selectedObject, img: weedImgs[imgNum]}
  }

  setFavorite = () => {
    !this.selectedStrain.favorite ? this.selectedStrain.favorite = true : this.selectedStrain.favorite = false
    this.trackFavorites()
  }

  trackFavorites = () => {
    let foundStrain = this.allStrains.find(strain => strain.name === this.selectedStrain.name)
    let indexNum = this.allStrains.indexOf(foundStrain)

    this.allStrains[indexNum].favorite ? this.allStrains[indexNum].favorite = false : this.allStrains[indexNum].favorite = true;

    if (!this.favoritedStrains.includes(this.selectedStrain)) {
      this.favoritedStrains.push(this.selectedStrain)
    } else {
      let indexNum = this.favoritedStrains.indexOf(this.selectedStrain)
      this.favoritedStrains.splice(indexNum, 1)
    }
  }
}

decorate(WeedStore, {
  allStrains: observable,
  currentStrains: observable,
  userInfo: observable,
  filterSelectors: observable,
  selectedStrain: observable,
  filteredByEffect: observable,
  noFlavorsSelected: observable,
  favoritedStrains: observable,
  getSelectorStatus: action,
  setSelectedStrain: action,
  fetchData: action,
  trackFavorites: action,
  resetCurrentStrains: action,
  getFilteredStrains: action,
  addDeseriredEffect: action,
  setStrainStatusTrue: action,
  setStrainStatusFalse: action,
  setFavorite: action,
  resetDesiredEffects: action,
  filterByFlavor: action,
  updateFilterByEffect: action
});

export const WeedStoreContext = createContext(new WeedStore())
