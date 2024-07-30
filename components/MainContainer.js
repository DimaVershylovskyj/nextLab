import Link from "next/link";
import A from "../components/A";
import Head from "next/head";

const MainContainer = ({children,keywords}) => {
    return(
        <>
            <Head>
                <meta keywords={"next scss"+keywords}></meta>
                <title>Main page</title>
            </Head>
            <div className="navbar">
                <A href={'/'} text={'Main page'}></A>
                <A href={'/users'} text={'Users page'}></A>
            </div>
            <div>
                {children}
            </div>
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
        </>
    );
};

export default MainContainer;