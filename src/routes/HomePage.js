import { Layout } from "antd";
const { Header, Content } = Layout;

const HomePage = () => {
    return(
        <>
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: "20px 16px" }}>
            <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
            >
                <h1>Home Page, App made with React and Redux</h1>
                <ul>
                    <li>React</li>
                    <li>React-Router</li>
                    <li>Redux</li>
                    <li>Redux-sagas</li>
                    <li>Generators</li>
                    <li>Reselect</li>
                    <li>Duck-pattern</li>
                </ul>
            </div>
                </Content>
        </>
    );
}

export default HomePage;