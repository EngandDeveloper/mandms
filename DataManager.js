import AsyncStorage from '@react-native-async-storage/async-storage';

/*
    @brief Wrapper class around AsyncStorage to make error handling during data storage easier
*/
export default class DataManager {


    /** 
        @brief function to store string values in local storage in {key, value} pairs
        @params key: String, unique key to use as a pointer for the stored string
        @params value: String, string to be stored in local storage
    */
   async storeString(key, value) {
        try{
            await AsyncStorage.setItem(key, value);
            console.log('storeString: successful');
        } catch (e) {
            //handle data could not be saved error
            console.log('storeString: failed');
        }
    }

    /** 
        @brief function to store object values in local storage in {key, value} pairs
        @details uses JSON.stringify to serialize the object since AsyncStorage only store string values
        @params key: String, unique key to use as a pointer for the stored string
        @params value: Object, object to be stored in local storage (will be serialized to string)
    */
    async storeObject (key, value) {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
            console.log('storeObject: successful');
        } catch (e) {
            //handle data could not be saved error
            console.log('storeObject: failed');
        }
    }

    /** 
        @brief function to get stored string values from local storage via given key
        @params key: String, unique key to use as a pointer for the stored string
    */
    async getString(key) {
        try {
            const value = await AsyncStorage.getItem(key);
            if(value != null){
                console.log('getString result: ', value);
                return value;
            }
        } catch(e) {
            //handle data could not be saved error
            console.log('getString result: failed!');
        }
    }

    /** 
        @brief function to get stored object values from local storage via given key
        @details uses JSON.parse to parse serialized object since AsyncStorage only store string values
        @params key: String, unique key to use as a pointer for the stored string
    */
    async getObject(key) {
        try {
            const jsonValue = await AsyncStorage.getItem(key);
            console.log('getObject result: ', JSON.parse(jsonValue));
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
            //handle data could not be saved error
            console.log('getObject result: failed!');
        }
    }

} 