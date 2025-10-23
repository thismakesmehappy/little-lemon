import Container from "./Container.jsx";

const PageHead = ({children}) => {
    return (<section className={"page-head"}>
        <Container>
            {children}
        </Container>
    </section>)
}

export default PageHead;