import { FC } from "react";
import { ArticlePreviewFull } from "./components/ArticlePreviewFull";
import { ArticlePreviewShort } from "./components/ArticlePreviewShort";
import { ArticlePreviewArgs } from "./components";

interface ArticlePreviewAgenArgs extends ArticlePreviewArgs {
    view: 'full' | 'short'
}

export const ArticlePreview: FC<ArticlePreviewAgenArgs> = ({ view, ...viewProps }) => {
    return view === 'full' 
        ? <ArticlePreviewFull {...viewProps}/> 
        : <ArticlePreviewShort {...viewProps}/>
}