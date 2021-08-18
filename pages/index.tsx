import Layout from "../components/Layout";
import {Grid, List, ListItem, Typography} from "@material-ui/core";

const IndexPage = () => (
    <Layout title={"MMSFHub"}>
        <Grid container spacing={1}>
            <Grid container item xs={3}>
                <Typography variant={"h5"}>サーバーリスト</Typography>
                <List>
                    <ListItem>1</ListItem>
                    <ListItem>2</ListItem>
                    <ListItem>3</ListItem>
                    <ListItem>4</ListItem>
                    <ListItem>5</ListItem>
                </List>
            </Grid>
            <Grid container item xs={6}>
                <Typography variant={"h5"}>SSS Viewer</Typography>
            </Grid>
        </Grid>
    </Layout>
)

export default IndexPage
