import Container from "../helpers/Container.jsx";
import Button from "../helpers/Button.jsx";
import Title from "../helpers/Title.jsx";
import Subtitle from "../helpers/Subtitle.jsx";
import Hero from "../helpers/Hero.jsx";
import Row from "../Grid/Row.jsx";
import Column from "../Grid/Column.jsx";
import apps from "../../assets/apps.jpg";
import greekSalad from "../../assets/greek_salad.jpg";
import bruchetta from "../../assets/bruchetta.jpg";
import dessert from "../../assets/lemon_dessert.png";
import Special from "./Special.jsx";

const Homepage = () => {
    const specials = [
        {
            image: greekSalad,
            imageAlt: "Greek Salad",
            title: "Greek Salad",
            cost: 12.99,
            description: "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        },
        {
            image: bruchetta,
            imageAlt: "Bruchetta",
            title: "Bruchetta",
            cost: 5.99,
            description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and sesoned with salt and olive oil."
        },
        {
            image: dessert,
            imageAlt: "Lemon Dessert",
            title: "Lemon Dessert",
            cost: 5.00,
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        },
    ];
    return (
        <>
            <Hero image={apps} alt={"A set of brucchettas presented on a black surface by a serer wearing an apron"}>
                <Title color={"yellow"}>Little Lemon</Title>
                <Subtitle color={"gray"}>Chicago</Subtitle>
                <p className="lead text-gray">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <div>
                    <Button to="/booking">Reserve a Table</Button>
                </div>
            </Hero>
            <section>
                <Container>
                    <div className={"section-title"}>
                        <Title>This weeks specials!</Title>
                        <Button to="/menu">Online Menu</Button>
                    </div>
                    <Row>
                        {specials.map((special, index) => (
                            <Column size={4} key={special.title.replace(/\s/g, '')}>
                                <Special {...special} />
                            </Column>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Homepage;