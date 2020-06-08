import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks"
// import gql from 'graphql-tag';

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    getAPImovie(id: $id) {
      id
      title
      medium_cover_image
      description_full
    }
  }
`;

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id, 10) }
  });

  console.log(data, loading)
  if (loading) {
    return "loading";
  }
  if (data && data.getAPImovie) {
    return data.getAPImovie.title;
  }
}

