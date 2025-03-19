import { PictureArgs } from "@/components/Picture"

export enum Categories {
    Business,
    Development,
    Design,
}

export interface ArticleType {
    id: string
    title: string
    readTime: string
    author: MemberType
    comment?: string
    category: string
    published: string
    illustration: PictureArgs
    contain: string
}