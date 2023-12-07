import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recomends from "./Recomends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { db } from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { selectUserName } from "../features/auth/userSlice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      let recommends = [];
      let originals = [];
      let trending = [];
      let newDisney = [];

      try {
        const result = await getDocs(collection(db, "movies"));

        result.forEach((element) => {
          switch (element.data().type) {
            case "recommend":
              recommends = [
                ...recommends,
                { id: element.id, ...element.data() },
              ];
              break;

            case "trending":
              trending = [...trending, { id: element.id, ...element.data() }];
              break;

            case "original":
              originals = [...originals, { id: element.id, ...element.data() }];
              break;

            case "new":
              newDisney = [...newDisney, { id: element.id, ...element.data() }];
              break;
            
            default:
              break;
          }
        });

        // Dispatch the setMovies action to update the Redux store
        dispatch(
          setMovies({
            recommend: recommends,
            original: originals,
            trending: trending,
            newDisney: newDisney,
          })
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch, selectUserName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recomends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  padding: 20px calc(3.5vw + 5px);
  color: white;
  display: block;
  overflow-x: hidden;
  top: 72px;
  &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    background-image: url("/images/home-background.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: white;
    width: 100vw;
    height: 100%;
    z-index: -1;
  }
`;
