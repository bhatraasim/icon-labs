export const PRODUCT_CATEGORIES = [
    {
        label:"UI Kits",
        value:"ui_kits" as const ,
        feature:[
            {
                pname:"Editor picks",
                herf:"#",
                imagesrc:"/nav/ui-kits/mixed.jpg"
            },
            {
                pname:"New Arrivals",
                herf:"#",
                imagesrc:"/nav/ui-kits/blue.jpg"
            },
            {
                pname:"Bestsellers ",
                herf:"#",
                imagesrc:"/nav/ui-kits/purple.jpg"
            }
        ]
    },
    {
        label:"Icons",
        value:"icons" as const ,
        feature:[
            {
                pname:"Favroite Icon Picks",
                herf:"#",
                imagesrc:"/nav/icons/picks.jpg"
            },
            {
                pname:"New Arrivals",
                herf:"#",
                imagesrc:"/nav/icons/new.jpg"
            },
            {
                pname:"Bestselling Icons ",
                herf:"#",
                imagesrc:"/nav/icons/bestsellers.jpg"
            }
        ]
    }
]