import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  background-color: #1b1536;
  padding: 1vw;
  width: 30%;

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 1vw;
  }

  @media screen and (max-width: 750px) {
    width: 100%;

    ul {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export default function Navigation() {
    return (
        <StyledNav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/achievements">Achievements</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/hobbies">Hobbies</Link></li>
            </ul>
        </StyledNav>
    );
}