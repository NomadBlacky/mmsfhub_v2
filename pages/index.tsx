import {AppBar, Container, Toolbar, Typography} from "@material-ui/core";

const IndexPage = () => (
    <Container>
        <AppBar position={"static"}>
            <Toolbar>
                <img src={"/images/favicon.ico"} alt={"favicon.ico"} width={"50px"} height={"50px"}/>
                <Typography variant={"h6"}>MMSF Hub</Typography>
            </Toolbar>
        </AppBar>
    </Container>
)

export default IndexPage
