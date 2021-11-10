export type BlogPost = {
    title: string
    id?: string
    date: string
}

export type BlogProps = {
    PostList: BlogPost[];
}