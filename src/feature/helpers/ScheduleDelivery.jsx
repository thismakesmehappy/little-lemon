import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fab, far, fas);

const ScheduleDelivery = () => {
    return (
        <p className={"schedule-delivery"}><FontAwesomeIcon icon={'person-biking'} /> Schedule Delivery</p>
    )
}

export default ScheduleDelivery;