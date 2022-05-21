import {
  Box,
  Button,
  FormGroup,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { RegisterC, RegisterState, UserAuthM } from "../../@types";
import styles from "../../styles/auth.module.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../../query";

const Register: React.FC<RegisterC> = () => {
  const [values, setValues] = React.useState<RegisterState>({
    email: "",
    password: "",
    showPassword: false,
    emailError: "",
  });

  const [signUp, { data: loginData }] = useMutation<UserAuthM>(SIGN_UP);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    signUp({
      variables: {
        email: values.email,
        password: values.password,
        fn: values.first_name,
        ln: values.last_name,
      },
    });
  };

  return (
    <div>
      <Box className={styles.con2}>
        <h1>Create an account</h1>
        <p>
          Already have an account?{" "}
          <Link href="/">
            <span className={styles.link}>Log in</span>
          </Link>
        </p>

        <div className={styles.input_group}>
          <form onSubmit={(e) => submitHandler(e)}>
            <div
              className={`flex row jc-sb ${styles.gridCon} ${styles.row_sm}`}
            >
              <FormGroup className={`w-48 ${styles.wm_100}`}>
                <FormLabel htmlFor="firstname" className={styles.label2}>
                  First name
                </FormLabel>
                <OutlinedInput
                  type="text"
                  className={`${styles.input2}`}
                  id="firstname"
                  required
                  placeholder="Type here"
                  value={values.first_name}
                  onChange={(first_name) => {
                    setValues((state) => {
                      return { ...state, first_name: first_name.target.value };
                    });
                  }}
                />
                {values.emailError && (
                  <FormHelperText
                    id="component-error-text"
                    className={styles.error}
                  >
                    Error
                  </FormHelperText>
                )}
              </FormGroup>
              <FormGroup className={`w-48 ${styles.wm_100}`}>
                <FormLabel htmlFor="lastname" className={styles.label2}>
                  Last name
                </FormLabel>
                <OutlinedInput
                  type="text"
                  className={styles.input2}
                  id="lastname"
                  required
                  placeholder="Type here"
                  value={values.last_name}
                  onChange={(last_name) => {
                    setValues((state) => {
                      return { ...state, last_name: last_name.target.value };
                    });
                  }}
                />
                {values.emailError && (
                  <FormHelperText
                    id="component-error-text"
                    className={styles.error}
                  >
                    Error
                  </FormHelperText>
                )}
              </FormGroup>
            </div>
            <FormGroup>
              <FormLabel htmlFor="email" className={styles.label}>
                Email Address
              </FormLabel>
              <OutlinedInput
                type="email"
                className={styles.input}
                id="email"
                required
                placeholder="Type your email address here"
                value={values.email}
                onChange={(email) => {
                  setValues((state) => {
                    return { ...state, email: email.target.value };
                  });
                }}
              />
              {values.emailError && (
                <FormHelperText
                  id="component-error-text"
                  className={styles.error}
                >
                  Error
                </FormHelperText>
              )}
            </FormGroup>
            <FormGroup>
              <FormLabel
                htmlFor="password"
                className={styles.label}
                sx={{ marginTop: 2 }}
              >
                Password
              </FormLabel>
              <OutlinedInput
                type={values.showPassword ? "text" : "password"}
                id="password"
                className={styles.input}
                required
                placeholder="Type your email password here"
                value={values.password}
                onChange={(password) => {
                  setValues((state) => {
                    return { ...state, password: password.target.value };
                  });
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        setValues((state: any) => {
                          return {
                            ...state,
                            showPassword: !values.showPassword,
                          };
                        });
                      }}
                      onMouseDown={() => {
                        setValues((state: any) => {
                          return {
                            ...state,
                            showPassword: !values.showPassword,
                          };
                        });
                      }}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormGroup>
            <Button type="submit" className={styles.btn}>
              Sign up
            </Button>
          </form>
        </div>
      </Box>
    </div>
  );
};

export default Register;
