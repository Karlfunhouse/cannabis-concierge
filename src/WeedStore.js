import { observable, action, computed, decorate } from "mobx"
import { allStrainsData } from './apiRequest'
class WeedStore {
    @observable allStrains = [];
    @observable currentStrains = [];

    
    // @action async fetchStrains() {
    //     const apiLink = 'https://strainapi.evanbusse.com/tPkqguz/';
    //     const response = await fetch(`${apiLink}strains/search/all`);
    //     return await response.json();
    // }

    // setStrainsData = async () => {
    //     this.allStrains = await this.fetchStrains()
    //     console.log(this.allStrains)
    // }

    @action getWeed = async () => {
        await allStrainsData()
        .then(data => console.log(data))
    }
    

    
}

// decorate(
//     WeedStore, {
//         allStrains: observable,
//         currentStrains: observable,
//         fetchStrains: action,
//         setStrainsData: computed,
//     }
// )
const store = new WeedStore()
export default store