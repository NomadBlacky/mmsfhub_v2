import {Grid, List, ListItem, Typography} from "@material-ui/core";
import Layout from "../../components/Layout";
import Server, {servers} from "../../src/sss-viewer/Server";
import {GetStaticPaths, GetStaticProps} from "next";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = servers.map(s => {
        return {
            params: {id: s.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const selectedServer = servers.find(s => params.id === s.id.toString())
    return {
        props: {
            selectedServer
        }
    }
}

export default function Page({selectedServer}: {
    selectedServer: Server
}) {
    return (
        <Layout title={"MMSFHub"}>
            <Grid container spacing={1}>
                <Grid container item xs={3}>
                    <Typography variant={"h5"}>サーバーリスト</Typography>
                    <List>
                        {servers.map((s, i) => (
                            <Link href={`/sss-viewer/${s.id}`}>
                                <ListItem key={i}>{s.name}</ListItem>
                            </Link>
                        ))}
                    </List>
                </Grid>
                <Grid container item xs={6}>
                    <Typography variant={"h5"}>SSS Viewer</Typography>
                    <div>{selectedServer.name}</div>
                </Grid>
            </Grid>
        </Layout>
    )
}
