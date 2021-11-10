import React from "react";
import * as BlogTypes from "../../types/blog";
import utilStyles from '../../styles/utils.module.css'


const BlogList: React.FunctionComponent<BlogTypes.BlogProps> = ({ PostList }) => {


    return (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
                {PostList.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        {title}
                        <br />
                        {id}
                        <br />
                        {date}
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default BlogList