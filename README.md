# ReactNativeWeb
Flux based example of how to share application logic between React-Native and React web. Actions, stores, utils, dispatcher are all shared between platforms. UI components also shared and inherit from the same base class. 

## Component rendering difference between React-Native and React:


### React-Native:
```
render() {
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={Actions.increaseCounter} underlayColor='transparent'>
                <Text style={styles.welcome}>
                    I am clicked {this.state.clicksCounter}
                </Text>
            </TouchableHighlight>
        </View>
    );
}
```

### React:
```
render() {
    return (
        <div onClick={Actions.increaseCounter} >
            I am clicked {this.state.clicksCounter}
        </div>
    );
}
```
