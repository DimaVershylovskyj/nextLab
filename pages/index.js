import MainContainer from "../components/MainContainer";

const Index = () => {
    return(
        <MainContainer keywords={"main page"}>
            <h1>Main Page</h1>
            <style jsx>
                {`
                    .navbar {
                        background-color: orange;
                        padding: 15px;
                        gap: 10px;
                        display: flex;
                        font-size: 20px;
                    }
                `}
            </style>
        </MainContainer>
    );
};

export default Index;