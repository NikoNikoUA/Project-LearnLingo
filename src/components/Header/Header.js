import icons from "../../sprite.svg";
import {
  NavContainer,
  LogoLink,
  LogoText,
  PagesList,
  ListItem,
  PagesLink,
} from "./Header.styled";
import { Container } from "../../CommonStyles.styled";
import { AuthBar } from "../Auth/AuthBar/AuthBar";
import { useState } from "react";
import { UserInfo } from "../Auth/UserInfo/UserInfo";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(setIsLoggedIn);
  return (
    <header>
      <Container>
        <NavContainer>
          <LogoLink to="/">
            <svg width="28px" height="28px">
              <use href={`${icons}#icon-logo`}></use>
            </svg>
            <LogoText>LearnLingo</LogoText>
          </LogoLink>
          <PagesList>
            <ListItem>
              <PagesLink to="/">Home</PagesLink>
            </ListItem>
            <ListItem>
              <PagesLink to="/teachers">Teachers</PagesLink>
            </ListItem>
            <ListItem className="underline">
              <PagesLink to="/favorites">Favorites</PagesLink>
            </ListItem>
          </PagesList>
          {isLoggedIn ? <UserInfo /> : <AuthBar />}
        </NavContainer>
      </Container>
    </header>
  );
};
