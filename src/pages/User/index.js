import React, { useContext } from "react";
import {
  Header,
  Container,
  Logo,
  UserContainer,
  RepositoriesList,
  Footer,
  LoadingIcon,
} from "./styles";
import logoHorizontal from "../../assets/images/logo-horizontal.svg";
import { Link } from "react-router-dom";
import {
  BiArrowBack,
  BiGitRepoForked,
  BiLinkExternal,
  BiMessageAltError,
} from "react-icons/bi";
import { BsFileEarmarkCode } from "react-icons/bs";
import { MdLocationOn, MdPeopleOutline } from "react-icons/md";
import { FaToolbox, FaStar, FaGithub } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { RiGitRepositoryLine } from "react-icons/ri";
import { AppContext } from "../../contexts/AppContext";

export function User() {
  const {
    user,
    userInfo,
    starsAmount,
    repositories,
    clearData,
    isLoading,
  } = useContext(AppContext);

  return (
    <>
      <Header>
        <Logo to="/" onClick={clearData}>
          <img src={logoHorizontal} alt="Github Search" />
        </Logo>
        <Link to="/" onClick={clearData}>
          <BiArrowBack size={32} color="var(--gray)"></BiArrowBack>
        </Link>
      </Header>
      <Container>
        {isLoading ? (
          <LoadingIcon size={33}></LoadingIcon>
        ) : userInfo.length === 0 ? (
          <h3>
            Ops! User not found <BiMessageAltError></BiMessageAltError>
          </h3>
        ) : (
          <>
            <UserContainer>
              <img src={`${userInfo.avatar_url}`} alt="Avatar"></img>
              <div>
                <div>
                  <h2>{userInfo.name}</h2>
                  <span>@{userInfo.login}</span>
                </div>
                <div>
                  <p>
                    <MdLocationOn color="var(--purple)" size={22} />
                    {userInfo.location}
                  </p>
                  <p>
                    <FaToolbox color="var(--purple)" size={18} />
                    {userInfo.company}
                  </p>
                </div>
                <div>
                  <p>
                    <IoIosPeople color="var(--purple)" size={22} />
                    {userInfo.followers}
                  </p>
                  <p>
                    <MdPeopleOutline color="var(--purple)" size={22} />
                    {userInfo.following}
                  </p>
                  <p>
                    <FaStar color="var(--purple)" size={16} />
                    {starsAmount}
                  </p>
                </div>
              </div>
              <div id="total-repositories">
                <h3>Total Repositories</h3>
                <p>
                  <RiGitRepositoryLine color="var(--purple)" size={20} />
                  {repositories.length}
                </p>
              </div>
            </UserContainer>
            <div id="repositoriesListContainer">
              <RepositoriesList>
                {repositories.map((repo, index) => (
                  <li key={repo.id}>
                    <strong>{repo.name}</strong>
                    <p>{repo.description}</p>
                    <div>
                      <p>
                        <FaStar />
                        {repo.stargazers_count}
                      </p>
                      <p>
                        <BiGitRepoForked />
                        {repo.forks_count}
                      </p>
                      <p>
                        <BsFileEarmarkCode />
                        {repo.language}
                      </p>
                      <a rel="noreferrer" href={repo.html_url} target="_blank">
                        <p>
                          <BiLinkExternal />
                        </p>
                      </a>
                    </div>
                  </li>
                ))}
              </RepositoriesList>
            </div>{" "}
          </>
        )}
      </Container>
      <Footer>
        <a href={`https://github.com/${user}`}>
          <FaGithub size={32} color="var(--gray)" />
        </a>
      </Footer>
    </>
  );
}
