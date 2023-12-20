import { features } from "process";

export const PROUDCT_CATEGORIES = [
    {lable: 'All', value: 'all'},
    {lable: 'Electronics', value: 'electronics' as const,
    features: [
        {name : "editor picks",
        href : "/editor-picks",
        image : "/images/editor-picks.png",
    }
    ],},
    

]