import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  background-color: #281745;
  color: #e9e7ff;
  padding: 2vw;
  text-align: center;

  a {
    color: #ff4fd8;
  }
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>
                All Rights Reserved by Jiaqi Li{" "}
                <Link to="/credits">Credits</Link> &copy;
            </p>
        </StyledFooter>
    );
}