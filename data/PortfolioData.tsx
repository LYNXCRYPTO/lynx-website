import { Typography } from "@material-ui/core";

export const PortfolioData: IPortfolioData = {
    data: [
        {
            name: "Nicely Theatre Group",
            description: "Professional, non-profit theatre group dedicated to producing high-quality productions for a wide audience.",
            websiteURL: "https://www.nicelytheatregroup.org/",
            isSiteLive: true,
            previewImg: "/website-imgs/nicely-theatre-group.svg",
            previewImgMobile: "/website-imgs/nicely-theatre-group-mobile.svg",
        },
        {
            name: "Nulla Wellness",
            description: "Subscription only vegan and plant-based wellness marketplace at a discounted price.",
            websiteURL: "https://www.nullawellness.com/",
            isSiteLive: true,
            previewImg: "/website-imgs/nulla-wellness.svg",
            previewImgMobile: "/website-imgs/nulla-wellness-mobile.svg",
        },
        {
            name: "Doggo Brand",
            description: "Canine-inspired monthly subscription box for man’s best friend.",
            websiteURL: "https://www.thedoggobox.com/",
            isSiteLive: false,
            previewImg: "/website-imgs/doggo-brand.svg",
            previewImgMobile: "/website-imgs/doggo-brand-mobile.svg",
        },
        {
            name: "Chapman Consulting Group",
            description: "Affordable ironclad compliance for small to medium sized practices or healthcare companies.",
            websiteURL: "https://www.ccghealthcare.com/",
            isSiteLive: true,
            previewImg: "/website-imgs/chapman-consulting-group.svg",
            previewImgMobile: "/website-imgs/chapman-consulting-group-mobile.svg",
        },
    ],
};

export interface IPortfolioData {
    data: IPortfolioContent[];
}

export interface IPortfolioContent {
    name: string;
    description: string;
    websiteURL: string;
    isSiteLive: boolean;
    previewImg: string;
    previewImgMobile: string;
}
