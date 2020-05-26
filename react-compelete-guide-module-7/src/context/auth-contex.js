import React from 'react'

const AuthContext = React.createContext({authenticaed: false, login: () => {}});

export default AuthContext;