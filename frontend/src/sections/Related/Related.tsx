import { FC } from "react";
import { Section } from "@/components/Section";
import { ArticleType } from "@/data/articles";
import { ArticlePreviewShort } from "@/components/ArticlePreview/components/ArticlePreviewShort";

interface RelatedArgs {
    articles?: ArticleType[]
}

export const Related: FC<RelatedArgs> = ({ articles }) => {
    return <Section label={'Related Blogs'}>
        {articles?.slice(0, 3)?.map(article => (
            <ArticlePreviewShort {...article}/>
        ))}
    </Section>
}