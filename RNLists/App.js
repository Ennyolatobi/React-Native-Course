import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList } from 'react-native';
import footballPlayers from "./data.json";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<ScrollView style={styles.scrollView}>
        {
          footballPlayers.map((player) => { 
            return (
              <View style={styles.card} key={player.id}>
                <Text style={styles.cardText}>Name: {player.name}</Text>
                <Text style={styles.cardTeam}>Team: {player.team}</Text>
                <Text style={styles.cardInfo}>Jersey Number: {player.jerseyNumber}</Text>
                <Text style={styles.cardRating}>⭐ Rating: {player.rating}</Text>
              </View>
            )
          })
        }
      </ScrollView>*/}
      <View styles={styles.ScrollView}>
        <FlatList
          data={footballPlayers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardText}>Name: {item.name}</Text>
              <Text style={styles.cardTeam}>Team: {item.team}</Text>
              <Text style={styles.cardInfo}>
                Jersey Number: {item.jerseyNumber}
              </Text>
              <Text style={styles.cardRating}>
                ⭐ Rating: {item.rating}
              </Text>
            </View>
          )}
          ListHeaderComponent={
            <Text style={styles.headerText}>Football Players</Text>
          }
          ListFooterComponent={
            <Text style={styles.footerText}>End of List</Text>
          }
        />

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    paddingTop: StatusBar.currentHeight
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding : 16,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
  cardTeam: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },

  cardInfo: {
    fontSize: 16,
    marginBottom: 6,
    color: '#444',
  },

  cardRating: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0a8f08',
    marginTop: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  footerText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  }

});
