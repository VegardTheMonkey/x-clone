import { Platform, StyleSheet, RefreshControl, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Lottie from 'lottie-react-native';
import { Text, View } from '../../components/Themed';
import EditScreenInfo from '../../components/EditScreenInfo';
import * as React from 'react';
import { createRandomUser } from '../../utils/generate-dommy-data';
import { ThreadsContext } from '../../context/thread-context';



export default function TabOneScreen() {
  const animationRef = React.useRef<Lottie>(null);
  const threads = React.useContext(ThreadsContext);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "gray",
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {animationRef.current?.play()}}
            tintColor={"transparent"}
          />
        }
      >
        <Lottie 
        ref={animationRef}
        source={require('../../lottie-animations/threads.json')}
        loop={false}
        autoPlay={true}
        style={{width: 90, height: 90, alignSelf: 'center'}}
        // onAnimationFinish={() => {
        //   alert("Animation Finished")
        // }}
        
        />

      {threads.map((thread) => (<Text key={thread.id}>{thread.author.name}</Text>))}
      </ScrollView>
    </SafeAreaView>
  );
}


