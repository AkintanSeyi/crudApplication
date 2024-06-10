import React, { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useAuthData } from "../store/cart";

const Auth = () => {
  const initialState = {
    email: "",
    fullname: "",
    password: "",
  };
  const [first, setfirst]: any = useState(true);
  const [dataValue, setDatavalues] = useState(initialState);
  const navigate = useNavigate();

  console.log(dataValue);
  const { userArray, userDetails, signInfunction, signUpfunction }: any =
    useAuthData((state: any) => ({
      userArray: state.userArray,
      userDetails: state.userDetails,
      signInfunction: state.signInfunction,
      signUpfunction: state.signUpfunction,
    }));



  const handlesignup = (dataValue: any) => {
    signUpfunction(dataValue);

   
      navigate("/homepage ");
    
  };
  const handlesignin = (dataValue: any) => {
    signInfunction(dataValue);

    if (userDetails.email == dataValue.email) {
      navigate("/homepage ");
    } 
  };
console.log(userDetails);

  return (
    <section className="auth">
      <div className="auth__div">
        <h2 className="auth__header">
          {first == true ? "Sign Up" : "Sign In"}
        </h2>
        <input
          placeholder="email"
          type="email"
          name="email"
          value={dataValue.email}
          onChange={(e) =>
            setDatavalues({ ...dataValue, [e.target.name]: e.target.value })
          }
          className="auth__input"
        />
        {first == true && (
          <input
            placeholder="fullname"
            type="name"
            name="fullname"
            value={dataValue.fullname}
            onChange={(e) =>
              setDatavalues({ ...dataValue, [e.target.name]: e.target.value })
            }
            className="auth__input"
          />
        )}{" "}
        <input
          placeholder="password"
          type="password"
          name="password"
          value={dataValue.password}
          onChange={(e) =>
            setDatavalues({ ...dataValue, [e.target.name]: e.target.value })
          }
          className="auth__input"
        />
        <p className="auth__para">
          {" "}
          Don't have a account ?
          <span className="auth__span" onClick={() => setfirst(!first)}>
            {first == true ? "Sign In" : "Sign Up"}
          </span>
        </p>
        {first == true ? (
          <button
            onClick={() => handlesignup(dataValue)}
            
            className="auth__button"
          >
            Sign Up
          </button>
        ) : (
          <button
            onClick={() => handlesignin(dataValue)}
            className="auth__button"
          >
            Sign In
          </button>
        )}
      </div>
    </section>
  );
};

export default Auth;
