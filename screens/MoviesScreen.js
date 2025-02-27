import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import MovieItem from "../components/MovieItem";
import MovieCategoryTitle from "../components/MovieCategoryTitle";
import { useEffect, useState } from "react";

function MoviesScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [upcoming, setUpcoming] = useState();

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=7cbd8692d390df4bb55c18914d1897f4&page=1"
      );
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getUpcoming = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=7cbd8692d390df4bb55c18914d1897f4&page=1"
      );
      const json = await response.json();
      setUpcoming(json.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
    getUpcoming();
  }, []);

  function renderMovieItem(itemData) {
    return (
      <MovieItem
        imageUrl={`https://image.tmdb.org/t/p/w500${itemData.item.poster_path}`}
      />
    );
  }

  return (
    <View style={styles.screenContainer}>
      <View style={{height: 250}} >
        <MovieCategoryTitle>Top Rated</MovieCategoryTitle>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={data}
            renderItem={renderMovieItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>

      <View>
        <MovieCategoryTitle>Upcoming</MovieCategoryTitle>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={upcoming}
            renderItem={renderMovieItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
  },
});

export default MoviesScreen;
