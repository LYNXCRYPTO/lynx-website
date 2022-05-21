import React, { useState } from 'react'
import { Theme, makeStyles, useTheme } from "@material-ui/core/styles"
import { Grid, Typography, List, ListItem, Link, Menu, MenuItem, ListItemText, FormControl, InputLabel, Select } from "@material-ui/core"
import Image from "next/image"
import { useRouter } from "next/router";
import FixedNavBar from './NavBars/FixedNavBar'
import Abstract from '../text/Abstract'
import Preface from '../text/Preface'
import CurrentStateOfBlockchain from "../text/CurrentStateOfBlockchain"
import GlobalState from "../text/GlobalState"
import Figure1 from "../text/Figure1"
import SmartContracts from "../text/SmartContracts"
import DecentralizationsLackOfAdoption from "../text/DecentralizationsLackOfAdoption"
import ModernConsensusProtocols from "../text/ModernConsensusProtocols"
import Lynx from "../text/Lynx"
import LynxAccounts from "../text/LynxAccounts"
import Figure2 from "../text/Figure2"
import DistributedStateChain from "../text/DistributedStateChain"
import Figure3 from "../text/Figure3"
import ProofOfConsensus from "../text/ProofOfConsensus"
import Parties from "../text/Parties"
import Applications from "../text/Applications"
import FreemiumApplicationModels from "../text/FreemiumApplicationModels"
import VideoGames from "../text/VideoGames"
import VideoStreaming from "../text/VideoStreaming"
import HighFrequencyTrading from "../text/HighFrequencyTrading"
import DecentralizedHealthMonitoring from "../text/DecentralizedHealthMonitoring"
import EnergyEfficiency from "../text/EnergyEfficiency"
import ModifyingADistributedStateChain from "../text/ModifyingADistributedStateChain"
import Attacks from "../text/51%Attacks"
import Conclusion from "../text/Conclusion"
import References from "../text/References"
import WhitepaperData from "../data/WhitepaperData"
import { MathJaxContext, MathJax } from 'better-react-mathjax'

interface Props {

}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: "#FFF",
    },
    whitepaper: {
        padding: "50px 0px",
        display: "flex",
        overflowY: "auto",
    },
    textContainer: {
        display: "block",
        // flex: 1,
    },
    textColumn: {
        maxWidth: 800,
        padding: "0px 80px 0px 40px",
        [theme.breakpoints.down("sm")]: {
            padding: "0px 40px 0px 20px",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0px 16px",
        },
    },
    mainTitle: {
        fontSize: 40,
        fontWeight: 600,
        marginBottom: 32,
        [theme.breakpoints.down("sm")]: {
            fontSize: 32,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 24,
        },
    },
    paragraph: {
        fontSize: 15,
        fontWeight: 400,
        marginBottom: 32,
        color: "#4C4C4C",
        whiteSpace: "pre-wrap",
        "& p": {
            margin: 0,
            padding: 0,
        },
        "& li": {
            marginBottom: 8,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 14,
        },
    },
    link: {
        fontSize: 15,
        fontWeight: 400,
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.primary.main,
    },
    variableList: {
        margin: 0,
        listStyleType: "none !important",
        "& li": {
            marginBottom: 8,
            "& p": {
                lineHeight: 1.25,
            },
        },
        "& strong": {
            fontSize: 20,
            fontFamily: "MJXZERO, MJXTEX-I",
            fontWeight: 400,
            fontStyle: "italic",
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 16,
        },
    },
    unorderedList: {
        margin: 0,
        listStyleType: "disc !important",
        color: "#4C4C4C",
        marginBottom: 8,
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 24,
        },
    },
    orderedList: {
        margin: 0,
        color: "#4C4C4C",
        fontSize: 15,
        fontWeight: 600,
        marginBottom: 8,
        "& p": {
            paddingLeft: 8,
        },
        "& a": {
            paddingLeft: 8,
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 24,
        },
    },
    listItem: {
        marginBottom: 10,
        "& p": {
            margin: 0,
        },
    },
    sectionTitle: {
        fontSize: 32,
        fontWeight: 600,
        marginBottom: 24,
        [theme.breakpoints.down("sm")]: {
            fontSize: 24,
        },
    },
    sectionSubtitle: {
        fontSize: 24,
        fontWeight: 600,
        marginBottom: 32,
        [theme.breakpoints.down("sm")]: {
            fontSize: 20,
        },
    },
    figureCaption: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.3,
        color: "#4C4C4C",
        margin: "16px 40px 24px",
        "& p": {
            margin: 0,
            padding: 0,
        },
        "& strong": {
            fontSize: 15,
            fontWeight: 400,
            margin: 0,
            padding: 0,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 13,
            margin: "8px 16px 24px",
            "& strong": {
                fontSize: 14,
                fontWeight: 400,
                margin: 0,
                padding: 0,
            },
        },
    },
    equation: {
        fontSize: 30,
        fontWeight: 600,
        textAlign: "center",
        marginBottom: 32,
        "& mjx-frac": {
            fontSize: 20,
            fontWeight: 500,
            verticalAlign: "0.5em",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 24,
        },
    },
    tableOfContentsContainer: {
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        maxHeight: "calc(100vh - 80px)",
        maxWidth: 360,
        overflowY: "auto",
    },
    tableOfContentsDesktop: {
        borderLeft: "1px solid #000000",
        paddingRight: 40,
        // marginTop: 50,
        paddingTop: 0,
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    tableOfContentsMobile: {
        paddingBottom: 40,
        maxWidth: 600,
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    tableOfContentsTitle: {
        padding: "0px 16px 8px",
        color: "#000",
        fontSize: 20,
        fontWeight: 600,
    },
    sectionTitleButton: {
        "&:hover": {
            "& h6": {
                color: theme.palette.primary.main,
            },
        },
        "& h6": {
            color: "#4C4C4C",
            fontSize: 15,
            fontWeight: 500,
        },
    },
    sectionSubtitleButton: {
        "&:hover": {
            "& h6": {
                color: theme.palette.primary.main,
            },
        },
        "& h6": {
            color: "#4C4C4C",
            fontSize: 14,
            fontWeight: 500,
            paddingLeft: 16,
        },
    },
}))

const WhitepaperSection = (props: Props) => {

    const classes = useStyles()
    const router = useRouter()
    const theme = useTheme()
    const [menuOpened, setMenuOpened] = useState(false)
    const [selectedSection, setSelectedSection] = useState("")
    const config = {
        loader: { load: ["input/asciimath"] }
    }

    const handleSectionClick = (section: string) => {
        const sectionName = section.replace("'", "").split(" ").join("-").toLowerCase()
        console.log(sectionName)
        const sec = document.getElementById(sectionName)
        if (sec !== null) {
            window.scrollTo(0, sec.offsetTop - 110)
            setSelectedSection(section)
        }
    }

    const handleOpen = () => {
        setMenuOpened(!menuOpened)
    }


    return (
        <Grid className={classes.root} container direction="column">
            <FixedNavBar isOpaque={true} />
            <Grid className={classes.whitepaper} container direction="row" justifyContent="space-between">
                <Grid item className={classes.textContainer} md={9} sm={12}>
                    <Grid className={classes.textColumn} container direction="column">
                        <FormControl className={classes.tableOfContentsMobile} fullWidth>
                            <InputLabel id="simple-select-label">Table Of Contents</InputLabel>
                            <Select
                                labelId="simple-select-label"
                                id="simple-select"
                                value={selectedSection}
                                label="Table Of Contents"
                                onChange={handleOpen}
                            >
                                {WhitepaperData.map((item: any, index: number) => (
                                        <MenuItem key={index} className={WhitepaperData[index].subsection ? classes.sectionSubtitleButton : classes.sectionTitleButton} button value={WhitepaperData[index].name} onClick={() => handleSectionClick(WhitepaperData[index].name)}>
                                            <Typography style={selectedSection === WhitepaperData[index].name ? {color: theme.palette.primary.main} : {}} variant="subtitle1">{WhitepaperData[index].name}</Typography>
                                        </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Typography id="lynx:-vision-for-a-truly-open-and-decentralized-internet" className={classes.mainTitle} variant="h3">Lynx: Vision For A Truly Open And Decentralized Internet</Typography>
                        <Typography className={classes.paragraph} variant="body1">{Abstract}</Typography>
                        <Typography id="preface" className={classes.sectionTitle} variant="subtitle1">Preface</Typography>
                        <Typography className={classes.paragraph} variant="body1">{Preface}</Typography>
                        <Typography id="blockchain-and-existing-concepts" className={classes.sectionTitle} variant="subtitle1">Blockchain and Existing Concepts</Typography>
                        <Typography id="current-state-of-blockchain" className={classes.sectionSubtitle} variant="subtitle1">Current State of Blockchain</Typography>
                        <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: CurrentStateOfBlockchain }} />
                        <Typography id="global-state" className={classes.sectionSubtitle} variant="subtitle1">Global State</Typography>
                        <Typography className={classes.paragraph} variant="body1">{GlobalState[0]}</Typography>
                        <Image
                            src="/whitepaper/merkle-tree.svg"
                            width={988}
                            height={606}
                            objectFit="fill"
                            quality={100}
                            alt='Merkle Patricia Tree'
                            draggable={false}
                        />
                        <Typography className={classes.figureCaption} variant="caption" align="justify" dangerouslySetInnerHTML={{ __html: Figure1 }} />
                        <Typography className={classes.paragraph} variant="body1">{GlobalState[1]}</Typography>
                        <Typography id="smart-contracts" className={classes.sectionSubtitle} variant="subtitle1">Smart Contracts</Typography>
                        <Typography className={classes.paragraph} variant="body1">{SmartContracts}</Typography>
                        <Typography id="decentralizations-lack-of-adoption" className={classes.sectionSubtitle} variant="subtitle1">Decentralization's Lack of Adoption</Typography>
                        <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: DecentralizationsLackOfAdoption }} />
                        <Typography id="modern-consensus-protocols" className={classes.sectionSubtitle} variant="subtitle1">Modern Consensus Protocols</Typography>
                        <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: ModernConsensusProtocols }} />
                        <Typography id="lynx" className={classes.sectionTitle} variant="subtitle1">Lynx</Typography>
                        <Typography className={classes.paragraph} variant="body1">{Lynx}</Typography>
                        <Typography id="lynx-accounts" className={classes.sectionSubtitle} variant="subtitle1">Lynx Accounts</Typography>
                        <Typography className={classes.paragraph} style={{ marginBottom: 16 }} variant="body1">{LynxAccounts[0]}</Typography>
                        <ul className={classes.unorderedList}>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: LynxAccounts[1] }} />
                            </li>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: LynxAccounts[2] }} />
                            </li>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: LynxAccounts[3] }} />
                            </li>
                        </ul>
                        <Typography className={classes.paragraph} variant="body1">{LynxAccounts[4]}</Typography>
                        <Typography id="distributed-state-chain" className={classes.sectionSubtitle} variant="subtitle1">Distributed State Chain</Typography>
                        <Image
                            src="/whitepaper/distributed-state-chain.svg"
                            width={1131}
                            height={530}
                            objectFit="fill"
                            quality={100}
                            alt='Distributed State Chain'
                            draggable={false}
                        />
                        <Typography className={classes.figureCaption} variant="caption" align="justify" dangerouslySetInnerHTML={{ __html: Figure2 }} />
                        <Typography className={classes.paragraph} style={{ marginBottom: 16 }} variant="body1">{DistributedStateChain[0]}</Typography>
                        <ul className={classes.unorderedList}>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: DistributedStateChain[1] }} />
                            </li>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: DistributedStateChain[2] }} />
                            </li>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: DistributedStateChain[3] }} />
                            </li>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: DistributedStateChain[4] }} />
                            </li>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: DistributedStateChain[5] }} />
                            </li>
                        </ul>
                        <Typography className={classes.paragraph} variant="body1">{DistributedStateChain[6]}</Typography>
                        <Typography id="proof-of-consensus-and-mining" className={classes.sectionSubtitle} variant="subtitle1">Proof-Of-Consensus and Mining</Typography>
                        <Image
                            src="/whitepaper/proof-of-consensus.png"
                            width={1350}
                            height={1141}
                            objectFit="fill"
                            quality={100}
                            alt='Proof-Of-Consensus'
                            draggable={false}
                        />
                        <Typography className={classes.figureCaption} variant="caption" align="justify" dangerouslySetInnerHTML={{ __html: Figure3 }} />
                        <Typography className={classes.paragraph} style={{ marginBottom: 16 }} variant="body1">{ProofOfConsensus[0]}</Typography>
                        <ol className={classes.orderedList}>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: ProofOfConsensus[1] }} />
                            </li>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: ProofOfConsensus[2] }} />
                            </li>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: ProofOfConsensus[3] }} />
                            </li>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: ProofOfConsensus[4] }} />
                            </li>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: ProofOfConsensus[5] }} />
                            </li>
                        </ol>
                        <Typography className={classes.paragraph} variant="body1">{ProofOfConsensus[6]}</Typography>
                        <MathJaxContext config={config}>
                            <MathJax className={classes.equation}>{`${ProofOfConsensus[7]}`}</MathJax>
                        </MathJaxContext>
                        <ul className={classes.variableList} style={{ marginBottom: 24 }}>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: ProofOfConsensus[8] }} />
                            </li>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: ProofOfConsensus[9] }} />
                            </li>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: ProofOfConsensus[10] }} />
                            </li>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: ProofOfConsensus[11] }} />
                            </li>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: ProofOfConsensus[12] }} />
                            </li>
                        </ul>
                        <Typography id="parties:-application-specific-subnetworks" className={classes.sectionSubtitle} variant="subtitle1">Parties: Application Specific Subnetworks</Typography>
                        <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: Parties }} />
                        <Typography id="applications" className={classes.sectionTitle} variant="subtitle1">Applications</Typography>
                        <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: Applications }} />
                        <Typography id="freemium-application-models" className={classes.sectionSubtitle} variant="subtitle1">Freemium Application Models</Typography>
                        <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: FreemiumApplicationModels }} />
                        <Typography id="video-games" className={classes.sectionSubtitle} variant="subtitle1">Video Games</Typography>
                        <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: VideoGames }} />
                        <Typography id="video-streaming" className={classes.sectionSubtitle} variant="subtitle1">Video Streaming</Typography>
                        <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: VideoStreaming }} />
                        <Typography id="high-frequency-trading" className={classes.sectionSubtitle} variant="subtitle1">High Frequency Trading</Typography>
                        <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: HighFrequencyTrading }} />
                        <Typography id="decentralized-health-monitoring" className={classes.sectionSubtitle} variant="subtitle1">Decentralized Health Monitoring</Typography>
                        <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: DecentralizedHealthMonitoring }} />
                        <Typography id="miscellanea-and-concerns" className={classes.sectionTitle} variant="subtitle1">Miscellanea and Concerns</Typography>
                        <Typography id="energy-efficiency" className={classes.sectionSubtitle} variant="subtitle1">Energy Efficiency</Typography>
                        <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: EnergyEfficiency }} />
                        <Typography id="modifying-a-distributed-state-chain" className={classes.sectionSubtitle} variant="subtitle1">Modifying a Distributed State Chain</Typography>
                        <Typography className={classes.paragraph} style={{ marginBottom: 16 }} variant="body1">{ModifyingADistributedStateChain[0]}</Typography>
                        <ul className={classes.unorderedList}>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: ModifyingADistributedStateChain[1] }} />
                            </li>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: ModifyingADistributedStateChain[2] }} />
                            </li>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: ModifyingADistributedStateChain[3] }} />
                            </li>
                        </ul>
                        <Typography className={classes.paragraph} variant="body1">{ModifyingADistributedStateChain[4]}</Typography>
                        <Typography id="51%-attacks" className={classes.sectionSubtitle} variant="subtitle1">51% Attacks</Typography>
                        <Typography className={classes.paragraph} variant="body1">{Attacks[0]}</Typography>
                        <MathJaxContext config={config}>
                            <MathJax className={classes.equation}>{`${Attacks[1]}`}</MathJax>
                        </MathJaxContext>
                        <ul className={classes.variableList} style={{ marginBottom: 24 }}>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: Attacks[2] }} />
                            </li>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: Attacks[3] }} />
                            </li>
                            <li className={classes.listItem}>
                                <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: Attacks[4] }} />
                            </li>
                        </ul>
                        <Typography className={classes.paragraph} variant="body1" dangerouslySetInnerHTML={{ __html: Attacks[5] }} />
                        <Typography id="conclusion" className={classes.sectionTitle} variant="subtitle1">Conclusion</Typography>
                        <Typography className={classes.paragraph} variant="body1">{Conclusion}</Typography>
                        <Typography id="references" className={classes.sectionTitle} variant="subtitle1">References</Typography>
                        <ol className={classes.orderedList}>
                            <li className={classes.listItem}>
                                <Link className={classes.link} href={References[0]} underline="none">Bitcoin Whitepaper</Link>
                            </li>
                            <li className={classes.listItem}>
                                <Link className={classes.link} href={References[1]} underline="none">Ethereum Whitepaper</Link>
                            </li>
                            <li className={classes.listItem}>
                                <Link className={classes.link} href={References[2]} underline="none">Polkadot Whitepaper</Link>
                            </li>
                            <li className={classes.listItem}>
                                <Link className={classes.link} href={References[3]} underline="none">Merkle Trie</Link>
                            </li>
                            <li className={classes.listItem}>
                                <Link className={classes.link} href={References[4]} underline="none">Patricia Trie</Link>
                            </li>
                        </ol>
                    </Grid>
                </Grid>
                <Grid className={classes.tableOfContentsContainer} item md={3} sm={12}>
                    <List className={classes.tableOfContentsDesktop}>
                        <Typography className={classes.tableOfContentsTitle} variant="subtitle1">Table of Contents</Typography>
                        {WhitepaperData.map((item: any, index: number) => (
                            <ListItem button key={index} className={WhitepaperData[index].subsection ? classes.sectionSubtitleButton : classes.sectionTitleButton} onClick={() => handleSectionClick(WhitepaperData[index].name)}>
                                <Typography style={selectedSection === WhitepaperData[index].name ? {color: theme.palette.primary.main} : {}} variant="subtitle1">{WhitepaperData[index].name}</Typography>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default WhitepaperSection

