import { Section } from "@/components/Section";
import { FC, useState } from "react";
import { articles } from "@/data/articles/articles";
import { ArticlePreview } from "@/components/ArticlePreview";
import { Grid } from "antd";

const array = [
    { key: 'Business', label: 'Business' },
    { key: 'Development', label: 'Development' },
    { key: 'Design', label: 'Design' },
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