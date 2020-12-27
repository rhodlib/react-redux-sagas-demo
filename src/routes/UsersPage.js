import Users from '../components/Users';
import { Layout } from "antd";
const { Header, Content } = Layout;

const UsersPage = () => {
    return(
        <>
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: "20px 16px" }}>
            <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
            >
                <Users/>
            </div>
                </Content>
        </>
    );
}

export default UsersPage;