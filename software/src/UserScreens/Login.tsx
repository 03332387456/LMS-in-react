import "./Login.css";
import Buttons from "../Components/Buttons";
import Input from "../Components/Input"; 
import { useState } from "react";
import { fbLogin } from "../Router/Fbmethods"; 
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [model, setModel] = useState<any>({});
  const navigate = useNavigate();
  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  let LoginUser = () => {
    console.log(model);
    fbLogin(model)
      .then((res) => {
        console.log(res);
        navigate("Sidenav");
      })
      .catch((err) => {
        console.log(err);
      });
  };




  return (
    <div className="container-fluid gbcolor">
      <div className="container">
        <h1 className="pt-5 bg-transparent fs-2">
          <b className="text-white ">Login Your Account</b>
        </h1>
        <hr className="w-25 mb-5 text-center custom-hr" />
      </div>
      <div className="container-fluid m-auto py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                width={450}
                src="https://static.vecteezy.com/system/resources/previews/023/377/386/original/3d-male-character-happy-working-on-a-laptop-png.png"
                className="img-fluid"
                alt="Responsive image"
              />
            </div>
            <div className="col-md-6 m-auto border rounded p-2 shadow ">
              <h1 className="login fs-3">Login</h1>

              <div>
                <Input
                  value={model.Email}
                  onChange={(e: any) => fillModel("email", e.target.value)}
                  label="Email"
                  type="email"
                />
              </div>
              <div>
                <Input
                  value={model.password}
                  onChange={(e: any) => fillModel("password", e.target.value)}
                  label="Password"
                  type="password"
                />
              </div>
              <Buttons onClick={LoginUser} label="LOGIN" />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
