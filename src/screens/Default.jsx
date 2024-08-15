import Logo from './_components/Logo';
import Description from './_components/Description';
import OpenLink from '../components/OpenLink';
import LessonInfo from './_components/LessonInfo';

const Default = () => {
    return (
        <div>
            <header className="App-header">
                <Logo />
                <Description />
                <OpenLink tittle="Aprende React" url="https://react.dev"/>
                <OpenLink tittle="Mi Git aquí" url="https://github.com/roymer/mod-frontend-react"/>
                <LessonInfo number="1" text="Introducción a react y estructura de proyecto" />
                <LessonInfo number="2" text="Context API para la gestión del estado global en aplicaciones react" />
            </header>
        </div>
    );
};

export default Default;