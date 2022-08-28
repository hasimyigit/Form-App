import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import {  signOut } from "firebase/auth";
import {auth} from '../../firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { rxSignOut } from '../../store/actions/userActions';
import { useRecoilState } from 'recoil';
import { handleSide } from '../../atoms/sideAtom';

const UserPanel = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.profile.fullname)
  const [handleside, sethandleside] = useRecoilState(handleSide);

  const logOut = () =>{
    signOut(auth).then(() => {
      sethandleside(false)
      
      dispatch(rxSignOut())
    }).catch((error) => {

    });
  }
  return (
    <div className="flex justify-between p-2" >
  {user.name}
    <div className='cursor-pointer'>
    <FontAwesomeIcon onClick={logOut} icon={faSignOutAlt} />
      </div>
</div>
  )
}

export default UserPanel