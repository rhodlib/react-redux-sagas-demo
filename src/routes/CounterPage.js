import Counter from '../components/Counter';
import { Layout } from "antd";
const { Header, Content } = Layout;

const CounterPage = () => {
    return(
        <>
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: "20px 16px" }}>
            <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
            >
                <Counter/>
            </div>
                </Content>
        </>
    );
}

export default CounterPage;