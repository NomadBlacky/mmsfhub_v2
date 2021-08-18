import Layout from "../components/Layout";
import {Grid, List, ListItem, Typography} from "@material-ui/core";
import Server from "../src/sss-viewer/Server";

const servers: Server[] = [
    {
        id: 0,
        level: 1,
        name: "test1",
        type: "satellite",
        cards: [
            {
                name: "card1",
                class: "standard",
            }
        ]
    },
    {
        id: 1,
        level: 2,
        name: "test2",
        type: "satellite",
        cards: [
            {
                name: "card2",
                class: "standard",
            }
        ]
    },
    {
        id: 2,
        level: 3,
        name: "test3",
        type: "meteor",
        cards: [
            {
                name: "card3",
                class: "mega",
            }
        ]
    },
]

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
