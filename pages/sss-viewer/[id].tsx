import {
    Grid,
    GridList,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    List,
    ListItem,
    Typography
} from "@material-ui/core";
import Layout from "../../components/Layout";
import Server, {servers} from "../../src/sss-viewer/Server";
import Card from "../../src/sss-viewer/Card";
import {GetStaticPaths, GetStaticProps} from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";

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

type Props = {
    selectedServer: Server
}

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
    const selectedServer = servers.find(s => params.id === s.id.toString())
    return {
        props: {
            selectedServer
        }
    }
}

class ServerPage extends React.Component<Props, {}> {
    private cardsByRows: Card[][];

    constructor(props: Props) {
        super(props);
        const tmp: Card[][] = [];
        props.selectedServer.cards.forEach((c, i) => {
            const idx = Math.floor(i / 5)
            if (tmp[idx] === undefined) {
                tmp[idx] = [c]
            } else {
                tmp[idx].push(c)
            }
        });
        this.cardsByRows = tmp
    }

    render() {
        console.log(this.cardsByRows);
        return (
            <Layout title={"MMSFHub"}>
                <Grid container spacing={1}>
                    <Grid container item xs={3}>
                        <Typography variant={"h5"}>サーバーリスト</Typography>
                        <List>
                            {servers.map((s, i) => (
                                <Link key={i} href={`/sss-viewer/${s.id}`}>
                                    <ListItem>{s.name}</ListItem>
                                </Link>
                            ))}
                        </List>
                    </Grid>
                    <Grid container item xs={6}>
                        <div>
                            <Typography variant={"h5"}>SSS Viewer</Typography>
                            <div>{this.props.selectedServer.name}</div>
                            <div>
                                <Image
                                    src={`/images/servers/${this.props.selectedServer.id.toString().padStart(2, "0")}.png`}
                                    width={360} height={378}/>
                            </div>
                            <div id={"card-table-container"}>
                                <ImageList cols={5}>
                                    {this.props.selectedServer.cards.map((card, i) => (
                                        <ImageListItem key={i}>
                                            <img src={`/images/servers/${this.props.selectedServer.id.toString().padStart(2, "0")}.png`} />
                                            <ImageListItemBar title={card.name} />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Layout>
        )
    }
}

export default ServerPage
