import { Container } from "reactstrap";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import MenuItemsList from "../../features/menu/MenuItemsList";

const MenuPage = () => {
    const isLoading = useSelector((state) => state.menuItems.isLoading);
    const errMsg = useSelector((state) => state.menuItems.errMsg);
    let content = null

    if (isLoading) {
        content = <Loading />;
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />;
    } else {
        content = (
            <MenuItemsList />
        );
    }

    return (
        <Container>
            {content}
        </Container>

    )
};

export default MenuPage;