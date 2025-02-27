import { StyleSheet, View, Image } from "react-native";

function MovieItem({imageUrl}) {
    return (
        <View style={styles.movieContainer}>
            <Image source={{uri: imageUrl}} style={styles.movieImage}/>
        </View>
    );
}

const styles = StyleSheet.create({
    movieContainer: {
        margin: 12,
        width: 100,
        height: 200,
        borderRadius: 16,
    },
    movieImage: {
        width: '100%',
        height: 150,
        borderRadius: 16,
    }
});

export default MovieItem;