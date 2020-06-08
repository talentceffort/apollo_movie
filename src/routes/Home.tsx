import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import Movie from '../components/Movie';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 35px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;

const GET_MOVIES = gql`
  {
    apiMovies {
      id
      title
      medium_cover_image
      description_full
    }
  }
`
interface movie {
  id: number;
  score: number;
  name: string;
  medium_cover_image: string;
  description_full: string;

}

interface MoviesData {
  apiMovies: movie[]
}

function Home() {
  const { data, loading} = useQuery<MoviesData>(GET_MOVIES);
  console.log(data)
  return (
    <Container>
      <Header>
        <Title>Apollo 2020</Title>
        <Subtitle>I love GraphQL</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      <Movies>
        {data?.apiMovies?.map(m => (
            <Movie
              key={m.id}
              id={m.id}
              title={m.name}
              bg={m.medium_cover_image}
            />
          ))}
        </Movies>
    </Container>
  )
}

export default Home;