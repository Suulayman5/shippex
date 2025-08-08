import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import Layout from "@/app/components/Layout";
import { scaledSize } from "@/app/utils";
import InputField from "@/app/components/InputField";
import { Formik } from "formik";
import Button from "@/app/components/Button";
import useLogic, { LoginSchema } from "./index.logic";

const Login = () => {
  const { isLoading, error, handleSubmit, router } = useLogic();

  return (
    <Layout>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={scaledSize(20)}
      >
  <Formik
  initialValues={{
    userName: "test@brandimic.com",
    password: "testy123@",
  }}
  validationSchema={LoginSchema}
  onSubmit={handleSubmit}
>
  {({
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    dirty,
    isValid,
  }) => (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          Please enter your email and password to login
        </Text>

        <View style={styles.form}>
          <InputField
            placeholder="Username"
            onChangeText={handleChange("userName")}
            onBlur={handleBlur("userName")}
            value={values.userName}
            error={touched.userName && errors.userName}
          />

          <InputField
            placeholder="Password"
            secureTextEntry
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            error={touched.password && errors.password}
          />
        </View>
      </View>

      <View style={styles.bottom}>
        <Button
          text="Login"
          onPress={()=> router.push('(dashboard)')}
          loading={isLoading}
          // Disable when form is untouched OR invalid OR loading
          disabled={!dirty || !isValid || isLoading}
        />
      </View>
    </View>
  )}
</Formik>

      </KeyboardAvoidingView>
    </Layout>
  );
};

export default Login;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    // paddingHorizontal: scaledSize(16),
    justifyContent: "space-between",
  },
top: {
  marginTop: scaledSize(40),
  paddingHorizontal: scaledSize(5),
},
title: {
  fontSize: scaledSize(28),
  fontWeight: "bold",
  marginBottom: scaledSize(8),
},
subtitle: {
  fontSize: scaledSize(14),
  color: "#666",
  marginBottom: scaledSize(24),
  lineHeight: scaledSize(20),
},
form: {
  gap: scaledSize(16),
},
bottom: {
  marginBottom: scaledSize(30),
  paddingHorizontal: scaledSize(20),
},

});
