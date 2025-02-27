import { StyleSheet, Text } from "react-native";

function MovieCategoryTitle({children}) {
    return (
        <Text style={styles.movieTitle}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    movieTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 12
    }
});

export default MovieCategoryTitle;