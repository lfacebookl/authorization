import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";
import "../App.css";
import { useEffect, useState } from "react";
import { app } from "../firebaseConfig";
import { RiFacebookBoxFill } from "react-icons/ri";

export const Login = () => {
  const db = getFirestore(app);
  const [user, setUser] = useState({
    email: "",
    contraseña: "",
  });

  async function getData() {
    const citiesCol = collection(db, "datos");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    console.log(cityList);
  }

  const handleChange = (event) => {
    const target = event.target;
    setUser({ ...user, [target.name]: target.value });
  };

  const createRegister = async () => {
    const data = await addDoc(collection(db, "datos"), user);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="w-screen h-screen ">
        <div
          className="flex items-center pl-2 w-full h-8"
          style={{ backgroundColor: "#365899" }}
        >
          <RiFacebookBoxFill size={20} color="white" className="mr-1" />
          <p
            className=" font-semibold text-w text-white"
            style={{ fontSize: "13px" }}
          >
            Facebook
          </p>
        </div>
        <div className="w-full flex text-xs ">
          <p className="ml-7 mt-4">
            Inicia sesión para usar tu cuenta de Facebook con
            <b> RH-Solutions</b>.
          </p>
        </div>
        <div className=" w-full justify-center text-center mt-5   ">
          <div className="flex justify-center ">
            <div>
              <p className="w-24 text-xs font-semibold text-start text-gray-600">
                Correo electrónico o teléfono:
              </p>
            </div>
            <div>
              <input
                onChange={($event) => handleChange($event)}
                value={user.email}
                className="h-6 p-2 mt-1 text-xs w-48"
                name="email"
                style={{ border: "solid 1px #dddfe2" }}
              ></input>
            </div>
          </div>
          <div className="flex justify-center item-center mt-3 ">
            <div>
              <p
                className="w-24 text-xs font-semibold text-start"
                style={{ color: "#606770" }}
              >
                Contraseña:
              </p>
            </div>
            <div>
              <input
                name="contraseña"
                type="password"
                onChange={($event) => handleChange($event)}
                value={user.contraseña}
                className="h-6 p-2 text-xs w-48 "
                style={{ border: "solid 1px #dddfe2" }}
              ></input>
            </div>
          </div>
          <div>
            <button
              onClick={() => createRegister()}
              className="uiButton px-2 py-1 text-xs font-bold mb-1.5 text-white rounded-sm mt-4"
            >
              Iniciar Sesión
            </button>
          </div>
          <a
            className="text-xs ml-4 cursor-pointer hover:underline "
            style={{ color: "#385898" }}
          >
            ¿Olvidaste tu cuenta?
          </a>
          <div>
            <button className=" ml-7 new-btn px-2 py-1 text-xs font-bold mb-1.5 text-white rounded-sm mt-4 ">
              Crear cuenta nueva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
