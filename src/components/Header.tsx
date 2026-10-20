import styled from "styled-components";
import { useMatch } from "react-router-dom";

const StyledHeader = styled.header<{ $color: string }>`
    background-color: #281745;
    color: #00e5ff;
    padding: 2vw;
    text-align: left;

    h1 {
        font-size: calc(20px + 1vw);
        color: ${(props) => props.$color};
    }

    p {
        font-size: calc(12px + 0.5vw);
    }

    @media screen and (max-width: 750px) {
        text-align: center;
    }
`;

const pages: {
    [key: string]: {
        title: string;
        subtitle: string;
        color: string;
    };
} = {
    home: {
        title: "Jiaqi Li",
        subtitle: "My Online Resume",
        color: "#ff4fd8",
    },
    education: {
        title: "Education",
        subtitle: "My Academic Background",
        color: "#00e5ff",
    },
    experience: {
        title: "Experience",
        subtitle: "My Work and Project Experience",
        color: "#b794f4",
    },
    skills: {
        title: "Skills",
        subtitle: "My Technical and Personal Skills",
        color: "#57ffb3",
    },
    achievements: {
        title: "Achievements",
        subtitle: "My Certifications and Accomplishments",
        color: "#ffcc66",
    },
    projects: {
        title: "Projects",
        subtitle: "My Academic and Personal Projects",
        color: "#ff7a9e",
    },
    hobbies: {
        title: "My Hobbies",
        subtitle: "My interests and activities outside of school",
        color: "#7dd3fc",
    },
    credits: {
        title: "Credits",
        subtitle: "Resources used to create this website",
        color: "#ffe66d",
    },
};

export default function Header() {
    const match = useMatch("/:page");
    const page = match?.params.page || "home";
    const information = pages[page] || pages.home;

    return (
        <StyledHeader $color={information.color}>
            <h1>{information.title}</h1>
            <p>{information.subtitle}</p>
        </StyledHeader>
    );
}