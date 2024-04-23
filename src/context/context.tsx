// AuthContext.tsx
import React, {
  createContext,
  useReducer,
  useContext,
  ReactElement,
} from "react"

interface State {
  isAuthenticated: boolean
  user: any // Define your user type here
}

interface Action {
  type: string
  payload?: any
}

const initialState: State = {
  isAuthenticated: false,
  user: null,
}

const AuthStateContext = createContext<State | undefined>(undefined)
const AuthDispatchContext = createContext<React.Dispatch<Action> | undefined>(
  undefined,
)

const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      }
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      }
    default:
      return state
  }
}

export const AuthProvider: React.FC = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

export const useAuthState = (): State => {
  const context = useContext(AuthStateContext)
  if (context === undefined) {
    throw new Error("useAuthState must be used within an AuthProvider")
  }
  return context
}

export const useAuthDispatch = (): React.Dispatch<Action> => {
  const context = useContext(AuthDispatchContext)
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within an AuthProvider")
  }
  return context
}
