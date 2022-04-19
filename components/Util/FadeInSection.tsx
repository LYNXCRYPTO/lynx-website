import React from 'react';
import styles from "../../styles/FadeIn.module.css"

const FadeInSection = (props: any) => {
    const [isVisible, setVisible] = React.useState(true);
    const domRef: any = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        //return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <div
            className={`${styles.fadeInSection} ${isVisible ? styles.isVisible : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default FadeInSection;