export type BlogPost = {
    title: string
    id?: string
    date: string
    contentHtml?: string
}


export type BlogProps = {
    PostList: BlogPost[];
}