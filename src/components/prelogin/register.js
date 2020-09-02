import React, { useState } from 'react'
import '../../assets/css/register.css'
import { isValidUserName } from '../../Utils'

function Register(props) {

    const [username, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhoneNo, setUserPhoneNo] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userCountry, setUserCountry] = useState('');

    function OnSignUp() {
        console.log("inside signup")
            let allUsers = []
            let dataFromStorage = JSON.parse(localStorage.getItem("registeredUsers"))
            if (dataFromStorage && dataFromStorage.length)
                allUsers = dataFromStorage
            let userExist = false
            allUsers.map((item) => {  // note the syntax of map for looping the array
                if (item.email === userEmail)
                    userExist = true     // note the usage of == and === ,https://www.geeksforgeeks.org/difference-between-and-operator-in-javascript/
            })
            if (!userExist) {
                let userDetails = {   // object declaration
                    name: username,
                    email: userEmail,
                    country: userCountry,
                    phoneno: userPhoneNo
                }
                allUsers.push(userDetails)
                console.log("all users", allUsers)
                localStorage.setItem('registeredUsers', JSON.stringify(allUsers))
            } else {
                alert("user already exists")
            }
            setUserName('')
            setUserEmail('')
            setUserPhoneNo('')
            setUserPassword('')
            setUserCountry('')
    }

    function goToLogin() {
        props.history.push('/')
    }

    function onChangeUserName(e) {

        console.log("validating")
        if (isValidUserName(e)) {
            setUserName(e.target.value)

        }
        else
            alert("enter username")
        return false
    }



    return (
        <div>
            <h2>register</h2>
            <div>
                <div className="cellContainer">Name:</div>
                <div>
                    <input type="text" value={username} onChange={(e) => onChangeUserName(e)}></input> {/* note the input tags*/}
                </div>
            </div>
            <div>
                <div className="cellContainer">Email:</div>
                <div >
                    <input type="text" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}></input>
                </div>
            </div>
            <div >
                <div className="cellContainer">PhoneNo:</div>
                <div>
                    <input type="text" value={userPhoneNo} onChange={(e) => setUserPhoneNo(e.target.value)}></input>
                </div>
            </div>
            <div>
                <div className="cellContainer">Password:</div>
                <div>
                    <input type="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)}></input>
                </div>
            </div>

            <div>
                <div className="cellContainer">Country</div>
                <div>
                    {/* <input type="text" value={userCountry} onChange={(e) => setUserCountry(e.target.value)}></input> */}
                    <select>
                        <option value="India">India</option>
                        <option value="US">US</option>
                        <option value="sg">sg</option>
                    </select>
                </div>
            </div>
            <div>
                <div >
                    <button onClick={() => OnSignUp()}>SignUp</button> {/*note the observance of function -> () usages  */}
                </div>
            </div>
            <div>
                <div >
                    Already registered? <button onClick={() => goToLogin()}>Go to login</button>
                </div>
            </div>
        </div>
    );
}

export default Register

