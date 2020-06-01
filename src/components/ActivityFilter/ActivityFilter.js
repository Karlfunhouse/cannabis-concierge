import React, { useContext } from "react";
import "./ActivityFilter.css";
import { WeedStoreContext } from "../../WeedStore";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom"

const ActivityFilter = observer( () => {
    const weedStore = useContext(WeedStoreContext);
    const location = useLocation();
   

    const activityButtons = weedStore.activities.map(activity => {
       
        return (
            <button className={activity.css}><span className="activity-name">{activity.title}</span></button>
        )
    })
    
    const filterByActivity = (e) => {
        
    }

    return (
        <div className="activity-card-container">
            <h2>Choose Your Adventure</h2>
            {activityButtons}
        </div>
    );
})


export default ActivityFilter