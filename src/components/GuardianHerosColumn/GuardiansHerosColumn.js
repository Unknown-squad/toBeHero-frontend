import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import someOne from "../../images/someone.svg";
import addSomeOne from "../../images/add-someone.svg";
import { useDispatch, useSelector } from "react-redux";
import { guardianGetChildrenActions } from "../../actions/guardianGetChildrenActions";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";

const GuardiansHerosColumn = () => {
  const guardianGetChildren = useSelector((state) => state.guardianGetChildren);
  const { loading, error, data } = guardianGetChildren;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(guardianGetChildrenActions());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <ul className="nav-guardian-home">
          {data.items &&
            data.items.map((child) => (
              <li key={child._id}>
                <NavLink
                  to={`/guardian/child/${child._id}`}
                  activeClassName="active"
                >
                  <img src={child.picture} alt="" />
                  <p>{child.fullName}</p>
                </NavLink>
              </li>
            ))}

          <li>
            <Link to="">
              <img src={addSomeOne} alt="" className="add-child" />
              <p>add new</p>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default GuardiansHerosColumn;
