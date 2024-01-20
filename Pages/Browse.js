import React, {useState} from 'react';import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons"
import SwitchView from "../Components/SwitchView";
import Activities from "../Components/Activities";
import Leaderboard from "../Components/Leaderboard";
import Connections from "../Components/Connections";
import missions from "../Values/missions";
import trails from "../Values/Trails";
import SearchBar from "../Components/SearchBar";
import {useNavigation} from "@react-navigation/native";

export default function Browse(){

    const [listId, setListId] = useState([{id: 0,name: "Trails"},{id: 1,name: "Missions"},{id: 2,name: "Training"}])
    const [selected,setSelected] = useState(0)

    const [trails_,setTrails_] = useState(trails)
    const [missions_,setMissions_] = useState(missions)
    const [trainings_,setTrainings_] = useState([])

    const [search_,setSearch_] = useState("")



    function renderComponent() {
        if (selected === 0) {
            return <Activities activities={trails_} />;
        } else if (selected === 1) {
            return <Activities activities={missions_} />;
        } else {
            return <Activities activities={[]} />;
        }
    }



    function filterAll(text){
        setTrails_(searchItems(text,trails))
        setMissions_(searchItems(text,missions))

    }

    function search(text){
        filterAll(text)
        setSearch_(text)
    }

    function searchItems(searchString, items) {
        const lowercasedSearchString = searchString.toLowerCase();

        return items.filter(item => {
            // Assuming each item has a 'title' property that is a string.
            return item.title && typeof item.title === 'string' &&
                item.title.toLowerCase().includes(lowercasedSearchString);
        });}


    let navigator = useNavigation()

    return (
        <SafeAreaView style={{
            padding: 10,
            backgroundColor: "#FFF7E1",
            height: "100%"
        }}>
            <View style={{
                flexDirection: "row"
            }}>
                <TouchableOpacity style={{
                    width: "10%"
                }}
                onPress={()=>{navigator.goBack()}}
                >
                    <Icon name="chevron-left" size={40} color="#000" />
                </TouchableOpacity>
                <Text  style={{
                    alignSelf: "center",
                    paddingBottom: 10,
                    fontFamily: "Quicksand700Bold",
                    fontSize: 28,
                    width: "80%",
                    marginRight: "10%",
                    textAlign: "center",
                    color: '#303E49',
                }}>
                    Browse
                </Text>
            </View>
            <View style={{
                alignSelf: "center",
                width: "100%",
                height: "100%",
                alignItems: "center"
            }}>

                <SearchBar func={(text) =>  {search(text)}} />
                {search_ == "" ?
                <Text  style={{
                    alignSelf: "center",
                    paddingTop: 10,
                    fontFamily: "Quicksand700Bold",
                    fontSize: 18,
                    color: 'rgba(107, 107, 107, 0.9)',
                }}>
                    POPULAR
                </Text>
                    : <></>}
                <SwitchView items={listId} func={(index) => setSelected(index)}/>
                {renderComponent()}
            </View>
        </SafeAreaView>
    )

}