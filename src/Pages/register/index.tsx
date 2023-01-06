import React, { useState } from "react";
import * as Styled from "./styles";

const Register: React.FC = () => {

    const [email, setEmail] = useState('');

    return(
        <Styled.Structure>
            <text>Register</text>
        </Styled.Structure>
    )

};

export default Register;