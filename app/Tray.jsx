import { View, Text, StyleSheet, TouchableOpacity } from "react-native" 

export default function Tray({ setSelectedRestaurant }) {

    const choose = () => {
        const chosen = Math.random()
        setSelectedRestaurant(chosen)
    }
    
    return(
        <View style={styles.tray}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Shuffle</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        paddingHorizontal: 24,
        paddingVertical: 10,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
    },

    buttonText: {
        color: 'white',
        fontsize: 20,
        fontWeight: 800,
    },
    tray: {
        width: '100%',
        height: 70,
        backgroundColor: '#e9eeff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    }
})

