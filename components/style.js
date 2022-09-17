import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleApp: {
    color: "#006200",
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 30,
    marginTop: 20,   
  },
  card: {
    backgroundColor: '#006200',
    borderRadius: 20,
    height: 200,
    width: 200,
    justifyContent: 'center'
  },
  subTitle: {
    color: "#006200",
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 30,
    marginTop: 20, 
  },

  inputButtom: {
    backgroundColor: '#ffff',
    color: '#006200',
    marginBottom: 30,
    margin: 20,
    borderRadius: 20,
    textAlign: 'center',
  }, 
  button: {
    backgroundColor:'#006200',
    borderRadius:20,
    marginBottom: 20,
  },
  textButton: {
    color: 'white',
    textAlign:'center',
    margin: 20,
  },
  text: {
    color:'#006200',
    textAlign:'center',
  },
  itemList: {
    color:'#006200',
    textAlign:'center',
    margin: 20,
    marginBottom: 20,
  },
})
  
  export default styles;