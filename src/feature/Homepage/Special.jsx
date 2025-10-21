import CardImage from "../Card/CardImage.jsx";
import CardContent from "../Card/CardContent.jsx";
import CardItem from "../Card/CardItem.jsx";
import CardTitle from "../Card/CardTitle.jsx";
import CardItemCost from "../Card/CardItemCost.jsx";
import ScheduleDelivery from "../helpers/ScheduleDelivery.jsx";
import Card from "../Card/Card.jsx";

const Special = ({image, imageAlt, title, cost, description}) => {
    return (
        <Card>
            <div>
                <CardImage src={image} alt={imageAlt} />
                <CardContent>
                    <CardItem>
                        <CardTitle>{title}</CardTitle>
                        <CardItemCost>{cost}</CardItemCost>
                    </CardItem>
                    <p>{description}</p>
                </CardContent>
            </div>
            <ScheduleDelivery />
        </Card>
    );
}

export default Special;