import { ReactElement, FunctionComponent } from "react";
import { ViewIcon } from "../SVGs/SVGicons";
import { OrderStatus } from "@/app/enums/OrderStatus";
import Image from "next/image";
import { orders } from "@/app/constants/dashboardData";
import styles from "../../styles/Dashboard.module.scss"

interface LastOrdersSectionProps {

}

const LastOrdersSection: FunctionComponent<LastOrdersSectionProps> = (): ReactElement => {
    return (
        <div className={styles.lastOrdersSection}>
            <div className={styles.lastOrdersHeader}>
                <h3>Last Orders</h3>
                <span className={styles.textButton}>See All</span>
            </div>

            <div className={styles.tableContainer}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Invoice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className={styles.customerInfo}>
                                            <span><Image src={order.image} alt="Customer photo" /></span>
                                            <p>{order.name}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p className={styles.date}>{order.date}</p>
                                    </td>
                                    <td>&#8358; {order.amount.toLocaleString()}</td>
                                    <td>
                                        {order.status === OrderStatus.Paid && <span className={styles.statusPaid}>Paid</span>}
                                        {order.status === OrderStatus.Refund && <span className={styles.statusRefund}>Refund</span>}
                                    </td>
                                    <td>
                                        <button><ViewIcon />View</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default LastOrdersSection;