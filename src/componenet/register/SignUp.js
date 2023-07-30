import React from "react";
import { BsFillEnvelopeFill, BsCheck2 } from "react-icons/bs";
import style from "./SignUp.module.css";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcBusinessman } from "react-icons/fc";
import { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className={style.container}>
      <form className={style.form}>
        <div className={style.heading}>
          <p>SignUp Page</p>
        </div>
        <div className={style.inputBox}>
          <label className={style.label}>Name</label>
          <input
            type="text"
            className={style.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className={style.icon}>
            {!name ? <FcBusinessman /> : <BsCheck2 className={style.icons} />}
          </span>
        </div>
        <div className={style.inputBox}>
          <label className={style.label}>Email</label>
          <input
            type="email"
            className={style.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className={style.icon}>
            {!email ? (
              <BsFillEnvelopeFill />
            ) : (
              <BsCheck2 className={style.icons} />
            )}
          </span>
        </div>
        <div className={style.inputBox}>
          <label className={style.label}>Password</label>
          <input
            type="password"
            className={style.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className={style.icon}>
            {!password && <RiLockPasswordFill />}
          </span>
        </div>
        <div className={style.forgot}>
          <p>Forgot Password</p>
        </div>
        <div className={style.btn}>
          <button>Submit</button>
        </div>
      </form>
      <div className={style.singinlink}>
        <p>
          If you have account ?<Link>SigIn</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
