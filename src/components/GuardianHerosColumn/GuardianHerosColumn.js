import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import someOne from "../../images/someone.svg";
import someoneChild from "../../images/someone-child.svg";
import addSomeOne from "../../images/add-someone.svg";
import { useDispatch, useSelector } from "react-redux";
import { guardianGetChildrenActions } from "../../actions/guardianGetChildrenActions";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import GuardianHomeAddNewChildScreen from "../../screens/GuardianHomeAddNewChildScreen";
const GuardianHerosColumn = () => {
  //   const childId = match.params.id;

  const guardianGetChildren = useSelector((state) => state.guardianGetChildren);
  const { loading, error, data } = guardianGetChildren;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(guardianGetChildrenActions());
  }, [dispatch]);

  return (
    <>
      <ul className="nav-guardian-home">
        {data &&
          data.items &&
          data.items.map((child) => (
            <li key={child._id}>
              <NavLink
                to={`/guardian/home/child/${child._id}`}
                activeClassName="active"
              >
                <LazyLoadImage
                  src={`${process.env.REACT_APP_DOMAIN_MEDIA}${child.picture}`}
                  width="40"
                  height="40"
                  alt=""
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://img.icons8.com/ultraviolet/40/000000/user.png";
                  }}
                  effect="blur"
                />
                <p>{child.fullName}</p>
              </NavLink>
            </li>
          ))}
        {/* {console.log(process.env.REACT_APP_DOMAIN_MEDIA)} */}
        <li>
          <Link to="/guardian/home/addchild">
            <LazyLoadImage
              src={addSomeOne}
              alt=""
              className="add-child"
              effect="blur"
            />
            <p>add new</p>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default GuardianHerosColumn;
