import { Section } from "@/components/Section";
import { FC, useState } from "react";
import { articles, Categories } from "@/data/articles";
import { ArticlePreview } from "@/components/ArticlePreview";
import { Grid } from "antd";

const array = [
    { key: Categories[0], label: 'Business' },
    { key: Categories[1], label: 'Development' },
    { key: Categories[2], label: 'Design' },
]

export const Articles: FC = () => {
    const [active, setActive] = useState<string|undefined>()
    const { lg } = Grid.useBreakpoint()

    return <Section label={'Our Blog'} filterArray={array} onChange={(key) => setActive(key)}>
        {articles?.filter(it => active ? (it?.category === active) : true)?.map((article, index) => (
            <ArticlePreview key={article?.id} {...article} view={(index === 0 && lg) ? 'full' : 'short'}/>
        ))}
    </Section>
}