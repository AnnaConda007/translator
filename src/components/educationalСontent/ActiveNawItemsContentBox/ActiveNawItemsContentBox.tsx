import { useSelector } from 'react-redux';
import { RootStoreState } from '../../../redux/store';
import { navItemsList } from '../../nav/nav-item-list/navItemsList'
import NoActiveEducationImage from '../noActiveEducationImage/NoActiveEducationImage';


const ActiveNawItemsContentBox = () => {
  const visibilityMenuItem = useSelector((state: RootStoreState) => state.visibility.menuItem);
  const ComponentToRender = navItemsList[visibilityMenuItem];

  return (
    <>
      {ComponentToRender ? <ComponentToRender /> : <NoActiveEducationImage />}

    </>

  )

}





export default ActiveNawItemsContentBox
