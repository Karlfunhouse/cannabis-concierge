import React, { useContext } from "react";
import "./ActivityFilter.css";
import { WeedStoreContext } from "../../WeedStore";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom"

const ActivityFilter = observer( () => {
    const weedStore = useContext(WeedStoreContext);
    const location = useLocation();
   
    const filterByActivity =  (e) => {
        const currentActivity = e.target.innerText
        const activityObject = weedStore.activities.find(activity => activity.title === currentActivity)
        const activityEffects = activityObject.effects

        let activityStrains =  weedStore.allStrains.filter(strain => {
            return activityEffects.every((effect) => {
                return strain.effects.positive.indexOf(effect) !== -1
            })
        })
        weedStore.setActivityStrains(activityStrains)
    }
    
    const activityButtons = weedStore.activities.map(activity => {
        return (
            <button onClick={filterByActivity} className={activity.css}><span className="activity-name">{activity.title}</span></button>
        )
    })


    return (
        <div className="activity-card-container">
            <h2>Choose Your Adventure</h2>
            {activityButtons}
            <h2>{weedStore.currentStrains.length > 0 ? `There are ${weedStore.currentStrains.length} strains to choose from!` : ''}</h2>

        </div>
    );
})


export default ActivityFilter