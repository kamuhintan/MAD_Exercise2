import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  StyleSheet, 
  ScrollView 
} from 'react-native';

export const shoppingImages = [
  {
    id: 1,
    url: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnKZVouhs8eFMFpNkNHQ8uvY0kDQ5GPxwlA&usqp=CAU',
    },
    title: 'Kosmetik',
  },
  {
    id: 2,
    url: {
      uri: 'https://i.pinimg.com/736x/20/bd/2f/20bd2f608f15a81a198d95050a8556a0.jpg',
    },
    title: 'Skincare',
  },
  
  {
    id: 3,
    url: {
      uri: 'https://down-id.img.susercontent.com/file/sg-11134201-7rbk5-lmvndrbaxc9m09_tn',
    },
    title: 'Clothes',
  },

  {
    id: 4,
    url: {
      uri: 'https://www.shutterstock.com/image-photo/background-shoes-on-shelves-shop-260nw-140743294.jpg',
    },
    title: 'Heels',
  },
  // Add more shopping images as needed
];

export default function ShoppingTheme() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: 'bold',
          color: '#FFFFFF' // Set text color to white
        }}>
        Beautyfy
      </Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          placeholder="Search for items"
          placeholderTextColor={'#A4B0BD'}
        />
      </View>
      <ScrollView horizontal={true}>
        {shoppingImages.map(item => {
          return (
            <View style={styles.imageCard} key={item.id}>
              <Image source={item.url} style={styles.image} />
              <Text style={styles.titleStyle}>{item.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink', 
    padding: 8,
  },
  imageCard: {
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 100,
  },

  titleStyle: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 6,
    fontStyle: 'italic',
    marginRight: 15,
    color: '#FFFFFF' 
  },
  searchContainer: {
    marginTop: 16, // Add margin from the shopping images
    alignItems: 'center', // Center the search input horizontally
  },
  search: {
    height: 44,
    backgroundColor: '#F1EFEF',
    borderRadius: 16,
    marginTop: 8, // Adjust margin from the search container
    marginBottom: 5,
    paddingHorizontal: 10,
    width: '80%', // Set the width of the search input
    color: '#2F363F',
  }
});
