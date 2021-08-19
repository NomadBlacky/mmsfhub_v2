import Layout from "../components/Layout";
import {Grid, List, ListItem, Typography} from "@material-ui/core";
import {servers} from "../src/sss-viewer/Server";

const IndexPage = () => (
    <Layout title={"MMSFHub"}>
        <Grid container spacing={1}>
            <Grid container item xs={3}>
                <Typography variant={"h5"}>サーバーリスト</Typography>
                <List>
                    {servers.map((s, i) => <ListItem key={i}>{s.name}</ListItem>)}
                </List>
            </Grid>
            <Grid container item xs={6}>
                <Typography variant={"h5"}>SSS Viewer</Typography>
            </Grid>
        </Grid>
    </Layout>
)

export default IndexPage
