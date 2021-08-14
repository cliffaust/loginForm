import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Login = () => {
  const [form, setForm] = useState({
    password: "",
    username: "",
  });
  const handleOnChange = (name, text) => {
    setForm({ ...form, [name]: text });
  };
  const submit = () => {
    console.log(form);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.formContainer}>
        <Text style={styles.header}>Log in</Text>

        <TextInput
          placeholder="Username"
          secureTextEntry={false}
          style={styles.inputUsername}
          onChangeText={(text) => {
            handleOnChange("username", text);
          }}
        ></TextInput>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          autoCompleteType="password"
          style={styles.inputPassword}
          onChangeText={(text) => {
            handleOnChange("password", text);
          }}
        ></TextInput>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={submit} style={styles.btnBox}>
          <Text style={styles.btnText}>Log in</Text>
        </TouchableOpacity>

        <Text style={styles.noAccount}>
          Don't have an account?{" "}
          <TouchableOpacity>
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: "red",
    // alignItems: "center",
  },
  btnBox: {
    backgroundColor: "#480ca8",
    alignSelf: "center",
    width: "80%",
    height: 45,
    borderRadius: 7,
    marginTop: 55,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noAccount: {
    alignSelf: "center",
    marginTop: 50,
    fontSize: 16,
  },
  signupText: {
    color: "#480ca8",
    fontWeight: "bold",
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
  inputUsername: {
    borderBottomColor: "#480ca8",
    borderBottomWidth: 3,
    paddingHorizontal: 4,
    paddingVertical: 4,
    fontSize: 20,
    marginBottom: 45,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: 15,
    color: "#00b4d8",
  },
  formContainer: {
    paddingTop: 70,
    paddingHorizontal: 30,
    // backgroundColor: "red",
  },
  inputPassword: {
    borderBottomColor: "#480ca8",
    borderBottomWidth: 3,
    paddingHorizontal: 4,
    fontSize: 20,
    paddingVertical: 4,
  },
  header: {
    fontSize: 50,
    color: "#480ca8",
    fontWeight: "bold",
    marginBottom: 45,
  },
});
