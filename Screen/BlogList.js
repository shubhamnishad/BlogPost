
import React,{useState,useEffect} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import {  removeBlog } from '../store/actions'
import BlogList from './BlogList';
import { ActivityIndicator, FAB,Button } from 'react-native-paper';
import BlogService from '../Service.js/Service';
import { showToastWithGravity } from '../lib/helper';
export default function BolgList(props) {
        const [rowData, setrowData] = useState(null)
        const dispatch = useDispatch()
        const state = useSelector(state => state)
        const [loader,setLoader]=useState(false)
        useEffect(() => {
          setrowData(state.blogs)
        }, [state.blogs])
        
      const renderItem = ({ item }) => (
        <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.body}</Text>
           
          </View>
        </View>
        <View style={styles.cardFooter}>
            <View style={styles.buttonBarSection}>
              <TouchableOpacity onPress={()=>{
                props.navigation.navigate('AddBlog', item)
              }}>     
                <Text >Edit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonBarSection}>
              <TouchableOpacity onPress={()=>{
                BlogService.deleteApi(item.id).then(response => {
                  console.log("dvdf v jkvdjkvkj");
                  showToastWithGravity("Blog deleted successfully")
                  dispatch(removeBlog(item.id))
                })
              }}>
                <Text >Delete</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
          );
    return (
      <View style={{flex:1}}>
      {
        rowData ?  <SafeAreaView style={styles.container}>
        <FlatList
          data={rowData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView> :  <ActivityIndicator size="large" color="#00ff00" />
      }
       <TouchableOpacity
          onPress={()=>{
            props.navigation.navigate('AddBlog')
          }}
   style={styles.floadButton}
 >
   <Button >
          <Text style={{fontSize:50}}>+</Text>
  </Button>
  </TouchableOpacity>
      </View>
    )
}


const styles = StyleSheet.create({

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 50
    },
    shadowOpacity: 24.5,
    shadowRadius: 8,
    marginVertical: 8,
    backgroundColor:"white"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor:"#EEEEEE",
  },
  title:{
    fontSize:18,
    flex:1,
  }, 
  description:{
    fontSize:15,
    color:"#888",
    flex:1,
    marginTop:5,
    marginBottom:5,
  },
  buttonBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  floadButton:{
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:70,
    position: 'absolute',                                          
    bottom: 10,                                                    
    right: 10,
    height:70,
    backgroundColor:'yellow',
    borderRadius:100,
  }
});   

