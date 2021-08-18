import React, {ReactNode} from 'react'
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import Head from "next/head";

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({children, title = 'MMSFHub'}: Props) => (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <AppBar position={"static"}>
            <Toolbar>
                <img src={"/images/favicon.ico"} alt={"favicon.ico"} width={"50px"} height={"50px"}/>
                <Typography variant={"h6"}>MMSF Hub</Typography>
            </Toolbar>
        </AppBar>
        <div>
            {children}
        </div>
    </div>
)

export default Layout
