import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
// import VideoToAudio from 'video-to-audio'
import DocumentPicker from 'react-native-document-picker';

export default function App() {
  const [fileResponse,setfileResponse] = useState([])
//   async function convertToAudio(input) {
//     let sourceVideoFile = input.files[0];
//     let targetAudioFormat = 'mp3'
//     let convertedAudioDataObj = await VideoToAudio.convert(sourceVideoFile, targetAudioFormat);
    // console.log(convertedAudioDataObj)
// }

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text >Upload you Video and Convert to Audio</Text>
      {/* <input >Hi</input> */}
      {/* <Button title='Select File' onPress={check}/> */}
      <Button title='Select File' onPress={handleDocumentSelection}/>

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
