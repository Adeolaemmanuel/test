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
import { LoginC, LoginState, UserAuthM } from "../../@types";
import styles from "../../styles/auth.module.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";
import Link from "next/link";
import { useAppSelector } from "../../store/store";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../query";

const Login: React.FC<LoginC> = () => {
  const [values, setValues] = React.useState<LoginState>({
    email: "",
    password: "",
    showPassword: false,
    emailError: "",
  });
  const [login, { data: loginData }] = useMutation<{
    login: UserAuthM;
  }>(LOGIN);

  const userState = useAppSelector((state) => state.user);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    login({
      variables: {
        email: values.email,
        password: values.password,
      },
    });

    if(loginData){
      
    }
  };

  return (
    <div>
      <Box className={styles.con}>
        <h1>Log in</h1>
        <p>
          If you have an account,{" "}
          <Link href="/register">
            <span className={styles.link}>Sign up</span>
          </Link>
        </p>

        <div className={styles.input_group}>
          <form onSubmit={(e) => submitHandler(e)}>
            <FormGroup>
              <FormLabel htmlFor="email" className={styles.label}>
                Email Address
              </FormLabel>
              <OutlinedInput
                type="email"
                className={styles.input}
                id="email"
                required
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
              Login
            </Button>
          </form>
        </div>
      </Box>
    </div>
  );
};

export default Login;
