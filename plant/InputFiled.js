import {Text, View, TouchableOpacity, TextInput} from 'react-native';

const InputFiled = ({Label, inputtype, icon , keyboardType, filedBottomLable,filedBottomfun, value , onChangeText}) => {
    return ( 
       
        <View style={{flexDirection:'row',borderBottomColor:'#ccc',paddingBottom:8,borderBottomWidth:1,marginBottom:25}}>
         {icon}
         
        {inputtype == 'password' ? (<TextInput placeholder={Label} keyboardType={keyboardType} style={{flex:1,paddingVertical:0}}
          secureTextEntry={true} value={value}
        onChangeText={onChangeText} />): (
            <TextInput placeholder={Label} keyboardType={keyboardType}   value={value}
        onChangeText={onChangeText}style={{flex:1,paddingVertical:0}}
           />
          )}
          <TouchableOpacity onPress={{filedBottomfun}}>
            <Text style={{color:'green',marginRight:20,fontSize:15,fontWeight:'700'}}>
                {filedBottomLable}
            </Text>
            </TouchableOpacity>
        </View>
      
     );
}
 
export default InputFiled;