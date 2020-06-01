import React, { useContext } from "react";
import "./ActivityFilter.css";
import { WeedStoreContext } from "../../WeedStore";
import { observer } from "mobx-react-lite";

const ActivityFilter = observer( () => {
    const weedStore = useContext(WeedStoreContext);
    const location = useLocation();
    const { type } = useParams();

    const filterByActivity = (e) => {
        console.log(type)
        
    }

    const activityCards = () => {
        return ()
    }

    return (
        <div className="activity-card-container">

        </div>
    );
})


export default ActivityFilter