import React from "react";
import { Text, View, Image } from 'react-native';
import styles from './NewItems.style';

const NewItems = props => {
    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <View style={styles.image_containter}>
                    <Image style={styles.image} source={{ uri: props.props.imgURL }}></Image>
                </View>
                <View style={styles.inner_container_text}>
                    <Text style={styles.title}>{props.props.title}</Text>
                    <Text style={styles.price}>{props.props.price}</Text>
                    {props.props.inStock.toString() == 'false' ? <Text style={styles.stock}>STOKTA YOK!</Text> : null}
                </View>
            </View>
        </View>

    )
}

export default NewItems;