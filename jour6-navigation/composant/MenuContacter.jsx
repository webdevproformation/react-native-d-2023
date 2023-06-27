import {createNativeStackNavigator} from "@react-navigation/native-stack"
import NousContacter from "../screens/NousContacter"
import DemandeTechnique from "../screens/DemandeTechnique"

const Stack = createNativeStackNavigator()

export default function MenuContacter() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="contacter" component={NousContacter} />
        <Stack.Screen name="demande-technique" component={DemandeTechnique} />
    </Stack.Navigator>
  )
}

