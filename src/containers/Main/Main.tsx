import Label from '../../components/Label/Label';
import CoursesLinks from '../../components/CoursesLinks/CoursesLinks';
import HrShambala from '../../components/HrShambala/HrShambala';
import SocialItems from '../../components/SocialItems/SocialItems';
import Contacts from '../../components/Contacts/Contacts';
import YouTube from '../../components/YouTube/YouTube';

const Main: React.FC = () =>  (
    <>
      <Label name="Ольга Зинатова" descr="Ваш тренер по йоге" />

      <HrShambala rotate={false} />

      <CoursesLinks />

      <Contacts label="Остались вопросы?" descr="задай их тут:" />

      <HrShambala rotate={true} />

      <YouTube />

      <SocialItems />
    </>
  );

export default Main;
