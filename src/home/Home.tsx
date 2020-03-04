import React from 'react';
import { useTrail, animated } from 'react-spring';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import SEO from '~/components/SEO';
import styles from './Home.module.css';
import { Card, Paper, CardActionArea, CardContent, Typography } from '@material-ui/core';

const items = ['Hi.', 'My name is', 'Michael'];
const config = { mass: 5, tension: 2000, friction: 200 };

interface HighlightProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    img: any;
    label: string;
    content: string;
}

const Highlight = ({ img, label, content }: HighlightProps) => (
    <Card variant="outlined" className={styles.Card}>
        <CardActionArea>
            <Image fluid={img} className={styles.CardImage} />
            <CardContent className={styles.CardText}>
                <Typography gutterBottom variant="h5" component="h2">
                    {label}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {content}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
);

export default () => {
    const data = useStaticQuery(graphql`
        query {
            development: file(relativePath: { eq: "highlight_development.jpg" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            blog: file(relativePath: { eq: "highlight_blog.jpg" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            papers: file(relativePath: { eq: "highlight_papers.jpg" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    const trail = useTrail(items.length, {
        config,
        opacity: 1,
        height: 256 / 3,
        from: { opacity: 0, height: 0 },
    });

    return (
        <>
            <SEO title="Home" />
            <div className={styles.Root}>
                <div className={styles.Top}>
                    <div className={styles.TopContent}>
                        <div className={styles.Avatar}>MH</div>
                        <span className={styles.Greeting}>
                            {trail.map(({ height, ...rest }, index) => (
                                <animated.div key={items[index]} style={{ ...rest }}>
                                    <animated.div style={{ height }}>{items[index]}</animated.div>
                                </animated.div>
                            ))}
                        </span>
                    </div>
                </div>

                <div className={styles.Cards}>
                    <Paper className={styles.CardsContent} elevation={4}>
                        <Highlight
                            img={data.development.childImageSharp.fluid}
                            label="Software Development"
                            content="Live demos and projects I'm working on"
                        />
                        <Highlight
                            img={data.blog.childImageSharp.fluid}
                            label="Blog"
                            content="Articles, tutorials and things I find worth sharing for. Mostly software development related stuff.."
                        />
                        <Highlight
                            img={data.papers.childImageSharp.fluid}
                            label="Research"
                            content="All publications, slides and other related files"
                        />
                    </Paper>
                </div>
            </div>
        </>
    );
};
