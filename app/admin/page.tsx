
import getProducts from "@/actions/getProducts"
import Summary from "./Summary"
import getOrders from "@/actions/getOrders"

import Container from "../components/Container"
import BarGraph from "./BarGraph"
import getGraphData from "@/actions/getGraphData"
import { getCurrentUser } from "@/actions/getCurrentUser"


const Admin = async () => {
    const products = await getProducts
        ({ category: null })
    const orders = await getOrders()
    const users = await getCurrentUser();

    const graphData = await getGraphData()
    return (
        <div className="pt-7">
            <Container>
                <Summary products={products}
                    orders={orders}
                    users={users}
                />
                <div className="mt-4 mx-auto max-w[1150px]">
                    <BarGraph />
                </div>
            </Container>
        </div>
    )
}

export default Admin