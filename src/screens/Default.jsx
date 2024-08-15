import Logo from '../components/Logo';
import Description from '../components/Description';
import Content from '../components/Content';
import GitHub from '../components/GitHub';

const Default = () => {
    return (
        <div>
            <header className="App-header">
                <Logo />
                <Description />
                <Content />
                <GitHub />
            </header>
        </div>
    );
};

export default Default;