import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Fontisto, AntDesign,Octicons,MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
  <View style={styles.container}>
    <View style={styles.statusbar}>
      <TouchableOpacity>
        <AntDesign name="left" size={25} color="white"/>
        </TouchableOpacity>
      
        <View style={styles.searchbar}>
          <View style={styles.searchbutton}>
           <AntDesign name="search1" size={15} color="#9E9E9E" /></View>
           <Text style={styles.search}>Kanye West</Text>

      </View>
      <TouchableOpacity>
      <Octicons name="settings" size={25} color="white"/>
        </TouchableOpacity>
    </View>


    <View style={styles.post}>
      <View style={styles.header}>
      <Image style={styles.profilePic}
        source={require('./assets/kanye.jpg')}/>
        <View style={styles.postDetails}>
          <Text style={styles.author}>Kanye West</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.date}>Just now   </Text>
          <Fontisto name='world-o' size={15} color='#9E9E9E' />
          </View>
        </View>
      </View>
        <View style={styles.postcontent}>
          <Text style={styles.posttext}>
            Man, I promise, she's so self-conscious. She has no idea what she doin' in college. That major that she majored in don't make no money.
            But she won't drop out, her parents will look at her funny.
          </Text>
        </View>
        <View style={styles.postcontent1}>
        <Image style={styles.postImage} source={require('./assets/Kanye-West-2006.webp')}/>
        </View>

        <View style={styles.likes}>
        <Text style={styles.comments}>48 likes 6 Comments</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.circle}>
          <TouchableOpacity style={styles.footerButton}>
            <AntDesign name='like1' size={15} color='#9E9E9E'/>
            </TouchableOpacity>
            </View>
            <View style={styles.circle}>
            <TouchableOpacity style={styles.footerButton}>
            <MaterialCommunityIcons name="comment" size={15} color="#9E9E9E" />
            </TouchableOpacity>
            </View>
            <View style={styles.circle}>
            <TouchableOpacity style={styles.footerButton}>
            <MaterialCommunityIcons name="share" size={20} color="#9E9E9E"  />
          </TouchableOpacity>
          </View>
      </View>
      
        
        
    </View>

    
          
          
          
      
    
  </View>
  )
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#666',
    padding: 10
  },
  statusbar:{
    width: '100%',
    height: 70,
    flexDirection: 'row',
    backgroundColor: '#1A237E',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  searchbar:{
    height: 40,
    width: '70%',
    flexDirection: 'row',
    justifyContent: "flex-start",
    backgroundColor: "#111",
    alignItems: 'center',
    borderRadius: 10,
    margin:15
    
  },
  searchbutton:{
    marginLeft:10

  },
  search:{
    color: '#999',
    fontSize: 15, 
    margin:15,
    marginLeft: 10
  },
  post:{
    backgroundColor: "#111",
    flex: 0.5,
    width: '100%',
    marginTop: 10

  },
  header:{
    flexDirection: 'row',
    backgroundColor: "#111",
    width: '100%',
    marginTop: 10
  },
  profilePic:{
    height: 60,
    width: 60,
    margin:8,
    borderRadius: 100
  },
  author: {
    fontSize: 20,
    fontWeight: '650',
    marginTop: 5,
    marginBottom: 5 ,
    color: "white" 
  },
  date:{
    color: "white" 
  },
  posttext:{
  color: "white"  
},
  postcontent:{
    padding:10,
    height: '30%',
    width: '100%',
    backgroundColor: "#111",
    
  },
  postcontent1:{
    height: '70%',
    width: '100%',
    backgroundColor: "#111"
  },
  postImage: {
    height: '100%',
    width: '100%',
    
  },
  likes:{
  width: '100%',
  height: '10%',
  backgroundColor: "#111",
  justifyContent: 'row',
  
  },
  comments: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    color: "white" 
  },
  circle:{
  height: '90%',
  width: '20%',
  backgroundColor: "#222",
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'center',
  padding: 10,
  marginBottom:20,
  borderRadius: 100,
  
},
 footer: {
    
    height: '10%',
    width: '100%',
    backgroundColor: "#111",
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    padding: 5,
    marginBottom:50
  },
  footerButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'row',
  marginBottom: 5,
  marginTop: 5
  

},
footerText: {
  marginLeft: 5,
  color: '#9E9E9E',
  fontWeight: 'bold',
  justifyContent: "row",
}
});
  