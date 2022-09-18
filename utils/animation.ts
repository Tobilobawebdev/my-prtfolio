import gsap from "gsap";

type Props = {
    node: unknown
    node1: unknown
    node2: unknown
    node3: unknown
}
//opem menu
export const staggerReveal = ({node1, node2}: Props) => {
    gsap.from([node1, node2], {
        duration: 0.8,
        height: 0,
        transformOrigin: "right top",
        skewY: 2,
        ease: "power3.inOut",
        stagger: {
            amount: 0.1
        }
    });
};

//close menu
export const staggerRevealClose = ({node1, node2}: Props) => {
    gsap.from([node1, node2], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
            amount: 0.1
        }
    });
};

//stagger the links to appear
export const staggerText = ({node1, node2, node3}: Props) => {
    gsap.from([node1, node2, node3], {
        duration: 0.8,
        y: 100,
        delay: 0.1,
        ease: "power3.inOut",
        stagger: {
            amount: 0.1
        }
    });
};

//opem menu
export const fadeUp = (node: Props) => {
    gsap.from([node], {
       y: 60,
       duration: 1,
       delay: 0.2,
       opacity: 0,
       ease: "power3.inOut"
    });
};