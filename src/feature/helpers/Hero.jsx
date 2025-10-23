import Container from "./Container.jsx";

const Hero = ({children, alt, image}) => {
    return (<section className={"hero page-head"}>
            <Container>
                <div className={"hero-content"}>
                    {children
                    }
                </div>
                <div className={"hero-image"}>
                    <img src={image} alt={alt} />
                </div>
            </Container>
        </section>
    )
}

export default Hero;