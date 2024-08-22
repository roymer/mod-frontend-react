import Logo from './Default/_components/Logo';
import Description from "./Default/_components/Description";
import OpenLink from '../components/OpenLink';
import Contador from "./Default/_components/Contador";

const Default = () => {
    return (
        <>
            <header className="App-header">
                <Contador />
                <Logo />
                <Description />
                <OpenLink
                    title="Learn React"
                    url="https://react.dev/"
                />
                <OpenLink
                    title="Mi proyecto react (Github) ARGT"
                    url="https://github.com/roymer/mod-frontend-react"
                />
            </header>
        </>
    );
};

export default Default;