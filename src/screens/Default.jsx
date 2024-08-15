import Logo from './_components/Logo';
import Description from './_components/Description';
import OpenLink from '../components/OpenLink';

const Default = () => {
    return (
        <div>
            <header className="App-header">
                <Logo />
                <Description />
                <OpenLink tittle="Aprende React" url="https://react.dev"/>
                <OpenLink tittle="Mi Git aquí" url="https://github.com/roymer/mod-frontend-react"/>
            </header>
        </div>
    );
};

export default Default;