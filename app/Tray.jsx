import { View, Text, StyleSheet, TouchableOpacity } from "react-native" 

export default function Tray({ setSelectRestaurant }) {

    const choose = () => {
        const chosen = Math.random()
        setSelectRestaurant(chosen)
    }

    const clear = () => {
        setSelectRestaurant(0)
    }

    return(
        <View style={styles.tray}>
          <View style={styles.buttonList}>
            <TouchableOpacity onPress={choose} style={styles.button}>
                    <Text style={styles.buttonText}>Shuffle Now</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={clear} style={[styles.resetButton]}>
                    <Text style={[styles.buttonText, styles.resetButtonText]}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ed714d',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: "f79477",
    },

    buttonList: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: "space-evenly",
    },

    resetButton: {
        backgroundColor: '#f4f5f6',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 20,
        
    },

    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 800,
    },

    resetButtonText: {
        color: '#777',

    },

    resetButton: {
        backgroundColor: '#f4f5f6',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#ed714d',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 20,
    },

    tray: {
        width: '100%',
        height: 120,
        backgroundColor: '#e9eeff',
        paddingTop: 30,
        paddingBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -10,
        },
        shadowOpacity: 0.11,
        shadowRadius: 9.5,
        elevation: 15,
    },
})

