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
  activities = [
    {title: 'Netflix & Chill',
      css: "netflix",
      effects: ['Aroused', 'Tingly']}, //14
    {title: 'Yoga & Meditation',
      css: 'yoga',
      effects: ['Uplifted', 'Euphoric', 'Happy', 'Focused']}, //108
    {title: 'Nature',
      css: 'nature',
      effects: ['Happy', 'Energetic', 'Euphoric', 'Uplifted']}, //207
    {title: 'Social / Music',
      css: 'social',
      effects: ['Giggly', 'Energetic', 'Talkative']}, //11
    {title: 'Artsy',
      css: 'artsy',
      effects: ['Focused', 'Relaxed', 'Uplifted']}, //173
    {title: 'Cooking',
      css: 'cooking',
      effects: ['Hungry', 'Energetic']}] //34
  medicinal = ['Depression', 'Insomnia', 'Pain', 'Stress', 'Lack of Appetite', 'Nausea', 'Headache', 'Fatigue', 'Headaches', 'Eye Pressure', 'Inflammation', 'Spasticity', 'Seizures', 'Muscle Spasms'];
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
    // console.log(this.allStrains);
    
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
