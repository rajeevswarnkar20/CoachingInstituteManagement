
import { Route } from "react-router-dom";
import auth from "./auth";
import { Redirect } from "react-router-dom";


export const ProtectedRoute = ({component: Component, ...rest})=>{
    return (

        <Route
        {...rest}
        render = {props => {
            if(auth.isAuthenticated()){
                return <Component {... props}/>;
            }
            else {
                return <Redirect to={
                    {
                        pathname:"/",
                        state:{
                            from:props.location
                        }
                    }
                }
                />
            }
        }}
    />
    );
};