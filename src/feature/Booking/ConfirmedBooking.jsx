import Container from "../helpers/Container.jsx";
import Display from "../helpers/Display.jsx";
import Highlight from "../helpers/Highlight.jsx";
import PageHead from "../helpers/PageHead.jsx";

const ConfirmedBooking = () => {
    return (
        <PageHead>
            <Container>
                <Display color={"yellow"}>
                    Your booking has been confirmed.
                </Display>
                <Highlight>
                    We look forward to seeing you soon!
                </Highlight>
            </Container>
        </PageHead>
    )
}

export default ConfirmedBooking;