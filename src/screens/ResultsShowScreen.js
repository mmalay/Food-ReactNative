import React,{useState,useEffect} from 'react';
import { Text, Image, StyleSheet, View} from 'react-native';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) =>{
        const response =await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    },[]);

    if(!result){
        return null;
    }

    return(
        <View style={styles.container}>  
            <Text style={styles.name}>{result.name}  </Text>
            <FlatList data={result.photos} keyExtractor={(photo) => photo} 
                renderItem={({item}) => {
                    return <Image  style={styles.image} source={{uri: item}} />
                }}   
            />                   
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        margin: 10
    },
    image: {
        width: 300,
        height: 200,
        borderRadius:3,
        marginBottom: 5     
    },
    name:{
        fontWeight:'bold'
    }    
});

export default ResultsShowScreen;
