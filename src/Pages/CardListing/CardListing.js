import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { conferenceData } from "../../Actions/conferenceAction";

const CardListing = (props) => {
  const { conferenceData, conferenceReducer, loading } = props;
  const [selectType, setSelectedType] = useState("1");
  const [freeList, setFreeList] = useState([]);
  const [paidList, setPaidList] = useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  useEffect(() => {
    if (searchTerm.length === 0) {
      onConferenceApiHit();
    }
  }, [selectType, searchTerm]);

  const onConferenceApiHit = () => {
    conferenceData()
      .then((res) => {
        if ((res && res !== null) || undefined || "") {
          setPaidList(res.data.paid);
          setFreeList(res.data.free);
        }
      })
      .catch((error) => {
        console.log("Error getting conference data: " + error);
      });
  };

  /**
   * Function called for search event for conference name
   *
   * @param {*} event
   */
  const onHandleSearchConferenceName = (event) => {
    setSearchTerm(event.target.value);
    let value = event.target.value.toLowerCase();
    let result = [];
    if (selectType === "1") {
      result = freeList.filter((data) => {
        return data.confName.toLowerCase().match(value);
      });
      setFreeList(result);
    } else if (selectType === "2") {
      result = paidList.filter((data) => {
        return data.confName.toLowerCase().match(value);
      });
      setPaidList(result);
    }
  };

  /**
   * Function called for search event for conference city name
   *
   * @param {*} event
   */
  const onHandleSearchConferenceCity = (event) => {
    setSearchTerm(event.target.value);
    let value = event.target.value.toLowerCase();
    let result = [];
    if (selectType === "1") {
      result = freeList.filter((data) => {
        return data.city.toLowerCase().match(value);
      });
      setFreeList(result);
    } else if (selectType === "2") {
      result = paidList.filter((data) => {
        return data.city.toLowerCase().match(value);
      });
      setPaidList(result);
    }
  };

  /**
   * Function called for search event for conference Country name
   *
   * @param {*} event
   */
  const onHandleSearchConferenceCountry = (event) => {
    setSearchTerm(event.target.value);
    let value = event.target.value.toLowerCase();
    let result = [];
    if (selectType === "1") {
      result = freeList.filter((data) => {
        return data.country.toLowerCase().match(value);
      });
      setFreeList(result);
    } else if (selectType === "2") {
      result = paidList.filter((data) => {
        return data.country.toLowerCase().match(value);
      });
      setPaidList(result);
    }
  };

  /**
   * Function called for search event for conference Paid and Free sorting
   *
   * @param {*} event
   */
  const onSelectConferenceType = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="search-container">
          <div className="select">
            <select
              id="type"
              onChange={onSelectConferenceType}
              value={selectType}
            >
              <option value="1">Free Conference</option>
              <option value="2">Paid Conference</option>
            </select>
          </div>
          <div className="search">
            <input
              onChange={(event) => onHandleSearchConferenceName(event)}
              type="text"
              className="search"
              placeholder="Search Event Name"
            />
          </div>
          <div className="search">
            <input
              type="text"
              className="search"
              placeholder="Search Event City"
              onChange={(event) => onHandleSearchConferenceCity(event)}
            />
          </div>
          <div className="search">
            <input
              type="text"
              className="search"
              placeholder="Search Event Country"
              onChange={(event) => onHandleSearchConferenceCountry(event)}
            />
          </div>
        </div>
        {!loading && conferenceReducer !== [] ? (
          selectType === "1" ? (
            <div className="wrapper">
              <div className="cards_wrap">
                {freeList &&
                  !loading &&
                  freeList.map((list, i) => (
                    <div className="card_item">
                      <div className="card_inner">
                        <div className="card_top">
                          <img src={list.imageURL} alt="car" />
                        </div>
                        <div className="card_bottom">
                          <div className="card_category">{list.confName}</div>
                          <div className="details_conatiner">
                            <p>
                              <strong>Entry : &nbsp;</strong>
                              {list.entryType}
                            </p>
                            <p>
                              <strong>Venu : &nbsp;</strong>
                              {list.venue}
                            </p>
                          </div>
                        </div>
                        <div className="link-container">
                          <a
                            className="visit-website"
                            href={list.confRegUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Visit Website
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ) : selectType === "2" ? (
            <div className="wrapper">
              <div className="cards_wrap">
                {paidList &&
                  !loading &&
                  paidList.map((list, i) => (
                    <div className="card_item">
                      <div className="card_inner">
                        <div className="card_top">
                          <img src={list.imageURL} alt="car" />
                        </div>
                        <div className="card_bottom">
                          <div className="card_category">{list.confName}</div>
                          <div className="details_conatiner">
                            <p>
                              <strong>Entry : &nbsp;</strong>
                              {list.entryType}
                            </p>
                            <p>
                              <strong>Venu : &nbsp;</strong>
                              {list.venue}
                            </p>
                          </div>
                        </div>
                        <div className="link-container">
                          <a
                            className="visit-website"
                            href={list.confRegUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Visit Website
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            ""
          )
        ) : searchTerm.length === 0 ? (
          <div class="loading" role="status">
            <p className="loading-tag">
              <string>loading...</string>
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};

CardListing.propTypes = {
  conferenceData: PropTypes.func.isRequired,
  conferenceReducer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  conferenceReducer: state.conferenceReducer.conferenceDetails,
  loading: state.conferenceReducer.loading,
});

export default connect(mapStateToProps, { conferenceData })(CardListing);

