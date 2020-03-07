import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { useTrail, animated, useSpring } from 'react-spring';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import Image from 'gatsby-image';
import SEO from '~/components/SEO';
import SocialBar from '~/components/SocialBar';
import styles from './Home.module.css';
import { Card, Paper, CardActionArea, CardContent, Typography } from '@material-ui/core';

const items = ['Hi.', 'My name is', 'Michael'];
const config = { mass: 5, tension: 2000, friction: 200 };

interface HighlightProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    img: any;
    label: string;
    content: string;
    route: string;
}

const Highlight = ({ img, label, content, route }: HighlightProps) => (
    <Card variant="outlined" className={styles.Card}>
        <CardActionArea onClick={() => navigate(route)}>
            <div className={styles.CardImageContainer}>
                <Image fluid={img} className={styles.CardImage} />
            </div>
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
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const ref = useRef();
    const [{ offset }, set] = useSpring(() => ({ offset: 0 }));
    const handleScroll = () => {
        if (ref && ref.current) {
            const posY = ref.current.getBoundingClientRect()?.top;
            const offset = window.pageYOffset - posY;
            set({ offset });
            if (isHeaderVisible && offset <= 650) setIsHeaderVisible(false);
            else if (!isHeaderVisible && offset > 650) setIsHeaderVisible(true);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    const calcTranslateY = (factor: number, max = 512) =>
        offset.interpolate(o => typeof o === 'number' && `translateY(${Math.min(o, max) * factor}px)`);

    const trail = useTrail(items.length, {
        config,
        opacity: 1,
        height: 256 / 3,
        from: { opacity: 0, height: 0 },
        delay: 250,
    });

    return (
        <div ref={ref}>
            <SEO title="Home" />
            <div className={styles.Root}>
                <div className={styles.Top}>
                    <animated.div
                        className={styles.TopContent}
                        style={{
                            transform: calcTranslateY(0.1),
                        }}>
                        <animated.div
                            className={styles.AvatarContainer}
                            style={{
                                height: trail[1].height.interpolate(h => h * 3),
                                opacity: trail[1].opacity.interpolate(o => o),
                            }}>
                            <div className={styles.Avatar}>MH</div>
                        </animated.div>
                        <span className={styles.Greeting}>
                            {trail.map(({ height, ...rest }, index) => (
                                <animated.div key={items[index]} style={{ ...rest }}>
                                    <animated.div style={{ height }}>{items[index]}</animated.div>
                                </animated.div>
                            ))}
                        </span>
                    </animated.div>
                </div>

                <animated.div
                    className={styles.Cards}
                    style={{
                        transform: calcTranslateY(-0.1),
                    }}>
                    <Paper className={styles.CardsContent} elevation={4}>
                        <div className={styles.CardsContentHightlight}>
                            <Highlight
                                img={data.development.childImageSharp.fluid}
                                label="Software Development"
                                content="Live demos and projects I'm working on"
                                route="/projects"
                            />
                            <Highlight
                                img={data.blog.childImageSharp.fluid}
                                label="Blog"
                                content="Articles, tutorials and things I find worth sharing for. Mostly software development related stuff.."
                                route="/blog"
                            />
                            <Highlight
                                img={data.papers.childImageSharp.fluid}
                                label="Research"
                                content="All publications, slides and other related files"
                                route="/research"
                            />
                        </div>

                        <Typography variant="body1" className={styles.Text}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                            amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                            amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                            consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
                            odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
                            nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                            veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                            molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
                            iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
                            feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil
                            imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                            iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
                            feugiat nulla facilisis. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam
                            dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet
                            clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                        </Typography>
                    </Paper>
                </animated.div>
            </div>

            <div className={styles.Bottom} />

            <div className={classNames(styles.HeaderBar, { [styles.HeaderBarVisible]: isHeaderVisible })}>
                <Typography variant="h5" className={styles.HeaderBarText}>
                    Home
                </Typography>
            </div>
            <SocialBar small={isHeaderVisible} />
        </div>
    );
};
