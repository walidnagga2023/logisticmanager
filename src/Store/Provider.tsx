import { Provider } from "react-redux"
import { store } from "./store"

type ProvidersProps = {
    children: React.ReactNode
} 

export default function Providers({children}: ProvidersProps) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}